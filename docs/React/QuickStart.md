---
authors: Buzz
name: Buzz
title: "[Redux] Quick Start "
tags: [React, Hooks, Javascript]
---

# React Quick Start 快速入門

> 本文章內容均來自 React 官方文件：
>
> - Quick Start : https://react.dev/learn

這邊介紹的部分都是使用 React 開發中一定會用到的概念。

## 你將會學習到

- [如何**創建和嵌套 Component**](#section1)
- [如何**使用在 JSX 或是 TSX 來寫 Html (標記語言)**](#section2)
- [如何**顯示數據**](#section3)
- [如何**使用條件式渲染和渲染列表**](#section4)
- [如何**觸發事件和觸發畫面重新渲染**](#section5)
- [如何**在 Component 中之間共享數據**](#section6)

## Create React App

參考以下網址
React + Javascript : https://create-react-app.dev/docs/getting-started

React + Typesctipt : https://create-react-app.dev/docs/adding-typescript/

## <span id="section1">如何創建和嵌套 Component</span>

:::tip

建立好 CRA(Create React App)的專案後，進入專案資料夾，React 應用中都是由大大小小的 Component 組成的，每個 Component 都是一個獨立的 UI ，擁有自己的邏輯及外觀樣式，這些 Component 可以是簡單的按鈕或是文字輸入框，也可以是複雜的列表和表單，甚至是嵌套著很多 Component 的頁面。

所以在 React 開發中會時常切割出許多 component，所以通常會在 src 資料夾底下建立一個 Components 資料夾，用來裝所有開發上要用到的 Component。

:::

### 建立 component

```jsx showLineNumbers title="src/Components/MyButton/inde.jsx"
// src/Components/MyButton/inde.jsx

const MyButton = () => {
  return <button>I'm a button</button>;
};
// 匯出此component
export default MyButton;
```

### 嵌套到另一個 component

```jsx showLineNumbers title="src/Components/MyApp/index.jsx"
// src/Components/MyApp/index.jsx
// highlight-next-line
import MyButton from "../MyButton";

const MyApp = () => {
  return (
    <div>
      <h1>Welcome to my app</h1>
      // highlight-next-line
      <MyButton />
    </div>
  );
};
// 匯出此component
export default MyApp;
```

:::tip
請注意!`<MyButton />`以大寫字母開頭。React component 名稱必須以大寫字母開頭，這樣 React 才會知道這個是 Componen。
:::

### 看成果

在 index.tsx 或是 index.jsx import component

```jsx showLineNumbers title="src/Components/MyApp/index.jsx"
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// highlight-next-line
import MyApp from "./Components/MyApp";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    // highlight-next-line
    <MyApp />
  </React.StrictMode>
);


reportWebVitals();
```

:::tip

在終端機執行 npm run start 或是 yarn start ，React 就會啟動本地 server 通常是*http://localhost:3000/* 。

:::

結果畫面如下:

![](https://i.imgur.com/RjODIcD.png)

## <span id="section2">如何使用在 JSX 或是 TSX 來寫 Html(標記語言)</span>

> 在 React 中，我們使用 JSX 或是 TSX 語法來建立 UI 元素。類似於 HTML。
>
> 而在使用 JSX 或是 TSX 語法撰寫 React 程式時，必須確保每個組件只有一個根元素。
> 如果有多個根元素，則在編譯時可能會出現錯誤，因為 React 編譯器無法將這些元素包裝在一個父元素中。
> 因此，要避免這種情況，您需要將多個根元素包裝在一個父元素中，以確保 React 編譯器可以正確處理它們。

### return 多個根元素（錯誤例子）

```jsx showLineNumbers
const  AboutPage = () => {
  return (

      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>

  );
}
```

### return 單一個根元素（正確例子）

```jsx showLineNumbers
function AboutPage() {
  return (
    // highlight-next-line
    <div>
      <h1>About</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
      // highlight-next-line
    </div>
  );
}
```

### 加入樣式

> 在 React 中，使用 className 屬性來指定元素的 CSS class ，這個屬性的使用方式與 HTML 中的 class 屬性相同。

:::tip

在 React 中使用 className 屬性是因為 class 在 JavaScript 中是一個保留字，因此不能直接在 JSX 或是 TSX 中使用。
因此，React 使用了 className 屬性來代替 class，以保持與 HTML 的兼容性。

:::

```css
<img className="avatar" />
```

## <span id="section3">如何顯示數據</span>

> JSX 允許在 HTML 元素中使用大括號來讓嵌入一些 Javascript 變數並將其顯示給使用者

```jsx showLineNumbers title="src/Components/Profile/index.jsx"
const userData = {
  name: "Jack",
};

const Profile = () => {
  return (
    <>
      // highlight-next-line
      <h1>{userData.name}</h1>
    </>
  );
};

export default Profile;
```

還可以用在 HTML 元素的屬性上面

```jsx showLineNumbers title="src/Components/Profile/index.jsx"
const userData = {
  name: "Jack",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const Profile = () => {
  return (
    <>
      // highlight-start
      <h1>{userData.name}</h1>
      <img
        className="avatar"
        src={userData.imageUrl}
        alt={"Photo of " + userData.name}
        style={{
          width: userData.imageSize,
          height: userData.imageSize,
        }}
      />
      // highlight-end
    </>
  );
};

export default Profile;
```

### 看結果

```jsx showLineNumbers title="index.jsx"
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyApp from "./Components/MyApp";
// highlight-next-line
import Profile from "./Components/Profile";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyApp /> */}
    // highlight-next-line
    <Profile />
  </React.StrictMode>
);


reportWebVitals();
```

![](https://i.imgur.com/60vtGek.png)

## <span id="section4">使用條件式渲染和渲染列表</span>

### 條件式渲染

> 在 React 中，你可以使用 JSX 條件式渲染來根據不同的情况顯示不同的内容。
> 比如說，你可以使用 if-else 或三元運算子来渲染不同的 JSX。

```jsx showLineNumbers title:"if else"
const userData = { name: "John", isLoggedIn: true };

const ConditionRender = () => {
  // highlight-start
  let content;
  if (userData.isLoggedIn) {
    content = <p> is loggedIn</p>;
  } else {
    content = <p> is not loggedIn</p>;
  }
  // highlight-end
  return <div>{content}</div>;
};
export default ConditionRender;
```

```jsx showLineNumbers title:"三元運算子"
const userData = { name: "John", isLoggedIn: true };

const ConditionRender = () => {
  // highlight-next-line
  return userData ? <div>is loggedIn</div> : <div>is not loggedIn </div>;
};
export default ConditionRender;
```

```jsx showLineNumbers title:"邏輯&&語法"
const userData = { name: "John", isLoggedIn: true };

const ConditionRender = () => {
  // highlight-next-line
  return userData && <div>is loggedIn</div>;
};
export default ConditionRender;
```

### 渲染列表

```jsx showLineNumbers
const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

const RenderList = () => {
  // highlight-next-line
  const listItems = products.map((item) => <li key={item.id}>{item.title}</li>);
  return <ul>{listItems}</ul>;
};

export default RenderList;
```

map 是 JavaScript 中的一個函數，可以遍歷陣列並生成一個新的陣列，並且對於每一個元素執行同樣的操作。
在 React 中，我們可以使用 map 函數遍歷一個陣列，並且對於每一個元素生成一個對應的 JSX 元素。在這個例子中，map 被用來遍歷 products 陣列，對於每一個產品生成一個包含產品標題的`products.title` `<li>` 元素。最終，所有這些 `<li>` 元素被組合成一個 `<ul>` 元素，形成了一個完整的商品清單。

:::tip

可以看到`<li>`有加上 key，是因為當 React 中使用 map 渲染列表時，React 需要追蹤每個元素的唯一性。這樣做的原因是當元素發生更改時，React 可以找到相應的元素並更新它，而不必更新整個列表。

:::

## <span id="section5">如何觸發事件和觸發畫面重新渲染</span>

### 觸發事件

```jsx showLineNumbers
// 按鈕事件綁定

const handleClick = () => {
  console.log("Click!!");
};
// highlight-next-line
<button onClick={handleClick}>Click me</button>;
```

:::tip

當我們設置 onClick 屬性時，我們只需要將函數名稱傳遞給它，而不需要在函數名稱後面添加括號()。這是因為 React 將在使用者單擊按鈕時自動調用這個函數，而不是在設置 onClick 屬性時立即調用它。
如果我們在 onClick 屬性中使用了括號，則函數會立即執行並返回其結果，而不是等待使用者點擊按鈕時才執行。因此，必須將函數名稱傳遞給 onClick，而不是函數本身。

:::

### 觸發畫面重新渲染進而更新前端畫面

通常我們會希望這個顯示數據的 Component 會記住要顯示的數據狀態。
例如：我們要顯示點擊的次數，下面我們就把這個點擊次數的狀態加入到 Component 中。

首先要先 import react 的 hook - useState

```jsx
import { useState } from "react";
```

在 Component 中宣告 state

```jsx
const MyButton = () => {
  // highlight-next-line
  const [count,setCount] = useState(0);
  //...
```

上面看到的 useState：當前狀態 ( count) 和更新當前狀態的函數 ( setCount)。可以任意給它們命名，但慣例是寫[something, setSomething].

一開始按鈕上面的文字是“Clicked 0 times”，是因為 count 初始值我們設定為 0. 如果想改變當前狀態的時候，調用 setCount()並將新的值傳遞給它。則每點擊此按鈕將增加 count 的值：

```jsx showLineNumbers  title="src/Components/MyApp/index.jsx"
import { useState } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  // highlight-next-line
  return <button onClick={handleClick}>Clicked {count} times</button>;
};
// 匯出此component
export default MyButton;
```

:::tip

假如將同個 Component 在前端畫面多次渲染，那每個 Component 都會獲得自己的狀態。

在 React 中，每個 Component 都有自己的狀態。當你在前端畫面中渲染同一個 Component 多次時，每個 Component 會獲得自己獨立的狀態，彼此之間是獨立的。這意味著你可以渲染多個相同的 Component，每個 Component 都可以有不同的狀態和行為，而不會互相影響。這種行為也被稱為 "Component 的實例化"。

:::

### 使用 Hooks

> 以 use 開頭的函數稱為 Hooks。useState 是 React 內部提供的 Hook。你可以在 官方文件中找到其他 React 內部的 Hook 。我們還可以通過組合現有的 Hooks 來寫屬於我們自己客制的 Hooks。

:::tip

在 React 中，Hooks 是一種特殊的功能，用於在 Functional Component 中添加狀態和其他 React 功能。 Hooks 也比其他功能更具限制性，其中一個限制是它們只能在 React Functional Component 件的頂部調用。這是因為 Hooks 的執行順序非常重要，如果在條件式或遍歷的迴圈中使用 Hooks，可能會導致 React 無法正確執行並產生錯誤。

:::

## <span id="section6">如何在 Component 中之間共享數據</span>

在前面的例子中，每個 MyButton 都有自己獨立的狀態(count)，當每個按鈕被點擊時，只有被點擊的按鈕的 count 發生了變化：

![](https://i.imgur.com/MLtslWp.png)

但是，有時候會需要 Component 共享數據並一起更新。

要使兩個 MyButton 組件顯示相同 count 並一起更新，您需要將狀態從 <MyButton/> “向上”移動到共同的 parent component。

在這個例子中，它是 MyApp：

![](https://i.imgur.com/cn1SFtX.png)

首先，將狀態從 MyButton component 移動 MyApp component：

```jsx showLineNumbers title="src/Components/MyApp/index.jsx"
import { useState } from "react";
import MyButton from "../MyButton";

const MyApp = () => {
  // highlight-start
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  // highlight-end
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <MyButton />
    </div>
  );
};

export default MyApp;
```

接著將 MyApp component 的 count 狀態往下傳入 MyButton component:

```jsx showLineNumbers title="src/Components/MyApp/index.jsx"
import { useState } from "react";
import MyButton from "../MyButton";

const MyApp = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Welcome to my app</h1>
      // highlight-start
      <MyButton count={count} handleClick={handleClick} />
      <MyButton count={count} handleClick={handleClick} />
      // highlight-end
    </div>
  );
};

export default MyApp;
```

:::tip

在 React 中，將數據從一個 component 傳遞到另一個 component 就叫做 props（簡稱屬性），這些 props 可以是數字、字串、 Object 或 function 等。

:::

最後，在 MyButton component 讀取從 parent component 傳入的 props ：

```jsx showLineNumbers title="src/Components/MyButton/index.jsx"
// highlight-next-line
const MyButton = ({ count, onClick }) => {
  return <button onClick={onClick}>Clicked {count} times</button>;
};

export default MyButton;
```
