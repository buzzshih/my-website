---
authors: Buzz
name: Buzz
title: "[Redux] React Hooks - useState "
tags: [React, Hooks, Javascript, useState]
---

# React Hooks - useState

###### tags: `React`

## 你將會學習到

- [什麼是 useState，有什麼用途？](#section1)
  - [useState 的基本概念和用途](#section1-1)
  - [如何使用 useState 來管理 component 中的狀態](#section1-2)
    - [使用 useState 建立 state ](#section1-2-1)
    - [使用 setState 更新狀態 ， 像是這樣 setSomething(nextState](#section1-2-2)
    - [建立一個簡單的計數器，讓使用者點擊按鈕來增加計數器數值](#section1-2-3)
- [基本用法](#section1-4)
- [注意事項](#section1-5)
- [補充概念 🤪](#section1-6)

## <span id="section1">什麼是 useState，有什麼用途？</span>

<!-- 介紹useState的基本概念和用途 -->

### <span id="section1-1">useState 的基本概念和用途</span>

useState 是 React 提供的一個 Hooks 函式，它可以用來為 React functional component 添加狀態和管理 component 的狀態，從而實現對 component 的交互和其當前狀態更新。
而這個 state 的值可以是基本資料型態（如字串、數字、布林等）的狀態。
比如說可以用來儲存表單輸入框的值、 component 狀態的顯示、計數器 count 數值、會員系統登入狀態等等。

### <span id="section1-2">如何使用 useState 來管理 component 中的狀態</span>

<!-- 示範如何使用useState來在function component中管理state -->
<!-- 範例程式碼：建立一個簡單的計數器，讓使用者點擊按鈕來增加計數器數值 -->

```jsx
const [state, setState] = useState(initialState);
```

傳入一個初始值參數 `initialState` 。

return 一個長度為 2 的陣列，第一個元素是當前狀態 `State` , 第二個元素是一個用來更新狀態的 function `setState` 。

#### <span id="section1-2-1">使用 useState 建立 state </span>

useState 必須在 Component 頂層宣告 state 變數並設定初始值。

```jsx showLineNumbers
import { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(3);
  const [name, setName] = useState('Jack');
  const [todos, setTodos] = useState(() => createTodos());
  // ...
```

上面看到的 useState：當前狀態 (count) 和更新當前狀態的 function (setCount)。可以任意給它們命名，但慣例是寫 `[something, setSomething]`。

#### <span id="section1-2-2">使用 setState 更新狀態 ， 像是這樣 setSomething(nextState)</span>

setState （更新狀態 function）更新狀態的 function 你可以直接傳入下一個狀態或是利用前一個狀態來計算出下一個狀態的值。

```jsx showLineNumbers
const [count, setCount] = useState(3);
const [name, setName] = useState('Jack');

cosnt  handleClick= () => {
  setName('Stone');
  setCount(preState => preState + 1);
  // ...
```

#### <span id="section1-2-3">建立一個簡單的計數器，讓使用者點擊按鈕來增加計數器數值</span>

```jsx showLineNumbers
//  src/Components/Counter/index.jsx

import React, { useState } from "react";
// import useState hook
import styles from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  // 在 component 頂端宣告 useState
  const increment = () => setCount((preCount) => preCount + 1);
  // function increment 使用 setCount function來更新 count 狀態
  // function setCount 會把 count 的值更新為 count + 1
  return (
    <div className={styles.container}>
      <p>Count: {count}</p>
      <button onClick={increment}> click me </button>
    </div>
  );
};

export default Counter;
```

### <span id="section1-4">基本用法</span>

#### Quick Start

使用 useState 的最基本的方式是將 useState hooks import 你的組件中，宣告 state 時設定初始值。例如，下面是一個計數器的 component ，每按一下按鈕計數器就+1：

```jsx showLineNumbers
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((preCount) => preCount + 1);
  }

  return (
    <div>
      <p>You clicked the button {count} times.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

我們使用 useState 將計數器設定初始值為 0，setCount 是一個函數，它用來更新我們的計數器狀態。

#### 陣列(Array)或物件(Object)的狀態

使用 useState，不僅可以記錄單個值，還可以紀錄複雜的狀態，例如 number 的陣列或物件。
例如，下面是一個紀錄購物車商品項目的組合：

```jsx showLineNumbers
import React, { useState } from "react";

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  function handleAddItem() {
    setCart([...cart, { name: "New Item" }]);
  }

  return (
    <div>
      <p>Your shopping cart contains {cart.length} items.</p>
      <button onClick={handleAddItem}>Add item</button>
    </div>
  );
}
```

### <span id="section1-5">注意事項</span>

1. setState （更新狀態 function）只會在執行 setState 觸發重新渲染後才會更新 state 的值，所以在調用 setState 後調用 state 或是在 setState 中調用 state 的值仍然是舊的值。

- 假如要監控 state 的值或是 透過 state 更新觸發其他 function 要使用 useEffect Hook。

  ```jsx showLineNumbers
  import { useState } from 'react';

  const MyComponent = () => {
    const [name, setName] = useState('Jack');

      const handleClick =()=>{
          setName("Test");
          console.log(name); // 這邊的name還是舊值 “Jack”
      }
      return <div>
         <h1>My name is {name}.</h1>
          <button onclick={}>click me</button>
      </div>
  }
  ```

2. setState （更新狀態 function）建議在 React 更新階段執行，否則可能會造成太多次渲染導致程式崩潰或是導致 React 在渲染期間出現不一致的狀態。
   React 中有分為建構階段和更新階段，程式一開始執行建構 component 時進行事件綁定、根據初始狀態渲染畫面就是建構階段。每當有 state 或 props 發生變化，都會觸發重新渲染(re-render)的流程，而這個重新渲染的流程是一個稱為「更新階段」(update phase)的過程。
   而在建構階段時會將 JSX 轉換為真實的 DOM 元素，並將事件綁定和初始狀態添加到頁面中，在這過程中如果使用更新狀態 setState 就會在初次渲染的時候又觸發重新渲染。

- 假如要在確保 component 都已經建構完畢後執行 setState 可以使用 useEffect Hook。

  所以在 React 中，建議只在回應使用者互動（例如使用者點擊按鈕）或其他非同步事件（例如從伺服器接收到數據）時更新狀態，而不是在建立階段執行 setState。

  ❌ 不建議這麼做

  ```jsx showLineNumbers
  import { useState } from 'react';

  const MyComponent = () => {
    const [name, setName] = useState('Jack');

     setName(“Test”);
      return <div>
         <h1>My name is {name}.</h1>
          <button onclick={}>click me</button>
      </div>
  ```

  ✅ 建議這麼做

  ```jsx showLineNumbers
  import { useState } from 'react';

  const MyComponent = () => {
    const [name, setName] = useState('Jack');

      const handleClick =()=>{
          setName("Test");
      }
      return <div>
         <h1>My name is {name}.</h1>
          <button onclick={}>click me</button>
      </div>
  }
  ```

3. setState 直接使用目前 state 和使用前一個 state 來更新狀態的差別

- 以下是紀錄按鈕點擊次數的例子

  ✅ 函數式更新:

  可以看到點擊＋ 2 按鈕會觸發 Test Function , Test Function 會執行 increment function 兩次，increment function 使用 setCount 並傳入 preCount(前一個狀態) 計算出新狀態。
  最後 count 的狀態為 2。

  ```jsx showLineNumbers
  const Counter = () => {
    const [count, setCount] = useState(0);
    // 在 component 頂端宣告 useState
    const increment = () => setCount((preCount) => preCount + 1);
    // function increment 使用 setCount function來更新 count 狀態
    // function setCount 會把 count 的值更新為 count + 1
    const Test = () => {
      increment(); // setCount(preCount => preCount + 1) 這邊preCount = 0, state = 1
      increment(); // setCount(preCount => preCount + 1) 這邊preCount = 1, state = 2
    };
    return (
      <div className={styles.container}>
        <p>Count: {count}</p>
        <button onClick={Test}> +2 </button>
      </div>
    );
  };
  ```

  ❌ 直接傳遞當前狀態來計算並更新狀態:

  increment function 中的 setCount 直接使用現在的 state 目前的值來+1
  但在還沒重新渲染之前直接調用 state 的值都是舊的值，所以兩次的 count + 1 的 count 都是 0
  ，最後 count 的狀態為 1。

  ```jsx
  const Counter = () => {
    const [count, setCount] = useState(0);
    // 在 component 頂端宣告 useState
    const increment = () => setCount(count + 1);
    const Test = () => {
      increment();
      increment();
    };
    return (
      <div className={styles.container}>
        <p>Count: {count}</p>
        <button onClick={Test}> +2 </button>
      </div>
    );
  };
  ```

### <span id="section1-5">補充概念 🤪</span>

#### 為什麼要用 useState 管理 component 狀態？

是因為當 Component 狀態改變時，useState 可以幫助 React 追蹤狀態的變化，進而觸發重新渲染。
讓 Component 可以顯示最新的狀態資訊。

在 React 中，Component 的狀態 (state) 是用來保存需要在 Component 中展示的資料。
為了管理 Component 的狀態，React 提供了 useState 這個 Hook，它可以讓我們在 Component 中宣告一個狀態變數，並提供一個 function 來更新狀態，每當狀態變數發生改變時，React 會自動重新渲染 Component。

#### 一定要使用 useState 提供的 setState function 更新 state 嗎？為什麼不能直接更改 state 的值？

為什麼不能直接更改 state 的值呢？這是因為直接更改 state 的值，並不會觸發 React 的重新渲染。React 是基於 Virtual DOM 的機制，當 Component 的狀態發生改變時，React 會比較前後兩次 Virtual DOM 的差異，然後只會對差異部分進行重新渲染，進而提高應用的性能。

所以我們必須使用 setState function 來更新狀態，這樣才能讓 React 正確地接收到狀態的變化，並進行重新渲染。

#### 為什麼不能使用普通變數 管理 component 狀態？

React 是基於 Virtual DOM 的機制，當 state 改變時，React 會比對 Virtual DOM 和真正的 DOM 的差異，再只更新需要更新的部分，從而提高應用程序的性能。

而普通的變數在改變時，並不會觸發 React 的 Virtual DOM 的比對前後兩次 Virtual DOM 差異來觸發狀態更新，所以不會讓 React 重新渲染。

相反，只有當使用 setState 或 useState 等 React 提供的方法來更新 state 時，React 才會重新渲染。

#### 什麼是 Virtual DOM?

Virtual DOM 是 React 中用來提升渲染效能的概念，它是一個虛擬的 DOM tree ， React 會在每次狀態更新時，先將虛擬 DOM 與之前的虛擬 DOM 做比較，找出需要更新的部分，然後再將這些部分更新到實際的 DOM 上。這樣做的好處是，React 可以最小化 DOM 操作，只更新必要的部分，提升了應用的效能。
