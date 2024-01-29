---
authors: MichaelJack
name: MichaelJack
title: "[JS] Function "
tags: [Javascript]
---

# JavaScript Function 函式

###### tags: `JavaScript`

當我們在寫程式的時候，有時會有一些任務需要被執行，這時我們就可以使用函式。函式就像是一個包裝好的工具，當我們需要完成某個任務時，只需要呼叫這個工具，它就會執行相應的工作。

## Function 的基礎用法

比如，我們可以寫一個函式來打招呼：

```JS
function sayHello() {
  console.log("Hello!");
}
```

在要執行的地方呼叫 ` SayHello` 像下面這樣就會在終端機或是除錯工具(瀏覽器的 develop console )上面印出 "Hello!"。

```JS
SayHello();
```

可以在函式中傳入參數讓，Fucntion 更靈活更有可用性

```JS
function sayHello(name) {
  console.log(`Hello! ${name} ~`);
}
```

在要執行的地方使用 `sayHello('Stone')`
這樣就會印出 ”Hello! Stone ~“。

## Function 進階分類

Function 主要可以分為三種類型，分別為

1. 函式陳述式（Function Statement）
2. 函式表達式（Function Expression）
3. 箭頭函式（Arrow Function）

### 函式陳述式（Function Statement）

函式陳述式就是最常見的函式定義方式之一。
可以使用函式關鍵字 function 加上函式名稱來定義一個函式，然後在大括號中放入您想讓函式執行的程式碼。這個程式碼可以是任何您想要的操作，而陳述式是不會直接回傳值的僅僅執行想要的動作。

例如：我們想要 log 出 Hello 的 log 。

```JS
function add(name) {
  console.log(`Hello ${name} ~`)
}

```

### 函式表達式（Function Expression）

函式表達式是另一種定義函式的方式，它通常將函式賦值給一個變數或者屬性。在函式表達式中，您可以定義匿名函式或具有名稱的函式。

而什麼是 「匿名函式」，匿名函式就是沒有名字的函式，它們通常作為函式表達式的一部分使用。與函式陳述式不同，匿名函式不需要使用一個特定的名稱來定義，而是直接定義在變數或屬性的賦值操作中。

例如：如果我們想要定義一個匿名函式來打招呼

```JS
const sayHello = function (name) {
  console.log(`Hello ${name} ~`);
};
```

函式表達式除了可以使用匿名函式也可以使用具名函式賦予給變數，就如下這樣：

```JS
const sayHello = function (name) {
  console.log(`Hello ${name} ~`);
};
```

### 箭頭函式（Arrow Function）

箭頭函式是 ES6 引入的一種新的函式語法，它提供了一種更簡潔的方式來定義函式。

可以將函式定義成下面這樣：

```JS
const greet = (name) => {
  console.log(`Hello,${name}!`);
};
```

箭頭函式使用 `=>` 符號來定義函式，然後接受一個參數 name，並在控制台上輸出打招呼的訊息。

箭頭函式更簡潔寫法是當函式只有一個參數時，可以省略括號：

```JS
const greet = name => console.log(`Hello,${name}!`);
```

如果箭頭函式 return 的程式只有一行程式碼的話，還可以省略大括號和 return 關鍵字

```JS
const add = (x, y) => x + y;
```

等於下面這樣

```JS
const add = (x, y) =>{
  return x + y ;
};
```

## 提升(Hosting)

> 待新增內容...

## this 指向

> 待新增內容...
