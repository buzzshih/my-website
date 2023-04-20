# Redux 學習

###### tags: `前端筆記`

## 目錄

1.  安裝：

    - npm : npm install react-redux @reduxjs/toolkit
    - yarn :yarn add react-redux @reduxjs/toolkit

2.  快速範例
3.  基本寫法介紹
4.  架構：
    - store ： 儲存全域 State
    - action ： 也就是一個動作，行為，只有觸發一個 Action 才能改變狀態樹內的相關數據。
    - reducer ： 負責去確認現在要用哪個 action ，進而執行並且改變 State
    - dispatch ： 傳送 action 給 reducer
5.  props 的限制：
    - 同層無法傳遞
    - 太多層時會很複雜

redux 沒有包含在 reacct 裡面但很長跟 react 一起使用，來當作 react 的狀態管理器。
從前 redux 很複雜較難上手，現在 redux 和 react 團隊共同推出新的 redux 工具就是 redux toolkit

下面有幾個 redux 功能的名詞介紹

1. store : 儲存全域 State
2. action : 改變 State 的行為
3. reducer : Redux 中的 reducer（純函數）是一個用於處理狀態變更的函數，它接受兩個參數：上一次的狀態（state）和當前觸發的 action，並返回更新後的狀態。
4. dispatch : 是 Redux 中的一個函數，用於觸發 action，並將 action 傳遞給相應的 reducer 來進行狀態變更。

### 模擬

