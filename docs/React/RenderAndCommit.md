---
authors: Buzz
name: Buzz
title: "[React] Component Render and Commit"
tags: [React, Render, Browser paint]
---

# React Component Render and Commit

> 本文章內容均來自 React 官方文件：
>
> - Render and Commit : https://react.dev/learn/render-and-commit
>   React Component 在顯示在瀏覽器上之前會先在 React 內部渲染，下面會講述各階段的做了哪些事情。

總共可以分為三個步驟

1. 觸發渲染 (Trigger Render)
2. React 渲染 Component (Rendering)
3. 實際更新 DOM 元素 (Commit)

## Setp1. 觸發渲染 (Trigger a render)

React 會在以下幾種情況下進行渲染：

- component 的初始渲染。
- 當一個 component 的 props 或 state 發生改變時，React 會重新渲染該 component。
- 當一個 component 的 parent component 重新渲染時，React 會重新渲染該 component。
- 當一個 component 的 forceUpdate() 方法被調用時，React 會強制重新渲染該 component。

## Setp2. React 渲染 Component (React renders your components)

這邊的 React Render 指的是 React 會去呼叫執行這個 Component 。

- 在一開始 component 的初始渲染的時候會先把 DOM 的節點都先產生出來。
- 在 re-render 時 React 會計算每個元素屬性和前一次渲染相比有沒有改變，有改變的話會在 commit pahase 來實際更新有變動的 DOM 元素。

## Setp3. 實際更新 DOM 元素 (React commits changes to the DOM)

在這個階段 React 會實際改變 HTML 的 DOM 。

- 在第一次初始化渲染的時候 React 會使用 appendChild() 方法 把所有的 DOM Node 都放到畫面上去。
- 在之後的渲染都會只更新有改變的部分，減少實際上對 DOM 的操作和更動來提升效率。

## Browser Paint (瀏覽器的繪製)

最後 DOM 更新完成之後，瀏覽器才會根據 DOM 的結構繪製相對應的 UI 顯示在畫面上。
