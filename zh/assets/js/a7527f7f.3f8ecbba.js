"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[2044],{8532:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var n=t(1527),a=t(5696),l=t(2264),s=t(7123),i=t(9988);const o={},c="Svelte",u={id:"frameworks/svelte",title:"Svelte",description:"\u57fa\u4e8e Farm \u521b\u5efa\u4e00\u4e2a Svelte \u9879\u76ee\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/frameworks/svelte.mdx",sourceDirName:"frameworks",slug:"/frameworks/svelte",permalink:"/zh/docs/frameworks/svelte",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/frameworks/svelte.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Solid",permalink:"/zh/docs/frameworks/solid"},next:{title:"\u4ece Vite \u8fc1\u79fb",permalink:"/zh/docs/migration/from-vite"}},d={},h=[{value:"\u521b\u5efa Svelte \u9879\u76ee",id:"\u521b\u5efa-svelte-\u9879\u76ee",level:3}];function m(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"svelte",children:"Svelte"}),"\n",(0,n.jsxs)(r.p,{children:["\u57fa\u4e8e ",(0,n.jsx)(r.code,{children:"Farm"})," \u521b\u5efa\u4e00\u4e2a ",(0,n.jsx)(r.code,{children:"Svelte"})," \u9879\u76ee\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Farm"})," \u63d0\u4f9b\u4e24\u79cd\u65b9\u6848\u6765\u652f\u6301\u521b\u5efa ",(0,n.jsx)(r.code,{children:"Svelte"})," \u9879\u76ee:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\u4f7f\u7528 ",(0,n.jsx)(r.code,{children:"create-farm"})," \u811a\u624b\u67b6\u521b\u5efa\u811a\u624b\u67b6\u9879\u76ee"]}),"\n",(0,n.jsxs)(r.li,{children:["\u4f60\u53ef\u4ee5\u6839\u636e\u5f53\u524d\u6587\u6863\u624b\u52a8\u521b\u5efa\u4e00\u4e2a ",(0,n.jsx)(r.code,{children:"Svelte"})," \u9879\u76ee"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"\u521b\u5efa-svelte-\u9879\u76ee",children:"\u521b\u5efa Svelte \u9879\u76ee"}),"\n",(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(i.Z,{value:"npm",label:"npm",children:(0,n.jsx)(l.Z,{children:"npm create farm@latest"})}),(0,n.jsx)(i.Z,{value:"yarn",label:"yarn",children:(0,n.jsx)(l.Z,{children:"yarn create farm"})}),(0,n.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(l.Z,{children:"pnpm create farm"})})]})}),"\n",(0,n.jsxs)(r.p,{children:["\u5728 ",(0,n.jsx)(r.code,{children:"Select Framework"})," \u4e2d\u9009\u62e9 ",(0,n.jsx)(r.code,{children:"Svelte"})," \u6a21\u7248"]}),"\n",(0,n.jsx)(r.admonition,{title:"Svelte",type:"warning",children:(0,n.jsxs)(r.p,{children:["\u5bf9\u4e8e ",(0,n.jsx)(r.code,{children:"Svelte"})," \u7684\u652f\u6301, ",(0,n.jsx)(r.code,{children:"Farm"})," \u63a8\u8350\u4f7f\u7528 ",(0,n.jsx)(r.code,{children:"Vite"})," \u63d2\u4ef6\u3002"]})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",metastring:'title="farm.config.ts"',children:"import { defineConfig } from '@farmfe/core'\nimport { svelte } from '@sveltejs/vite-plugin-svelte'\n\nexport default defineConfig({\n  vitePlugins: [svelte()],\n})\n\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",metastring:'title="svelte.config.ts"',children:"import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'\n\nexport default {\n  preprocess: vitePreprocess(),\n}\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u5982\u82e5\u60f3\u67e5\u770b\u793a\u4f8b\u8be6\u60c5: ",(0,n.jsx)(r.a,{href:"https://github.com/farm-fe/farm/tree/main/examples/vite-adapter-svelte",children:"Svelte \u793a\u4f8b"})]})]})}function f(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},9988:(e,r,t)=>{t.d(r,{Z:()=>s});t(959);var n=t(5341);const a={tabItem:"tabItem_MFY6"};var l=t(1527);function s(e){let{children:r,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:t,children:r})}},7123:(e,r,t)=>{t.d(r,{Z:()=>k});var n=t(959),a=t(5341),l=t(5739),s=t(8903),i=t(6206),o=t(6404),c=t(2108),u=t(2685);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const a=(0,s.k6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(a.location.search);r.set(l,e),a.replace({...a.location,search:r.toString()})}),[l,a])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,l=h(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:l}))),[c,d]=f({queryString:t,groupId:a}),[p,v]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,l]=(0,u.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),b=(()=>{const e=c??p;return m({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=t(8302);const b={tabList:"tabList_d80c",tabItem:"tabItem_jy3j"};var x=t(1527);function j(e){let{className:r,block:t,selectedValue:n,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const r=e.currentTarget,t=o.indexOf(r),a=i[t].value;a!==n&&(c(r),s(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function w(e){const r=p(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...e,...r}),(0,x.jsx)(g,{...e,...r})]})}function k(e){const r=(0,v.Z)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(r))}}}]);