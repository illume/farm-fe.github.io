"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[2729],{8697:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var o=i(1527),t=i(5696);const a={},c="Minification",r={id:"advanced/minification",title:"Minification",description:"Farm supports production minify out of box, which is automatically enabled in production by default. It can be enable or disable via the compilation.minify option.",source:"@site/docs/advanced/minification.md",sourceDirName:"advanced",slug:"/advanced/minification",permalink:"/docs/advanced/minification",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/advanced/minification.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tree Shake",permalink:"/docs/advanced/tree-shake"},next:{title:"Syntax Downgrade and Polyfill",permalink:"/docs/advanced/polyfill"}},d={},s=[];function l(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"minification",children:"Minification"}),"\n",(0,o.jsxs)(e.p,{children:["Farm supports production minify out of box, which is automatically enabled ",(0,o.jsx)(e.code,{children:"in production"})," by default. It can be enable or disable via the ",(0,o.jsx)(e.a,{href:"/docs/config/compilation-options#minify",children:(0,o.jsx)(e.code,{children:"compilation.minify"})})," option."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"export default {\n   compilation: {\n    // enable minification for both development and production\n    minify: true\n   },\n};\n"})}),"\n",(0,o.jsx)(e.p,{children:"If minify is enabled:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["For js/ts modules, the code will be ",(0,o.jsx)(e.code,{children:"compressed"})," and ",(0,o.jsx)(e.code,{children:"mangled"}),", and all the blank characters will be removed."]}),"\n",(0,o.jsx)(e.li,{children:"For css and html modules, all spaces will be removed."}),"\n"]}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.p,{children:["Farm use swc minifier under the hood, refer to ",(0,o.jsx)(e.a,{href:"/docs/config/compilation-options#minify",children:"compilation.minify"})," for detailed options."]})})]})}function m(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},5696:(n,e,i)=>{i.d(e,{Z:()=>r,a:()=>c});var o=i(959);const t={},a=o.createContext(t);function c(n){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),o.createElement(a.Provider,{value:e},n.children)}}}]);