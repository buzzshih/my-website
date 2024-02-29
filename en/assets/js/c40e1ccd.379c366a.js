"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(n),d=a,k=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(k,c(c({ref:t},s),{},{components:n})):r.createElement(k,c({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={authors:null,name:"Stone",title:"[Redux] Redux Toolkit",tags:["React","Redux","Redux Toolkit"]},c="Redux \u5b78\u7fd2",l={unversionedId:"React/ReduxToolkit",id:"React/ReduxToolkit",title:"[Redux] Redux Toolkit",description:"\u76ee\u9304",source:"@site/docs/React/ReduxToolkit.md",sourceDirName:"React",slug:"/React/ReduxToolkit",permalink:"/en/React/ReduxToolkit",draft:!1,tags:[{label:"React",permalink:"/en/tags/react"},{label:"Redux",permalink:"/en/tags/redux"},{label:"Redux Toolkit",permalink:"/en/tags/redux-toolkit"}],version:"current",frontMatter:{authors:null,name:"Stone",title:"[Redux] Redux Toolkit",tags:["React","Redux","Redux Toolkit"]},sidebar:"tutorialSidebar",previous:{title:"[Redux] Quick Start ",permalink:"/en/React/QuickStart"},next:{title:"[React] Component Render and Commit",permalink:"/en/React/RenderAndCommit"}},u={},i=[{value:"\u76ee\u9304",id:"\u76ee\u9304",level:2},{value:"\u6a21\u64ec",id:"\u6a21\u64ec",level:3},{value:"\u5feb\u901f\u7bc4\u4f8b",id:"\u5feb\u901f\u7bc4\u4f8b",level:3},{value:"\u6bd4\u8f03 Redux \u548c React useContext",id:"\u6bd4\u8f03-redux-\u548c-react-usecontext",level:3},{value:"\u7e3d\u7d50\uff1a",id:"\u7e3d\u7d50",level:4}],s={toc:i},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"redux-\u5b78\u7fd2"},"Redux \u5b78\u7fd2"),(0,a.kt)("h2",{id:"\u76ee\u9304"},"\u76ee\u9304"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88dd\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"npm : npm install react-redux @reduxjs/toolkit"),(0,a.kt)("li",{parentName:"ul"},"yarn :yarn add react-redux @reduxjs/toolkit"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5feb\u901f\u7bc4\u4f8b")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u57fa\u672c\u5beb\u6cd5\u4ecb\u7d39")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u67b6\u69cb\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"store \uff1a \u5132\u5b58\u5168\u57df State"),(0,a.kt)("li",{parentName:"ul"},"action \uff1a \u4e5f\u5c31\u662f\u4e00\u500b\u52d5\u4f5c\uff0c\u884c\u70ba\uff0c\u53ea\u6709\u89f8\u767c\u4e00\u500b Action \u624d\u80fd\u6539\u8b8a\u72c0\u614b\u6a39\u5167\u7684\u76f8\u95dc\u6578\u64da\u3002"),(0,a.kt)("li",{parentName:"ul"},"reducer \uff1a \u8ca0\u8cac\u53bb\u78ba\u8a8d\u73fe\u5728\u8981\u7528\u54ea\u500b action \uff0c\u9032\u800c\u57f7\u884c\u4e26\u4e14\u6539\u8b8a State"),(0,a.kt)("li",{parentName:"ul"},"dispatch \uff1a \u50b3\u9001 action \u7d66 reducer"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"props \u7684\u9650\u5236\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u540c\u5c64\u7121\u6cd5\u50b3\u905e"),(0,a.kt)("li",{parentName:"ul"},"\u592a\u591a\u5c64\u6642\u6703\u5f88\u8907\u96dc")))),(0,a.kt)("p",null,"redux \u6c92\u6709\u5305\u542b\u5728 reacct \u88e1\u9762\u4f46\u5f88\u9577\u8ddf react \u4e00\u8d77\u4f7f\u7528\uff0c\u4f86\u7576\u4f5c react \u7684\u72c0\u614b\u7ba1\u7406\u5668\u3002\n\u5f9e\u524d redux \u5f88\u8907\u96dc\u8f03\u96e3\u4e0a\u624b\uff0c\u73fe\u5728 redux \u548c react \u5718\u968a\u5171\u540c\u63a8\u51fa\u65b0\u7684 redux \u5de5\u5177\u5c31\u662f redux toolkit"),(0,a.kt)("p",null,"\u4e0b\u9762\u6709\u5e7e\u500b redux \u529f\u80fd\u7684\u540d\u8a5e\u4ecb\u7d39"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"store : \u5132\u5b58\u5168\u57df State"),(0,a.kt)("li",{parentName:"ol"},"action : \u6539\u8b8a State \u7684\u884c\u70ba"),(0,a.kt)("li",{parentName:"ol"},"reducer : Redux \u4e2d\u7684 reducer\uff08\u7d14\u51fd\u6578\uff09\u662f\u4e00\u500b\u7528\u65bc\u8655\u7406\u72c0\u614b\u8b8a\u66f4\u7684\u51fd\u6578\uff0c\u5b83\u63a5\u53d7\u5169\u500b\u53c3\u6578\uff1a\u4e0a\u4e00\u6b21\u7684\u72c0\u614b\uff08state\uff09\u548c\u7576\u524d\u89f8\u767c\u7684 action\uff0c\u4e26\u8fd4\u56de\u66f4\u65b0\u5f8c\u7684\u72c0\u614b\u3002"),(0,a.kt)("li",{parentName:"ol"},"dispatch : \u662f Redux \u4e2d\u7684\u4e00\u500b\u51fd\u6578\uff0c\u7528\u65bc\u89f8\u767c action\uff0c\u4e26\u5c07 action \u50b3\u905e\u7d66\u76f8\u61c9\u7684 reducer \u4f86\u9032\u884c\u72c0\u614b\u8b8a\u66f4\u3002")),(0,a.kt)("h3",{id:"\u6a21\u64ec"},"\u6a21\u64ec"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/AIHdX92.gif",alt:null})),(0,a.kt)("h3",{id:"\u5feb\u901f\u7bc4\u4f8b"},"\u5feb\u901f\u7bc4\u4f8b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9996\u5148\u5229\u7528 CRA(Create React App)\u5148\u5efa\u7acb\u4e00\u500b\u5168\u65b0\u7684 React \u5c08\u6848\uff0c\u9019\u908a\u4f7f\u7528\u7684\u662f Typescript \u7684\u6a21\u677f"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"npx create-react-app my-app --template typescript\n",(0,a.kt)("strong",{parentName:"li"},"or")),(0,a.kt)("li",{parentName:"ul"},"yarn create react-app redux-practice --template typescript"),(0,a.kt)("li",{parentName:"ul"},"\u53c3\u8003\u9019\u500b\u7db2\u7ad9 ",(0,a.kt)("a",{parentName:"li",href:"https://create-react-app.dev/docs/adding-typescript/"},"https://create-react-app.dev/docs/adding-typescript/")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c08\u6848\u5efa\u7acb\u597d\u4e4b\u5f8c\uff0c\u63a5\u8457\u5b89\u88dd\u6211\u5011\u6240\u9700\u8981\u7684\u5957\u4ef6 react-redux\u3001 @reduxjs/toolkit"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"npm : npm install react-redux @reduxjs/toolkit\n",(0,a.kt)("strong",{parentName:"li"},"or")),(0,a.kt)("li",{parentName:"ul"},"yarn :yarn add react-redux @reduxjs/toolkit"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5957\u4ef6\u5b89\u88dd\u5b8c\u5f8c\uff0c\u5148\u628a app.tsx , app.css \u6574\u7406\u4e00\u4e0b\uff0c\u628a\u4e0d\u5fc5\u8981\u7684\u6771\u897f\u522a\u6389"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.tsx" showLineNumbers',title:'"app.tsx"',showLineNumbers:!0},'import "./App.css";\n\nfunction App() {\n  return (\n    <div className="App">\n      <p>Hello</p>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="app.css" showLineNumbers',title:'"app.css"',showLineNumbers:!0},"* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nbody {\n  padding: 0;\n}\n\n.container {\n  width: min(100%, 768px);\n  padding: 0 2rem;\n  margin: 0 auto;\n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728 src \u5167\u65b0\u589e features \u7684\u8cc7\u6599\u593e\uff0c\u4e26\u65b0\u589e\u4e00\u500b store.ts \u7684\u6a94\u6848"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/features/store.ts" showLineNumbers',title:'"src/features/store.ts"',showLineNumbers:!0},'//configureStore \u662fRedux Toolkit \u4e2d\u63d0\u4f9b\u7684\u4e00\u500b\u51fd\u6578\n//\u7528\u4f86\u5efa\u7acb Redux store\uff0c\u5b83\u53ef\u4ee5\u81ea\u52d5\u5316\u4e00\u4e9b\u5e38\u898b\u7684 Redux \u914d\u7f6e\u4efb\u52d9\nimport { configureStore } from "@reduxjs/toolkit";\n\nconst store = configureStore({\n  reducer: {},\n});\n\n// \u5b9a\u7fa9 RootState \u985e\u578b\uff0c\u5b83\u4ee3\u8868\u6574\u500b\u61c9\u7528\u7a0b\u5f0f\u7684 Redux store \u4e2d\u7684\u72c0\u614b\u985e\u578b\nexport type RootState = ReturnType<typeof store.getState>;\n\nexport default store;\n')),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"configureStore \u4e3b\u8981\u7684\u529f\u80fd\u5982\u4e0b:\nconfigureStore \u662f Redux Toolkit \u63d0\u4f9b\u7684\u4e00\u500b\u51fd\u6578\uff0c\u7528\u65bc\u7c21\u5316 Redux store \u7684\u5275\u5efa\u548c\u914d\u7f6e\u904e\u7a0b\u3002\u5b83\u53ef\u4ee5\u5e6b\u52a9\u4f60\u5feb\u901f\u5275\u5efa\u53ef\u9760\u7684 Redux store\uff0c\u4e26\u81ea\u52d5\u6574\u5408\u5e38\u7528\u7684\u529f\u80fd\uff0c\u4f8b\u5982 Redux DevTools\u3001Reducer \u7684\u5408\u4f75\u548c Immer \u7b49\u3002\u5728\u4f7f\u7528 configureStore \u51fd\u6578\u6642\uff0c\u4f60\u9700\u8981\u50b3\u905e\u4e00\u500b reducer \u7269\u4ef6\uff0c\u7528\u65bc\u5b9a\u7fa9\u4f60\u7684 reducers\u3002",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u6574\u5408 Redux DevTools Extension\uff1a\u5982\u679c\u4f60\u7684\u700f\u89bd\u5668\u4e2d\u5b89\u88dd\u4e86 Redux DevTools \u64f4\u5c55\uff0cconfigureStore \u6703\u81ea\u52d5\u5c07\u5176\u6574\u5408\u5230 store \u4e2d\uff0c\u65b9\u4fbf\u958b\u767c\u8005\u8abf\u8a66\u548c\u6e2c\u8a66\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5408\u4f75 Reducers\uff1aconfigureStore \u6703\u81ea\u52d5\u4f7f\u7528 Redux Toolkit \u63d0\u4f9b\u7684 combineReducers \u51fd\u6578\uff0c\u5c07\u591a\u500b reducers \u5408\u4f75\u6210\u4e00\u500b\u55ae\u4e00\u7684 reducer\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u555f\u7528 Immer\uff1aconfigureStore \u9810\u8a2d\u555f\u7528 Immer\uff0c\u9019\u662f\u4e00\u500b\u51fd\u6578\u5eab\uff0c\u53ef\u4ee5\u7c21\u5316\u5c0d state \u7684\u8b8a\u66f4\u3002\u7576\u4f60\u4f7f\u7528 dispatch \u53bb\u66f4\u65b0 store \u4e2d\u7684\u72c0\u614b\u6642\uff0c Immer \u6703\u81ea\u52d5\u7522\u751f\u4e00\u500b immutable \u7684\u62f7\u8c9d\uff0c\u4e26\u5728\u6b64\u57fa\u790e\u4e0a\u9032\u884c\u66f4\u6539\uff0c\u5f9e\u800c\u7c21\u5316\u4e86\u5c0d\u72c0\u614b\u7684\u8b8a\u66f4\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u555f\u7528 Redux Thunk\uff1aconfigureStore \u9810\u8a2d\u555f\u7528 Redux Thunk\uff0c\u9019\u662f\u4e00\u500b Redux \u7684 middleware\uff0c\u5141\u8a31\u4f60\u5beb\u975e\u540c\u6b65\u7684 action creators\u3002"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728 src/features \u5167 counter \u65b0\u589e\u8cc7\u6599\u593e\uff0c\u4e26\u65b0\u589e counterSlice.ts \u6a94\u6848"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528 Redux Toolkit \u5957\u4ef6\uff0c\u6211\u5011\u901a\u5e38\u4e0d\u9700\u8981\u81ea\u5df1\u624b\u52d5\u5beb\u6bcf\u500b action \u5c0d\u61c9\u5230\u54ea\u500b reducer\uff0c\u56e0\u70ba Redux Toolkit \u63d0\u4f9b\u4e86 createSlice \u51fd\u6578\uff0c\u5b83\u6703\u81ea\u52d5\u751f\u6210\u5c0d\u61c9\u7684 action \u548c reducer")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u5011\u4f7f\u7528\u4e86 createSlice \u51fd\u6578\u4f86\u5b9a\u7fa9 counter slice\uff0c\u4e26\u5728 reducers \u5c6c\u6027\u4e2d\u5b9a\u7fa9\u4e86\u4e09\u500b reducers\uff0c\u5206\u5225\u662f increment\u3001decrement \u548c incrementByAmount\u3002createSlice \u51fd\u6578\u6703\u6839\u64da\u9019\u4e9b\u5b9a\u7fa9\u81ea\u52d5\u751f\u6210\u5c0d\u61c9\u7684 action \u548c reducer\uff0c\u4e26\u5c07\u5b83\u5011\u5132\u5b58\u5728 counterSlice.actions \u4e2d")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9019\u6a23\u4e00\u4f86\uff0c\u6211\u5011\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 counterSlice.actions.increment\u3001counterSlice.actions.decrement \u548c counterSlice.actions.incrementByAmount \u4f86\u89f8\u767c\u5c0d\u61c9\u7684 action\uff0c\u800c\u4e0d\u9700\u8981\u81ea\u5df1\u624b\u52d5\u5b9a\u7fa9\u6bcf\u500b action\u3002\u540c\u6642\uff0c\u9019\u4e9b action \u6703\u81ea\u52d5\u5c0d\u61c9\u5230 counterSlice.reducer \u4e2d\u5b9a\u7fa9\u7684 reducers\uff0c\u4e26\u66f4\u65b0 counter slice \u7684\u72c0\u614b\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/feature/counter/counterSlice.ts" showLineNumbers',title:'"src/feature/counter/counterSlice.ts"',showLineNumbers:!0},'// counterSlice.ts\n\n// \u532f\u5165 Redux Toolkit \u4e2d\u7684 createSlice \u51fd\u6578\nimport { createSlice } from "@reduxjs/toolkit";\n// \u532f\u5165Redux store \u7684\u578b\u5225 RootState\nimport { RootState } from "../store";\n\n// \u5b9a\u7fa9 counter slice \u7684\u72c0\u614b\u985e\u578b\nexport interface ICounter {\n  value: number;\n}\n\n//\u5b9a\u7fa9 couter slice \u7684\u521d\u59cb\u72c0\u614b\nconst initialState: ICounter = {\n  value: 0,\n};\n\n// \u4f7f\u7528 Redux Toolkit \u7684 createSlice \u51fd\u6578\uff0c\u5efa\u7acb counter slice \u7684 reducer\nexport const counterSlice = createSlice({\n  // \u5b9a\u7fa9 slice \u7684\u540d\u7a31\uff0c\u7528\u65bc\u958b\u767c\u8005\u5de5\u5177\u7684\u986f\u793a\n  name: "counter",\n  // \u5b9a\u7fa9 slice \u7684\u521d\u59cb\u72c0\u614b\n  initialState,\n  // \u5b9a\u7fa9 slice \u7684 reducers\uff0c\u7528\u4f86\u66f4\u65b0 slice \u7684\u72c0\u614b\n  reducers: {\n    // \u5b9a\u7fa9\u4e00\u500b increment \u7684 reducer\uff0c\u7528\u65bc\u589e\u52a0 slice \u7684\u72c0\u614b\u503c\n    increment: (state) => {\n      // \u72c0\u614b\u503c +1\n      state.value += 1;\n      // \u5728console.log\u986f\u793a\u66f4\u65b0\u5b8c\u7684\u72c0\u614b\u503c\n      console.log("increment", state.value);\n    },\n    // \u5b9a\u7fa9\u4e00\u500b decrement \u7684 reducer\uff0c\u7528\u65bc\u6e1b\u5c11 slice \u7684\u72c0\u614b\u503c\n    decrement: (state) => {\n      // \u72c0\u614b\u503c -1\n      state.value -= 1;\n      // \u5728console.log\u986f\u793a\u66f4\u65b0\u5b8c\u7684\u72c0\u614b\u503c\n      console.log("decrement", state.value);\n    },\n    // \u5b9a\u7fa9\u4e00\u500b incrementByAmount \u7684 reducer\uff0c\u7528\u65bc\u589e\u52a0\u6307\u5b9a\u7684\u6578\u91cf\u5230 slice \u7684\u72c0\u614b\u503c\n    incrementByAmount: (state, action) => {\n      // \u72c0\u614b\u503c\u589e\u52a0 action.payload \u6307\u5b9a\u7684\u6578\u91cf\n      state.value += action.payload;\n    },\n  },\n});\n\n//\u4f7f\u7528 createSlice \u51fd\u5f0f\uff0c\u5b83\u6703\u81ea\u52d5\u751f\u6210\u5c0d\u61c9\u7684action,reducer\n\nexport const { increment, decrement, incrementByAmount } = counterSlice.actions;\n\n/**\n * \u9078\u53d6 Redux store \u4e2d\u7684 counter slice \u72c0\u614b\n * @param state \u6574\u500b\u61c9\u7528\u7a0b\u5f0f\u7684 Redux store \u4e2d\u7684\u72c0\u614b\n * @returns counter slice \u7684\u72c0\u614b\n */\nexport const selectCounter = (state: RootState) => state.conter;\n\n// \u5c0e\u51fa counterSlice \u7684 reducer \u51fd\u6578\u4f5c\u70ba\u9810\u8a2d\u5c0e\u51fa\n\n// counterSlice \u662f\u7531 createSlice \u51fd\u6578\u5275\u5efa\u7684 Redux slice\n// reducer \u662f\u7528\u65bc\u8655\u7406\u76f8\u61c9\u7684 action \u7684\u51fd\u6578\n// \u5728 Redux \u4e2d\uff0creducer \u662f\u4e00\u500b\u7d14\u51fd\u6578\uff0c\u63a5\u6536\u7576\u524d\u7684 state \u548c action\uff0c\u8fd4\u56de\u65b0\u7684 state\n// \u9019\u500b reducer \u51fd\u6578\u6703\u81ea\u52d5\u6839\u64da createSlice \u51fd\u6578\u4e2d\u5b9a\u7fa9\u7684 reducers \u4f86\u8655\u7406\u76f8\u61c9\u7684 action\nexport default counterSlice.reducer;\n')),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"\u5728\u524d\u7aef\u4ecb\u9762\u4e2d\u4f7f\u7528 Redux Toolkit \u7684 Counter Slice \u908f\u8f2f")),(0,a.kt)("p",null,"\u5728 src \u65b0\u589e\u4e00\u500b components \u7684\u8cc7\u6599\u593e\uff0c\u4e26\u65b0\u589e Counter.tsx \u6a94\u6848"),(0,a.kt)("p",null,"useSelector \u548c useDispatch \u662f react-redux \u5957\u4ef6\u63d0\u4f9b\u7684 Hooks\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"useSelector\uff1a \u7528\u4f86\u5f9e Redux store \u4e2d\u9078\u53d6\u72c0\u614b\u503c\u7684 Hook\u3002\u5b83\u63a5\u53d7\u4e00\u500b\u9078\u64c7\u5668\u51fd\u5f0f (selector function) \u4f5c\u70ba\u53c3\u6578\uff0c\u4e26\u4e14\u56de\u50b3\u9078\u64c7\u5668\u51fd\u5f0f\u6240\u9078\u53d6\u7684 Redux store \u4e2d\u7684\u72c0\u614b\u503c\u3002\u6bcf\u7576\u9078\u64c7\u5668\u51fd\u5f0f\u6240\u9078\u53d6\u7684\u72c0\u614b\u503c\u767c\u751f\u8b8a\u5316\u6642\uff0cReact \u7d44\u4ef6\u6703\u91cd\u65b0\u6e32\u67d3\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"useDispatch : react-redux \u63d0\u4f9b\u7684 Hook\uff0c\u7528\u65bc\u7372\u53d6 Redux store \u7684 dispatch \u51fd\u5f0f\uff0c\u5728 React component \u4e2d\u767c\u9001 action \u5230 Redux store\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/Components/Counter.tsx" showLineNumbers',title:'"src/Components/Counter.tsx"',showLineNumbers:!0},'// import  React Redux \u4e2d\u7684 useSelector \u548c useDispatch hooks\nimport { useSelector, useDispatch } from "react-redux";\nimport {\n  increment, //\u589e\u52a0counter\u7684action\n  decrement, //\u6e1b\u5c11counter\u7684action\n  selectCounter, // \u9078\u53d6counter\u503c\u7684 selector\n} from "../features/counter/counterSlice";\n\nconst Counter = () => {\n  // \u4f7f\u7528 useSelector \u7372\u53d6selectCounter selector \u7684\u503c \uff0c\u4e26\u8ce6\u4e88\u7d66\u8b8a\u6578count\n  const count = useSelector(selectCounter);\n  // \u5f9euseDispatch hooks \u53d6\u5f97dispatch\u51fd\u5f0f\uff0c\u4e26\u8ce6\u4e88\u7d66\u8b8a\u6578dispatch \uff0c\u7528\u4f86\u767c\u9001action\u7d66redux store \u9032\u800c\u89f8\u767c\u76f8\u5c0d\u61c9\u7684reducer\n  const dispatch = useDispatch();\n\n  return (\n    <div>\n      <div>\n        <button aria-label="Increment value" onClick={() => dispatch(increment())}>\n          Increment\n        </button>\n        <span>{count.value}</span>\n        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>\n          Decrement\n        </button>\n        <p style={{ fontSize: "20px" }}>count\uff1a{`${count.value}`}</p>\n      </div>\n    </div>\n  );\n};\n\nexport default Counter;\n')),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"\u63a5\u8457\u518d\u5c07 Counter component \u5728 App.tsx import \u5373\u53ef\u4ee5\u986f\u793a\u525b\u525b\u900f\u7528 Redux Toolkit \u7684\u6210\u679c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx" showLineNumbers',title:'"App.tsx"',showLineNumbers:!0},'import React from "react";\nimport "./App.css";\nimport Counter from "./components/Counter";\n\nfunction App() {\n  return (\n    <div className="App">\n      <Counter />\n    </div>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("h3",{id:"\u6bd4\u8f03-redux-\u548c-react-usecontext"},"\u6bd4\u8f03 Redux \u548c React useContext"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8907\u96dc\u5ea6\u548c\u5b78\u7fd2\u66f2\u7dda\uff1aRedux \u76f8\u5c0d\u4f86\u8aaa\u6bd4\u8f03\u8907\u96dc\uff0c\u9700\u8981\u5b78\u7fd2\u4e00\u4e9b\u984d\u5916\u7684\u6982\u5ff5\uff0c\u4f8b\u5982 reducers\u3001actions \u548c Redux store\u3002\u800c React useContext \u5247\u76f8\u5c0d\u7c21\u55ae\uff0c\u53ea\u9700\u4f7f\u7528 React \u7684 Hooks API \u5373\u53ef\u3002\u5c0d\u65bc\u65b0\u624b\u958b\u767c\u8005\u6216\u8005\u6642\u9593\u7dca\u8feb\u7684\u5c08\u6848\uff0cReact useContext \u53ef\u80fd\u66f4\u5bb9\u6613\u4e0a\u624b\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u53ef\u7dad\u8b77\u6027\u548c\u64f4\u5c55\u6027\uff1aRedux \u63d0\u4f9b\u4e86\u4e00\u7a2e\u7d44\u7e54\u548c\u7ba1\u7406\u5168\u57df\u72c0\u614b\u7684\u65b9\u5f0f\uff0c\u5c0d\u65bc\u5927\u578b\u61c9\u7528\u6216\u8005\u9700\u8981\u5171\u4eab\u72c0\u614b\u7684\u591a\u500b\u7d44\u4ef6\u4f86\u8aaa\uff0cRedux \u7684\u7d44\u7e54\u548c\u64f4\u5c55\u6027\u66f4\u597d\u3002React useContext \u5247\u8f03\u9069\u5408\u5c0f\u578b\u61c9\u7528\u6216\u8005\u529f\u80fd\u8f03\u7c21\u55ae\u7684\u60c5\u5883\uff0c\u53ef\u80fd\u5728\u64f4\u5c55\u6027\u548c\u53ef\u7dad\u8b77\u6027\u65b9\u9762\u6709\u4e9b\u9650\u5236\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6027\u80fd\u548c\u6548\u80fd\uff1aRedux \u7684\u61c9\u7528\u4e2d\u5fc3\u5316\u7ba1\u7406\u72c0\u614b\u7684\u65b9\u5f0f\u53ef\u4ee5\u5e6b\u52a9\u512a\u5316\u6027\u80fd\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3\u3002\u800c React useContext \u6bcf\u6b21\u5728\u4e0a\u5c64\u7d44\u4ef6\u66f4\u65b0\u6642\u90fd\u6703\u91cd\u65b0\u6e32\u67d3\uff0c\u53ef\u80fd\u5c0d\u6027\u80fd\u7522\u751f\u4e00\u5b9a\u7684\u5f71\u97ff\u3002\u5c0d\u65bc\u5c0d\u6027\u80fd\u8981\u6c42\u8f03\u9ad8\u7684\u61c9\u7528\uff0cRedux \u53ef\u80fd\u66f4\u9069\u5408\u3002"))),(0,a.kt)("h4",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50\uff1a"),(0,a.kt)("p",null,"Redux \u548c React useContext \u90fd\u662f\u7528\u65bc React \u61c9\u7528\u4e2d\u7ba1\u7406\u72c0\u614b\u7684\u89e3\u6c7a\u65b9\u6848\uff0c\u9078\u64c7\u54ea\u4e00\u7a2e\u9700\u8981\u6839\u64da\u5177\u9ad4\u7684\u61c9\u7528\u9700\u6c42\u3001\u958b\u767c\u5718\u968a\u7684\u7d93\u9a57\u4ee5\u53ca\u5c08\u6848\u7684\u6642\u9593\u548c\u9810\u7b97\u4f86\u505a\u6c7a\u7b56\u3002\u800c Redux Toolkit \u5247\u63d0\u4f9b\u4e86\u4e00\u7a2e\u7c21\u5316\u548c\u6a19\u6e96\u5316\u7684\u65b9\u5f0f\u4f86\u4f7f\u7528 Redux\uff0c\u53ef\u4ee5\u5e6b\u52a9\u958b\u767c\u8005\u66f4\u5feb\u901f\u3001\u66f4\u9ad8\u6548\u5730\u958b\u767c Redux \u61c9\u7528\u3002"),(0,a.kt)("p",null,"Redux \u7684\u61c9\u7528\u4e2d\u5fc3\u5316\u7ba1\u7406\u72c0\u614b\u7684\u65b9\u5f0f\u53ef\u4ee5\u5e6b\u52a9\u512a\u5316\u6027\u80fd\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3\u3002Redux \u4f7f\u7528\u4e86 immutability\uff08\u4e0d\u53ef\u8b8a\u6027\uff09\u7684\u6982\u5ff5\uff0c\u901a\u904e\u4e0d\u76f4\u63a5\u4fee\u6539\u72c0\u614b\u5c0d\u8c61\uff0c\u800c\u662f\u8fd4\u56de\u65b0\u7684\u72c0\u614b\u5c0d\u8c61\uff0c\u6e1b\u5c11\u4e86\u91cd\u65b0\u6e32\u67d3\u7684\u6b21\u6578\uff0c\u63d0\u5347\u4e86\u6548\u80fd\u3002\n\u800c React useContext \u5728\u6bcf\u6b21\u4e0a\u5c64\u7d44\u4ef6\u66f4\u65b0\u6642\u90fd\u6703\u91cd\u65b0\u6e32\u67d3\uff0c\u53ef\u80fd\u5c0d\u6027\u80fd\u7522\u751f\u4e00\u5b9a\u7684\u5f71\u97ff\u3002\u56e0\u6b64\uff0c\u7576\u61c9\u7528\u898f\u6a21\u8f03\u5927\uff0c\u7d44\u4ef6\u5c64\u7d1a\u7d50\u69cb\u8907\u96dc\uff0c\u4e14\u9700\u8981\u9ad8\u6027\u80fd\u7684\u60c5\u5883\u4e0b\uff0cRedux \u53ef\u80fd\u66f4\u9069\u5408\u3002"),(0,a.kt)("p",null,"\u800c\u7d93\u904e react \u4e0d\u65b7\u5730\u767c\u5c55\u8fed\u4ee3\u4e4b\u5f8c\uff0cReact useContext \u4e5f\u53ef\u4ee5\u5728\u9069\u7576\u7684\u60c5\u5883\u4e0b\u548c\u8f03\u5c0f\u898f\u6a21\u7684\u5c08\u6848\u63d0\u4f9b\u826f\u597d\u7684\u6027\u80fd\u8868\u73fe\uff0c\u5c0d\u65bc\u5c0f\u578b\u61c9\u7528\u6216\u8005\u529f\u80fd\u8f03\u7c21\u55ae\u7684\u60c5\u5883\uff0cReact useContext \u6703\u66f4\u52a0\u7c21\u55ae\u548c\u65b9\u4fbf\uff0c\u7531\u65bc\u898f\u6a21\u4e0d\u5927\u4e14\u73fe\u4eca\u7cfb\u7d71\u904b\u884c\u7684\u88dd\u7f6e\u548c\u7db2\u8def\u901f\u5ea6\u90fd\u6709\u6240\u63d0\u5347\u4e0b\uff0cReact useContext \u53ef\u4ee5\u662f\u4e00\u500b\u65b9\u4fbf\u3001\u8f15\u91cf\u7d1a\u4e14\u9ad8\u6548\u7684\u72c0\u614b\u7ba1\u7406\u65b9\u6848\u3002"))}m.isMDXComponent=!0}}]);