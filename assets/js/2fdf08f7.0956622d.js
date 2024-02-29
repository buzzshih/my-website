"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,y=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(y,p(p({ref:t},i),{},{components:n})):r.createElement(y,p({ref:t},i))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,p[1]=c;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={authors:"MichaelJack",name:"Stone",title:"[ReactDoc]React \u4e2d\u7684 State \u548c Props \u5230\u5e95\u5dee\u5728\u54ea",tags:["React","Props","State"]},p="React \u4e2d\u7684 State \u548c Props \u5230\u5e95\u5dee\u5728\u54ea\uff1f",c={unversionedId:"React/StateVsProps",id:"React/StateVsProps",title:"[ReactDoc]React \u4e2d\u7684 State \u548c Props \u5230\u5e95\u5dee\u5728\u54ea",description:"\u4f7f\u7528 React \u958b\u767c\u524d\u7aef\u4e5f\u4e00\u6bb5\u6642\u9593\u4e86\uff0c\u5728 React \u958b\u767c\u4e2d\u5e38\u5e38\u4f7f\u7528\u5230 State \u548c Props \u4f86\u4fdd\u5b58\u53ca\u50b3\u905e component \u7684\u8cc7\u6599\uff0c\u63a7\u5236 component \u7684 UI \u6e32\u67d3\u548c\u8f38\u51fa\uff0c\u4f46\u771f\u7684\u554f\u5230\u6211 State \u548c Props \u5169\u8005\u4e4b\u9593\u6709\u4ec0\u9ebc\u5dee\uff0c\u6216\u662f\u4ec0\u9ebc\u6642\u5019\u8a72\u7528 State? \u4ec0\u9ebc\u6642\u5019\u8a72\u7528 Props? \u5c0d\u9019\u4e9b\u6982\u5ff5\u6211\u9084\u771f\u7684\u662f\u5f88\u6a21\u7cca\uff0c\u4ee5\u4e0b\u5c31\u8b93\u6211\u5011\u4e00\u8d77\u91d0\u6e05\u9019\u4e9b\u6982\u5ff5\u5427\u3002",source:"@site/docs/React/StateVsProps.md",sourceDirName:"React",slug:"/React/StateVsProps",permalink:"/React/StateVsProps",draft:!1,tags:[{label:"React",permalink:"/tags/react"},{label:"Props",permalink:"/tags/props"},{label:"State",permalink:"/tags/state"}],version:"current",frontMatter:{authors:"MichaelJack",name:"Stone",title:"[ReactDoc]React \u4e2d\u7684 State \u548c Props \u5230\u5e95\u5dee\u5728\u54ea",tags:["React","Props","State"]},sidebar:"tutorialSidebar",previous:{title:"[React] Component Render and Commit",permalink:"/React/RenderAndCommit"},next:{title:"[ReactDoc] Suspense and Lazy",permalink:"/React/SuspenseAndLazy"}},s={},l=[],i={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-\u4e2d\u7684-state-\u548c-props-\u5230\u5e95\u5dee\u5728\u54ea"},"React \u4e2d\u7684 State \u548c Props \u5230\u5e95\u5dee\u5728\u54ea\uff1f"),(0,a.kt)("p",null,"\u4f7f\u7528 React \u958b\u767c\u524d\u7aef\u4e5f\u4e00\u6bb5\u6642\u9593\u4e86\uff0c\u5728 React \u958b\u767c\u4e2d\u5e38\u5e38\u4f7f\u7528\u5230 State \u548c Props \u4f86\u4fdd\u5b58\u53ca\u50b3\u905e component \u7684\u8cc7\u6599\uff0c\u63a7\u5236 component \u7684 UI \u6e32\u67d3\u548c\u8f38\u51fa\uff0c\u4f46\u771f\u7684\u554f\u5230\u6211 State \u548c Props \u5169\u8005\u4e4b\u9593\u6709\u4ec0\u9ebc\u5dee\uff0c\u6216\u662f\u4ec0\u9ebc\u6642\u5019\u8a72\u7528 State? \u4ec0\u9ebc\u6642\u5019\u8a72\u7528 Props? \u5c0d\u9019\u4e9b\u6982\u5ff5\u6211\u9084\u771f\u7684\u662f\u5f88\u6a21\u7cca\uff0c\u4ee5\u4e0b\u5c31\u8b93\u6211\u5011\u4e00\u8d77\u91d0\u6e05\u9019\u4e9b\u6982\u5ff5\u5427\u3002"),(0,a.kt)("p",null,"State \u662f\u7528\u4f86\u5132\u5b58 component \u5167\u90e8\u7684\u72c0\u614b\u548c\u8cc7\u6599\uff08\u985e\u4f3c function \u4e2d\u5ba3\u544a\u7684\u5167\u90e8\u8b8a\u6578\uff09\uff0cProps \u662f\u5c6c\u65bc Component \u7684\u5c6c\u6027\u7528\u4f86\u5efa\u69cb component \u521d\u59cb\u7684\u914d\u7f6e\uff08\u985e\u4f3c function \u4e2d\u4f7f\u7528 function \u8981\u5e36\u7684\u53c3\u6578\uff09\u3002"),(0,a.kt)("p",null,"State \u985e\u4f3c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'const propsStateFunc = () => {\n  const state = "state";\n  return state;\n};\n')),(0,a.kt)("p",null,"Props \u985e\u4f3c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"const propsStateFunc = (props) => {\n  return props;\n};\n")),(0,a.kt)("p",null,"props \u548c state \u66f4\u65b0\u90fd\u6703\u89f8\u767c React \u91cd\u65b0\u6e32\u67d3\u7684\u6a5f\u5236\uff0cprops \u548c state \u90fd\u662f\u666e\u901a\u7684 JS Oject \u3002"),(0,a.kt)("p",null,"props"),(0,a.kt)("p",null,"props\uff08properties \u7684\u7e2e\u5beb\uff09\u662f\u7d44\u4ef6\u7684\u914d\u7f6e\uff0c\u53ef\u4ee5\u5b9a\u7fa9 props \u662f\u53ef\u9078\u7684\u914d\u7f6e\uff0c\u5b83\u5011\u662f\u5f9e\u4e0a\u65b9\u63a5\u6536\u7684\uff0c\u800c\u9019\u500b props \u5728 component \u662f\u4e0d\u53ef\u4ee5\u8b8a\u52d5\u7684\u3002"),(0,a.kt)("p",null,"state"),(0,a.kt)("p",null,"\u7576 component \u5b89\u88dd\u6642\uff0cstate \u4ee5\u9ed8\u8a8d\u503c\u958b\u59cb\uff0c\u7136\u5f8c\u96a8\u6642\u9593\u767c\u751f\u8b8a\u5316\uff08\u4e3b\u8981\u7531\u4f7f\u7528\u8005\u4e8b\u4ef6\u751f\u6210\uff09\u3002\u7d44\u4ef6\u5728\u5167\u90e8\u7ba1\u7406\u81ea\u5df1\u7684\u72c0\u614b\u3002"),(0,a.kt)("p",null,"\u7d50\u8a9e:\n\u5047\u5982\u9019\u500b component \u5167\u53ea\u662f\u9700\u8981\u5b9a\u7fa9\u521d\u59cb\u72c0\u614b\u6216\u662f\u986f\u793a\u8cc7\u6599\u7684\u8a71\uff0c\u90a3\u9ebc\u53ea\u9700\u4f7f\u7528 props \u5373\u53ef\uff0cprops \u4e5f\u53ef\u4ee5\u5b9a\u7fa9\u521d\u59cb\u503c\u4e5f\u5c31\u662f\u9810\u8a2d\u503c ; \u5047\u5982 component \u662f\u9700\u8981\u4f9d\u7167\u4f7f\u7528\u8005\u7684\u64cd\u4f5c\u6216\u662f\u6642\u9593\u7684\u63a8\u79fb\u4f86\u66f4\u65b0 component \u5167\u90e8\u7684\u72c0\u614b\u7684\u8a71\uff0c\u90a3\u9ebc\u5c31\u9700\u8981\u4f7f\u7528 state\u3002"))}m.isMDXComponent=!0}}]);