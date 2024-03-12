"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[195],{2811:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=i(1527),r=i(5696);const t={},o="Partial Bundling",l={id:"features/partial-bundling",title:"Partial Bundling",description:"Partial Bundling is a strategy that Farm uses to bundle modules, similar to what other bundlers do but the goal of Farm's Partial Bundling is different.",source:"@site/versioned_docs/version-0.x/features/partial-bundling.md",sourceDirName:"features",slug:"/features/partial-bundling",permalink:"/docs/0.x/features/partial-bundling",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/features/partial-bundling.md",tags:[],version:"0.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lazy Compilation",permalink:"/docs/0.x/features/lazy-compilation"},next:{title:"Source Map",permalink:"/docs/0.x/features/sourcemap"}},d={},a=[{value:"Motivation",id:"motivation",level:2},{value:"Partial Bundling Rules",id:"partial-bundling-rules",level:2},{value:"Configuring Partial Bundling",id:"configuring-partial-bundling",level:2},{value:"Grouping Modules",id:"grouping-modules",level:3},{value:"Using <code>enforceResources</code>",id:"using-enforceresources",level:3},{value:"Configuring <code>immutable modules</code>",id:"configuring-immutable-modules",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"partial-bundling",children:"Partial Bundling"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Partial Bundling"})," is a strategy that Farm uses to bundle modules, similar to what other bundlers do but the goal of Farm's ",(0,s.jsx)(n.code,{children:"Partial Bundling"})," is different."]}),"\n",(0,s.jsxs)(n.p,{children:["Unlike other bundlers, Farm will not trying to bundle everything together and then split them out using optimizations like ",(0,s.jsx)(n.code,{children:"splitChunks"}),", on the opposite, Farm will bundle projects into several output files directly. For example, if there are hundreds of modules needed to launch a html page, Farm will try to bundle them into 20-30 output files directly. Farm calls this behavior ",(0,s.jsx)(n.code,{children:"Partial Bundling"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Farm's goal of Partial Bundling is to:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Reduce request numbers and request hierarchy"}),": Make hundreds or thousands of module requests reduce to 20-30 requests, and avoid loading modules one after one due to dependency hierarchy, which would make resource loading faster."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Increase cache hit rate"}),": When a modules changed, makes sure that only a few output files are affected, so more cache can be used for a online project."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For traditional bundlers, we may have a hard time to configure complex ",(0,s.jsx)(n.code,{children:"splitChunks"})," or ",(0,s.jsx)(n.code,{children:"manualChunks"})," to achieve the goal above, but in Farm, it is supported natively through ",(0,s.jsx)(n.code,{children:"Partial Bundling"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Refer to ",(0,s.jsx)(n.a,{href:"https://github.com/farm-fe/rfcs/blob/main/rfcs/003-partial-bundling/rfc.md",children:"RFC-003 Partial Bundling"})," to get more technical details."]})}),"\n",(0,s.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsx)(n.p,{children:"There are two main methods of handling modules in web build tools now: Bundling or native ESM. But they both have drawbacks:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For bundling, bundlers aim to bundle everything together and then split them out for optimization, but splitting is often hard to configure and is hard to balance resources loading performance and cache hit rate manually."}),"\n",(0,s.jsx)(n.li,{children:"For native esm, every module can be compiled, cached separately, but the load performance are heavily affected when there are hundreds of module requests."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["So I was always thinking that if there is a strategy to avoid these two extremes - maybe we can do partial bundling? we can just bundle the project into several limited, size balanced resources directly and automatically. I named this thinking ",(0,s.jsx)(n.code,{children:"Module Merging"})," - Find a balance between bundle and unbundled, only bundles a few related modules to improve loading performance without losing cache granularity."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["I renamed ",(0,s.jsx)(n.code,{children:"Module Merging"})," to ",(0,s.jsx)(n.code,{children:"Partial Bundling"})," later because I think ",(0,s.jsx)(n.code,{children:"Partial Bundling"})," can expresses more accurately what I was thinking."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"partial-bundling-rules",children:"Partial Bundling Rules"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["In this section, we will introduce the basic rules that ",(0,s.jsx)(n.code,{children:"Partial Bundling"})," uses by examples."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"First we look into a basic react project example. For a basic react project like below, we only import react and react-dom in the entry script:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="index.tsx"',children:"import React from 'react';\nimport { createRoot } from 'react-dom/client';\nimport './index.scss';\n\nconst container = document.querySelector('#root');\nconst root = createRoot(container);\n\nroot.render(\n  <>\n    <div>Index page</div>\n  </>\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:"The bundling result will looks like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"./dist/\n\u251c\u2500\u2500 index_9c07.49b83356.js      # contains react-dom\n\u251c\u2500\u2500 index_a35f.0ac21082.js      # contains ./index.tsx\n\u251c\u2500\u2500 index_b7e0.7ab9ca2d.js      # contains react and its dependencies\n\u251c\u2500\u2500 index_ce26.7f833381.css     $ contains ./index.scss\n\u2514\u2500\u2500 index.html                  # contains ./index.html\n"})}),"\n",(0,s.jsx)(n.p,{children:"Farm will bundle your project into 5 files by default:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"2 js files"})," are from ",(0,s.jsx)(n.code,{children:"node_modules"})," and contains ",(0,s.jsx)(n.code,{children:"react"}),", ",(0,s.jsx)(n.code,{children:"react-dom"})," and their dependencies."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"1 js file"})," are from ",(0,s.jsx)(n.code,{children:"./index.tsx"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"1 css file"})," are from ",(0,s.jsx)(n.code,{children:"./index.scss"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"1 html file"})," are from ",(0,s.jsx)(n.code,{children:"./index.html"}),";"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Farm uses following rules to get above results:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mutable and immutable modules should always be in different output files"}),": By default Farm treat all modules under ",(0,s.jsx)(n.code,{children:"node_modules"})," are immutable, otherwise they are mutable. So ",(0,s.jsx)(n.code,{children:"./index.tsx"})," is in a separate file cause it's a mutable module, so it never be in the same output file with ",(0,s.jsx)(n.code,{children:"react"})," and ",(0,s.jsx)(n.code,{children:"react-dom"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Different type of module are always in different output files"}),": So ",(0,s.jsx)(n.code,{children:"./index.scss"})," are in a separate file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Modules in the same package should be in the same output file"}),": So all ",(0,s.jsx)(n.code,{children:"react"})," modules are always in the same output file, so does ",(0,s.jsx)(n.code,{children:"react-dom"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"The target concurrent requests for a resource loading should be between 20-30 by default"}),": So there are 3 js output files instead of 1 js bundles."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Output files should be of similar size and min resource size should be greater than 20KB by default"}),": Because ",(0,s.jsx)(n.code,{children:"react-dom"})," is the largest and more than 100KB, it is in a separate file, and ",(0,s.jsx)(n.code,{children:"react"})," and its dependencies are smaller than ",(0,s.jsx)(n.code,{children:"20KB"}),", there are merged into the same output file."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Now we have familiar with ",(0,s.jsx)(n.code,{children:"Partial Bundling"}),"'s basic rules, if met problems with partial bundling, using above rules to debug your project. Next we'll cover how to configure partial bundling."]}),"\n",(0,s.jsx)(n.h2,{id:"configuring-partial-bundling",children:"Configuring Partial Bundling"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Partial Bundling"})," supports a lot of options to let users customize its behavior. All the options are as below:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"targetConcurrentRequests"})}),": Farm tries to generate resource numbers as closer as possible to this config value for initial resource loading or a dynamic resource loading."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"targetMinSize"})}),": The minimum size of generated resources before minify and gzip. Note that ",(0,s.jsx)(n.code,{children:"targetMinSize"})," will not be satisfied if ",(0,s.jsx)(n.code,{children:"ModuleBucket's size"})," is less than ",(0,s.jsx)(n.code,{children:"targetMinSize"}),", ",(0,s.jsx)(n.code,{children:"ModuleBucket"})," will be given priority. Config ",(0,s.jsx)(n.code,{children:"enforceTargetMinSize"})," can be used to enforce size."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"targetMaxSize"})}),": The maximum size of generated resources before minify and gzip."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"groups"})}),": A group of modules that should be placed together. Note that this group config is only a hit to the compiler that these modules should be placed together, it may produce multiple resources, if you want to enforce modules in the same resource, you should use ",(0,s.jsx)(n.code,{children:"enforceResources"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"name"}),": Name of this group."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"test"}),": Regex array to match the modules which are in this group."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"groupType"}),": ",(0,s.jsx)(n.code,{children:"mutable"})," or ",(0,s.jsx)(n.code,{children:"immutable"}),", this group only applies to the specified type of modules."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"resourceType"}),": ",(0,s.jsx)(n.code,{children:"all"}),", ",(0,s.jsx)(n.code,{children:"initial"})," or ",(0,s.jsx)(n.code,{children:"async"}),", this group only applies to the specified type of resources."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"enforceResources"})}),": Array to match the modules that should always be in the same output resource, ignore all other constraints.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"name"}),": Name of this resource."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"test"}),": Regex array to match the modules which are in this resource."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"enforceTargetConcurrentRequests"})}),": Enforce target concurrent requests for every resource loading, when true, smaller resource will be merged into bigger resource to meet the target concurrent requests. this may cause issue for css resource, be careful to use this option"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"enforceTargetMinSize"})}),": Enforce target min size for every resource, when true, smaller resource will be merged into bigger resource to meet the target concurrent requests. this may cause issue for css resource, be careful to use this option"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"immutableModules"})}),": Regex array to match the immutable modules"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"immutableModulesWeight"})}),": Default to ",(0,s.jsx)(n.code,{children:"0.8"}),", immutable module will have 80% request numbers. For example, if ",(0,s.jsx)(n.code,{children:"targetConcurrentRequest"})," is 25, then immutable resources will take ",(0,s.jsx)(n.code,{children:"25 * 80% = 20"})," by default. This option is to make sure that mutable and immutable modules are isolate, if change your business code, code under node_modules won't be affected."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["In general, you can use ",(0,s.jsx)(n.code,{children:"targetConcurrentRequests"}),", ",(0,s.jsx)(n.code,{children:"targetMinSize"})," and ",(0,s.jsx)(n.code,{children:"targetMaxSize"})," to control the default behavior of Partial Bundling. The default value set by Farm is based on best practice, so make sure it's necessary when you want to change the default value."]})}),"\n",(0,s.jsx)(n.h3,{id:"grouping-modules",children:"Grouping Modules"}),"\n",(0,s.jsxs)(n.p,{children:["you can use ",(0,s.jsx)(n.code,{children:"groups"})," to group modules together, for above basic react project example, using following configuration to make modules under ",(0,s.jsx)(n.code,{children:"node_modules"})," are bundled together:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts" {4-9}',children:"export default defineConfig({\n  compilation: {\n    partialBundling: {\n      groups: [\n        {\n          name: 'vendor-react',\n          test: ['node_modules/'],\n        }\n      ]\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["we add a ",(0,s.jsx)(n.code,{children:"group item"})," with ",(0,s.jsx)(n.code,{children:"name"})," and ",(0,s.jsx)(n.code,{children:"test"})," to group ",(0,s.jsx)(n.code,{children:"react"})," and ",(0,s.jsx)(n.code,{children:"react-dom"})," together. The bundle result is:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"./dist/\n\u251c\u2500\u2500 index_499e.72cf733c.js    # contains `react`, `react-dom` and all other files under node_modules\n\u251c\u2500\u2500 index_a35f.0ac21082.js    # contains `./index.tsx`\n\u251c\u2500\u2500 index_ce26.7f833381.css   # contains `./index.scss`\n\u2514\u2500\u2500 index.html                # contains `./index.html`\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now all modules under ",(0,s.jsx)(n.code,{children:"node_modules"})," are bundled into ",(0,s.jsx)(n.code,{children:"index_499e.72cf733c.js"}),". Note that ",(0,s.jsx)(n.code,{children:"groups"})," is not not enforce that all modules matches this group are bundled, a ",(0,s.jsx)(n.code,{children:"group"})," make produce multiple ",(0,s.jsx)(n.code,{children:"output file"}),", because:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["mutable and immutable module are always in different output files. When both mutable and immutable modules hit this ",(0,s.jsx)(n.code,{children:"group"}),", they will be in different output."]}),"\n",(0,s.jsx)(n.li,{children:"when comes to a multi page app or dynamic imported entries, there may be shared modules, and these should modules are always in different output files."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you need to enforce modules in the same output files, you can use ",(0,s.jsx)(n.code,{children:"enforceResources"})]}),"\n",(0,s.jsxs)(n.h3,{id:"using-enforceresources",children:["Using ",(0,s.jsx)(n.code,{children:"enforceResources"})]}),"\n",(0,s.jsxs)(n.p,{children:["To group all modules together and ignore all other conditions, you can use ",(0,s.jsx)(n.code,{children:"enforceResources"}),", for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts" {4-9}',children:"export default defineConfig({\n  compilation: {\n    partialBundling: {\n      enforceResources: [\n        {\n          name: 'index',\n          test: ['.+'],\n        }\n      ]\n    },\n  },\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"will produce:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"./dist/\n\u251c\u2500\u2500 index.7f833381.css  # all css modules are bundled together\n\u251c\u2500\u2500 index.ba5550d9.js   # all script modules are bundled together\n\u2514\u2500\u2500 index.html\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"enforceResources"})," will ignore all Farm's internal optimization, be careful when you use it."]})}),"\n",(0,s.jsxs)(n.h3,{id:"configuring-immutable-modules",children:["Configuring ",(0,s.jsx)(n.code,{children:"immutable modules"})]}),"\n",(0,s.jsxs)(n.p,{children:["Using ",(0,s.jsx)(n.code,{children:"immutableModules"})," to configure immutable modules, by default, Farm set it to ",(0,s.jsx)(n.code,{children:"node_modules/"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"export default defineConfig({\n  compilation: {\n    partialBundling: {\n      immutableModules: ['node_modules/', '/global-constants']\n    },\n  },\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"Immutable module can affect bundling and incoming persistent cache, be careful if you want to change it."})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},5696:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var s=i(959);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);