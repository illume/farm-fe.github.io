"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[2818],{3048:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>v,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=r(1527),o=r(5696);const s={},c=void 0,d={id:"config/environment-variable",title:"environment-variable",description:"Environment variable \u73af\u5883\u53d8\u91cf",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.x/config/environment-variable.md",sourceDirName:"config",slug:"/config/environment-variable",permalink:"/zh/docs/0.x/config/environment-variable",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/config/environment-variable.md",tags:[],version:"0.x",frontMatter:{},sidebar:"configSidebar",previous:{title:"dev-server",permalink:"/zh/docs/0.x/config/dev-server"},next:{title:"plugins-options",permalink:"/zh/docs/0.x/config/plugins-options"}},t={},l=[{value:"Environment variable \u73af\u5883\u53d8\u91cf",id:"environment-variable-\u73af\u5883\u53d8\u91cf",level:2},{value:"<code>.env</code> \u6587\u4ef6",id:"env-\u6587\u4ef6",level:3},{value:"envPrefix env \u53d8\u91cf\u524d\u7f00",id:"envprefix-env-\u53d8\u91cf\u524d\u7f00",level:3}];function a(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"environment-variable-\u73af\u5883\u53d8\u91cf",children:"Environment variable \u73af\u5883\u53d8\u91cf"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Farm"})," \u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"process.env.NODE_ENV"})," \u6765\u533a\u5206\u5f00\u53d1\u548c\u751f\u4ea7\u73af\u5883\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0d\u540c\u73af\u5883\u4e2d, \u73af\u5883\u53d8\u91cf\u4f1a\u88ab\u9759\u6001\u66ff\u6362, \u6240\u4ee5\u8bf7\u4f7f\u7528\u9759\u6001\u7684\u5e38\u91cf\u6765\u8868\u793a\u73af\u5883\u53d8\u91cf, \u800c\u4e0d\u662f\u52a8\u6001\u7684\u8868\u8fbe\u5f0f."}),"\n",(0,i.jsxs)(n.h3,{id:"env-\u6587\u4ef6",children:[(0,i.jsx)(n.code,{children:".env"})," \u6587\u4ef6"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Farm"})," \u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"dotenv"})," \u6765\u52a0\u8f7d\u60a8\u7684\u989d\u5916\u7684\u73af\u5883\u53d8\u91cf, \u4f8b\u5982 ",(0,i.jsx)(n.code,{children:".env"})," \u6587\u4ef6."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// .env\nFARM_APP_SECRET=secret\nFarm_APP_PASSWORD=password\nAPP_VERSION=1.0.0\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Farm"})," \u4f1a\u901a\u8fc7 dotenv \u52a0\u8f7d ",(0,i.jsx)(n.code,{children:".env"})," \u6587\u4ef6, \u5e76\u4e14\u5c06\u5176\u52a0\u8f7d\u5230 ",(0,i.jsx)(n.code,{children:"process.env"})," \u4e2d \u6700\u7ec8\u5728 define \u4e2d\u6ce8\u5165."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u4fdd\u8bc1\u5ba2\u6237\u7aef\u5b89\u5168, \u9632\u6b62\u5c06\u5f53\u524d\u7cfb\u7edf\u4e2d\u7684\u73af\u5883\u53d8\u91cf\u66b4\u9732\u7ed9\u5ba2\u6237\u7aef ",(0,i.jsx)(n.code,{children:"Farm"})," \u53ea\u4f1a\u8bc6\u522b\u4ee5 ",(0,i.jsx)(n.code,{children:"FARM_"})," \u5f00\u5934\u548c\u4e00\u4e9b\u91cd\u8981\u7684\u73af\u5883\u53d8\u91cf."]})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Farm"})," \u901a\u8fc7 dotenv-expand \u6765\u62d3\u5c55\u73af\u5883\u53d8\u91cf"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u81ea\u5b9a\u4e49 env \u53d8\u91cf\u7684\u524d\u7f00\uff0c\u53ef\u4ee5\u914d\u7f6e ",(0,i.jsx)(n.code,{children:"envPrefix"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"envprefix-env-\u53d8\u91cf\u524d\u7f00",children:"envPrefix env \u53d8\u91cf\u524d\u7f00"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u9ed8\u8ba4\u503c"}),": ",(0,i.jsx)(n.code,{children:"FARM_"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7\u914d\u7f6e ",(0,i.jsx)(n.code,{children:"envPrefix"})," \u6765\u81ea\u5b9a\u4e49 ",(0,i.jsx)(n.code,{children:"env"})," \u53d8\u91cf\u7684\u524d\u7f00\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts"})})]})}function v(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},5696:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var i=r(959);const o={},s=i.createContext(o);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);