"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[5856],{5962:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var r=i(1527),s=i(5696);const l={},o="Shared Options",t={id:"config/shared",title:"Shared Options",description:"Configure shared options for Both Farm's DevServer and Compiler. Example:",source:"@site/docs/config/shared.md",sourceDirName:"config",slug:"/config/shared",permalink:"/docs/config/shared",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/config/shared.md",tags:[],version:"current",frontMatter:{},sidebar:"configSidebar",previous:{title:"Dev Server Options",permalink:"/docs/config/dev-server"},next:{title:"Farm CLI",permalink:"/docs/cli/cli-api"}},c={},d=[{value:"root",id:"root",level:2},{value:"clearScreen",id:"clearscreen",level:2},{value:"envDir",id:"envdir",level:2},{value:"envPrefix",id:"envprefix",level:2},{value:"publicDir",id:"publicdir",level:2},{value:"plugins",id:"plugins",level:2},{value:"vitePlugins",id:"viteplugins",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"shared-options",children:"Shared Options"}),"\n",(0,r.jsx)(n.p,{children:"Configure shared options for Both Farm's DevServer and Compiler. Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { defineConfig } from "@farmfe/core";\n\nexport default defineConfig({\n  // All dev server options are under server\n  root: process.cwd(),\n});\n'})}),"\n",(0,r.jsx)(n.p,{children:"Type:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export interface UserConfig {\n  /** current root of this project, default to current working directory */\n  root?: string;\n  clearScreen?: boolean;\n  envDir?: string;\n  envPrefix?: string | string[];\n  /** Files under this dir will always be treated as static assets. serve it in dev, and copy it to output.path when build */\n  publicDir?: string;\n  /** js plugin(which is a javascript object) and rust plugin(which is string refer to a .farm file or a package) */\n  plugins?: (RustPlugin | JsPlugin | JsPlugin[])[];\n  /** vite plugins */\n  vitePlugins?: (object | (() => { vitePlugin: any; filters: string[] }))[];\n  // /** config related to compilation */\n  // compilation?: Pick<InternalConfig, AvailableUserConfigKeys>;\n  // /** config related to dev server */\n  // server?: UserServerConfig;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"root",children:"root"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"default"}),": ",(0,r.jsx)(n.code,{children:"process.cwd()"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Configure the root directory for project compilation. All relative paths are relative to ",(0,r.jsx)(n.code,{children:"root"})," during compilation."]}),"\n",(0,r.jsx)(n.h2,{id:"clearscreen",children:"clearScreen"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"default"}),": ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Whether to clear the screen when start to compile the project."}),"\n",(0,r.jsx)(n.h2,{id:"envdir",children:"envDir"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"default"}),": ",(0,r.jsx)(n.code,{children:"<root>"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Configuring the directory to load ",(0,r.jsx)(n.code,{children:".env"}),", ",(0,r.jsx)(n.code,{children:".env.development"}),", ",(0,r.jsx)(n.code,{children:".env.production"})," files. By default it's the same as root."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { defineConfig } from '@farmfe/core';\nimport { resolve } from 'path';\nexport default defineConfig({\n  envPrefix: ['FARM_', 'CUSTOM_PREFIX_', 'NEW_'],\n  envDir: resolve(process.cwd(), './env'),\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In above example, will load ",(0,r.jsx)(n.code,{children:".env"}),", ",(0,r.jsx)(n.code,{children:".env.development"}),", ",(0,r.jsx)(n.code,{children:".env.production"})," files from ",(0,r.jsx)(n.code,{children:"<root>/env"})," directory."]}),"\n",(0,r.jsx)(n.h2,{id:"envprefix",children:"envPrefix"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"default"}),": ",(0,r.jsx)(n.code,{children:"['FARM_', 'VITE_']"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Env variables starts with ",(0,r.jsx)(n.code,{children:"envPrefix"})," will be injected ",(0,r.jsx)(n.a,{href:"/docs/config/compilation-options#define",children:(0,r.jsx)(n.code,{children:"define"})})," automatically."]}),"\n",(0,r.jsx)(n.h2,{id:"publicdir",children:"publicDir"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"default"}),": ",(0,r.jsx)(n.code,{children:"public"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Files under ",(0,r.jsx)(n.code,{children:"publicDir"})," will always be treated as static assets. serve it in dev, and copy it to output.path when build."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, you can add static assets like font to ",(0,r.jsx)(n.code,{children:"public"})," dir and using them as ",(0,r.jsx)(n.code,{children:"/xxx.ttf"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"plugins",children:"plugins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"default"}),": ",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Configure Farm Plugins. See ",(0,r.jsx)(n.a,{href:"/docs/using-plugins#farm-compilation-plugins",children:"Using Farm Plugins"})]}),"\n",(0,r.jsx)(n.h2,{id:"viteplugins",children:"vitePlugins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"default"}),": ",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Configure Vite/Rollup/Unplugin plugins. See ",(0,r.jsx)(n.a,{href:"/docs/using-plugins#using-viterollupunplugin-plugins-in-farm",children:"Using Vite Plugins"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},5696:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>o});var r=i(959);const s={},l=r.createContext(s);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);