![](https://i.imgur.com/AIHdX92.gif)

### 快速範例

1. 首先利用 CRA(Create React App)先建立一個全新的 React 專案，這邊使用的是 Typescript 的模板
   - npx create-react-app my-app --template typescript
     **or**
   - yarn create react-app redux-practice --template typescript
   - 參考這個網站 https://create-react-app.dev/docs/adding-typescript/
2. 專案建立好之後，接著安裝我們所需要的套件 react-redux、 @reduxjs/toolkit
   - npm : npm install react-redux @reduxjs/toolkit
     **or**
   - yarn :yarn add react-redux @reduxjs/toolkit
3. 套件安裝完後，先把 app.tsx , app.css 整理一下，把不必要的東西刪掉

   ```ts title="app.tsx"
   import "./App.css";

   function App() {
     return (
       <div className="App">
         <p>Hello</p>
       </div>
     );
   }

   export default App;
   ```

   ```css title="app.css"
   * {
     box-sizing: border-box;
     margin: 0;
   }

   body {
     padding: 0;
   }

   .container {
     width: min(100%, 768px);
     padding: 0 2rem;
     margin: 0 auto;
   }
   ```

4. 在 src 內新增 features 的資料夾，並新增一個 store.ts 的檔案

   ```ts title="src/features/store.ts"
   //configureStore 是Redux Toolkit 中提供的一個函數
   //用來建立 Redux store，它可以自動化一些常見的 Redux 配置任務
   import { configureStore } from "@reduxjs/toolkit";

   const store = configureStore({
     reducer: {},
   });

   // 定義 RootState 類型，它代表整個應用程式的 Redux store 中的狀態類型
   export type RootState = ReturnType<typeof store.getState>;

   export default store;
   ```

   - configureStore 主要的功能如下:
     configureStore 是 Redux Toolkit 提供的一個函數，用於簡化 Redux store 的創建和配置過程。它可以幫助你快速創建可靠的 Redux store，並自動整合常用的功能，例如 Redux DevTools、Reducer 的合併和 Immer 等。在使用 configureStore 函數時，你需要傳遞一個 reducer 物件，用於定義你的 reducers。
     1. 整合 Redux DevTools Extension：如果你的瀏覽器中安裝了 Redux DevTools 擴展，configureStore 會自動將其整合到 store 中，方便開發者調試和測試。
     2. 合併 Reducers：configureStore 會自動使用 Redux Toolkit 提供的 combineReducers 函數，將多個 reducers 合併成一個單一的 reducer。
     3. 啟用 Immer：configureStore 預設啟用 Immer，這是一個函數庫，可以簡化對 state 的變更。當你使用 dispatch 去更新 store 中的狀態時， Immer 會自動產生一個 immutable 的拷貝，並在此基礎上進行更改，從而簡化了對狀態的變更。
     4. 啟用 Redux Thunk：configureStore 預設啟用 Redux Thunk，這是一個 Redux 的 middleware，允許你寫非同步的 action creators。

5. 在 src/features 內 counter 新增資料夾，並新增 counterSlice.ts 檔案
   > 使用 Redux Toolkit 套件，我們通常不需要自己手動寫每個 action 對應到哪個 reducer，因為 Redux Toolkit 提供了 createSlice 函數，它會自動生成對應的 action 和 reducer

> 我們使用了 createSlice 函數來定義 counter slice，並在 reducers 屬性中定義了三個 reducers，分別是 increment、decrement 和 incrementByAmount。createSlice 函數會根據這些定義自動生成對應的 action 和 reducer，並將它們儲存在 counterSlice.actions 中

> 這樣一來，我們可以直接使用 counterSlice.actions.increment、counterSlice.actions.decrement 和 counterSlice.actions.incrementByAmount 來觸發對應的 action，而不需要自己手動定義每個 action。同時，這些 action 會自動對應到 counterSlice.reducer 中定義的 reducers，並更新 counter slice 的狀態。

```ts title="src/feature/counter/counterSlice.ts"
// counterSlice.ts

// 匯入 Redux Toolkit 中的 createSlice 函數
import { createSlice } from "@reduxjs/toolkit";
// 匯入Redux store 的型別 RootState
import { RootState } from "../store";

// 定義 counter slice 的狀態類型
export interface ICounter {
  value: number;
}

//定義 couter slice 的初始狀態
const initialState: ICounter = {
  value: 0,
};

// 使用 Redux Toolkit 的 createSlice 函數，建立 counter slice 的 reducer
export const counterSlice = createSlice({
  // 定義 slice 的名稱，用於開發者工具的顯示
  name: "counter",
  // 定義 slice 的初始狀態
  initialState,
  // 定義 slice 的 reducers，用來更新 slice 的狀態
  reducers: {
    // 定義一個 increment 的 reducer，用於增加 slice 的狀態值
    increment: (state) => {
      // 狀態值 +1
      state.value += 1;
      // 在console.log顯示更新完的狀態值
      console.log("increment", state.value);
    },
    // 定義一個 decrement 的 reducer，用於減少 slice 的狀態值
    decrement: (state) => {
      // 狀態值 -1
      state.value -= 1;
      // 在console.log顯示更新完的狀態值
      console.log("decrement", state.value);
    },
    // 定義一個 incrementByAmount 的 reducer，用於增加指定的數量到 slice 的狀態值
    incrementByAmount: (state, action) => {
      // 狀態值增加 action.payload 指定的數量
      state.value += action.payload;
    },
  },
});

//使用 createSlice 函式，它會自動生成對應的action,reducer

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

/**
 * 選取 Redux store 中的 counter slice 狀態
 * @param state 整個應用程式的 Redux store 中的狀態
 * @returns counter slice 的狀態
 */
export const selectCounter = (state: RootState) => state.conter;

// 導出 counterSlice 的 reducer 函數作為預設導出

// counterSlice 是由 createSlice 函數創建的 Redux slice
// reducer 是用於處理相應的 action 的函數
// 在 Redux 中，reducer 是一個純函數，接收當前的 state 和 action，返回新的 state
// 這個 reducer 函數會自動根據 createSlice 函數中定義的 reducers 來處理相應的 action
export default counterSlice.reducer;
```

6. 在前端介面中使用 Redux Toolkit 的 Counter Slice 邏輯

在 src 新增一個 components 的資料夾，並新增 Counter.tsx 檔案

useSelector 和 useDispatch 是 react-redux 套件提供的 Hooks。

- useSelector： 用來從 Redux store 中選取狀態值的 Hook。它接受一個選擇器函式 (selector function) 作為參數，並且回傳選擇器函式所選取的 Redux store 中的狀態值。每當選擇器函式所選取的狀態值發生變化時，React 組件會重新渲染。

- useDispatch : react-redux 提供的 Hook，用於獲取 Redux store 的 dispatch 函式，在 React component 中發送 action 到 Redux store。

```tsx title="src/Components/Counter.tsx"
// import  React Redux 中的 useSelector 和 useDispatch hooks
import { useSelector, useDispatch } from "react-redux";
import {
  increment, //增加counter的action
  decrement, //減少counter的action
  selectCounter, // 選取counter值的 selector
} from "../features/counter/counterSlice";

const Counter = () => {
  // 使用 useSelector 獲取selectCounter selector 的值 ，並賦予給變數count
  const count = useSelector(selectCounter);
  // 從useDispatch hooks 取得dispatch函式，並賦予給變數dispatch ，用來發送action給redux store 進而觸發相對應的reducer
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count.value}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <p style={{ fontSize: "20px" }}>count：{`${count.value}`}</p>
      </div>
    </div>
  );
};

export default Counter;
```

6. 接著再將 Counter component 在 App.tsx import 即可以顯示剛剛透用 Redux Toolkit 的成果

```tsx title="App.tsx"
import React from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
```

### 比較 Redux 和 React useContext

1. 複雜度和學習曲線：Redux 相對來說比較複雜，需要學習一些額外的概念，例如 reducers、actions 和 Redux store。而 React useContext 則相對簡單，只需使用 React 的 Hooks API 即可。對於新手開發者或者時間緊迫的專案，React useContext 可能更容易上手。

2. 可維護性和擴展性：Redux 提供了一種組織和管理全域狀態的方式，對於大型應用或者需要共享狀態的多個組件來說，Redux 的組織和擴展性更好。React useContext 則較適合小型應用或者功能較簡單的情境，可能在擴展性和可維護性方面有些限制。

3. 性能和效能：Redux 的應用中心化管理狀態的方式可以幫助優化性能，避免不必要的重新渲染。而 React useContext 每次在上層組件更新時都會重新渲染，可能對性能產生一定的影響。對於對性能要求較高的應用，Redux 可能更適合。

#### 總結：

Redux 和 React useContext 都是用於 React 應用中管理狀態的解決方案，選擇哪一種需要根據具體的應用需求、開發團隊的經驗以及專案的時間和預算來做決策。而 Redux Toolkit 則提供了一種簡化和標準化的方式來使用 Redux，可以幫助開發者更快速、更高效地開發 Redux 應用。

Redux 的應用中心化管理狀態的方式可以幫助優化性能，避免不必要的重新渲染。Redux 使用了 immutability（不可變性）的概念，通過不直接修改狀態對象，而是返回新的狀態對象，減少了重新渲染的次數，提升了效能。
而 React useContext 在每次上層組件更新時都會重新渲染，可能對性能產生一定的影響。因此，當應用規模較大，組件層級結構複雜，且需要高性能的情境下，Redux 可能更適合。

而經過 react 不斷地發展迭代之後，React useContext 也可以在適當的情境下和較小規模的專案提供良好的性能表現，對於小型應用或者功能較簡單的情境，React useContext 會更加簡單和方便，由於規模不大且現今系統運行的裝置和網路速度都有所提升下，React useContext 可以是一個方便、輕量級且高效的狀態管理方案。

---

title: 一篇包含标签的文档
id: my-home-doc
slug: /

- 演示
- 开始上手

---
