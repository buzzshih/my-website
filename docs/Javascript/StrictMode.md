---
authors: Buzz
name: Buzz
title: "[JS] StrictMode "
tags: [Javascript]
---

# JavaScript 嚴格模式

###### tags: `JavaScript`

如何在 JavaScript 中開啟嚴格模式呢？很簡單直接在 JavaScript 檔案所有程式碼最上面加上 「 "use strict" 」就可以直接開啟嚴格模式。

那開啟嚴格模式又是可以幹嘛呢？

1. 嚴格模式會禁止某些開發時的某些動作，比如說：宣告一個通常為程式語言保留字的變數名稱。
2. 將某些沒使用嚴格模式情況下 JavaScript 執行失敗不會報錯的部分，把錯誤可視化出來並顯示在終端機或是除錯工具(瀏覽器的 develop console )上面。

## 拼字錯誤的報錯

可以看到 `if (passTest) `要改變 `hasDriversLicense`變數的值時變數名稱少了一個`s`。
沒啟用嚴格模式不會有報錯，開啟嚴格模式會報出`Uncaught ReferenceError: hasDriverLicense is not defined`的錯誤，讓開發時可以更快找出錯誤。

```javascript
"use strict"; //在程式碼最頂端啟用嚴格模式

let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true;

if (hasDriversLicense) console.log("I can drive :D");
```

## 程式碼保留字錯誤

程式碼通常都會有保留字，這些保留字都是該程式語言預設提供的一些方法或是後續擴充使用的，所以不可以將保留字宣告成變數名稱。

如下方的`interface` 和 `private` 為例，這兩者都是保留字，而沒有啟用嚴格模式是不會報出錯誤的，當啟用嚴格模式就會出現此錯誤訊息提醒開發者要避免使用保留字當作變數名稱來宣告。
`Uncaught SyntaxError: Unexpected strict mode reserved word `

```javascript
"use strict"; //在程式碼最頂端啟用嚴格模式

const interface = "Audio";
const private = 534;
```
