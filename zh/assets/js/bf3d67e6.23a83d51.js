"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[2073],{7633:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var r=n(1527),l=n(5696);const c={},i="CSS",o={id:"features/css",title:"CSS",description:"Farm \u652f\u6301\u5f00\u7bb1\u5373\u7528\u7684 CSS \u7f16\u8bd1\uff0c\u4f8b\u5982\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.x/features/css.md",sourceDirName:"features",slug:"/features/css",permalink:"/zh/docs/0.x/features/css",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/features/css.md",tags:[],version:"0.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Html",permalink:"/zh/docs/0.x/features/html"},next:{title:"Script",permalink:"/zh/docs/0.x/features/script"}},d={},a=[{value:"CSS Modules",id:"css-modules",level:2},{value:"CSS \u9884\u5904\u7406\u5668",id:"css-\u9884\u5904\u7406\u5668",level:2},{value:"Sass",id:"sass",level:3},{value:"Less",id:"less",level:3},{value:"Postcss",id:"postcss",level:3},{value:"Css Prefixer",id:"css-prefixer",level:2}];function t(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...s.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"css",children:"CSS"}),"\n",(0,r.jsx)(e.p,{children:"Farm \u652f\u6301\u5f00\u7bb1\u5373\u7528\u7684 CSS \u7f16\u8bd1\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"import './index.css';\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u7136\u540e Farm \u4f1a\u81ea\u52a8\u4e3a css \u6a21\u5757\u542f\u7528 HMR\uff0c\u5e76\u81ea\u52a8\u6253\u5305 Css\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"css-modules",children:"CSS Modules"}),"\n",(0,r.jsxs)(e.p,{children:["Farm \u9ed8\u8ba4\u652f\u6301 css modules\uff0c\u4ee5 ",(0,r.jsx)(e.code,{children:".module.css|less|scss|sass"})," \u7ed3\u5c3e\u7684\u6a21\u5757\u9ed8\u8ba4\u5c06\u88ab\u89c6\u4e3a ",(0,r.jsx)(e.code,{children:"Css Modules"}),"\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",metastring:'title="comp.tsx"',children:"// ...\nimport styles from './index.module.css'\n\nexport function Comp() {\n  return <div className={styles.main}>Main</div>\n}\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-css",metastring:'title="index.module.css"',children:".main {\n  color: red;\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(e.a,{href:"/docs/config/farm-config#cssmodules",children:(0,r.jsx)(e.code,{children:"css.modules"})}),"\u914d\u7f6eCSS\u6a21\u5757\u3002 \u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u5c06 ",(0,r.jsx)(e.code,{children:"css.modules.paths"})," \u8bbe\u7f6e\u4e3a ",(0,r.jsx)(e.code,{children:"['.css|sass|less|scss']"})," \u90a3\u4e48\u6240\u6709 css \u6587\u4ef6\u5c06\u88ab\u89c6\u4e3a css \u6a21\u5757\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"css-\u9884\u5904\u7406\u5668",children:"CSS \u9884\u5904\u7406\u5668"}),"\n",(0,r.jsx)(e.p,{children:"Farm \u5b98\u65b9\u63d0\u4f9b\u4e86 sass\u3001less\u3001postcss \u63d2\u4ef6\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"sass",children:"Sass"}),"\n",(0,r.jsxs)(e.p,{children:["Farm Sass \u63d2\u4ef6\u662f\u4e00\u4e2a Rust \u63d2\u4ef6\uff0c\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"sass-embeded"}),"\uff08\u540e\u9762\u6211\u4eec\u53ef\u80fd\u4f1a\u8fc1\u79fb\u5230\u7eaf Rust \u7f16\u5199\u7684 ",(0,r.jsx)(e.a,{href:"https://github.com/connorskees/grass",children:(0,r.jsx)(e.code,{children:"grass"})}),"\uff09\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5728 Farm \u4e2d\u7f16\u8bd1 ",(0,r.jsx)(e.code,{children:"sass/scss"})," \u6a21\u5757\u7684\u6b65\u9aa4\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u5b89\u88c5\u4f9d\u8d56"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"# npm \u6216\u8005 yarn \u6216\u8005 pnpm\uff0c\u4f7f\u7528\u4efb\u610f\u4f60\u559c\u6b22\u7684\u5305\u7ba1\u7406\u5668 \nnpm install @farmfe/plugin-sass\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsx)(e.li,{children:"\u914d\u7f6e\u63d2\u4ef6"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"import type { UserConfig } from '@farmfe/core';\n\nexport default <UserConfig> {\n  // ...\n  plugins: ['@farmfe/plugin-sass'] // \u914d\u7f6e Rust \u63d2\u4ef6\u7684\u5305\u540d\u5373\u53ef\u5f15\u5165\u548c\u4f7f\u7528\u8be5\u63d2\u4ef6\n  // \u5982\u679c\u4f60\u5e0c\u671b\u914d\u7f6e plugin-sass \u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u5f62\u5f0f\u7684\u914d\u7f6e\n  // plugins: [\n  //   ['@farmfe/plugin-sass', { sourceMap: false }]\n  // ]\n};\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"3",children:["\n",(0,r.jsx)(e.li,{children:"\u5bfc\u5165sass\u6a21\u5757"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"import './index.scss';\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u8981\u5c06 ",(0,r.jsx)(e.code,{children:"sass"})," \u4e0e ",(0,r.jsx)(e.code,{children:"css modules"})," \u4e00\u8d77\u4f7f\u7528\uff0c\u8bf7\u5c06\u6587\u4ef6\u540d\u4ece ",(0,r.jsx)(e.code,{children:"index.scss"})," \u66f4\u6539\u4e3a ",(0,r.jsx)(e.code,{children:"index.module.scss"}),"\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(e.a,{href:"#css-modules",children:"css modules"}),"\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"@farmfe/plugin-sass"})," \u652f\u6301\u5f88\u591a\u9009\u9879\uff0c\u4f7f\u7528 plugins \u7684\u6570\u7ec4\u914d\u7f6e\u6307\u5b9a\u63d2\u4ef6 sass \u7684\u9009\u9879\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"import type { UserConfig } from '@farmfe/core';\n\nexport default <UserConfig> {\n  plugins: [\n    // \u901a\u8fc7\u6570\u7ec4\u8bed\u6cd5\u6307\u5b9a\u63d2\u4ef6\u4ee5\u53ca\u914d\u7f6e\n    [\n      '@farmfe/plugin-sass',\n      // \u6240\u6709\u652f\u6301\u7684\u9009\u9879\u5982\u4e0b\n      {\n        sourceMap: true // bool\n        sourceMapIncludeSources: true, // bool\n        alertAscii: true, // bool\n        alertColor: true, // bool\n        charset: true, // bool\n        quietDeps: true, // bool\n        verbose: false, // bool\n        style: 'expanded' | 'compressed' // output code style\n      }\n    ]\n  ]\n};\n"})}),"\n",(0,r.jsx)(e.h3,{id:"less",children:"Less"}),"\n",(0,r.jsxs)(e.p,{children:["Farm less \u63d2\u4ef6\u662f\u4e00\u4e2a Js \u63d2\u4ef6\u3002 \u5728 Farm \u4e2d\u7f16\u8bd1 ",(0,r.jsx)(e.code,{children:"less"})," \u6a21\u5757\u7684\u6b65\u9aa4\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u5b89\u88c5\u4f9d\u8d56"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"# npm or yarn or pnpm, choose your favorite package manager\nnpm install @farmfe/js-plugin-less\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsx)(e.li,{children:"\u914d\u7f6e\u63d2\u4ef6"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"import type { UserConfig } from '@farmfe/core';\nimport less from '@farmfe/js-plugin-less';\n\nexport default <UserConfig> {\n  // ...\n  plugins: [less()] // pass argument to the less function like `less({ /* your options */ })` to specify less options\n};\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"3",children:["\n",(0,r.jsx)(e.li,{children:"\u5bfc\u5165 Less \u6a21\u5757"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"import './index.less';\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u8981\u5c06 ",(0,r.jsx)(e.code,{children:"less"})," \u4e0e ",(0,r.jsx)(e.code,{children:"css modules"})," \u4e00\u8d77\u4f7f\u7528\uff0c\u8bf7\u5c06\u6587\u4ef6\u540d\u4ece ",(0,r.jsx)(e.code,{children:"index.less"})," \u66f4\u6539\u4e3a ",(0,r.jsx)(e.code,{children:"index.module.less"}),"\uff0c\u53c2\u8003 ",(0,r.jsx)(e.a,{href:"#css-modules",children:"css modules"})]}),"\n",(0,r.jsx)(e.h3,{id:"postcss",children:"Postcss"}),"\n",(0,r.jsx)(e.p,{children:"Farm postcss \u63d2\u4ef6\u662f\u4e00\u4e2a JS \u63d2\u4ef6\uff0c\u5728 Farm \u4e2d\u5f15\u5165 postcss \u7684\u6b65\u9aa4\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u5b89\u88c5\u4f9d\u8d56"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"# npm or yarn or pnpm, choose your favorite package manager\nnpm install @farmfe/js-plugin-postcss\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsx)(e.li,{children:"\u914d\u7f6e\u63d2\u4ef6"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"import type { UserConfig } from '@farmfe/core';\nimport postcss from '@farmfe/js-plugin-postcss';\n\nexport default <UserConfig> {\n  // ...\n  plugins: [postcss()] // pass argument to the less function like `less({ /* your options */ })` to specify less options\n};\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"3",children:["\n",(0,r.jsxs)(e.li,{children:["\u914d\u7f6e ",(0,r.jsx)(e.code,{children:"postcss.config.js"}),"\uff0c\u5f15\u5165\u9700\u8981\u7684 postcss \u63d2\u4ef6"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",metastring:"title=postcss.config.js",children:"module.exports = {\n  plugins: [\n    require('postcss-pxtorem')({\n      rootValue: 16,\n      propList: ['*'],\n    }),\n    require('tailwindcss'),\n  ]\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"css-prefixer",children:"Css Prefixer"}),"\n",(0,r.jsxs)(e.p,{children:["Farm \u652f\u6301\u5f00\u7bb1\u5373\u7528\u7684 css prefixer\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(e.code,{children:"compilation.css.prefixer"}),"\u5bf9\u5176\u8fdb\u884c\u914d\u7f6e\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import type { UserConfig } from '@farmfe/core';\n\nfunction defineConfig(config: UserConfig) {\n   return config;\n}\n\nexport default defineConfig({\n   compilation: {\n     css: {\n       prefix: {\n        targets: ['ie >= 10']\n       }\n     },\n   },\n});\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u4e8e\u8f93\u5165\u4ee3\u7801"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-css",children:"div {\n  display: flex;\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u8f93\u51fa"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-css",children:"div{display:-ms-flexbox;display:flex}\n"})})]})}function p(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(t,{...s})}):t(s)}},5696:(s,e,n)=>{n.d(e,{Z:()=>o,a:()=>i});var r=n(959);const l={},c=r.createContext(l);function i(s){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function o(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:i(s.components),r.createElement(c.Provider,{value:e},s.children)}}}]);