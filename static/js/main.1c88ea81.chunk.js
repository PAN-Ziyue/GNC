(this["webpackJsonpgnc-frontend"]=this["webpackJsonpgnc-frontend"]||[]).push([[0],{279:function(e){e.exports=JSON.parse('{"id":"Modeling Methods","children":[{"id":"Classification","children":[{"id":"Logistic regression"},{"id":"Linear discriminant analysis"},{"id":"Rules"},{"id":"Decision trees"},{"id":"Naive Bayes"},{"id":"K nearest neighbor"},{"id":"Probabilistic neural network"},{"id":"Support vector machine"}]},{"id":"Consensus","children":[{"id":"Models diversity","children":[{"id":"Different initializations"},{"id":"Different parameter choices"},{"id":"Different architectures"},{"id":"Different modeling methods"},{"id":"Different training sets"},{"id":"Different feature sets"}]},{"id":"Methods","children":[{"id":"Classifier selection"},{"id":"Classifier fusion"}]},{"id":"Common","children":[{"id":"Bagging"},{"id":"Boosting"},{"id":"AdaBoost"}]}]},{"id":"Regression","children":[{"id":"Multiple linear regression"},{"id":"Partial least squares"},{"id":"Multi-layer feedforward neural network"},{"id":"General regression neural network"},{"id":"Support vector regression"}]}]}')},296:function(e,t,n){},297:function(e,t,n){},550:function(e,t,n){"use strict";n.r(t);var i=n(10),r=n.n(i),s=n(140),a=n.n(s),l=(n(296),n(46)),c=n(56),o=(n(297),n(57)),d=n(284),f=n(283),h=n(21);function u(e){var t=r.a.useRef(null),n=null;return Object(i.useEffect)((function(){var i=t.current.getBoundingClientRect(),r=i.width,s=i.height;n||(n=new f.a.TreeGraph({container:a.a.findDOMNode(t.current),width:r,height:s,linkCenter:!0,modes:{default:[{type:"collapse-expand",onChange:function(e,t){return e.getModel().collapsed=t,!0}},"drag-canvas","zoom-canvas"]},defaultNode:{size:26,anchorPoints:[[0,.5],[1,.5]]},defaultEdge:{type:"cubic-vertical"},layout:{type:"compactBox",direction:"TB",getId:function(e){return e.id},getHeight:function(){return 16},getWidth:function(){return 16},getVGap:function(){return 80},getHGap:function(){return 20}}})),n.node((function(e){var t="right",n=0;return e.children||(t="bottom",n=Math.PI/2),{style:{fill:"#ECFDF5",stroke:"#34D399"},label:e.id,labelCfg:{position:t,offset:5,style:{rotate:n,textAlign:"start"}}}})),n.data(e.data),n.render(),n.fitView()}),[]),Object(h.jsx)("div",{style:{display:"flex",flex:"1 1 auto"},ref:t})}var x,j,g,b,m,p,O,v,N=n(279),w=o.a.div.attrs({className:"flex flex-auto container w-full lg:w-1/3 p-2"})(x||(x=Object(c.a)(["\n    height: 80vh;\n"]))),C=o.a.div.attrs({className:"flex flex-auto w-full h-full bg-white rounded-xl shadow-md overflow-hidden"})(j||(j=Object(c.a)([""])));function y(e){return Object(h.jsx)(w,{children:Object(h.jsx)(C,{children:Object(h.jsxs)("div",{className:"flex flex-auto flex-col h-full",children:[Object(h.jsxs)("div",{className:"flex flex-grow-0 flex-row p-2 bg-green-600",children:[e.left,Object(h.jsx)("div",{className:"flex flex-grow"}),e.right]}),Object(h.jsx)("div",{className:"flex flex-auto flex-row p-2",children:e.content})]})})})}var G=o.a.button.attrs({className:"flex flex-grow-0 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"})(g||(g=Object(c.a)([""]))),D=o.a.header.attrs({className:"flex flex-auto"})(b||(b=Object(c.a)(["\n    height: 17vh;\n"]))),M=o.a.footer.attrs({className:"flex flex-auto "})(m||(m=Object(c.a)(["\n    height: 3vh;\n    min-height: 35px;\n"]))),P=o.a.span.attrs({className:"flex text-white text-3xl object-center font-bold pl-2 pt-1"})(p||(p=Object(c.a)([""]))),B=o.a.span.attrs({className:"bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"})(O||(O=Object(c.a)(["\n    line-height: 15vh;\n"]))),R=o.a.input.attrs({className:"text-green-900 rounded-lg shadow-md border-2 border-green-500"})(v||(v=Object(c.a)([""])));var k=function(){var e=Object(i.useState)("int main (int a) {\n    return a;\n}"),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(h.jsxs)("div",{className:"bg-green-100",children:[Object(h.jsx)(D,{children:Object(h.jsxs)("div",{className:"text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center object-center align-middle font-extrabold w-full h-full",children:[Object(h.jsx)(B,{children:"GNC Compiler Online"}),Object(h.jsx)("a",{href:"https://github.com/PAN-Ziyue/GNC",children:Object(h.jsx)("img",{className:"mx-auto flex-grow-0 p-1",src:"https://img.shields.io/github/stars/PAN-Ziyue/GNC",alt:"GitHub Repo"})})]})}),Object(h.jsxs)("div",{className:"flex flex-auto flex-col lg:flex-row",children:[Object(h.jsx)(y,{left:Object(h.jsx)(P,{children:"Code"}),right:Object(h.jsx)(G,{children:"Run"}),content:Object(h.jsx)(d.a,{defaultLanguage:"c",theme:"light",onChange:r,value:n})}),Object(h.jsx)(y,{left:Object(h.jsxs)("div",{className:"flex flex-row",children:[Object(h.jsx)(P,{children:"Parse Tree"}),Object(h.jsx)(P,{children:"/"}),Object(h.jsx)(P,{className:"text-opacity-50",children:"AST"})]}),right:Object(h.jsx)(G,{children:"Compile"}),content:Object(h.jsx)(u,{data:N})}),Object(h.jsx)(y,{left:Object(h.jsx)(P,{children:"Running Result"}),right:Object(h.jsx)(G,{children:"Run"}),content:Object(h.jsxs)("div",{children:["function: `main()`",Object(h.jsx)("br",{}),"a: ",Object(h.jsx)(R,{}),Object(h.jsx)("br",{}),"res: 23333"]})})]}),Object(h.jsx)(M,{children:Object(h.jsxs)("p",{className:"text-xs lg:text-lg text-green-700 text-opacity-50 text-center object-center w-full",children:[Object(h.jsx)("a",{href:"https://github.com/PAN-Ziyue/GNC",className:"no-underline hover:underline",children:"GNC"})," (2021) is the course project of Compilation Principle by Ziyue, MartinNose and ",Object(h.jsx)("a",{href:"https://www.ncj.wiki",className:"no-underline hover:underline",children:"NCJ"}),'. GNC is a recursive acronym for "GNC\'s Not C-language!"']})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,555)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),s(e),a(e)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),S()}},[[550,1,2]]]);
//# sourceMappingURL=main.1c88ea81.chunk.js.map