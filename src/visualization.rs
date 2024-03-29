extern crate wasm_bindgen;
extern crate pest;
#[macro_use]
extern crate pest_derive;
extern crate serde;
extern crate colored;
extern crate walkdir;

use serde::{Serialize};
use wasm_bindgen::prelude::*;
use pest::Parser;
use pest::iterators::Pair;
use parser::GNCAST;

mod parser;
mod types;

#[derive(Debug, Serialize)]
struct VisTreeNode {
    id: String,
    label: String,
    children: Vec<VisTreeNode>
}

#[derive(Debug, Serialize)]
struct VisResult {
    error: bool,
    error_message: String,
    parse_tree: VisTreeNode,
    ast: Vec<GNCAST>
}

fn visualize_parse_tree(pair: Pair<'_, parser::Rule>) -> VisTreeNode {
    let node_id = format!("{:?}({},{})", pair.as_rule(), pair.as_span().start(), pair.as_span().end());
    let node_label = format!("{:?}", pair.as_rule());
    let mut node_children: Vec<VisTreeNode> = Vec::new();
    for token in pair.into_inner() {
        node_children.push(visualize_parse_tree(token));
    }

    return VisTreeNode{
        id: node_id,
        label: node_label,
        children: node_children
    };
}

#[wasm_bindgen]
pub fn compile_result(code: &str) -> String {
    let mut res = VisResult {
        error: false,
        error_message: "".to_string(),
        parse_tree: VisTreeNode {
            id: "".to_string(),
            label: "".to_string(),
            children: vec![]
        },
        ast: vec![]
    };
    match parser::GNCParser::parse(parser::Rule::gnc, &code) {
        Ok(mut pairs) => {
            let gnc_pair = pairs.next().unwrap();
            res.parse_tree = visualize_parse_tree(gnc_pair.clone());
            res.ast = parser::parse(gnc_pair);
        }
        Err(error) => {
            res.error = true;
            res.error_message = format!("{}", error);
        }
    };
    let serialized_res = serde_json::to_string(&res).unwrap();
    serialized_res
}

#[cfg(test)]
mod tests {
    use walkdir::WalkDir;

    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;
    use std::fs::File;
    use colored::Colorize;
    use std::io::Read;

    #[test]
    fn test_wasm_compile() {
        for entry in WalkDir::new("./test")
            .into_iter()
            .filter_map(Result::ok)
            .filter(|e| !e.file_type().is_dir())
        {
            let raw_path = entry.path().to_str();
            if raw_path.is_none() { continue; }

            let source_path = raw_path.unwrap();
            if !source_path.ends_with(".c") { continue; }

            println!(">>> {} {} <<<", "Start compiling".green(), source_path.blue());
            let mut source_file: File = File::open(source_path).expect("Unable to open source file!");
            let mut source_content: String = String::new();
            source_file.read_to_string(&mut source_content).expect("Unable to read the file!");

            let res = compile_result(&source_content);

            println!("{}", res);
            println!(">>> {} <<<", "Done!".green());
        }
    }
}