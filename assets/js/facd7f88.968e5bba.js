"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[5698],{6638:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=n(1527),o=n(5696);const r={},s="Migrate From Vite",c={id:"migration/from-vite",title:"Migrate From Vite",description:"Vite plugins like unocss are deeply integrated with Vite, these plugins may not be compatible with Farm due to the difference of internal design. You can try other method like unocss postcss plugin as walk-around.",source:"@site/docs/migration/from-vite.md",sourceDirName:"migration",slug:"/migration/from-vite",permalink:"/docs/migration/from-vite",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/migration/from-vite.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Svelte",permalink:"/docs/frameworks/svelte"},next:{title:"Benchmarks",permalink:"/docs/benchmark"}},a={},d=[];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"migrate-from-vite",children:"Migrate From Vite"}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["Vite plugins like ",(0,t.jsx)(i.code,{children:"unocss"})," are deeply integrated with ",(0,t.jsx)(i.code,{children:"Vite"}),", these plugins may not be compatible with Farm due to the difference of internal design. You can try other method like ",(0,t.jsx)(i.code,{children:"unocss postcss plugin"})," as walk-around."]})}),"\n",(0,t.jsxs)(i.p,{children:["Migrating from Vite is really simple as Farm is Vite-compatible. All you need to do is transforming ",(0,t.jsx)(i.code,{children:"vite.config.ts"})," to ",(0,t.jsx)(i.code,{children:"farm.config.ts"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Refer to ",(0,t.jsx)(i.a,{href:"/docs/config/configuring-farm",children:"Configuring Farm"})," for mapping farm config options to vite config options."]}),"\n",(0,t.jsxs)(i.li,{children:["For ",(0,t.jsx)(i.code,{children:"Vite Plugins"}),", move ",(0,t.jsx)(i.code,{children:"plugins"})," in ",(0,t.jsx)(i.code,{children:"vite.config.ts"})," to ",(0,t.jsx)(i.code,{children:"vitePlugins"})," in ",(0,t.jsx)(i.code,{children:"farm.config.ts"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Note that:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Some Vite config options is not needed in Farm, like ",(0,t.jsx)(i.code,{children:"optimizeDeps"}),", you can ignore these options when migrating to Farm."]}),"\n",(0,t.jsxs)(i.li,{children:["For SSR, you need to refactor it to ",(0,t.jsx)(i.a,{href:"/docs/advanced/ssr",children:"Farm SSR"})]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["We have migrated a ",(0,t.jsx)(i.a,{href:"https://github.com/farm-fe/farm-soybean-admin",children:"Real Vite Admin Project"})," to Farm. Check this migration example for details."]})]})}function m(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},5696:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>s});var t=n(959);const o={},r=t.createContext(o);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);