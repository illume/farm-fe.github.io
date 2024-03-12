"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[5822],{4021:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var t=n(1527),r=n(5696),l=n(2264),o=n(7123),a=n(9988);const i={},c="@farmfe/js-plugin-postcss",u={id:"plugins/official-plugins/js-postcss",title:"@farmfe/js-plugin-postcss",description:"\u652f\u6301 postcss \u7684\u524d\u7f6e\u7f16\u8bd1\u5de5\u4f5c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.x/plugins/official-plugins/js-postcss.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/js-postcss",permalink:"/zh/docs/0.x/plugins/official-plugins/js-postcss",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/plugins/official-plugins/js-postcss.mdx",tags:[],version:"0.x",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/plugin-sass",permalink:"/zh/docs/0.x/plugins/official-plugins/sass"},next:{title:"@farmfe/js-plugin-less",permalink:"/zh/docs/0.x/plugins/official-plugins/js-less"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"postcssLoadConfig",id:"postcssloadconfig",level:3},{value:"filters",id:"filters",level:3},{value:"implementation",id:"implementation",level:3}];function f(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"farmfejs-plugin-postcss",children:"@farmfe/js-plugin-postcss"}),"\n",(0,t.jsxs)(s.p,{children:["\u652f\u6301 ",(0,t.jsx)(s.code,{children:"postcss"})," \u7684\u524d\u7f6e\u7f16\u8bd1\u5de5\u4f5c"]}),"\n",(0,t.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(a.Z,{value:"npm",label:"npm",children:(0,t.jsx)(l.Z,{children:"npm install @farmfe/js-plugin-postcss postcss"})}),(0,t.jsx)(a.Z,{value:"yarn",label:"yarn",children:(0,t.jsx)(l.Z,{children:"yarn add @farmfe/js-plugin-postcss postcss"})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(l.Z,{children:"pnpm add @farmfe/js-plugin-postcss postcss"})})]}),"\n",(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",metastring:"{2,6}",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginPostcss from '@farmfe/js-plugin-postcss';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginPostcss({ /* options */ })\n  ]\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"export type PostcssPluginOptions = {\n  /**\n   * @default undefined\n   * postcss-load-config options. path default to farm.config.js root.\n   */\n  postcssLoadConfig?: {\n    ctx?: postcssLoadConfig.ConfigContext;\n    path?: string;\n    options?: Parameters<typeof postcssLoadConfig>[2];\n  };\n  filters?: {\n    resolvedPaths?: string[];\n    moduleTypes?: string[];\n  };\n  implementation?: string;\n};\n\n"})}),"\n",(0,t.jsx)(s.h3,{id:"postcssloadconfig",children:"postcssLoadConfig"}),"\n",(0,t.jsxs)(s.p,{children:["Farm \u4f7f\u7528 ",(0,t.jsx)(s.code,{children:"postcss-load-config"})," \u6765\u52a0\u8f7d ",(0,t.jsx)(s.code,{children:"postcss"})," \u914d\u7f6e\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(s.code,{children:"postcss-load-config"})," \u7684\u9009\u9879\u3002 \u53c2\u8003",(0,t.jsx)(s.a,{href:"https://github.com/postcss/postcss-load-config",children:"postcss-load-config"}),"\u3002"]}),"\n",(0,t.jsx)(s.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"import path from 'node:path';\nimport { UserConfig } from '@farmfe/core';\nimport farmJsPluginPostcss from '@farmfe/js-plugin-postcss';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginPostcss({\n      postcssLoadConfig: {\n        // load config from client/postcss.config.js\n        path: path.join(process.cwd(), 'client')\n      }\n    })\n  ]\n}\n\nexport default config;\n"})}),"\n",(0,t.jsx)(s.h3,{id:"filters",children:"filters"}),"\n",(0,t.jsxs)(s.p,{children:["\u54ea\u4e9b\u6587\u4ef6\u5e94\u8be5\u7531",(0,t.jsx)(s.code,{children:"postcss"}),"\u5904\u7406\u3002 \u9ed8\u8ba4\u4e3a ",(0,t.jsx)(s.code,{children:"{ moduleTypes: ['css'] }"}),"\u3002"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"resolvedPaths"}),": \u4ec5\u5904\u7406\u8fd9\u4e9b\u8def\u5f84\u4e0b\u7684\u6587\u4ef6\u3002 \u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"moduleTypes"}),"\uff1a\u4ec5\u5904\u7406\u5177\u6709\u8fd9\u4e9b\u6a21\u5757\u7c7b\u578b\u7684\u6587\u4ef6\u3002 \u8bf7\u6ce8\u610f\uff0cless/sass \u6587\u4ef6\u5e94\u9996\u5148\u7531 ",(0,t.jsx)(s.code,{children:"@farmfe/js-plugin-less"}),"/",(0,t.jsx)(s.code,{children:"@farmfe/plugin-sass"})," \u5904\u7406\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"resolvedPaths"})," \u548c ",(0,t.jsx)(s.code,{children:"moduleTypes"})," \u53d6\u5e76\u96c6\u3002"]}),"\n",(0,t.jsx)(s.p,{children:"\u4f8b\u5b50:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginPostcss from '@farmfe/js-plugin-postcss';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginPostcss({\n      filters: {\n        // all files end with .custom-css will be processed\n        resolvedPaths: ['\\\\.custom-css$'],\n        moduleTypes: ['css']\n      }\n    })\n  ]\n}\n\nexport default config;\n"})}),"\n",(0,t.jsx)(s.h3,{id:"implementation",children:"implementation"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"postcss"})," \u7684 ",(0,t.jsx)(s.code,{children:"implementation"})," \u5305\u540d\u79f0\u3002 \u9ed8\u8ba4\u4e3a ",(0,t.jsx)(s.code,{children:"postcss"}),"\u3002"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},9988:(e,s,n)=>{n.d(s,{Z:()=>o});n(959);var t=n(5341);const r={tabItem:"tabItem_MFY6"};var l=n(1527);function o(e){let{children:s,hidden:n,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,o),hidden:n,children:s})}},7123:(e,s,n)=>{n.d(s,{Z:()=>w});var t=n(959),r=n(5341),l=n(5739),o=n(8903),a=n(6206),i=n(6404),c=n(2108),u=n(2685);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:s,children:n}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:n,attributes:t,default:r}}=e;return{value:s,label:n,attributes:t,default:r}}))}(n);return function(e){const s=(0,c.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function f(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function h(e){let{queryString:s=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,i._X)(l),(0,t.useCallback)((e=>{if(!l)return;const s=new URLSearchParams(r.location.search);s.set(l,e),r.replace({...r.location,search:s.toString()})}),[l,r])]}function m(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,l=p(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!f({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:l}))),[c,d]=h({queryString:n,groupId:r}),[m,g]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,l]=(0,u.Nk)(n);return[r,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),j=(()=>{const e=c??m;return f({value:e,tabValues:l})?e:null})();(0,a.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=n(8302);const j={tabList:"tabList_d80c",tabItem:"tabItem_jy3j"};var x=n(1527);function b(e){let{className:s,block:n,selectedValue:t,selectValue:o,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const s=e.currentTarget,n=i.indexOf(s),r=a[n].value;r!==t&&(c(s),o(r))},d=e=>{let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;s=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;s=i[n]??i[i.length-1];break}}s?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},s),children:a.map((e=>{let{value:s,label:n,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.Z)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":t===s}),children:n??s},s)}))})}function v(e){let{lazy:s,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function y(e){const s=m(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(b,{...e,...s}),(0,x.jsx)(v,{...e,...s})]})}function w(e){const s=(0,g.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(s))}}}]);