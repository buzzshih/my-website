"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6906],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(t),y=l,f=s["".concat(p,".").concat(y)]||s[y]||u[y]||i;return t?r.createElement(f,a(a({ref:n},m),{},{components:t})):r.createElement(f,a({ref:n},m))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=y;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(7462),l=(t(7294),t(3905));const i={authors:"MichaelJack",name:"Stone",title:"[Concept]\u6dfa\u8ac7\u7269\u4ef6\u5c0e\u5411\u95dc\u65bc\u7e7c\u627f\u9019\u4ef6\u4e8b\u60c5",tags:["OOP","Inheritance","Python","Interface","Composition","Duck Typing","Multiple Inheritance"]},a="\u4ee5 python \u70ba\u4f8b - \u6dfa\u8ac7\u7269\u4ef6\u5c0e\u5411\u4e2d\u7684\u7d44\u5408\u548c\u4ecb\u9762\u6982\u5ff5\u53ca\u591a\u91cd\u7e7c\u627f",o={unversionedId:"Python/OPPCompositionMultipleInheritance",id:"Python/OPPCompositionMultipleInheritance",title:"[Concept]\u6dfa\u8ac7\u7269\u4ef6\u5c0e\u5411\u95dc\u65bc\u7e7c\u627f\u9019\u4ef6\u4e8b\u60c5",description:"\u5728\u7269\u4ef6\u5c0e\u5411\u7684\u7a0b\u5f0f\u8a9e\u8a00\u4e2d\uff0c\u7d44\u5408\uff08Composition\uff09\u548c\u4ecb\u9762\uff08Interface\uff09\u662f\u5169\u500b\u91cd\u8981\u7684\u6982\u5ff5\u3002",source:"@site/docs/Python/OPPCompositionMultipleInheritance.md",sourceDirName:"Python",slug:"/Python/OPPCompositionMultipleInheritance",permalink:"/en/Python/OPPCompositionMultipleInheritance",draft:!1,tags:[{label:"OOP",permalink:"/en/tags/oop"},{label:"Inheritance",permalink:"/en/tags/inheritance"},{label:"Python",permalink:"/en/tags/python"},{label:"Interface",permalink:"/en/tags/interface"},{label:"Composition",permalink:"/en/tags/composition"},{label:"Duck Typing",permalink:"/en/tags/duck-typing"},{label:"Multiple Inheritance",permalink:"/en/tags/multiple-inheritance"}],version:"current",frontMatter:{authors:"MichaelJack",name:"Stone",title:"[Concept]\u6dfa\u8ac7\u7269\u4ef6\u5c0e\u5411\u95dc\u65bc\u7e7c\u627f\u9019\u4ef6\u4e8b\u60c5",tags:["OOP","Inheritance","Python","Interface","Composition","Duck Typing","Multiple Inheritance"]},sidebar:"tutorialSidebar",previous:{title:"[JS] \u8b8a\u6578\u5ba3\u544a",permalink:"/en/Javascript/VariableDeclarations"},next:{title:"[mindAR] \u4ee5mindAR\u5be6\u73fewebAR",permalink:"/en/WebAR/mindAR"}},p={},c=[{value:"\u7d44\u5408\uff08Composition\uff09\uff1a",id:"\u7d44\u5408composition",level:3},{value:"\u4ecb\u9762\uff08Interface\uff09\uff1a",id:"\u4ecb\u9762interface",level:3},{value:"\u4ecb\u9762\uff08Interface\uff09\u5230\u5e95\u662f\u5728\u4ec0\u9ebc\u4f7f\u7528\u60c5\u5883\u4e0b\u6703\u4f7f\u7528\uff1f",id:"\u4ecb\u9762interface\u5230\u5e95\u662f\u5728\u4ec0\u9ebc\u4f7f\u7528\u60c5\u5883\u4e0b\u6703\u4f7f\u7528",level:4},{value:"\u4ec0\u9ebc\u662f\u9d28\u5b50\u985e\u578b\uff08Duck Typing\uff09\uff1f",id:"\u4ec0\u9ebc\u662f\u9d28\u5b50\u985e\u578bduck-typing",level:3},{value:"\u5728 Python \u4ecb\u9762\u8f03\u5c11\u4f7f\u7528\u4e5f\u5e7e\u4e4e\u5f88\u5c11\u4f7f\u7528",id:"\u5728-python-\u4ecb\u9762\u8f03\u5c11\u4f7f\u7528\u4e5f\u5e7e\u4e4e\u5f88\u5c11\u4f7f\u7528",level:3},{value:"\u90a3\u5230\u5e95\u4ec0\u9ebc\u662f\u591a\u91cd\u7e7c\u627f\uff1f",id:"\u90a3\u5230\u5e95\u4ec0\u9ebc\u662f\u591a\u91cd\u7e7c\u627f",level:3}],m={toc:c},s="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(s,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4ee5-python-\u70ba\u4f8b---\u6dfa\u8ac7\u7269\u4ef6\u5c0e\u5411\u4e2d\u7684\u7d44\u5408\u548c\u4ecb\u9762\u6982\u5ff5\u53ca\u591a\u91cd\u7e7c\u627f"},"\u4ee5 python \u70ba\u4f8b - \u6dfa\u8ac7\u7269\u4ef6\u5c0e\u5411\u4e2d\u7684\u7d44\u5408\u548c\u4ecb\u9762\u6982\u5ff5\u53ca\u591a\u91cd\u7e7c\u627f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u7269\u4ef6\u5c0e\u5411\u7684\u7a0b\u5f0f\u8a9e\u8a00\u4e2d\uff0c\u7d44\u5408\uff08Composition\uff09\u548c\u4ecb\u9762\uff08Interface\uff09\u662f\u5169\u500b\u91cd\u8981\u7684\u6982\u5ff5\u3002\n\u4ee5\u4e0b\u958b\u59cb\u89e3\u91cb\u4e00\u4e0b\u9019\u5169\u500b\u91cd\u8981\u6982\u5ff5")),(0,l.kt)("p",null,"\u5728 Python \u4e2d\uff0c\u7d44\u5408\uff08Composition\uff09\u548c\u4ecb\u9762\uff08Interface\uff09\uff0c\u4f46\u5728 Python \u4e2d\u5e7e\u4e4e\u662f\u4e0d\u6703\u770b\u5230\u4ecb\u9762\u7684\u5b58\u5728\u7684\uff0c\u4e0b\u9762\u518d\u597d\u597d\u89e3\u91cb\u4e00\u4e0b\u3002"),(0,l.kt)("h3",{id:"\u7d44\u5408composition"},"\u7d44\u5408\uff08Composition\uff09\uff1a"),(0,l.kt)("p",null,"\u7d44\u5408\u662f\u6307\u5728\u4e00\u500b\u985e\u5225\u4e2d\u4f7f\u7528\u5176\u4ed6\u985e\u5225\u7684\u5be6\u4f8b\u4f5c\u70ba\u5176\u5c6c\u6027\u3002\n\u9019\u7a2e\u65b9\u5f0f\u53ef\u4ee5\u5be6\u73fe\u5c07\u591a\u500b\u985e\u5225\u7d44\u5408\u6210\u4e00\u500b\u66f4\u5927\u7684\u985e\u5225\uff0c\u4ee5\u7528\u4f86\u5be6\u73fe\u8907\u96dc\u7684\u529f\u80fd\u7d44\u5408\u3002\n\u4f8b\u5982\uff0c\u4e00\u500b\u6c7d\u8eca\u53ef\u4ee5\u5305\u542b\u591a\u500b\u96f6\u4ef6\u6216\u5c0f\u7cfb\u7d71\uff0c\u5982\u5f15\u64ce\u3001\u8f2a\u80ce\u3001\u61f8\u540a\u7cfb\u7d71\u7b49\uff0c\u9019\u4e9b\u96f6\u4ef6\u548c\u5c0f\u7cfb\u7d71\u53ef\u4ee5\u4f5c\u70ba\u6c7d\u8eca\u985e\u5225\u7684\u5c6c\u6027\u3002\u900f\u904e\u7d44\u5408\uff0c\u6211\u5011\u53ef\u4ee5\u5728\u6c7d\u8eca\u985e\u5225\u4e2d\u4f7f\u7528\u9019\u4e9b\u96f6\u4ef6\u548c\u5c0f\u7cfb\u7d71\uff0c\u4e26\u5be6\u73fe\u6c7d\u8eca\u7684\u76f8\u95dc\u529f\u80fd\u3002\u5982\u679c\u672a\u4f86\u9700\u8981\u4fee\u6539\u6216\u64f4\u5c55\u6c7d\u8eca\u7684\u529f\u80fd\uff0c\u6211\u5011\u53ea\u9700\u95dc\u6ce8\u76f8\u61c9\u7684\u7d44\u4ef6\u6216\u6c7d\u8eca\u985e\u5225\u672c\u8eab\uff0c\u800c\u4e0d\u9700\u8981\u4fee\u6539\u6574\u500b\u7a0b\u5f0f\u78bc\uff0c\u9019\u63d0\u9ad8\u4e86\u7a0b\u5f0f\u78bc\u7684\u91cd\u7528\u6027\u548c\u7dad\u8b77\u6027\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u500b\u7c21\u55ae\u7684\u7d44\u5408\uff08Composition\uff09\u7bc4\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'class Engine:\n    def start(self):\n        print("\u5f15\u64ce\u555f\u52d5")\n\nclass Car:\n    def __init__(self):\n        self.engine = Engine()  # \u4f7f\u7528Engine\u985e\u5225\u7684\u5be6\u4f8b\u4f5c\u70baCar\u985e\u5225\u7684\u5c6c\u6027\n\n    def start(self):\n        print("\u8eca\u5b50\u555f\u52d5")\n        self.engine.start()  # \u8abf\u7528Engine\u985e\u5225\u7684start()\u65b9\u6cd5\n\nmy_car = Car()\nmy_car.start()\n# \u8f38\u51fa\uff1a\n# \u8eca\u5b50\u555f\u52d5\n# \u5f15\u64ce\u555f\u52d5\n')),(0,l.kt)("h3",{id:"\u4ecb\u9762interface"},"\u4ecb\u9762\uff08Interface\uff09\uff1a"),(0,l.kt)("p",null,"\u53ef\u4ee5\u628a\u5b83\u60f3\u50cf\u6210\u4e00\u500b\u5408\u7d04\u6216\u898f\u5b9a\uff0c\u898f\u5b9a\u4e86\u985e\u5225\uff08\u6216\u7269\u4ef6\uff09\u61c9\u8a72\u5be6\u73fe\u54ea\u4e9b\u65b9\u6cd5\u6216\u64c1\u6709\u54ea\u4e9b\u5c6c\u6027\uff0c\u5c31\u50cf\u751f\u6d3b\u4e2d\u7684\u5408\u7d04\u6703\u898f\u5b9a\u4e86\u96d9\u65b9\u61c9\u8a72\u5c65\u884c\u7684\u7fa9\u52d9\u4e00\u6a23\u3002"),(0,l.kt)("p",null,"\u5728\u7a0b\u5f0f\u8a2d\u8a08\u4e2d\uff0c\u4ecb\u9762\u901a\u5e38\u662f\u4e00\u500b\u62bd\u8c61\u7684\u985e\u5225\u6216\u985e\u5225\u7684\u96c6\u5408\uff0c\u5176\u4e2d\u5b9a\u7fa9\u4e86\u4e00\u7d44\u65b9\u6cd5\u6216\u6709\u54ea\u4e9b\u5c6c\u6027\uff0c\u4f46\u4e26\u4e0d\u5be6\u73fe\u5177\u9ad4\u7684\u5167\u5bb9(\u4e5f\u5c31\u662f\u8aaa\u4e0d\u6703\u5be6\u4f5c\u6216\u662f\u76f4\u63a5\u7522\u751f\u4e00\u500b\u5be6\u4f8b\u7684\u7269\u4ef6\u51fa\u4f86)\u3002\u800c\u985e\u5225\u53ef\u4ee5\u5be6\u73fe\u4e00\u500b\u6216\u591a\u500b\u4ecb\u9762\uff0c\u8868\u793a\u5b83\u5011\u7b26\u5408\u4e86\u9019\u4e9b\u4ecb\u9762\u6240\u5b9a\u7fa9\u7684\u898f\u7bc4\u3002"),(0,l.kt)("p",null,'\u7e7c\u627f\u662f\u4e00\u7a2e\u985e\u5225\u4e4b\u9593\u7684\u5c64\u6b21\u5316\u7d50\u69cb\uff0c\u5176\u4e2d\u5b50\u985e\u5225\u7e7c\u627f\u4e86\u7236\u985e\u5225\u7684\u5c6c\u6027\u548c\u65b9\u6cd5\uff0c\u4e26\u4e14\u53ef\u4ee5\u91cd\u5beb\u6216\u64f4\u5c55\u5b83\u5011\u3002\u7e7c\u627f\u901a\u5e38\u7528\u65bc\u8868\u793a"\u662f\u4e00\u500b"\u7684\u95dc\u4fc2\uff0c\u4f8b\u5982\u8c93\u662f\u4e00\u500b\u52d5\u7269\uff0c\u6240\u4ee5\u8c93\u985e\u5225\u53ef\u4ee5\u7e7c\u627f\u52d5\u7269\u985e\u5225\uff0c\u7e7c\u627f\u5176\u5c6c\u6027\u548c\u65b9\u6cd5\u3002'),(0,l.kt)("h4",{id:"\u4ecb\u9762interface\u5230\u5e95\u662f\u5728\u4ec0\u9ebc\u4f7f\u7528\u60c5\u5883\u4e0b\u6703\u4f7f\u7528"},"\u4ecb\u9762\uff08Interface\uff09\u5230\u5e95\u662f\u5728\u4ec0\u9ebc\u4f7f\u7528\u60c5\u5883\u4e0b\u6703\u4f7f\u7528\uff1f"),(0,l.kt)("p",null,"\u4ecb\u9762\uff08Interface\uff09\u901a\u5e38\u7528\u65bc\u4ee5\u4e0b\u60c5\u5883\uff1a"),(0,l.kt)("p",null,"\u5b9a\u7fa9\u5408\u7d04\uff1a\u4ecb\u9762\u53ef\u4ee5\u5b9a\u7fa9\u4e00\u7d44\u65b9\u6cd5\u3001\u5c6c\u6027\u548c\u4e8b\u4ef6\uff0c\u4f5c\u70ba\u985e\u5225\u4e4b\u9593\u7684\u5408\u7d04\u3002\u985e\u5225\u53ef\u4ee5\u5be6\u73fe\uff08implement\uff09\u9019\u4e9b\u4ecb\u9762\uff0c\u78ba\u4fdd\u5b83\u5011\u64c1\u6709\u76f8\u540c\u7684\u6210\u54e1\u3002\u9019\u6a23\u53ef\u4ee5\u78ba\u4fdd\u5728\u591a\u500b\u985e\u5225\u4e2d\u5be6\u73fe\u76f8\u540c\u7684\u884c\u70ba\uff0c\u63d0\u4f9b\u4e86\u4e00\u7a2e\u7d71\u4e00\u7684\u754c\u9762\u3002"),(0,l.kt)("p",null,"\u64f4\u5c55\u6027\uff1a\u4ecb\u9762\u53ef\u4ee5\u7528\u65bc\u5b9a\u7fa9\u64f4\u5c55\u6027\u7684\u5408\u7d04\uff0c\u4f7f\u5f97\u985e\u5225\u53ef\u4ee5\u5728\u4e0d\u4fee\u6539\u539f\u59cb\u7a0b\u5f0f\u78bc\u7684\u60c5\u6cc1\u4e0b\u9032\u884c\u64f4\u5c55\u3002\u9019\u6a23\u53ef\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u7a0b\u5f0f\u78bc\u7d44\u7e54\u548c\u53ef\u7dad\u8b77\u6027\u3002"),(0,l.kt)("p",null,"\u6a19\u6e96\u5316\uff1a\u4ecb\u9762\u53ef\u4ee5\u7528\u65bc\u5b9a\u7fa9\u6a19\u6e96\u5316\u7684\u5408\u7d04\uff0c\u4f8b\u5982 API \u6216\u5354\u8b70\u3002\u9019\u6a23\u53ef\u4ee5\u78ba\u4fdd\u4e0d\u540c\u7684\u5be6\u73fe\u90fd\u64c1\u6709\u76f8\u540c\u7684\u65b9\u6cd5\u548c\u5c6c\u6027\uff0c\u5f9e\u800c\u9054\u5230\u4e92\u64cd\u4f5c\u6027\u548c\u76f8\u5bb9\u6027\u3002"),(0,l.kt)("p",null,"\u591a\u91cd\u7e7c\u627f\uff1a\u6709\u4e9b\u7a0b\u5f0f\u8a9e\u8a00\u6703\u4e0d\u652f\u63f4\u591a\u91cd\u985e\u5225\u7e7c\u627f\uff0c\u4f46\u53ef\u4ee5\u5be6\u73fe\u591a\u500b\u4ecb\u9762\u3002\u9019\u6a23\u985e\u5225\u53ef\u4ee5\u5be6\u73fe\u591a\u500b\u4ecb\u9762\uff0c\u5f9e\u800c\u5177\u6709\u591a\u500b\u4e0d\u540c\u7684\u884c\u70ba\u548c\u7279\u6027\uff0c",(0,l.kt)("strong",{parentName:"p"},'\u4f46\u4ee5\u9019\u908a Python \u4f86\u8aaa\uff0cPython \u662f\u652f\u6301\u591a\u91cd\u7e7c\u627f\u7684\u8a9e\u8a00\uff0c\u4e26\u4e14 Python \u7684 "\u9d28\u5b50\u985e\u578b\uff08Duck Typing\uff09" \u7279\u6027\u4e5f\u8b93\u985e\u5225\u4e4b\u9593\u7684\u4e92\u52d5\u66f4\u52a0\u9748\u6d3b\uff0c\u4e0d\u9700\u8981\u660e\u78ba\u5730\u8072\u660e\u985e\u5225\u5be6\u73fe\u67d0\u500b\u7279\u5b9a\u7684\u4ecb\u9762\u3002'),"\u3002"),(0,l.kt)("h3",{id:"\u4ec0\u9ebc\u662f\u9d28\u5b50\u985e\u578bduck-typing"},"\u4ec0\u9ebc\u662f\u9d28\u5b50\u985e\u578b\uff08Duck Typing\uff09\uff1f"),(0,l.kt)("p",null,'"\u9d28\u5b50\u985e\u578b\uff08Duck Typing\uff09" \u662f\u4e00\u7a2e\u52d5\u614b\u578b\u5225\u7684\u6982\u5ff5\uff0c\u901a\u5e38\u8207\u7269\u4ef6\u5c0e\u5411\u7a0b\u5f0f\u8a2d\u8a08\uff08OOP\uff09\u76f8\u95dc\u3002'),(0,l.kt)("p",null,'\u5728 Python \u4e2d\uff0c\u4e0d\u9700\u8981\u986f\u5f0f\u5730\u5ba3\u544a\u8b8a\u6578\u7684\u8cc7\u6599\u578b\u5225\uff0c\u800c\u662f\u6839\u64da\u8b8a\u6578\u5728\u904b\u884c\u6642\u7684\u5be6\u969b\u578b\u5225\u4f86\u6c7a\u5b9a\u5176\u8b8a\u6578\u578b\u5225\u548c\u5176\u904b\u7b97\u7d50\u679c\u7522\u751f\u7684\u503c\u3002\n\u9019\u5c31\u50cf\u8aaa\uff0c\u5982\u679c\u4e00\u96bb\u9ce5\u8d70\u8d77\u4f86\u50cf\u9d28\u5b50\u3001\u53eb\u8072\u50cf\u9d28\u5b50\uff0c\u90a3\u9ebc\u6211\u5011\u5c31\u53ef\u4ee5\u628a\u5b83\u7576\u4f5c\u9d28\u5b50\u4f86\u5c0d\u5f85\uff0c\u4e0d\u9700\u8981\u4e8b\u5148\u6aa2\u67e5\u5b83\u662f\u5426\u662f\u9d28\u5b50\u3002\u9019\u7a2e\u65b9\u5f0f\u7a31\u70ba "\u9d28\u5b50\u985e\u578b"\u3002'),(0,l.kt)("p",null,"\u5728 Python \u4e2d\uff0c\u7576\u4f60\u547c\u53eb\u4e00\u500b\u7269\u4ef6\u7684\u65b9\u6cd5\u6642\uff0c\u7a0b\u5f0f\u78bc\u5728\u904b\u884c\u6642\u6703\u5728\u904b\u884c\u6642\u6aa2\u67e5\u8a72\u7269\u4ef6\u662f\u5426\u5177\u6709\u8a72\u65b9\u6cd5\uff0c\u800c\u4e0d\u662f\u5728\u7de8\u8b6f(\u64b0\u5beb\u7a0b\u5f0f\u6642)\u6642\u6aa2\u67e5\u7269\u4ef6\u7684\u578b\u5225\u3002\u53ea\u8981\u7269\u4ef6\u5177\u6709\u76f8\u61c9\u7684\u65b9\u6cd5\uff0c\u4e26\u4e14\u53ef\u4ee5\u6b63\u78ba\u5730\u547c\u53eb\u9019\u4e9b\u65b9\u6cd5\uff0c\u5c31\u88ab\u8996\u70ba\u5177\u6709\u76f8\u540c\u7684\u578b\u5225\u3002"),(0,l.kt)("p",null,"\u9019\u6a23\u7684\u7279\u6027\u4f7f\u5f97 Python \u4e2d\u7684\u591a\u578b\u6027\uff08Polymorphism\uff09\u975e\u5e38\u9748\u6d3b\uff0c\u4e26\u4e14\u4e0d\u9700\u8981\u56b4\u683c\u7684\u578b\u5225\u6aa2\u67e5\u548c\u578b\u5ba3\u544a\u3002\u9019\u8207\u50b3\u7d71\u7684\u975c\u614b\u578b\u5225\u8a9e\u8a00\uff08\u4f8b\u5982 Java\u3001C++\uff09\u4e0d\u540c\uff0c\u5b83\u5011\u5728\u7de8\u8b6f\u6642(\u64b0\u5beb\u7a0b\u5f0f\u6642)\u9700\u8981\u660e\u78ba\u5ba3\u544a\u7269\u4ef6\u7684\u578b\u5225\u3002\u9d28\u5b50\u985e\u578b\uff08Duck Typing\uff09\u8b93 Python \u7684\u7a0b\u5f0f\u78bc\u66f4\u5177\u9748\u6d3b\u6027\u548c\u52d5\u614b\u6027\uff0c\u4f46\u4e5f\u9700\u8981\u958b\u767c\u8005\u81ea\u884c\u78ba\u4fdd\u7269\u4ef6\u7684\u65b9\u6cd5\u4f7f\u7528\u662f\u6b63\u78ba\u7684\uff0c\u5426\u5247\u53ef\u80fd\u5728\u904b\u884c\u6642\u7522\u751f\u932f\u8aa4\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u96a8\u6642\u5275\u5efa\u4e00\u500b\u7269\u4ef6\uff0c\u4e26\u4e14\u5728\u5f8c\u9762\u7684\u7a0b\u5f0f\u78bc\u4e2d\u6839\u64da\u9700\u8981\u96a8\u610f\u6dfb\u52a0\u6216\u4fee\u6539\u7269\u4ef6\u7684\u5c6c\u6027\u548c\u65b9\u6cd5\uff0c\u800c\u4e0d\u9700\u8981\u4e8b\u5148\u5b9a\u7fa9\u5176\u578b\u5225\u6216\u63a5\u53e3\u3002\u9019\u610f\u5473\u8457\u4f60\u53ef\u4ee5\u5728\u7a0b\u5f0f\u78bc\u4e2d\u9748\u6d3b\u5730\u64cd\u4f5c\u7269\u4ef6\u7684\u5c6c\u6027\u548c\u65b9\u6cd5\uff0c\u4e26\u4e14\u6839\u64da\u5be6\u969b\u9700\u6c42\u9032\u884c\u52d5\u614b\u8abf\u6574\uff0c\u800c\u4e0d\u53d7\u56b4\u683c\u7684\u578b\u5225\u6aa2\u67e5\u9650\u5236\u3002"),(0,l.kt)("h3",{id:"\u5728-python-\u4ecb\u9762\u8f03\u5c11\u4f7f\u7528\u4e5f\u5e7e\u4e4e\u5f88\u5c11\u4f7f\u7528"},"\u5728 Python \u4ecb\u9762\u8f03\u5c11\u4f7f\u7528\u4e5f\u5e7e\u4e4e\u5f88\u5c11\u4f7f\u7528"),(0,l.kt)("p",null,"\u5728 Python \u4e2d\uff0c\u56e0\u70ba\u5b83\u652f\u63f4\u591a\u91cd\u7e7c\u627f\u548c\u9d28\u5b50\u985e\u578b\u7279\u6027\uff0c\u6240\u4ee5\u901a\u5e38\u4e0d\u9700\u8981\u50cf\u5176\u4ed6\u8a9e\u8a00\u90a3\u6a23\u4f7f\u7528\u4ecb\u9762\u3002"),(0,l.kt)("p",null,"\u591a\u91cd\u7e7c\u627f\u5141\u8a31\u4e00\u500b\u985e\u5225\u7e7c\u627f\u81ea\u591a\u500b\u7236\u985e\u5225\uff0c\u9019\u8b93\u985e\u5225\u53ef\u4ee5\u76f4\u63a5\u7e7c\u627f\u591a\u500b\u7236\u985e\u5225\u7684\u5c6c\u6027\u548c\u65b9\u6cd5\uff0c\u4e0d\u9700\u8981\u984d\u5916\u7684\u4ecb\u9762\u4f86\u5b9a\u7fa9\u5171\u540c\u7684\u884c\u70ba\u3002"),(0,l.kt)("p",null,"\u800c\u9d28\u5b50\u985e\u578b\u7279\u6027\u5247\u8868\u793a\u5728 Python \u4e2d\uff0c\u7269\u4ef6\u7684\u578b\u5225\u662f\u6839\u64da\u5176\u5be6\u969b\u64c1\u6709\u7684\u5c6c\u6027\u548c\u65b9\u6cd5\u4f86\u5224\u5b9a\u7684\uff0c\u800c\u4e0d\u662f\u4f9d\u8cf4\u65bc\u985e\u5225\u7684\u5b9a\u7fa9\u3002\u53ea\u8981\u7269\u4ef6\u64c1\u6709\u67d0\u500b\u5c6c\u6027\u6216\u65b9\u6cd5\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff0c\u4e0d\u9700\u8981\u7279\u5b9a\u7684\u578b\u5225\u6216\u63a5\u53e3\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\uff0cPython \u4e2d\u7684\u591a\u91cd\u7e7c\u627f\u548c\u9d28\u5b50\u985e\u578b\u7279\u6027\u8b93\u958b\u767c\u8005\u53ef\u4ee5\u66f4\u9748\u6d3b\u5730\u7d44\u7e54\u548c\u4f7f\u7528\u985e\u5225\uff0c\u4e14\u4e0d\u9700\u8981\u50cf\u5176\u4ed6\u8a9e\u8a00\u90a3\u6a23\u4f7f\u7528\u4ecb\u9762\u4f86\u5be6\u73fe\u7279\u5b9a\u7684\u884c\u70ba\u3002\u9019\u4e5f\u662f\u70ba\u4ec0\u9ebc\u5728 Python \u4e2d\uff0c\u4ecb\u9762\u7684\u4f7f\u7528\u76f8\u5c0d\u8f03\u5c11\u7684\u539f\u56e0\u4e4b\u4e00\u3002"),(0,l.kt)("h3",{id:"\u90a3\u5230\u5e95\u4ec0\u9ebc\u662f\u591a\u91cd\u7e7c\u627f"},"\u90a3\u5230\u5e95\u4ec0\u9ebc\u662f\u591a\u91cd\u7e7c\u627f\uff1f"),(0,l.kt)("p",null,"\u8acb\u770b\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u7bc4\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'class Animal:\n    def move(self):\n        print("\u52d5\u7269\u53ef\u4ee5\u79fb\u52d5")\n\nclass Flyable:\n    def fly(self):\n        print("\u53ef\u4ee5\u98db\u884c")\n\nclass Swimmable:\n    def swim(self):\n        print("\u53ef\u4ee5\u6e38\u6cf3")\n\n# Dog \u985e\u5225\u7e7c\u627f\u81ea Animal \u548c Swimmable \u5169\u500b\u7236\u985e\u5225\nclass Dog(Animal, Swimmable):\n    def bark(self):\n        print("\u72d7\u53ef\u4ee5\u5420\u53eb")\n\n# Bird \u985e\u5225\u7e7c\u627f\u81ea Animal \u548c Flyable \u5169\u500b\u7236\u985e\u5225\nclass Bird(Animal, Flyable):\n    def chirp(self):\n        print("\u9ce5\u53ef\u4ee5\u9cf4\u53eb")\n\n# \u5be6\u4f8b\u5316 Dog \u7269\u4ef6\u4e26\u547c\u53eb\u5176\u65b9\u6cd5\nmy_dog = Dog()\nmy_dog.move()  # \u53ef\u4ee5\u547c\u53eb Animal \u7684 move \u65b9\u6cd5\nmy_dog.swim()  # \u53ef\u4ee5\u547c\u53eb Swimmable \u7684 swim \u65b9\u6cd5\nmy_dog.bark()  # \u53ef\u4ee5\u547c\u53eb\u81ea\u5df1\u7684 bark \u65b9\u6cd5\n\n# \u5be6\u4f8b\u5316 Bird \u7269\u4ef6\u4e26\u547c\u53eb\u5176\u65b9\u6cd5\nmy_bird = Bird()\nmy_bird.move()  # \u53ef\u4ee5\u547c\u53eb Animal \u7684 move \u65b9\u6cd5\nmy_bird.fly()   # \u53ef\u4ee5\u547c\u53eb Flyable \u7684 fly \u65b9\u6cd5\nmy_bird.chirp() # \u53ef\u4ee5\u547c\u53eb\u81ea\u5df1\u7684 chirp \u65b9\u6cd5\n')),(0,l.kt)("p",null,"\u5728\u9019\u500b\u7bc4\u4f8b\u4e2d\uff0c\u6211\u5011\u5b9a\u7fa9\u4e86\u4e09\u500b\u985e\u5225\uff1aAnimal\u3001Flyable\u3001Swimmable\u3002Dog \u985e\u5225\u7e7c\u627f\u81ea Animal \u548c Swimmable \u5169\u500b\u7236\u985e\u5225\uff0cBird \u985e\u5225\u7e7c\u627f\u81ea Animal \u548c Flyable \u5169\u500b\u7236\u985e\u5225\u3002"),(0,l.kt)("p",null,"\u900f\u904e\u591a\u91cd\u7e7c\u627f\uff0cDog \u548c Bird \u985e\u5225\u90fd\u53ef\u4ee5\u7e7c\u627f\u5176\u7236\u985e\u5225\u7684\u5c6c\u6027\u548c\u65b9\u6cd5\u3002\u4f8b\u5982\uff0cDog \u985e\u5225\u53ef\u4ee5\u547c\u53eb Animal \u7684 move \u65b9\u6cd5\u3001Swimmable \u7684 swim \u65b9\u6cd5\u3001\u4ee5\u53ca\u81ea\u5df1\u7684 bark \u65b9\u6cd5\u3002Bird \u985e\u5225\u5247\u53ef\u4ee5\u547c\u53eb Animal \u7684 move \u65b9\u6cd5\u3001Flyable \u7684 fly \u65b9\u6cd5\u3001\u4ee5\u53ca\u81ea\u5df1\u7684 chirp \u65b9\u6cd5\u3002"),(0,l.kt)("p",null,"\u9019\u7a2e\u65b9\u5f0f\u8b93\u6211\u5011\u53ef\u4ee5\u5728\u4e0d\u9700\u8981\u4ecb\u9762\u7684\u60c5\u6cc1\u4e0b\uff0c\u76f4\u63a5\u4f7f\u7528\u591a\u500b\u7236\u985e\u5225\u7684\u5c6c\u6027\u548c\u65b9\u6cd5\uff0c\u8b93\u7a0b\u5f0f\u78bc\u66f4\u52a0\u9748\u6d3b\u548c\u7c21\u6f54\u3002"))}u.isMDXComponent=!0}}]);