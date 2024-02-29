---
authors: Buzz
name: Buzz
title: "[ReactDoc] Suspense and Lazy"
tags: [React, Suspense, Lazy]
---

> 本文章內容來自 React dev 官方文件：
>
> - Lazy : https://react.dev/reference/react/lazy#lazy
> - Suspense : https://zh-hans.react.dev/reference/react/Suspense#displaying-a-fallback-while-content-is-loading

# React Lazy 優化頁面載入速度 & React Suspense 提供使用者體驗

> React Lazy & React Suspense 為 16.6 的版本才有的功能

## React.Lazy

在 build 專案的時候，會透過 Webpack 或是 Vite 等打包工具，將所有 Component 都打包成一個 JavaScript 檔案，當頁面載入的時候就會去下載這個被打包好的 JavaScript 檔案，進而渲染呈現出專案的內容，這麼做可以減少瀏覽器和 Server 發送請求的次數。

當專案變得越來越大，程式碼大小和打包出來的 JavaScript 檔案也會變得更大。這會讓載入網頁的時間變長，因為瀏覽器需要下載檔案大小更大的 JavaScript 檔案。

這時，我們可以利用 React.Lazy 來解決這個問題。

使用 React Lazy 來 import Component，可以在頁面需要該功能或內容的時候才動態載入，而不是一次性載入所有內容。最後打包工具，會根據 React Lazy 的使用情況來拆分專案的程式碼 (code splitting) ，將專案程式碼切割成多個較小的檔案（chunks），使用者載入網頁時，只會載入當前頁面所需要的部分檔案，其他檔案則會在需要的時候才載入，從而實現動態載入的功能，提高使用者體驗並優化頁面載入速度。

```js
const MarkdownPreview = lazy(() => import("./MarkdownPreview.js"));
```

:::info
React.lazy 目前只支援 default exports。
:::

## React.Suspense

在 React Suspense 出現之前，管理 React 頁面的載入狀態多半都是使用條件是渲染來判斷現在要渲染哪個內容。然而，隨著 React Suspense 的出現，提供開發者一種更為整合的方法來處理非同步操作和載入狀態的呈現。

### Suspense Component 基本使用

React.Suspense 可以在 Children Component 尚未完成渲染時顯示載入 fallback Props 裡面的內容 。

```jsx
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```

### 想要等多個 Component 內容都完成載入並且同時顯示在畫面上

將要一起同時顯示在畫面上的內容放在包在同一個 Suspense 中。

這邊會等 `SomeComponent1`、`SomeComponent2`、`SomeComponent3`都完成載入渲染後才會一起顯示。

```jsx
<Suspense fallback={<Loading />}>
  <SomeComponent1 />
  <SomeComponent2>
    <SomeComponent3 />
  </SomeComponent2>
</Suspense>
```

### 透過嵌套多個 Suspense 切分層級，達到逐步渲染内容

這樣的嵌套結構能夠逐步渲染內容，當某個 Component 尚未完成載入時，它的父級 Suspense Component 會渲染對應的備用內容也就是 fallback Props 的內容，直到所有組件都完成加載為止。

以下的範例，渲染的邏輯就會是以下：

1. 如果 SomeComponent1 尚未載入完成，則 RootLoading 會顯示在整個內容區域的位置。

2. 一旦 SomeComponent1 載入完成， SomeComponent1 會取代 RootLoading 並顯示在畫面上。

3. 因為 SomeComponent2 和 SomeComponent3 是被包在同一個 Suspense Component，因此共用同一個 Suspense Component， 如果 SomeComponent2 , SomeComponent3 尚未載入完成，則 Loading 會顯示在 SomeComponent3 和其父級 SomeComponent2 的內容中。

4. 最後，一旦 SomeComponent2 和 SomeComponent3 都載入完成， SomeComponent2 和 SomeComponent3 的內容會取代 RootLoading 並顯示在畫面上。

```jsx
<Suspense fallback={<RootLoading />}>
  <SomeComponent1 />
  <Suspense fallback={<Loading />}>
    <SomeComponent2>
      <SomeComponent3 />
    </SomeComponent2>
  </Suspense>
</Suspense>
```
