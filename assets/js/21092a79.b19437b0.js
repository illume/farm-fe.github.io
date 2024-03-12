"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[7596],{7207:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=s(1527),i=s(5696);const o={sidebar_position:2},r="Why Farm?",a={id:"why-farm",title:"Why Farm?",description:"As the web project scales, building performance has been the major bottleneck, for a huge project, compiling with webpack may cost 10min or more, a hmr update may cost 10s or more, heavily reduced the efficiency.",source:"@site/versioned_docs/version-0.x/why-farm.md",sourceDirName:".",slug:"/why-farm",permalink:"/docs/0.x/why-farm",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/why-farm.md",tags:[],version:"0.x",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",next:{title:"Quick Start",permalink:"/docs/0.x/quick-start"}},l={},c=[{value:"Farm Design Philosophy",id:"farm-design-philosophy",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"why-farm",children:"Why Farm?"}),"\n",(0,t.jsx)(n.p,{children:"As the web project scales, building performance has been the major bottleneck, for a huge project, compiling with webpack may cost 10min or more, a hmr update may cost 10s or more, heavily reduced the efficiency."}),"\n",(0,t.jsx)(n.p,{children:"Then some tools like vite comes out, it uses native ESM and is unbundled for source files in dev mode, pre-bundle dependencies using esbuild, which makes the dev server launch and the HMR very fast."}),"\n",(0,t.jsx)(n.p,{children:"But Unbundled is not perfect, there are still big problem when comes for a large project:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"The huge numbers of module requests"}),": For a large project, there may be thousands of modules that should be loaded, using native module system to load thousands of modules will make the browser get stuck or even crashed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Inconsistency between Dev and Production"}),": Native module can not be used in production for most situations, For the compatibility and request numbers. So Unbundled tools choose to bundle in production. This brings inconsistency, when there are production bugs caused by this inconsistency, it's really hard to debug and really painful. And vite is using esbuild in dev and using rollup in production, which enlarged the inconsistency."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Inflexible Chunk Splitting"}),": Configuration for Chunk Splitting is not flexible enough."]}),"\n",(0,t.jsx)(n.li,{children:"And Vite is so fast in dev because of esbuild, which is written in go. Go takes advantages of native platform and much faster than Js."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"So I think we just need a fast, powerful, consistent web bundler, which can solve the problems above and fast, then I designed and implemented Farm."}),"\n",(0,t.jsx)(n.p,{children:"And Farm is not just a normal bundler re-written in Rust, it has a lot of powerful and progressive designs:"}),"\n",(0,t.jsx)(n.h2,{id:"farm-design-philosophy",children:"Farm Design Philosophy"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Performance first"}),": Everything will be written in Rust as long as we can, only several parts which is not the performance bottleneck will be written in JS"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Consistence first"}),": Make sure that the development and production exactly the same by default, what you see in development will be the same as what you got in production."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Partial Bundling"}),": The bundling goal of Farm is not to bundle everything together, but to limit the request numbers of resources. Farm will bundle your project into 20-30 small resources according to the dependency relation and resource size, to get the best resources loading performance without losing caching granularity."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"First class citizen support of all web assets"}),": Farm won't need to transform everything to Javascript any more, it treats anything as first class citizen, assets like ",(0,t.jsx)(n.code,{children:"html"}),", ",(0,t.jsx)(n.code,{children:"js/jsx/ts/tsx"}),", ",(0,t.jsx)(n.code,{children:"css/scss"}),", ",(0,t.jsx)(n.code,{children:"png/svg/..."})," are all basic modules supported by Farm, more assets can be supported by plugins."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compatibility"}),": Farm will work with both legacy(ES5) and modern browser."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Rollup style plugin system and vite/rollup compatible js-plugins"}),": Easy to create your own plugins and easy to migrate your plugins/projects from rollup/vite. Support both Rust and JS plugins."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Farm's goal is to be the real next generation build tool, inherit all advantages from existing tools, and to be fast, powerful, consistent, and providing best development experience for web developers."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5696:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var t=s(959);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);