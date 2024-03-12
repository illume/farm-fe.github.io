"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[2906],{863:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>t});var i=s(1527),c=s(5696);const r={},d="\u5c40\u90e8\u6253\u5305",l={id:"advanced/partial-bundling",title:"\u5c40\u90e8\u6253\u5305",description:"\u5c40\u90e8\u6253\u5305\uff08Partial Bundling\uff09\u662f Farm \u7528\u6765\u6253\u5305\u6a21\u5757\u7684\u7b56\u7565\uff0c\u7c7b\u4f3c\u4e8e\u5176\u4ed6\u6253\u5305\u5de5\u5177\uff0c\u4f46 Farm \u7684 \u5c40\u90e8\u6253\u5305 \u76ee\u6807\u4e0d\u540c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/advanced/partial-bundling.md",sourceDirName:"advanced",slug:"/advanced/partial-bundling",permalink:"/zh/docs/advanced/partial-bundling",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/advanced/partial-bundling.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u670d\u52a1\u7aef\u6e32\u67d3 (SSR)",permalink:"/zh/docs/advanced/ssr"},next:{title:"Tree Shake",permalink:"/zh/docs/advanced/tree-shake"}},o={},t=[{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u5c40\u90e8\u6253\u5305\u89c4\u5219",id:"\u5c40\u90e8\u6253\u5305\u89c4\u5219",level:2},{value:"\u914d\u7f6e\u5c40\u90e8\u6253\u5305",id:"\u914d\u7f6e\u5c40\u90e8\u6253\u5305",level:2},{value:"\u4e24\u79cd\u914d\u7f6e\u65b9\u6cd5",id:"\u4e24\u79cd\u914d\u7f6e\u65b9\u6cd5",level:3},{value:"\u5c40\u90e8\u6253\u5305\u9009\u9879",id:"\u5c40\u90e8\u6253\u5305\u9009\u9879",level:3},{value:"\u6a21\u5757\u5206\u7ec4",id:"\u6a21\u5757\u5206\u7ec4",level:3},{value:"\u4f7f\u7528 <code>enforceResources</code>",id:"\u4f7f\u7528-enforceresources",level:3},{value:"\u914d\u7f6e <code>immutable modules</code>",id:"\u914d\u7f6e-immutable-modules",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5c06\u540c\u4e00\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u5206\u7ec4",id:"\u5c06\u540c\u4e00\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u5206\u7ec4",level:3},{value:"\u914d\u7f6e\u6253\u5305\u7684\u6570\u91cf\u548c\u5927\u5c0f",id:"\u914d\u7f6e\u6253\u5305\u7684\u6570\u91cf\u548c\u5927\u5c0f",level:3},{value:"\u5c06\u6240\u6709\u6a21\u5757\u6253\u5305\u5728\u4e00\u8d77",id:"\u5c06\u6240\u6709\u6a21\u5757\u6253\u5305\u5728\u4e00\u8d77",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u5c40\u90e8\u6253\u5305",children:"\u5c40\u90e8\u6253\u5305"}),"\n",(0,i.jsxs)(n.p,{children:["\u5c40\u90e8\u6253\u5305\uff08",(0,i.jsx)(n.code,{children:"Partial Bundling"}),"\uff09\u662f Farm \u7528\u6765\u6253\u5305\u6a21\u5757\u7684\u7b56\u7565\uff0c\u7c7b\u4f3c\u4e8e\u5176\u4ed6\u6253\u5305\u5de5\u5177\uff0c\u4f46 Farm \u7684 ",(0,i.jsx)(n.code,{children:"\u5c40\u90e8\u6253\u5305"})," \u76ee\u6807\u4e0d\u540c\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0e\u5176\u5b83\u6253\u5305\u5de5\u5177\u4e0d\u540c\uff0cFarm\u4e0d\u4f1a\u5c1d\u8bd5\u5c06\u6240\u6709\u5185\u5bb9\u6253\u5305\u5728\u4e00\u8d77\uff0c\u800c\u662f\u4f7f\u7528\u50cf ",(0,i.jsx)(n.code,{children:"splitChunks"})," \u4e4b\u7c7b\u7684\u4f18\u5316\u7b56\u7565\u5c06\u5176\u62c6\u5206\u51fa\u6765\uff0c\u76f8\u53cd\uff0cFarm\u4f1a\u5c06\u9879\u76ee\u76f4\u63a5\u6346\u6253\u5305\u6210\u591a\u4e2a\u8f93\u51fa\u6587\u4ef6\u3002\u4f8b\u5982\uff0c\u5982\u679c\u9700\u8981\u6570\u767e\u4e2a\u6a21\u5757\u6765\u542f\u52a8\u4e00\u4e2ahtml\u9875\u9762\uff0cFarm\u5c06\u5c1d\u8bd5\u5c06\u5b83\u4eec\u76f4\u63a5\u6253\u5305\u621020\u523030\u4e2a\u8f93\u51fa\u6587\u4ef6\u3002Farm\u5c06\u8fd9\u79cd\u884c\u4e3a\u79f0\u4e3a",(0,i.jsx)(n.code,{children:"\u5c40\u90e8\u6253\u5305"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"Farm\u5c40\u90e8\u6253\u5305\u7684\u76ee\u6807\u662f:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u51cf\u5c11\u8bf7\u6c42\u6570\u91cf\u548c\u8bf7\u6c42\u5c42\u6b21"}),": \u5c06\u6570\u767e\u4e0a\u5343\u4e2a\u6a21\u5757\u8bf7\u6c42\u51cf\u5c11\u523020-30\u4e2a\u8bf7\u6c42\uff0c\u907f\u514d\u7531\u4e8e\u4f9d\u8d56\u5c42\u6b21\u7ed3\u6784\u800c\u9010\u4e2a\u52a0\u8f7d\u6a21\u5757\uff0c\u4ece\u800c\u52a0\u5feb\u8d44\u6e90\u7684\u52a0\u8f7d\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u63d0\u9ad8\u7f13\u5b58\u547d\u4e2d\u7387"}),": \u5f53\u6a21\u5757\u53d1\u751f\u66f4\u6539\u65f6\uff0c\u786e\u4fdd\u53ea\u6709\u5c11\u6570\u8f93\u51fa\u6587\u4ef6\u53d7\u5230\u5f71\u54cd\uff0c\u56e0\u6b64\u53ef\u4ee5\u4e3a\u9879\u76ee\u63d0\u9ad8\u7f13\u5b58\u547d\u4e2d\u7387\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8e\u4f20\u7edf\u6253\u5305\u5de5\u5177\uff0c\u6211\u4eec\u53ef\u80fd\u5f88\u96be\u901a\u8fc7\u590d\u6742\u7684 ",(0,i.jsx)(n.code,{children:"splitChunks"})," \u6216 ",(0,i.jsx)(n.code,{children:"manualChunks"})," \u914d\u7f6e\u6765\u5b9e\u73b0\u4e0a\u8ff0\u76ee\u6807\uff0c\u4f46\u662f Farm \u539f\u751f\u652f\u6301",(0,i.jsx)(n.code,{children:"\u5c40\u90e8\u6253\u5305"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u9ed8\u8ba4\u7684\u6253\u5305\u7b56\u7565\u662f\u4e3a\u6d4f\u89c8\u5668\u8bbe\u8ba1\u7684\uff0c\u4f46\u5b83\u4e5f\u9002\u7528\u4e8e Node.js\u3002 \u5982\u679c\u60f3\u8981\u66f4\u6539 Node.js \u7684\u6253\u5305\u7b56\u7565\uff0c\u8bf7\u5c1d\u8bd5",(0,i.jsx)(n.a,{href:"#configuring-partial-bundling",children:"\u914d\u7f6e\u5c40\u90e8\u6253\u5305"}),"\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u8bf7\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"https://github.com/farm-fe/rfcs/blob/main/rfcs/003-partial-bundling/rfc.md",children:"RFC-003 Partial Bundling"})," \u5c40\u90e8\u6253\u5305\u4ee5\u83b7\u53d6\u66f4\u591a\u6280\u672f\u7ec6\u8282\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u52a8\u673a",children:"\u52a8\u673a"}),"\n",(0,i.jsx)(n.p,{children:"\u76ee\u524d\uff0cWeb\u6784\u5efa\u5de5\u5177\u5904\u7406\u6a21\u5757\u7684\u4e3b\u8981\u65b9\u6cd5\u6709\u4e24\u79cd\uff1a\u5b8c\u5168\u6253\u5305\u6216\u539f\u751fESM\u3002\u4f46\u5b83\u4eec\u90fd\u6709\u7f3a\u70b9\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5bf9\u4e8e\u5b8c\u5168\u6253\u5305\uff0c\u6253\u5305\u5de5\u5177\u65e8\u5728\u5c06\u6240\u6709\u5185\u5bb9\u6253\u5305\u5728\u4e00\u8d77\uff0c\u7136\u540e\u62c6\u5206\u51fa\u6765\u8fdb\u884c\u4f18\u5316\uff0c\u4f46\u62c6\u5206\u901a\u5e38\u96be\u4ee5\u914d\u7f6e\uff0c\u624b\u52a8\u5e73\u8861\u8d44\u6e90\u52a0\u8f7d\u6027\u80fd\u548c\u7f13\u5b58\u547d\u4e2d\u7387\u5f88\u96be\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5bf9\u4e8e\u539f\u751fESM\uff0c\u6bcf\u4e2a\u6a21\u5757\u90fd\u53ef\u4ee5\u5355\u72ec\u7f16\u8bd1\u548c\u7f13\u5b58\uff0c\u4f46\u5f53\u6709\u6570\u767e\u4e2a\u6a21\u5757\u8bf7\u6c42\u65f6\uff0c\u4f1a\u4e25\u91cd\u5f71\u54cd\u52a0\u8f7d\u6027\u80fd\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u6211\u4e00\u76f4\u5728\u601d\u8003\u662f\u5426\u6709\u4e00\u79cd\u7b56\u7565\u53ef\u4ee5\u907f\u514d\u8fd9\u4e24\u79cd\u6781\u7aef\u60c5\u51b5 - \u4e5f\u8bb8\u6211\u4eec\u53ef\u4ee5\u8fdb\u884c\u5c40\u90e8\u6253\u5305\uff1f\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5c06\u9879\u76ee\u6253\u5305\u6210\u51e0\u4e2a\u6709\u9650\u3001\u5927\u5c0f\u5e73\u8861\u7684\u8d44\u6e90\uff0c\u5e76\u4e14\u81ea\u52a8\u8fdb\u884c\u3002\u6211\u5c06\u8fd9\u79cd\u601d\u8003\u547d\u540d\u4e3a",(0,i.jsx)(n.code,{children:"\u6a21\u5757\u5408\u5e76"})," \uff08 ",(0,i.jsx)(n.code,{children:"Module Merging"})," \uff09- \u5728\u5168\u91cf\u6253\u5305\u548c\u975e\u6253\u5305\u4e4b\u95f4\u627e\u5230\u5e73\u8861\uff0c\u53ea\u6253\u5305\u51e0\u4e2a\u76f8\u5173\u7684\u6a21\u5757\u4ee5\u63d0\u9ad8\u52a0\u8f7d\u6027\u80fd\uff0c\u540c\u65f6\u4e0d\u5931\u53bb\u7f13\u5b58\u9897\u7c92\u5ea6\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u540e\u6765\uff0c\u6211\u5c06",(0,i.jsx)(n.code,{children:"\u6a21\u5757\u5408\u5e76"}),"\u66f4\u540d\u4e3a",(0,i.jsx)(n.code,{children:"\u5c40\u90e8\u6253\u5305"}),"\uff0c\u56e0\u4e3a\u6211\u8ba4\u4e3a",(0,i.jsx)(n.code,{children:"\u5c40\u90e8\u6253\u5305"}),"\u66f4\u80fd\u51c6\u786e\u5730\u8868\u8fbe\u6211\u7684\u60f3\u6cd5\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5c40\u90e8\u6253\u5305\u89c4\u5219",children:"\u5c40\u90e8\u6253\u5305\u89c4\u5219"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5728\u8fd9\u4e00\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u793a\u4f8b\u4ecb\u7ecd",(0,i.jsx)(n.code,{children:"\u5c40\u90e8\u6253\u5305"}),"\u7684\u57fa\u672c\u89c4\u5219\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u57fa\u672c\u7684React\u9879\u76ee\u793a\u4f8b\u3002\u5bf9\u4e8e\u4e00\u4e2a\u57fa\u672c\u7684React\u9879\u76ee\uff0c\u6211\u4eec\u53ea\u5728\u5165\u53e3\u6587\u4ef6\u4e2d\u5bfc\u5165react\u548creact-dom\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="index.tsx"',children:"import React from 'react';\nimport { createRoot } from 'react-dom/client';\nimport './index.scss';\n\nconst container = document.querySelector('#root');\nconst root = createRoot(container);\n\nroot.render(\n  <>\n    <div>Index page</div>\n  </>\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6253\u5305\u7ed3\u679c\u5c06\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"./dist/\n\u251c\u2500\u2500 index_9c07.49b83356.js      # contains react-dom\n\u251c\u2500\u2500 index_a35f.0ac21082.js      # contains ./index.tsx\n\u251c\u2500\u2500 index_b7e0.7ab9ca2d.js      # contains react and its dependencies\n\u251c\u2500\u2500 index_ce26.7f833381.css     $ contains ./index.scss\n\u2514\u2500\u2500 index.html                  # contains ./index.html\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm\u4f1a\u5c06\u4f60\u7684\u9879\u76ee\u6253\u5305\u62105\u4e2a\u6587\u4ef6\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["2\u4e2ajs\u6587\u4ef6\u6765\u81ea ",(0,i.jsx)(n.code,{children:"node_modules"})," \uff0c\u5305\u542b ",(0,i.jsx)(n.code,{children:"react"})," \u3001 ",(0,i.jsx)(n.code,{children:"react-dom"})," \u5176\u4f9d\u8d56\u9879\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["1\u4e2ajs\u6587\u4ef6\u6765\u81ea ",(0,i.jsx)(n.code,{children:"./index.tsx"})]}),"\n",(0,i.jsxs)(n.li,{children:["1\u4e2acss\u6587\u4ef6\u6765\u81ea ",(0,i.jsx)(n.code,{children:"./index.scss"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:["1\u4e2ahtml\u6587\u4ef6\u6765\u81ea ",(0,i.jsx)(n.code,{children:"./index.html"}),";"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Farm\u4f7f\u7528\u4ee5\u4e0b\u89c4\u5219\u6765\u83b7\u5f97\u4e0a\u8ff0\u7ed3\u679c\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u53ef\u53d8\u548c\u4e0d\u53ef\u53d8\u6a21\u5757\u5e94\u59cb\u7ec8\u4f4d\u4e8e\u4e0d\u540c\u7684\u8f93\u51fa\u6587\u4ef6\u4e2d"}),": \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm \u5c06 ",(0,i.jsx)(n.code,{children:"node_modules"})," \u4e0b\u7684\u6240\u6709\u6a21\u5757\u89c6\u4e3a\u4e0d\u53ef\u53d8\u7684\uff0c\u5426\u5219\u5b83\u4eec\u662f\u53ef\u53d8\u7684\u3002\u56e0\u6b64  ",(0,i.jsx)(n.code,{children:"./index.tsx"})," \u4f4d\u4e8e\u5355\u72ec\u7684\u6587\u4ef6\u4e2d\uff0c\u56e0\u4e3a\u5b83\u662f\u4e00\u4e2a\u53ef\u53d8\u6a21\u5757\uff0c\u56e0\u6b64\u5b83\u6c38\u8fdc\u4e0d\u4f1a\u4e0e ",(0,i.jsx)(n.code,{children:"react"})," \u548c ",(0,i.jsx)(n.code,{children:"react-dom"})," \u4f4d\u4e8e\u540c\u4e00\u8f93\u51fa\u6587\u4ef6\u4e2d\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u4e0d\u540c\u7c7b\u578b\u7684\u6a21\u5757\u5e94\u59cb\u7ec8\u4f4d\u4e8e\u4e0d\u540c\u7684\u8f93\u51fa\u6587\u4ef6\u4e2d"}),": \u56e0\u6b64 ",(0,i.jsx)(n.code,{children:"./index.scss"})," \u4f4d\u4e8e\u5355\u72ec\u7684\u6587\u4ef6\u4e2d\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u540c\u4e00\u5305\u4e2d\u7684\u6a21\u5757\u5e94\u4f4d\u4e8e\u540c\u4e00\u8f93\u51fa\u6587\u4ef6\u4e2d"}),": \u56e0\u6b64\uff0c\u6240\u6709 ",(0,i.jsx)(n.code,{children:"react"})," \u6a21\u5757\u59cb\u7ec8\u4f4d\u4e8e\u540c\u4e00\u8f93\u51fa\u6587\u4ef6\u4e2d\uff0c ",(0,i.jsx)(n.code,{children:"react-dom"})," \u4e5f\u662f\u5982\u6b64\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8d44\u6e90\u52a0\u8f7d\u7684\u76ee\u6807\u5e76\u53d1\u8bf7\u6c42\u5e94\u9ed8\u8ba4\u572820-30\u4e4b\u95f4"}),": \u56e0\u6b64\u67093\u4e2ajs\u8f93\u51fa\u6587\u4ef6\uff0c\u800c\u4e0d\u662f1\u4e2ajs\u8f93\u51fa\u6587\u4ef6\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8f93\u51fa\u6587\u4ef6\u5e94\u5177\u6709\u76f8\u4f3c\u7684\u5927\u5c0f\uff0c\u6700\u5c0f\u8d44\u6e90\u5927\u5c0f\u5e94\u9ed8\u8ba4\u5927\u4e8e20KB"}),": \u56e0\u4e3a ",(0,i.jsx)(n.code,{children:"react-dom"})," \u662f\u6700\u5927\u7684\uff0c\u8d85\u8fc7100KB\uff0c\u6240\u4ee5\u5b83\u4f4d\u4e8e\u5355\u72ec\u7684\u6587\u4ef6\u4e2d\uff0c\u800c ",(0,i.jsx)(n.code,{children:"react"})," \u53ca\u5176\u4f9d\u8d56\u9879\u5c0f\u4e8e20KB\uff0c\u56e0\u6b64\u88ab\u5408\u5e76\u5230\u540c\u4e00\u8f93\u51fa\u6587\u4ef6\u4e2d\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u719f\u6089\u4e86",(0,i.jsx)(n.code,{children:"\u5c40\u90e8\u6253\u5305"}),"\u7684\u57fa\u672c\u89c4\u5219\uff0c\u5982\u679c\u9047\u5230\u5c40\u90e8\u6253\u5305\u95ee\u9898\uff0c\u8bf7\u4f7f\u7528\u4e0a\u8ff0\u89c4\u5219\u8c03\u8bd5\u60a8\u7684\u9879\u76ee\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e\u5c40\u90e8\u6253\u5305\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u914d\u7f6e\u5c40\u90e8\u6253\u5305",children:"\u914d\u7f6e\u5c40\u90e8\u6253\u5305"}),"\n",(0,i.jsx)(n.h3,{id:"\u4e24\u79cd\u914d\u7f6e\u65b9\u6cd5",children:"\u4e24\u79cd\u914d\u7f6e\u65b9\u6cd5"}),"\n",(0,i.jsx)(n.p,{children:"\u6709\u4e24\u79cd\u4e0d\u540c\u7684\u65b9\u5f0f\u6765\u63a7\u5236\u6253\u5305\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"groups"})}),": \u544a\u8bc9Farm\u60a8\u5e0c\u671b\u5c06\u8fd9\u4e9b\u6a21\u5757\u5c3d\u53ef\u80fd\u5730\u6253\u5305\u5728\u4e00\u8d77\uff0c\u4f46\u7531\u4e8eFarm\u7684\u4f18\u5316\u7b56\u7565\uff0c\u8fd9\u5e76\u4e0d\u662f\u5f3a\u5236\u6267\u884c\u7684\u3002\u8bf7\u53c2\u9605",(0,i.jsx)(n.a,{href:"#%E6%A8%A1%E5%9D%97%E5%88%86%E7%BB%84",children:"\u6a21\u5757\u5206\u7ec4"}),"\u4ee5\u4e86\u89e3\u6b64\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"enforceResources"})}),": \u544a\u8bc9Farm\u60a8\u5e0c\u671b\u8fd9\u4e9b\u6a21\u5757\u59cb\u7ec8\u6253\u5305\u5728\u4e00\u8d77\uff0c\u5ffd\u7565\u6240\u6709\u5176\u4ed6\u4f18\u5316\u7b56\u7565\u7ea6\u675f\u3002\u8bf7\u53c2\u9605\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"#%E4%BD%BF%E7%94%A8-enforceresources",children:(0,i.jsx)(n.code,{children:"enforceResources"})})," \u4ee5\u4e86\u89e3\u6b64\u65b9\u6cd5\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5c40\u90e8\u6253\u5305\u9009\u9879",children:"\u5c40\u90e8\u6253\u5305\u9009\u9879"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"\u5c40\u90e8\u6253\u5305"}),"\u652f\u6301\u8bb8\u591a\u9009\u9879\uff0c\u4f7f\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5176\u884c\u4e3a\u3002\u6240\u6709\u9009\u9879\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"targetConcurrentRequests"})}),": Farm\u5c1d\u8bd5\u4e3a\u521d\u59cb\u8d44\u6e90\u52a0\u8f7d\u6216\u52a8\u6001\u8d44\u6e90\u52a0\u8f7d\u751f\u6210\u5c3d\u53ef\u80fd\u63a5\u8fd1\u6b64\u914d\u7f6e\u503c\u7684\u8d44\u6e90\u6570\u91cf\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"targetMinSize"})}),": \u751f\u6210\u8d44\u6e90\u7684\u6700\u5c0f\u5927\u5c0f\uff0c\u5728\u538b\u7f29\u548cgzip\u4e4b\u524d\u3002\u8bf7\u6ce8\u610f\uff0c\u5982\u679c ",(0,i.jsx)(n.code,{children:"ModuleBucket\u7684\u5927\u5c0f"})," \u5c0f\u4e8e ",(0,i.jsx)(n.code,{children:"targetMinSize"}),"\uff0c ",(0,i.jsx)(n.code,{children:"ModuleBucket"})," \u5c06\u4f18\u5148\u8003\u8651\uff0c\u8fd9\u65f6\u5019\u5927\u5c0f\u9650\u5236\u4e0d\u4e00\u5b9a\u4f1a\u88ab\u5f3a\u5236\u4fdd\u8bc1\u3002\u53ef\u4ee5\u4f7f\u7528\u914d\u7f6e ",(0,i.jsx)(n.code,{children:"enforceTargetMinSize"})," \u6765\u5f3a\u5236\u4fdd\u8bc1\u5927\u5c0f\uff0c\u4f46\u662f\u8fd9\u6837\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e00\u4e9b\u5171\u4eab\u6a21\u5757\u7684\u4f18\u5316\u7b56\u7565\u5931\u6548\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"targetMaxSize"})}),": \u7c7b\u4f3c ",(0,i.jsx)(n.code,{children:"targetMinSize"}),"\uff0c\u751f\u6210\u8d44\u6e90\u7684\u6700\u5927\u5927\u5c0f\uff0c\u5728\u538b\u7f29\u548cgzip\u4e4b\u524d\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"groups"})}),": \u4e00\u7ec4\u5e94\u8be5\u653e\u5728\u4e00\u8d77\u7684\u6a21\u5757\u3002\u8bf7\u6ce8\u610f\uff0c\u6b64\u7ec4\u914d\u7f6e\u53ea\u662f\u544a\u8bc9\u7f16\u8bd1\u5668\u8fd9\u4e9b\u6a21\u5757\u5e94\u8be5\u653e\u5728\u4e00\u8d77\uff0c\u5b83\u53ef\u80fd\u4f1a\u4ea7\u751f\u591a\u4e2a\u8d44\u6e90\uff0c\u5982\u679c\u60a8\u60f3\u5f3a\u5236\u5c06\u6a21\u5757\u653e\u5728\u540c\u4e00\u8d44\u6e90\u4e2d\uff0c\u5e94\u8be5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"enforceResources"}),"\u3002","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"name"}),": \u8fd9\u7ec4\u8d44\u6e90\u7684\u540d\u79f0."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"test"}),": \u5339\u914d\u5c5e\u4e8e\u8be5\u7ec4\u7684\u6a21\u5757\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u6570\u7ec4\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"groupType"}),": ",(0,i.jsx)(n.code,{children:"mutable"})," \u6216 ",(0,i.jsx)(n.code,{children:"immutable"})," \uff0c\u6b64\u7ec4\u4ec5\u7528\u4e8e\u6307\u5b9a\u6a21\u5757\u7684\u7c7b\u578b\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"resourceType"}),": ",(0,i.jsx)(n.code,{children:"all"}),"\u3001 ",(0,i.jsx)(n.code,{children:"initial"})," \u6216 ",(0,i.jsx)(n.code,{children:"async"}),"\uff0c\u6b64\u7ec4\u4ec5\u7528\u4e8e\u6307\u5b9a\u8d44\u6e90\u7684\u7c7b\u578b\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"enforceResources"})}),": \u5339\u914d\u5e94\u8be5\u59cb\u7ec8\u4f4d\u4e8e\u540c\u4e00\u8f93\u51fa\u8d44\u6e90\u4e2d\u7684\u6a21\u5757\u7684\u6570\u7ec4\uff0c\u5ffd\u7565\u6240\u6709\u5176\u4ed6\u7ea6\u675f\u3002","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"name"}),": \u8d44\u6e90\u7684\u540d\u79f0."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"test"}),": \u5339\u914d\u5c5e\u4e8e\u8be5\u8d44\u6e90\u7684\u6a21\u5757\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u6570\u7ec4\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"enforceTargetConcurrentRequests"})}),": \u5f3a\u5236\u76ee\u6807\u5e76\u53d1\u8bf7\u6c42\u5bf9\u4e8e\u6bcf\u4e2a\u8d44\u6e90\u52a0\u8f7d\uff0c\u5f53\u4e3atrue\u65f6\uff0c\u8f83\u5c0f\u7684\u8d44\u6e90\u5c06\u88ab\u5408\u5e76\u5230\u8f83\u5927\u7684\u8d44\u6e90\u4e2d\u4ee5\u6ee1\u8db3\u76ee\u6807\u5e76\u53d1\u8bf7\u6c42\u3002\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4css\u8d44\u6e90\u51fa\u73b0\u95ee\u9898\uff0c\u8bf7\u8c28\u614e\u4f7f\u7528\u6b64\u9009\u9879\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"enforceTargetMinSize"})}),": \u5f3a\u5236\u8bbe\u7f6e\u5bf9\u4e8e\u6bcf\u4e2a\u8d44\u6e90\u7684\u76ee\u6807\u6700\u5c0f\u5927\u5c0f\uff0c\u5f53\u4e3atrue\u65f6\uff0c\u8f83\u5c0f\u7684\u8d44\u6e90\u5c06\u88ab\u5408\u5e76\u5230\u8f83\u5927\u7684\u8d44\u6e90\u4e2d\u4ee5\u6ee1\u8db3\u76ee\u6807\u5e76\u53d1\u8bf7\u6c42\u3002\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4css\u8d44\u6e90\u51fa\u73b0\u95ee\u9898\uff0c\u8bf7\u8c28\u614e\u4f7f\u7528\u6b64\u9009\u9879\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"immutableModules"})}),": \u5339\u914d\u4e0d\u53ef\u53d8\u6a21\u5757\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u6570\u7ec4\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"immutableModulesWeight"})}),": \u9ed8\u8ba4\u4e3a0.8\uff0c\u4e0d\u53ef\u53d8\u6a21\u5757\u5c06\u5177\u670980%\u7684\u8bf7\u6c42\u6570\u91cf\u3002\u4f8b\u5982\uff0c\u5982\u679c ",(0,i.jsx)(n.code,{children:"targetConcurrentRequest"})," \u4e3a25\uff0c\u5219\u4e0d\u53ef\u53d8\u8d44\u6e90\u5c06\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:"25 * 80% = 20"})," \u3002\u6b64\u9009\u9879\u662f\u4e3a\u4e86\u786e\u4fdd\u53ef\u53d8\u548c\u4e0d\u53ef\u53d8\u6a21\u5757\u662f\u9694\u79bb\u7684\uff0c\u5982\u679c\u60a8\u66f4\u6539\u4e86\u4e1a\u52a1\u4ee3\u7801\uff0cnode_modules\u4e0b\u7684\u4ee3\u7801\u5c06\u4e0d\u4f1a\u53d7\u5230\u5f71\u54cd\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["\u901a\u5e38\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"targetConcurrentRequests"})," \u3001 ",(0,i.jsx)(n.code,{children:"targetMinSize"})," \u548c ",(0,i.jsx)(n.code,{children:"targetMaxSize"})," \u6765\u63a7\u5236\u5c40\u90e8\u6253\u5305\u7684\u9ed8\u8ba4\u884c\u4e3a\u3002Farm\u8bbe\u7f6e\u7684\u9ed8\u8ba4\u503c\u57fa\u4e8e\u6700\u4f73\u5b9e\u8df5\uff0c\u56e0\u6b64\u8bf7\u786e\u8ba4\u662f\u5426\u5fc5\u987b\u4fee\u6539\u9ed8\u8ba4\u503c\u3002"]})}),"\n",(0,i.jsx)(n.h3,{id:"\u6a21\u5757\u5206\u7ec4",children:"\u6a21\u5757\u5206\u7ec4"}),"\n",(0,i.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"groups"})," \u5c06\u6a21\u5757\u5206\u7ec4\u5728\u4e00\u8d77\u3002\u5bf9\u4e8e\u4e0a\u8ff0\u57fa\u672cReact\u9879\u76ee\u793a\u4f8b\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\u5c06 ",(0,i.jsx)(n.code,{children:"node_modules"})," \u4e0b\u7684\u6a21\u5757\u6253\u5305\u5728\u4e00\u8d77\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts" {4-9}',children:"export default defineConfig({\n  compilation: {\n    partialBundling: {\n      groups: [\n        {\n          name: 'vendor-react',\n          test: ['node_modules/'],\n        }\n      ]\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u6dfb\u52a0\u4e86\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"group item"})," \uff0c\u5176\u4e2d\u5305\u542b ",(0,i.jsx)(n.code,{children:"name"})," \u548c ",(0,i.jsx)(n.code,{children:"test"})," \uff0c\u4ee5\u5c06 ",(0,i.jsx)(n.code,{children:"react"})," \u548c ",(0,i.jsx)(n.code,{children:"react-dom"})," \u5206\u7ec4\u5728\u4e00\u8d77\u3002\u6253\u5305\u7ed3\u679c\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"./dist/\n\u251c\u2500\u2500 index_499e.72cf733c.js    # contains `react`, `react-dom` and all other files under node_modules\n\u251c\u2500\u2500 index_a35f.0ac21082.js    # contains `./index.tsx`\n\u251c\u2500\u2500 index_ce26.7f833381.css   # contains `./index.scss`\n\u2514\u2500\u2500 index.html                # contains `./index.html`\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u73b0\u5728\uff0c ",(0,i.jsx)(n.code,{children:"node_modules"})," \u4e0b\u7684\u6240\u6709\u6a21\u5757\u90fd\u6253\u5305\u5230 ",(0,i.jsx)(n.code,{children:"index_499e.72cf733c.js"})," \u4e2d\u3002\u8bf7\u6ce8\u610f\uff0cgroups\u5e76\u4e0d\u5f3a\u5236\u6240\u6709\u5339\u914d\u8be5\u7ec4\u7684\u6a21\u5757\u90fd\u6253\u5305\u5728\u4e00\u8d77\uff0c\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"group"}),"\u53ef\u4ee5\u4ea7\u751f\u591a\u4e2a ",(0,i.jsx)(n.code,{children:"output file"})," \uff0c\u56e0\u4e3a\uff1a"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u53ef\u53d8\u548c\u4e0d\u53ef\u53d8\u6a21\u5757\u59cb\u7ec8\u4f4d\u4e8e\u4e0d\u540c\u7684\u8f93\u51fa\u6587\u4ef6\u4e2d\u3002\u5f53\u53ef\u53d8\u548c\u4e0d\u53ef\u53d8\u6a21\u5757\u90fd\u5339\u914d\u5230\u8fd9\u4e2a ",(0,i.jsx)(n.code,{children:"group"})," \u65f6\uff0c\u5b83\u4eec\u5c06\u4f4d\u4e8e\u4e0d\u540c\u7684\u8f93\u51fa\u4e2d\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u5bf9\u4e8e\u591a\u9875\u9762\u5e94\u7528\u6216\u52a8\u6001\u5bfc\u5165\u7684\u5165\u53e3\uff0c\u53ef\u80fd\u5b58\u5728\u5171\u4eab\u6a21\u5757\uff0c\u8fd9\u4e9b\u6a21\u5757\u5e94\u59cb\u7ec8\u4f4d\u4e8e\u4e0d\u540c\u7684\u8f93\u51fa\u6587\u4ef6\u4e2d\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u9700\u8981\u5f3a\u5236\u5c06\u6a21\u5757\u653e\u5728\u540c\u4e00\u8f93\u51fa\u6587\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"enforceResources"})]}),"\n",(0,i.jsxs)(n.h3,{id:"\u4f7f\u7528-enforceresources",children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"enforceResources"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u8981\u5c06\u6240\u6709\u6a21\u5757\u5206\u7ec4\u5728\u4e00\u8d77\u5e76\u5ffd\u7565\u6240\u6709\u5176\u4ed6\u6761\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"enforceResources"})," \uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  compilation: {\n    partialBundling: {\n      // c-highlight-start\n      enforceResources: [\n        {\n          name: 'index',\n          test: ['.+'],\n        }\n      ]\n      // c-highlight-end\n    },\n  },\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6253\u5305\u7ed3\u679c:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"./dist/\n\u251c\u2500\u2500 index.7f833381.css  # all css modules are bundled together\n\u251c\u2500\u2500 index.ba5550d9.js   # all script modules are bundled together\n\u2514\u2500\u2500 index.html\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"enforceResources"})," \u5c06\u5ffd\u7565Farm\u7684\u6240\u6709\u5185\u90e8\u4f18\u5316\uff0c\u4f7f\u7528\u65f6\u8bf7\u5c0f\u5fc3\u3002"]})}),"\n",(0,i.jsxs)(n.h3,{id:"\u914d\u7f6e-immutable-modules",children:["\u914d\u7f6e ",(0,i.jsx)(n.code,{children:"immutable modules"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"immutableModules"})," \u914d\u7f6e\u4e0d\u53ef\u53d8\u6a21\u5757\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm\u5c06\u5176\u8bbe\u7f6e\u4e3a ",(0,i.jsx)(n.code,{children:"node_modules/"})," \u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"export default defineConfig({\n  compilation: {\n    partialBundling: {\n      immutableModules: ['node_modules/', '/global-constants']\n    },\n  },\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0d\u53ef\u53d8\u6a21\u5757\u4f1a\u5f71\u54cd\u6253\u5305\u548c\u4f20\u5165\u7684\u6301\u4e45\u5316\u7f13\u5b58\uff0c\u5982\u679c\u60a8\u60f3\u4fee\u6539\u5b83\uff0c\u8bf7\u5c0f\u5fc3\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"\u901a\u5e38\u60a8\u4e0d\u9700\u8981\u624b\u52a8\u914d\u7f6e\u6253\u5305\uff0c\u5982\u679c\u60a8\u60f3\u624b\u52a8\u914d\u7f6e\u6253\u5305\uff0c\u8bf7\u786e\u4fdd\u60a8\u786e\u5b9e\u9700\u8981\u5b83\u3002\u8fd9\u4e9b\u793a\u4f8b\u4ec5\u7528\u4e8e\u5e2e\u52a9\u60a8\u8f7b\u677e\u5b66\u4e60\u5982\u4f55\u914d\u7f6e\u6253\u5305\u7b56\u7565\u3002"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5c06\u540c\u4e00\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u5206\u7ec4",children:"\u5c06\u540c\u4e00\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u5206\u7ec4"}),"\n",(0,i.jsxs)(n.p,{children:["\u5c06 ",(0,i.jsx)(n.code,{children:"src/components"})," \u4e0b\u7684 ",(0,i.jsx)(n.code,{children:"modules"})," \u5206\u7ec4\uff0c\u5e76",(0,i.jsx)(n.strong,{children:"\u5c3d\u53ef\u80fd"}),"\u5c06\u5b83\u4eec\u8f93\u51fa\u5230\u540c\u4e00\u8d44\u6e90\u4e2d\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  compilation: {\n    partialBundling: {\n      // c-highlight-start\n      groups: [\n        {\n          name: 'components',\n          test: ['./src/components'],\n        }\n      ]\n      // c-highlight-end\n    },\n  },\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u914d\u7f6e\u6253\u5305\u7684\u6570\u91cf\u548c\u5927\u5c0f",children:"\u914d\u7f6e\u6253\u5305\u7684\u6570\u91cf\u548c\u5927\u5c0f"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  compilation: {\n    partialBundling: {\n      // c-highlight-start\n      targetConcurrentRequests: 15,\n      targetMinSize: 200 * 1024 // 200 KB\n      // c-highlight-end\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0cFarm\u5c06\u5c1d\u8bd5",(0,i.jsx)(n.strong,{children:"\u5c3d\u53ef\u80fd"}),"\u5730\u5c06\u60a8\u7684\u9879\u76ee\u6253\u5305\u5230 ",(0,i.jsx)(n.code,{children:"15"})," \u4e2a\u6587\u4ef6\u4e2d\uff0c\u6bcf\u4e2a\u6587\u4ef6\u7684\u6700\u5c0f\u5927\u5c0f",(0,i.jsx)(n.strong,{children:"\u5c3d\u53ef\u80fd"}),"\u5927\u4e8e ",(0,i.jsx)(n.code,{children:"200KB"})," \u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5c06\u6240\u6709\u6a21\u5757\u6253\u5305\u5728\u4e00\u8d77",children:"\u5c06\u6240\u6709\u6a21\u5757\u6253\u5305\u5728\u4e00\u8d77"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  compilation: {\n    partialBundling: {\n      // c-highlight-start\n      enforceResources: [\n        {\n          name: 'index',\n          test: ['.+'],\n        }\n      ]\n      // c-highlight-end\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5f3a\u5236\u5c06\u6240\u6709\u6a21\u5757\u6253\u5305\u5728\u4e00\u8d77\uff0c\u5e76\u5ffd\u7565\u6240\u6709\u5176\u4ed6\u7ea6\u675f\uff08\u4f8b\u5982\uff0c\u8bf7\u6c42\u6570\u91cf\u3001\u6587\u4ef6\u5927\u5c0f\uff09\u3002\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"enforceResources"})," \u5f3a\u5236\u5c06\u67d0\u4e9b\u6a21\u5757\u6253\u5305\u5728\u4e00\u8d77\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  compilation: {\n    partialBundling: {\n      // c-highlight-start\n      enforceResources: [\n        {\n          name: 'index',\n          test: ['\\\\./src/components/.+'],\n        }\n      ]\n      // c-highlight-end\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u5f3a\u5236\u5c06 ",(0,i.jsx)(n.code,{children:"src/components"})," \u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6a21\u5757\u6253\u5305\u5728\u4e00\u8d77\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"enforceResources"})," \u4f1a\u7834\u574f\u6253\u5305\u7684\u5185\u90e8\u4f18\u5316\uff0c\u4f7f\u7528\u65f6\u8bf7\u5c0f\u5fc3\u3002"]})})]})}function a(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5696:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>d});var i=s(959);const c={},r=i.createContext(c);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);