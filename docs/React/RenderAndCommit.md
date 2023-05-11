---
authors:
name: Stone
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

## Setp3. 實際更新 DOM 元素 (React commits changes to the DOM)
