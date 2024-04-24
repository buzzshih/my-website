---
authors: Buzz
name: Buzz
title: "[JS] Objects Prototypes"
tags: [Javascript]
---

# JavaScript Objects Prototype 原型

> 本文章內容均來自 codeguage JavaScript 文件：
>
> - JavaScript Objects - Prototypes : https://www.codeguage.com/courses/js/objects-prototypes

## 筆記重點

1. [回顧在建構函式主體中定義方法的問題](#section1)
2. 什麼是原型
3. 內部[[Prototype]]屬性
4. Object.create() 方法
5. 原型鏈 ( Prototype chains )
6. 屬性檢索和賦值機制
7. 自有 vs. 繼承的屬性
8. in 運算子的內部運作
9. 函式的 prototype 屬性
10. 原型繼承 ( Prototypal inheritance )
11. 透過 Object.getPrototypeOf() 和 proto 檢索原型
12. 透過 Object.setPrototypeOf() 和 proto 設置原型

## <span id="section1">回顧在建構函式主體中定義方法的問題</span>

### 什麼事建構函式( constructor )呢？

簡單來說，建構函式又稱為構造函式就是一個 Object 的模板，在建構函式中描述及定義 Object 結構和屬性，並可以透過 `new` 關鍵字將 Object 實體化生產出來，也就是實例。

```javascript
// 建構函式 Point 有 x 、y、 setTo() 、logMyData() 屬性
function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y;

  this.setTo = function (x, y) {
    this.x = x;
    this.y = y;
  };

  this.logMyData = () => {
    console.log("x:", x, "y:", y);
  };
}

// 使用建構函式建立 Object 實例
const point1 = new Point(1, 2);
const point2 = new Point(10, 20);

// 不同實例出來的Object 都輸出不同的結果，每個實例出來的 Object 都有自己獨立的屬性
point1.logMyData(); // x: 1 y: 2  .
point2.logMyData(); // x: 10 y: 20.
```

而在 JavaScript 中建立實例最簡單且有效率的方法就是使用原型 ( prototype ) 來定義方法，而非直接在建構函式中直接定義方法，因為每當實例出來都是一個獨立的屬性，重複創建會佔記憶體。

###### tags: `JavaScript`
