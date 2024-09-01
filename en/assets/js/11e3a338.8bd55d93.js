"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5167],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||v[f]||i;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8778:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={authors:"Buzz",name:"Buzz",title:"[JS] Hoisting",tags:["Javascript"]},o="JavaScript Hoisting \u63d0\u5347",c={unversionedId:"JavaScript/Hositing",id:"JavaScript/Hositing",title:"[JS] Hoisting",description:"tags: JavaScript",source:"@site/docs/JavaScript/Hositing.md",sourceDirName:"JavaScript",slug:"/JavaScript/Hositing",permalink:"/my-website/en/JavaScript/Hositing",draft:!1,tags:[{label:"Javascript",permalink:"/my-website/en/tags/javascript"}],version:"current",frontMatter:{authors:"Buzz",name:"Buzz",title:"[JS] Hoisting",tags:["Javascript"]},sidebar:"tutorialSidebar",previous:{title:"[JS] Function ",permalink:"/my-website/en/JavaScript/Function"},next:{title:"[JS] Objects Prototypes",permalink:"/my-website/en/JavaScript/ObjectsPrototypes"}},s={},p=[{value:"tags: <code>JavaScript</code>",id:"tags-javascript",level:6}],l={toc:p},u="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"javascript-hoisting-\u63d0\u5347"},"JavaScript Hoisting \u63d0\u5347"),(0,a.kt)("h6",{id:"tags-javascript"},"tags: ",(0,a.kt)("inlineCode",{parentName:"h6"},"JavaScript")),(0,a.kt)("p",null,"JavaScript Hoisting \u6982\u5ff5\u5c31\u662f\u5728\u8aaa\u660e JavaScript \u7684\u7a0b\u5f0f\u5728\u57f7\u884c\u904e\u7a0b\u4e2d\u662f\u5167\u90e8\u7684\u51fd\u793a\u548c\u8b8a\u6578\u662f\u5982\u4f55\u904b\u884c\u7684\uff0cHoisting \u7684\u6982\u5ff5\u5c31\u662f\u767c\u751f\u5728\u7de8\u8b6f\u968e\u6bb5\u548c\u57f7\u884c\u968e\u6bb5\u3002"),(0,a.kt)("p",null,"JavaScript \u7279\u6027\u4e4b\u4e00\u6240\u5ba3\u544a\u7684\u8b8a\u6578\u548c\u51fd\u793a\u6703\u5728\u7de8\u8b6f\u968e\u6bb5\u5c31\u5beb\u5165\u5230\u8a18\u61b6\u9ad4\u4e2d\uff0c\u9019\u4e5f\u662f\u70ba\u4ec0\u9ebc\u6211\u5011\u53ef\u4ee5\u5728\u5beb JavaScript \u6642\u53ef\u4ee5\u5728\u8b8a\u6578\u6216\u662f\u51fd\u793a\u5ba3\u544a\u4e4b\u524d\u4f7f\u7528\u5176\u8b8a\u6578\u548c\u51fd\u793a\u800c\u4e0d\u6703\u51fa\u73fe\u932f\u8aa4\u7684\u539f\u56e0\u3002"),(0,a.kt)("p",null,"\u800c Hoisting \u50c5\u6703\u63d0\u5347\u5ba3\u544a\u7684\u90e8\u5206\uff0c\u800c\u4e0d\u6703\u521d\u59cb\u5316\u3002\u5982\u679c\u5728\u4f7f\u7528\u8a72\u8b8a\u6578\u5f8c\u624d\u5ba3\u544a\u548c\u521d\u59cb\u5316\uff0c\u90a3\u9ebc\u8a72\u503c\u5c07\u662f undefined\u3002\n\u4e0a\u8ff0\u9019\u53e5\u8a71\u4e5f\u5c31\u662f\u5982\u540c\u4e0b\u9762\u7684\u7bc4\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const test\n//\u4f7f\u7528 const \u95dc\u9375\u5b57 \u5ba3\u544a test \u8b8a\u6578\nconsole.log("variables"+ " " +test)\n// \u5370\u51fa test \u7684\u6578\u503c \uff0c\u7d50\u679c\u6703\u662f variables undefined\n\ntest = 18 ;\n// \u521d\u59cb\u5316\u8b8a\u6578\u6578\u503c\n')))}v.isMDXComponent=!0}}]);