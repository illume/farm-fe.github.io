"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[7670],{6933:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var r=o(1527),s=o(5696);const t={},i="TS/TSX",c={id:"features/script",title:"TS/TSX",description:"Farm support compiling Js/Jsx/Ts/Tsx out of box, and compile Jsx/Tsx to React by default.",source:"@site/docs/features/script.md",sourceDirName:"features",slug:"/features/script",permalink:"/docs/features/script",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/features/script.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Css/Sass/Less",permalink:"/docs/features/css"},next:{title:"Static Assets",permalink:"/docs/features/static"}},a={},l=[{value:"Configuring Swc Parser",id:"configuring-swc-parser",level:2},{value:"Configuring Target",id:"configuring-target",level:2},{value:"Decorators",id:"decorators",level:2},{value:"Using SWC Plugins",id:"using-swc-plugins",level:2},{value:"Vite-style <code>import.meta.glob</code>",id:"vite-style-importmetaglob",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tstsx",children:"TS/TSX"}),"\n",(0,r.jsxs)(n.p,{children:["Farm support compiling ",(0,r.jsx)(n.code,{children:"Js/Jsx/Ts/Tsx"})," out of box, and compile ",(0,r.jsx)(n.code,{children:"Jsx/Tsx"})," to React by default."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="./button.tsx"',children:'import Button from "./Button";\n\nfunction ButtonGroup(props: ButtonProps) {\n  return (\n    <div>\n      {props.buttons.map((b) => (\n        <Button>{b}</Button>\n      ))}\n    </div>\n  );\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Farm using SWC to compile scripts, and Farm has set reasonable default configurations for script compilation. Also, you can use ",(0,r.jsx)(n.code,{children:"compilation.script"})," to configure how to compile your script file. see ",(0,r.jsx)(n.a,{href:"/docs/config/compilation-options#script",children:"compilation.script"})," for details."]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-swc-parser",children:"Configuring Swc Parser"}),"\n",(0,r.jsxs)(n.p,{children:["You can configuring the SWC Parser through ",(0,r.jsx)(n.code,{children:"compilation.script.parser"}),". Refer to ",(0,r.jsx)(n.a,{href:"https://swc.rs/docs/configuration/compilation#jscparser",children:"https://swc.rs/docs/configuration/compilation#jscparser"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, if you want to enable decorator, you can set ",(0,r.jsx)(n.code,{children:"compilation.script.parser.esConfig.decorators"}),"(or ",(0,r.jsx)(n.code,{children:"tsConfig.decorators"})," if the module is TS):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  compilation: {\n    script: {\n      // for .js/.jsx files\n      esConfig: {\n        decorators: true,\n      },\n      // for .ts/.tsx files\n      tsConfig: {\n        decorators: true,\n      },\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By default Farm set ",(0,r.jsx)(n.code,{children:"jsx: true"})," for ",(0,r.jsx)(n.code,{children:".jsx|.tsx"})," files. Other field are default to SWC's defaults."]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-target",children:"Configuring Target"}),"\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.code,{children:"compilation.script.target"})," to configure your target env when running your project, Farm set it based on ",(0,r.jsx)(n.a,{href:"/docs/config/compilation-options#output-targetenv",children:(0,r.jsx)(n.code,{children:"output.targetEnv"})}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Farm set ",(0,r.jsx)(n.code,{children:"compilation.script.target"})," automatically based on ",(0,r.jsx)(n.a,{href:"/docs/config/compilation-options#output-targetenv",children:(0,r.jsx)(n.code,{children:"output.targetEnv"})}),". Normally you should not set ",(0,r.jsx)(n.code,{children:"target"})," manually, use ",(0,r.jsx)(n.a,{href:"/docs/config/compilation-options#output-targetenv",children:(0,r.jsx)(n.code,{children:"output.targetEnv"})})," would be enough."]})}),"\n",(0,r.jsxs)(n.p,{children:["This option can be used along with ",(0,r.jsx)(n.code,{children:"compilation.presetEnv"})," to gracefully downgrade your project for old browsers. For example, you can set target to ",(0,r.jsx)(n.code,{children:"ES5"})," and enable ",(0,r.jsx)(n.code,{children:"presetEnv"}),", then your project will be fully downgrade to ES5."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  compilation: {\n    script: {\n      target: \"ES5\",\n    },\n    presetEnv: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Refer to ",(0,r.jsx)(n.a,{href:"/docs/advanced/polyfill",children:"Syntax Downgrade and Polyfill"})," for more about ",(0,r.jsx)(n.code,{children:"presetEnv"})," and ",(0,r.jsx)(n.code,{children:"target"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"decorators",children:"Decorators"}),"\n",(0,r.jsxs)(n.p,{children:["Decorators is disabled by default, you can set ",(0,r.jsx)(n.code,{children:"compilation.script.parser.tsConfig.decorators"})," to ",(0,r.jsx)(n.code,{children:"true"})," to enable decorators."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { defineConfig } from \"@farmfe/core\";\n\nexport default defineConfig({\n  compilation: {\n    script: {\n      parser: {\n        tsConfig: {\n          // support decorators\n          decorators: true,\n        },\n      },\n      // configuring decorators\n      decorators: {\n        legacyDecorator: true,\n        decoratorMetadata: false,\n        decoratorVersion: '2021-12',\n        includes: [\"src/broken.ts\"],\n        excludes: ['node_modules/'],\n      }\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Farm provide a example for supporting decorators, see ",(0,r.jsx)(n.a,{href:"https://github.com/farm-fe/farm/tree/main/examples/decorators",children:"https://github.com/farm-fe/farm/tree/main/examples/decorators"}),"\nBy default, Farm won't transform decorators for modules under ",(0,r.jsx)(n.code,{children:"node_modules"}),", refer to ",(0,r.jsx)(n.a,{href:"/docs/config/compilation-options#scriptdecorators",children:"compilation.script.decorators.excludes"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"using-swc-plugins",children:"Using SWC Plugins"}),"\n",(0,r.jsxs)(n.p,{children:["SWC Plugins can be used directly in Farm, for example, we use ",(0,r.jsx)(n.code,{children:"swc-plugin-vue-jsx"})," to compiling vue jsx in Farm:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:'import { defineConfig } from \'@farmfe/core\';\nimport jsPluginVue from "@farmfe/js-plugin-vue";\n\nexport default defineConfig({\n  compilation: {\n    script: {\n      plugins: [\n        {\n          name: "swc-plugin-vue-jsx",\n          options: {\n            transformOn: true,\n            optimize: true,\n          },\n          filters: {\n            // resolvedPaths: [".+"]\n            moduleTypes: ["tsx", "jsx"],\n          },\n        },\n      ],\n    },\n  },\n  plugins: [jsPluginVue()],\n});\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Refer to ",(0,r.jsx)(n.a,{href:"/docs/using-plugins#using-swc-plugins",children:"Using Plugins"})," for more details."]}),"\n",(0,r.jsxs)(n.h2,{id:"vite-style-importmetaglob",children:["Vite-style ",(0,r.jsx)(n.code,{children:"import.meta.glob"})]}),"\n",(0,r.jsxs)(n.p,{children:["Farm fully support Vite-style ",(0,r.jsx)(n.code,{children:"import.meta.glob"}),", see ",(0,r.jsx)(n.a,{href:"https://vitejs.dev/guide/features.html#glob-import",children:"glob import"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"for example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const modules = import.meta.glob("./dir/*.js");\n'})}),"\n",(0,r.jsx)(n.p,{children:"The above will be transformed into the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'// code produced by Farm\nconst modules = {\n  "./dir/foo.js": () => import("./dir/foo.js"),\n  "./dir/bar.js": () => import("./dir/bar.js"),\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.code,{children:"{ eager: true }"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const modules = import.meta.glob("./dir/*.js", { eager: true });\n'})}),"\n",(0,r.jsx)(n.p,{children:"The above will be transformed into the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'// code produced by Farm\nimport * as __glob__0_0 from "./dir/foo.js";\nimport * as __glob__0_1 from "./dir/bar.js";\nconst modules = {\n  "./dir/foo.js": __glob__0_0,\n  "./dir/bar.js": __glob__0_1,\n};\n'})}),"\n",(0,r.jsx)(n.p,{children:"multiple patterns are supported:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const modules = import.meta.glob(["./dir/*.js", "./another/*.js"]);\n'})}),"\n",(0,r.jsx)(n.p,{children:"negative patterns are also supported:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const modules = import.meta.glob(["./dir/*.js", "!**/bar.js"]);\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'// code produced by Farm\nconst modules = {\n  "./dir/foo.js": () => import("./dir/foo.js"),\n};\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"You should also be aware that all the arguments in the import.meta.glob must be passed as literals. You can NOT use variables or expressions in them."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"import.meta.glob"})," transformed by Farm in compile time, it does not exist in runtime."]}),"\n"]})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5696:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>i});var r=o(959);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);