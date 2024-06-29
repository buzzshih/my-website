---
authors: Buzz
name: Buzz
title: ' [套件研究] patch-package  '
tags: [package]
---

# patch-package 使用步驟

###### tags: `package`

## 流程

1. 安裝套件 patch-package
   https://www.npmjs.com/package/patch-package

2. 在 node_modules 修改套件原始碼變成自己需求的功能

3. 執行 npx patch-package `package name(被修改原始碼的套件名稱)` ，會生成一個 patches 資料夾，底下檔案是紀錄和原本套件原始碼的差異

4. 再 package.json 中的 scripts 加入這行
   `"postinstall":"patch-package"`

5. 執行 yarn install or npm install ，讓套件吃到補丁的修改

6. 前端 server 重啟 ，就可以修改後的功能。

## 注意事項

遇到一個狀況是，如下圖的程式碼，最後一段是 newPuzzleCase 二維陣列，就沒有新的下一行程式碼或是註解

![image](https://hackmd.io/_uploads/r1m58ynUA.png)

在執行 ` npx patch-package` 生成和原套件差異檔案的內容看起來沒什麼問題
![image](https://hackmd.io/_uploads/rJUZwk28A.png)

但執行 yarn install 或是 npm install newPuzzleCase 二維陣列結尾的 `]` 陣列符號就會被吃掉。
![image](https://hackmd.io/_uploads/B1rp8k3UC.png)

解法是假如有發現這種問題，就如下圖在套件原始碼最後一行那行加入註解
![image](https://hackmd.io/_uploads/Sy-ENJ2LC.png)

生成出來 patches 資料夾底下的差異檔案
![image](https://hackmd.io/_uploads/SyAOwJhIC.png)

最後 yarn install or npm install 就正常了，`]` 符號不會被吃掉
![image](https://hackmd.io/_uploads/ryCJ_JhUA.png)
