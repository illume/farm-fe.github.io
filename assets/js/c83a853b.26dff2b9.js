"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[4384],{110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=r(1527),a=r(5696),l=r(2264),s=r(7123),o=r(9988);const i={},c="Svelte",u={id:"frameworks/svelte",title:"Svelte",description:"Create a Svelte project based on Farm.",source:"@site/docs/frameworks/svelte.mdx",sourceDirName:"frameworks",slug:"/frameworks/svelte",permalink:"/docs/frameworks/svelte",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/frameworks/svelte.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Solid",permalink:"/docs/frameworks/solid"},next:{title:"Migrate From Vite",permalink:"/docs/migration/from-vite"}},d={},m=[{value:"Creating a Svelte Project",id:"creating-a-svelte-project",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"svelte",children:"Svelte"}),"\n",(0,n.jsxs)(t.p,{children:["Create a ",(0,n.jsx)(t.code,{children:"Svelte"})," project based on ",(0,n.jsx)(t.code,{children:"Farm"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Farm"})," provides two approaches to support creating ",(0,n.jsx)(t.code,{children:"Svelte"})," projects:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Use the ",(0,n.jsx)(t.code,{children:"create-farm"})," scaffold to create a scaffold project"]}),"\n",(0,n.jsxs)(t.li,{children:["You can manually create a ",(0,n.jsx)(t.code,{children:"Svelte"})," project following the current documentation"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"creating-a-svelte-project",children:"Creating a Svelte Project"}),"\n",(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(o.Z,{value:"npm",label:"npm",children:(0,n.jsx)(l.Z,{children:"npm create farm@latest"})}),(0,n.jsx)(o.Z,{value:"yarn",label:"yarn",children:(0,n.jsx)(l.Z,{children:"yarn create farm"})}),(0,n.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(l.Z,{children:"pnpm create farm"})})]})}),"\n",(0,n.jsxs)(t.p,{children:["Select ",(0,n.jsx)(t.code,{children:"Svelte"})," template in ",(0,n.jsx)(t.code,{children:"Select Framework"})]}),"\n",(0,n.jsx)(t.admonition,{title:"Svelte",type:"warning",children:(0,n.jsxs)(t.p,{children:["For ",(0,n.jsx)(t.code,{children:"Svelte"})," support, ",(0,n.jsx)(t.code,{children:"Farm"})," recommends using ",(0,n.jsx)(t.code,{children:"Vite"})," plugins."]})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="farm.config.ts"',children:"import { defineConfig } from '@farmfe/core'\nimport { svelte } from '@sveltejs/vite-plugin-svelte'\n\nexport default defineConfig({\n  vitePlugins: [svelte()],\n})\n\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="svelte.config.ts"',children:"import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'\n\nexport default {\n  preprocess: vitePreprocess(),\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For more example details: ",(0,n.jsx)(t.a,{href:"https://github.com/farm-fe/farm/tree/main/examples/vite-adapter-svelte",children:"Svelte Example"})]})]})}function f(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},9988:(e,t,r)=>{r.d(t,{Z:()=>s});r(959);var n=r(5341);const a={tabItem:"tabItem_MFY6"};var l=r(1527);function s(e){let{children:t,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:r,children:t})}},7123:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(959),a=r(5341),l=r(5739),s=r(8903),o=r(6206),i=r(6404),c=r(2108),u=r(2685);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=m(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,d]=f({queryString:r,groupId:a}),[h,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),b=(()=>{const e=c??h;return p({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=r(8302);const b={tabList:"tabList_d80c",tabItem:"tabItem_jy3j"};var j=r(1527);function x(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),a=o[r].value;a!==n&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=h(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(x,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function y(e){const t=(0,v.Z)();return(0,j.jsx)(w,{...e,children:d(e.children)},String(t))}}}]);