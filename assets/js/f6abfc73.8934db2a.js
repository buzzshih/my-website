"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8906],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},u="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||y[m]||o;return n?r.createElement(k,p(p({ref:e},s),{},{components:n})):r.createElement(k,p({ref:e},s))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[u]="string"==typeof t?t:a,p[1]=i;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5232:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={authors:"Buzz",name:"Buzz",title:"[JS] Objects Prototypes",tags:["Javascript"]},p="JavaScript Objects Prototype \u539f\u578b",i={unversionedId:"JavaScript/ObjectsPrototypes",id:"JavaScript/ObjectsPrototypes",title:"[JS] Objects Prototypes",description:"\u672c\u6587\u7ae0\u5167\u5bb9\u5747\u4f86\u81ea codeguage JavaScript \u6587\u4ef6\uff1a",source:"@site/docs/JavaScript/ObjectsPrototypes.md",sourceDirName:"JavaScript",slug:"/JavaScript/ObjectsPrototypes",permalink:"/my-website/JavaScript/ObjectsPrototypes",draft:!1,tags:[{label:"Javascript",permalink:"/my-website/tags/javascript"}],version:"current",frontMatter:{authors:"Buzz",name:"Buzz",title:"[JS] Objects Prototypes",tags:["Javascript"]},sidebar:"tutorialSidebar",previous:{title:"[JS] Hoisting",permalink:"/my-website/JavaScript/Hositing"},next:{title:"Promise \u7b46\u8a18",permalink:"/my-website/JavaScript/Promise"}},l={},c=[{value:"tags: <code>JavaScript</code>",id:"tags-javascript",level:6},{value:"\u7b46\u8a18\u91cd\u9ede",id:"\u7b46\u8a18\u91cd\u9ede",level:2},{value:'<span id="section1">\u56de\u9867\u5728\u5efa\u69cb\u51fd\u5f0f\u4e3b\u9ad4\u4e2d\u5b9a\u7fa9\u65b9\u6cd5\u7684\u554f\u984c</span>',id:"\u56de\u9867\u5728\u5efa\u69cb\u51fd\u5f0f\u4e3b\u9ad4\u4e2d\u5b9a\u7fa9\u65b9\u6cd5\u7684\u554f\u984c",level:2},{value:"\u4ec0\u9ebc\u4e8b\u5efa\u69cb\u51fd\u5f0f( constructor )\u5462\uff1f",id:"\u4ec0\u9ebc\u4e8b\u5efa\u69cb\u51fd\u5f0f-constructor-\u5462",level:3},{value:'<span id="section2">\u4ec0\u9ebc\u662f Prototpye</span>',id:"\u4ec0\u9ebc\u662f-prototpye",level:2},{value:'<span id="section3">\u5167\u90e8[Prototype]\u5c6c\u6027</span>',id:"\u5167\u90e8prototype\u5c6c\u6027",level:2}],s={toc:c},u="wrapper";function y(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"javascript-objects-prototype-\u539f\u578b"},"JavaScript Objects Prototype \u539f\u578b"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u7ae0\u5167\u5bb9\u5747\u4f86\u81ea codeguage JavaScript \u6587\u4ef6\uff1a"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"JavaScript Objects - Prototypes : ",(0,a.kt)("a",{parentName:"li",href:"https://www.codeguage.com/courses/js/objects-prototypes"},"https://www.codeguage.com/courses/js/objects-prototypes")))),(0,a.kt)("h6",{id:"tags-javascript"},"tags: ",(0,a.kt)("inlineCode",{parentName:"h6"},"JavaScript")),(0,a.kt)("h2",{id:"\u7b46\u8a18\u91cd\u9ede"},"\u7b46\u8a18\u91cd\u9ede"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#section1"},"\u56de\u9867\u5728\u5efa\u69cb\u51fd\u5f0f\u4e3b\u9ad4\u4e2d\u5b9a\u7fa9\u65b9\u6cd5\u7684\u554f\u984c")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#section2"},"\u4ec0\u9ebc\u662f Prototype \u539f\u578b")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#section3"},"\u5167\u90e8[[Prototype]]\u5c6c\u6027")),(0,a.kt)("li",{parentName:"ol"},"Object.create() \u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ol"},"\u539f\u578b\u93c8 ( Prototype chains )"),(0,a.kt)("li",{parentName:"ol"},"\u5c6c\u6027\u6aa2\u7d22\u548c\u8ce6\u503c\u6a5f\u5236"),(0,a.kt)("li",{parentName:"ol"},"\u81ea\u6709 vs. \u7e7c\u627f\u7684\u5c6c\u6027"),(0,a.kt)("li",{parentName:"ol"},"in \u904b\u7b97\u5b50\u7684\u5167\u90e8\u904b\u4f5c"),(0,a.kt)("li",{parentName:"ol"},"\u51fd\u5f0f\u7684 prototype \u5c6c\u6027"),(0,a.kt)("li",{parentName:"ol"},"\u539f\u578b\u7e7c\u627f ( Prototypal inheritance )"),(0,a.kt)("li",{parentName:"ol"},"\u900f\u904e Object.getPrototypeOf() \u548c proto \u6aa2\u7d22\u539f\u578b"),(0,a.kt)("li",{parentName:"ol"},"\u900f\u904e Object.setPrototypeOf() \u548c proto \u8a2d\u7f6e\u539f\u578b")),(0,a.kt)("h2",{id:"\u56de\u9867\u5728\u5efa\u69cb\u51fd\u5f0f\u4e3b\u9ad4\u4e2d\u5b9a\u7fa9\u65b9\u6cd5\u7684\u554f\u984c"},(0,a.kt)("span",{id:"section1"},"\u56de\u9867\u5728\u5efa\u69cb\u51fd\u5f0f\u4e3b\u9ad4\u4e2d\u5b9a\u7fa9\u65b9\u6cd5\u7684\u554f\u984c")),(0,a.kt)("h3",{id:"\u4ec0\u9ebc\u4e8b\u5efa\u69cb\u51fd\u5f0f-constructor-\u5462"},"\u4ec0\u9ebc\u4e8b\u5efa\u69cb\u51fd\u5f0f( constructor )\u5462\uff1f"),(0,a.kt)("p",null,"\u7c21\u55ae\u4f86\u8aaa\uff0c\u5efa\u69cb\u51fd\u5f0f\u53c8\u7a31\u70ba\u69cb\u9020\u51fd\u5f0f\u5c31\u662f\u4e00\u500b Object \u7684\u6a21\u677f\uff0c\u5728\u5efa\u69cb\u51fd\u5f0f\u4e2d\u63cf\u8ff0\u53ca\u5b9a\u7fa9 Object \u7d50\u69cb\u548c\u5c6c\u6027\uff0c\u4e26\u53ef\u4ee5\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"new")," \u95dc\u9375\u5b57\u5c07 Object \u5be6\u9ad4\u5316\u751f\u7522\u51fa\u4f86\uff0c\u4e5f\u5c31\u662f\u5be6\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u5efa\u69cb\u51fd\u5f0f Point \u6709 x \u3001y\u3001 setTo() \u3001logMyData() \u5c6c\u6027\nfunction Point(x = 0, y = 0) {\n  this.x = x;\n  this.y = y;\n\n  this.setTo = function (x, y) {\n    this.x = x;\n    this.y = y;\n  };\n\n  this.logMyData = () => {\n    console.log("x:", x, "y:", y);\n  };\n}\n\n// \u4f7f\u7528\u5efa\u69cb\u51fd\u5f0f\u5efa\u7acb Object \u5be6\u4f8b\n\nconst point1 = new Point(1, 2);\nconst point2 = new Point(10, 20);\n\n// \u4e0d\u540c\u5be6\u4f8b\u51fa\u4f86\u7684Object \u90fd\u8f38\u51fa\u4e0d\u540c\u7684\u7d50\u679c\uff0c\u6bcf\u500b\u5be6\u4f8b\u51fa\u4f86\u7684 Object \u90fd\u6709\u81ea\u5df1\u7368\u7acb\u7684\u5c6c\u6027\npoint1.logMyData(); // x: 1 y: 2  .\npoint2.logMyData(); // x: 10 y: 20.\n')),(0,a.kt)("p",null,"\u800c\u5728 JavaScript \u4e2d\u5efa\u7acb\u5be6\u4f8b\u6700\u7c21\u55ae\u4e14\u6709\u6548\u7387\u7684\u65b9\u6cd5\u5c31\u662f\u4f7f\u7528\u539f\u578b ( prototype ) \u4f86\u5b9a\u7fa9\u65b9\u6cd5\uff0c\u800c\u975e\u76f4\u63a5\u5728\u5efa\u69cb\u51fd\u5f0f\u4e2d\u76f4\u63a5\u5b9a\u7fa9\u65b9\u6cd5\uff0c\u56e0\u70ba\u6bcf\u7576\u5be6\u4f8b\u51fa\u4f86\u90fd\u662f\u4e00\u500b\u7368\u7acb\u7684\u5c6c\u6027\uff0c\u91cd\u8907\u5275\u5efa\u6703\u4f54\u8a18\u61b6\u9ad4\u3002"),(0,a.kt)("h2",{id:"\u4ec0\u9ebc\u662f-prototpye"},(0,a.kt)("span",{id:"section2"},"\u4ec0\u9ebc\u662f Prototpye")),(0,a.kt)("p",null,"\u4ecb\u7d39 Prototype \u4e4b\u524d\u8981\u5148\u8b1b\u7269\u4ef6\u5c0e\u5411\u7a0b\u5f0f\u8a9e\u8a00\u5206\u70ba\u5169\u5927\u985e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u57fa\u65bc class \u985e\u5225\u7684\u7269\u4ef6\u5c0e\u5411\u8a9e\u8a00\uff08\u4f8b\u5982\uff1aJava\uff0cC#\uff0cPython\uff09 \u3002"),(0,a.kt)("li",{parentName:"ol"},"\u57fa\u65bc Prototype \u7684\u7269\u4ef6\u5c0e\u5411\u8a9e\u8a00\uff08\u4f8b\u5982:JavaScript\uff09\u3002")),(0,a.kt)("p",null,"\u800c\u7d93\u5178\u7684 OOP \u8a9e\u8a00\uff0c\u985e\u5225\u6703\u5f9e\u5176\u4ed6\u985e\u5225\u7e7c\u627f\u5176\u5c6c\u6027\u6216\u662f\u65b9\u6cd5\u7b49\u3002"),(0,a.kt)("p",null,"\u800c\u50cf JavaScript \u9019\u7a2e\u57fa\u65bc Object \u7269\u4ef6\u4e5f\u5b58\u5728\u7e7c\u627f\uff0c\u5f9e\u7269\u4ef6\u7e7c\u627f\u5176\u5c6c\u6027\u548c\u65b9\u6cd5\u7b49\u3002"),(0,a.kt)("h2",{id:"\u5167\u90e8prototype\u5c6c\u6027"},(0,a.kt)("span",{id:"section3"},"\u5167\u90e8[","[Prototype]","]\u5c6c\u6027")),(0,a.kt)("p",null,"JavaScript \u4e2d\u3001\u6bcf\u4e00\u500b\u7269\u4ef6\u5167\u90e8\u90fd\u6709\u9019\u6a23\u7684\u4e00\u500b\u5167\u90e8\u5c6c\u6027 ",(0,a.kt)("inlineCode",{parentName:"p"},"[[Prototype]]"),"\uff0c\u9019\u500b\u5c6c\u6027\u4fdd\u5b58\u4e86\u8a72\u7269\u4ef6\u5c0d\u5176\u539f\u578b\u7684\u5f15\u7528\u3002\n\u800c\u9019\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," \u9019\u7a2e\u8868\u793a\u65b9\u5f0f\u53ea\u662f\u8b93 JavaScript \u53ef\u4ee5 Follow ECMAScript \u7684\u898f\u7bc4\uff0c\u5be6\u4f5c\u4e0a\u4e26\u4e0d\u6703\u4f7f\u7528\u5230\u9019\u90e8\u5206\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const a = { x: 1, y: 2 };\nconst b = { p: 10, q: 20 };\n")),(0,a.kt)("p",null,"\u5047\u8a2d ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," \u7684\u539f\u578b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"\uff0c\u90a3\u9ebc",(0,a.kt)("inlineCode",{parentName:"p"},"b"),"\u5167\u90e8\u6703\u9577\u985e\u4f3c\u9019\u6a23\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"b: {\n    p: 10,\n    q: 20,\n    [[Prototype]]: a\n}\n")),(0,a.kt)("p",null,"\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"const testArr = [1,2,-5]"),"\uff0c\u5176\u5167\u90e8\u6703\u9577\u985e\u4f3c\u9019\u6a23\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"testArr:{\n  0 : 1 ,\n  1 : 2 ,\n  2 : -5 ,\n  length : 3 ,\n  [[Prototype]] : Array.prototype\n}\n")),(0,a.kt)("p",null,"\u7576\u6211\u5011\u7528\u5ba3\u544a\u8b8a\u6578\u7684\u65b9\u5f0f\uff0c\u5efa\u7acb\u4e00\u500b Object \u6642 ",(0,a.kt)("inlineCode",{parentName:"p"},"const obj = {x:1,y:2}")," \uff0c\u5176\u5167\u90e8\u6703\u9577\u985e\u4f3c\u9019\u6a23\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"obj:{\nx : 1 ,\ny : 2 ,\n[[Prototype]]: Object.prototype\n}\n")))}y.isMDXComponent=!0}}]);