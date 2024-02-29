---
authors: Buzz
name: Buzz
title: "[ReactDoc]React 中的 State 和 Props 到底差在哪"
tags: [React, Props, State]
---

# React 中的 State 和 Props 到底差在哪？

使用 React 開發前端也一段時間了，在 React 開發中常常使用到 State 和 Props 來保存及傳遞 component 的資料，控制 component 的 UI 渲染和輸出，但真的問到我 State 和 Props 兩者之間有什麼差，或是什麼時候該用 State? 什麼時候該用 Props? 對這些概念我還真的是很模糊，以下就讓我們一起釐清這些概念吧。

State 是用來儲存 component 內部的狀態和資料（類似 function 中宣告的內部變數），Props 是屬於 Component 的屬性用來建構 component 初始的配置（類似 function 中使用 function 要帶的參數）。

State 類似

```js showLineNumbers
const propsStateFunc = () => {
  const state = "state";
  return state;
};
```

Props 類似

```js showLineNumbers
const propsStateFunc = (props) => {
  return props;
};
```

props 和 state 更新都會觸發 React 重新渲染的機制，props 和 state 都是普通的 JS Oject 。

props

props（properties 的縮寫）是組件的配置，可以定義 props 是可選的配置，它們是從上方接收的，而這個 props 在 component 是不可以變動的。

state

當 component 安裝時，state 以默認值開始，然後隨時間發生變化（主要由使用者事件生成）。組件在內部管理自己的狀態。

結語:
假如這個 component 內只是需要定義初始狀態或是顯示資料的話，那麼只需使用 props 即可，props 也可以定義初始值也就是預設值 ; 假如 component 是需要依照使用者的操作或是時間的推移來更新 component 內部的狀態的話，那麼就需要使用 state。
