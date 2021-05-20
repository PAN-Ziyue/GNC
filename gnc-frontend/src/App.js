import './App.css';
import {useState} from "react";
import styled from 'styled-components'
import Editor from "@monaco-editor/react";
import AntVTree from "./components/AntVG6";
import mockASTData from './components/test.json';

const Button = styled.button.attrs({
    className: "flex flex-grow-0 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
})``;

const CardContainer = styled.div.attrs({
    className: "flex flex-auto container w-full lg:w-1/3 p-2"
})`
    height: 80vh;
`;

const Card = styled.div.attrs({
    className: "flex flex-auto w-full h-full bg-white rounded-xl shadow-md overflow-hidden"
})``;

const Header = styled.header.attrs({
    className: "flex flex-auto"
})`
    height: 17vh;
`;

const Footer = styled.footer.attrs({
    className: "flex flex-auto "
})`
    height: 3vh;
    min-height: 35px;
`;

const CardLabelText = styled.text.attrs({
    className: "flex flex-grow text-white text-3xl object-center font-bold pl-2 pt-1 pr-3"
})``;

const Title = styled.span.attrs({
    className: "bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
})`
    line-height: 15vh;
`;

function App() {
    const [code, editCode] = useState('#include <stdio.h>\nint main(){}')
    return (
        <div className={'bg-green-100'}>
            <Header>
                <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center object-center align-middle font-extrabold w-full h-full">
                    <Title>
                        GNC Compiler Online
                    </Title>
                    <a href={'https://github.com/PAN-Ziyue/GNC'}>
                        <img className={'mx-auto flex-grow-0 p-1'} src={'https://img.shields.io/github/stars/PAN-Ziyue/GNC'} alt={'GitHub Repo'}/>
                    </a>
                </div>
            </Header>
            <div className={"flex flex-auto flex-col lg:flex-row"}>
                <CardContainer>
                    <Card>
                        <div className={'flex flex-auto flex-col h-full'}>
                            <div className={'flex flex-grow flex-row p-2 bg-green-600'}>
                                <CardLabelText>
                                    Code
                                </CardLabelText>
                                <Button>Run</Button>
                            </div>
                            <div className={'flex flex-auto p-2'}>
                                <Editor
                                    defaultLanguage="c"
                                    onChange={editCode}
                                    value={code}
                                />
                            </div>
                        </div>
                    </Card>
                </CardContainer>
                <CardContainer>
                    <Card>
                        <div className={'flex flex-auto flex-col h-full'}>
                            <div className={'flex flex-grow-0 pb-2'}>
                                <Button>Compile</Button>
                            </div>
                            <div className={'flex flex-auto flex-row'}>
                                <AntVTree
                                    data={mockASTData}
                                />
                            </div>
                        </div>
                    </Card>
                </CardContainer>
                <CardContainer>
                    <Card>
                        <Button>Run</Button>
                    </Card>
                </CardContainer>
            </div>
            <Footer>
                <p className="text-xs lg:text-lg text-green-700 text-opacity-50 text-center object-center w-full">
                    <a href={'https://github.com/PAN-Ziyue/GNC'} className="no-underline hover:underline">GNC</a> (2021) is the course project of Compilation Principle by Ziyue, MartinNose and <a href={'https://www.ncj.wiki'} className="no-underline hover:underline">NCJ</a>. GNC is a recursive acronym for "GNC's Not C-language!"
                </p>
            </Footer>
        </div>
    );
}

export default App;
