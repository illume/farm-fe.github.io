"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[8616],{4996:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=s(1527),i=s(5696);const r={},a="Static Assets",o={id:"features/static",title:"Static Assets",description:"Farm treat modules that is not treated as code as Static Assets, for example, images like png/svg/etc, text files like txt/xlsx/etc. This document describes how Farm deal with these assets.",source:"@site/docs/features/static.md",sourceDirName:"features",slug:"/features/static",permalink:"/docs/features/static",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/features/static.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TS/TSX",permalink:"/docs/features/script"},next:{title:"Environment Variables and Modes",permalink:"/docs/features/env"}},l={},c=[{value:"url",id:"url",level:2},{value:"inline",id:"inline",level:2},{value:"raw",id:"raw",level:2},{value:"Configuring Assets",id:"configuring-assets",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"static-assets",children:"Static Assets"}),"\n",(0,n.jsxs)(t.p,{children:["Farm treat modules that is not treated as ",(0,n.jsx)(t.code,{children:"code"})," as ",(0,n.jsx)(t.code,{children:"Static Assets"}),", for example, images like ",(0,n.jsx)(t.code,{children:"png/svg/etc"}),", text files like ",(0,n.jsx)(t.code,{children:"txt/xlsx/etc"}),". This document describes how Farm deal with these assets."]}),"\n",(0,n.jsx)(t.h2,{id:"url",children:"url"}),"\n",(0,n.jsx)(t.p,{children:"Import a image\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import rocketUrl from './assets/rocket.svg'; // return the url of this image\n\nexport function Main() {\n  return <img src={rocketUrl} /> // using the url\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Default to use url method when import a image. When using url methods to import a image, the image will be emitted to the output dir directly, and the image module itself will be compiled to a js module like:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"export default '/rocket.<content hash>.svg'\n"})}),"\n",(0,n.jsxs)(t.p,{children:["using ",(0,n.jsx)(t.a,{href:"/docs/config/compilation-options#outputassetsfilename",children:(0,n.jsx)(t.code,{children:"compilation.output.assetFilename"})})," to config your asset name\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"inline",children:"inline"}),"\n",(0,n.jsxs)(t.p,{children:["Using query ",(0,n.jsx)(t.code,{children:"?inline"})," to tell Farm that you want to inline your assets\uff0cthen the assets will be transformed to base64\uff0cfor example\uff1a"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// importer\nimport logo from './assets/logo.png?inline'; // logo is a base 64 str\n\n// the image module will be compiled to:\nexport default 'data:image/png,base64,xxxxx==';\n"})}),"\n",(0,n.jsx)(t.h2,{id:"raw",children:"raw"}),"\n",(0,n.jsxs)(t.p,{children:["Using query ",(0,n.jsx)(t.code,{children:"?raw"})," to tell Farm that you want to read the raw string of the assets, for example"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// import \nimport logo from './assets/license.txt?raw'; // return the content string of the assets\n\n// the txt file will be compiled to:\nexport default 'MIT xxxx';\n"})}),"\n",(0,n.jsx)(t.h2,{id:"configuring-assets",children:"Configuring Assets"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Using ",(0,n.jsx)(t.a,{href:"/docs/config/compilation-options#outputassetsfilename",children:(0,n.jsx)(t.code,{children:"compilation.output.assetFileName"})})," to control the production file name"]}),"\n",(0,n.jsxs)(t.li,{children:["using ",(0,n.jsx)(t.a,{href:"/docs/config/compilation-options#assetsinclude",children:(0,n.jsx)(t.code,{children:"compilation.assets.include"})})," to treat more kind of files as asset modules."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  compilation: {\n    output: {\n      assetFilename: 'assets/[resourceName].[hash].[ext]', // [] is a placeholder, Farm currently only these three kind of placeholders\n    },\n    assets: {\n      include: ['txt'] // extra static asset extension\n    }\n  }\n});\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5696:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>a});var n=s(959);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);