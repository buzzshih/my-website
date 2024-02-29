---
authors: Buzz
name: Buzz
title: "[JS] Hoisting"
tags: [Javascript]
---

# JavaScript Hoisting 提升

###### tags: `JavaScript`

JavaScript Hoisting 概念就是在說明 JavaScript 的程式在執行過程中是內部的函示和變數是如何運行的，Hoisting 的概念就是發生在編譯階段和執行階段。

JavaScript 特性之一所宣告的變數和函示會在編譯階段就寫入到記憶體中，這也是為什麼我們可以在寫 JavaScript 時可以在變數或是函示宣告之前使用其變數和函示而不會出現錯誤的原因。

而 Hoisting 僅會提升宣告的部分，而不會初始化。如果在使用該變數後才宣告和初始化，那麼該值將是 undefined。
上述這句話也就是如同下面的範例

```js
const test
//使用 const 關鍵字 宣告 test 變數
console.log("variables"+ " " +test)
// 印出 test 的數值 ，結果會是 variables undefined

test = 18 ;
// 初始化變數數值
```
