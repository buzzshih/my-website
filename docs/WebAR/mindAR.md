---
authors: MichaelJack
name: Stone
title: "[mindAR] 以mindAR實現webAR"
tags: [webar, mindar, ar, html, css, javascript]
---

# 打造屬於自己的 WebAR 名片以 mindAR 為例

## Agenda

- what is webAR? or what is webXR ?
- 具備能力？
- 基礎語法
- Javascript
- ECMAScript ES6
- html
- css
- git
- 推薦網站

## 使用的工具

- visual studio code
- visual studio code html javascript css 擴充工具
- Prepros （起測試 server）
- fork (git 版控的 GUI 圖形化軟體)
- netlify (部署的 hosting 服務)

## Introduction

- 什麼是 WebAR 又或者說什麼是 WebXR?
  - 實例介紹
  - 各框架的範例測試
- 瀏覽器主流 3d 引擎跟工具
  1. WebGL (基於 OpenGL 開發的瀏覽器引擎)
  2. [Three.js](https://threejs.org/) (基於 WebGL 開發的 3d 建模與展示工具)
  3. [Aframe.js](https://aframe.io/) (基於 three.js 開發的 WebVR 框架)
  4. [Babylon.js](https://www.babylonjs.com/) (基於 WebGL 開發的 3d 建模與展示工具)

## 安裝所要使用的工具

1. visual studio code
2. visual studio code html javascript css 擴充工具

   - JavaScript (ES6) code snippets

     ![image](https://i.imgur.com/BMf1rcz.png)

   - JavaScript Debugger

     ![](https://i.imgur.com/Qs5gMuv.png)

   - JavaScript Debugger Companion Extension

     ![](https://i.imgur.com/0aVnd8c.png)

   - A-Frame Completion

     ![](https://i.imgur.com/Fo9KppW.png)

   - HTML Snippets

     ![](https://i.imgur.com/REoVFqc.png)

3. [下載 Prepros](https://prepros.io/)  
   ![](https://i.imgur.com/V22Up7m.png)

4. [申請帳號 Netlify 帳號](https://www.netlify.com/)
   ![](https://i.imgur.com/1HD5w1t.png)

5. ngrok - https://ngrok.com/

## 認識網頁

![](https://i.imgur.com/ZVUuWlJ.png)

1. HTML：建構網頁的身體骨架和結構
2. CSS : 負責把外貌給顯示出來，讓網頁的外貌看起來美觀
3. Javascript : 實現使用者對網頁操作的各種互動

### HTML

:::info
html 由眾多的元素 element 所組成，兩個重要的觀念就是 **巢狀結構**和**屬性**
:::

- 巢狀結構

![](https://i.imgur.com/6XTGNLB.png)

- 屬性( Attribute ): 簡單來說就是用來敘述 element 的相關性質

![](https://i.imgur.com/LWdNBm1.png)

### CSS

:::info
我們要利剛剛介紹 屬性( Attribute ) 時，在各元素內的 id 和 class 屬性來給該元素定義要顯示的樣式，範例如下。
:::

![](https://i.imgur.com/nYD20uh.png)

### Javascript

:::info
上面提到 JavaScript 是用來實現使用者對網頁操作的各種互動，所以 JavaScript 最重要的概念就是要控制 HTML 中的各個 element，既然要控制 element 那勢必得提供相對應的函式及 API，這邊先會使用 DOM API 即可。
:::

1. 基本宣告變數

![](https://i.imgur.com/8IfTpfs.png)

2. 元素 onClick 屬性

![](https://i.imgur.com/aeOLbXz.png)

![](https://i.imgur.com/OfTLX2L.png)

3. 使用 addEventListener 在元素中新增監聽的事件

![](https://i.imgur.com/4A7VuJC.png)

## 部署屬於你的第一個網頁到 netlify(中間總結小練習)

> 利用上述課程到現在的所學，建構一個屬於你自己的第一個網頁，並部署到 netlify 中託管

### Step1 : 選擇 Deploy manually

![](https://i.imgur.com/M3y4Ouy.png)

### Step2 : 選擇你要部署的資料夾

![](https://i.imgur.com/SeoOlBa.png)

### Step3 : 上傳

![](https://i.imgur.com/QbGF3kk.png)

## mindAR 介紹

:::info

MindAR 是一個開源的 WebAR library ，它支持圖像追蹤臉部追蹤。
主要由 A-Frame 建構而成，在版本 1.1.0 之後開始支援 three.js
:::

## 使用 mindAR 實作屬於你的 ImageTarget

### Overview

等等放範例
https://hiukim.github.io/mind-ar-js-doc/examples/minimal

圖片
https://hiukim.github.io/mind-ar-js-doc/assets/images/card-06cb9111a8e32627db6bfafc7aa22a4d.png

### Compile Target Images

:::tip

- 在建構圖片辨識的應用前，我們先把要辨識的圖片編譯成 MindAR 可以讀取的檔案
- https://hiukim.github.io/mind-ar-js-doc/tools/compile/

:::

#### Step1. 選擇你的圖片

![](https://i.imgur.com/3Ne1b8T.png)

#### Step2. 編譯完成會看到可視化的特徵點

![](https://i.imgur.com/oG6mGSL.png)

#### Step3. 下載已編譯好圖片特徵點的.mind 檔案

:::tip
在 Step2 的下方您將看到一個 Download 按鈕。成功下載後會擁有一個名為 targets.mind 文件。
它以緊湊的格式存儲特徵數據，等等在構建網頁時會需要這個檔案。
:::

### 建構 imageTarget 應用

#### Step1. 開一個專案資料夾

在這個專案資料夾中，建構空白的 index.html 及已編譯好圖片特徵點的 targets.mind 檔案
![](https://i.imgur.com/CKkZBwQ.png)

#### Step2. 建構最小可行性的 example

##### 建構 imageTarget 應用 程式碼

```html showLineNumbers
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/dist/mindar-image.prod.js"></script>
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/dist/mindar-image-aframe.prod.js"></script>
  </head>
  <body>
    <a-scene
      mindar-image="imageTargetSrc: ./targets.mind;"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
    >
      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
      <a-entity mindar-image-target="targetIndex: 0">
        <a-plane
          color="blue"
          opaciy="0.5"
          position="0 0 0"
          height="0.552"
          width="1"
          rotation="0 0 0"
        ></a-plane>
      </a-entity>
    </a-scene>
  </body>
</html>
```

- 在 html head 中加入 MindAR 所需要用到的 library

![](https://i.imgur.com/UIDWXHC.png)

```html showLineNumbers
<!-- MindAR 圖片辨識的核心 library -->
<script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/dist/mindar-image.prod.js"></script>
<!-- A-Frame 框架 library  -->
<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
<!-- MindAR 整合 A-Frame library  -->
<script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/dist/mindar-image-aframe.prod.js"></script>
<script src="./index.js"></script>
<!-- 要加下面這個 library 才可以讓animation 可以讀取 3D model animation -->
<script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js"></script>
```

- 編譯好圖片特徵點的.mind 檔可以要放在 mindar-image 這個屬性中

![](https://i.imgur.com/s54igEK.png)

- a-scene 可看作 unity 中的 scene 創建 WebAR 一個場景
- a-entity 類似 unity 中的 GameObject 是實體化掛載在 A-Frame 中的物件 因此可以使用 position rotation scale 等屬性
- 在 a-entity 裡有一個屬性 mindar-image-target="targetIndex: 0"。意思是跟Ｍ indAR 指定辨識特定的圖片。如果編譯.mind 檔時只放了一張圖片，那 targetIndex 一直都指定為 0。但如果將多張圖片放在一起編譯成一個.mind 檔的話，那這個 targetIndex 指定的數值就是依照編譯時的圖片排列順序。

:::tip
width=1 表示寬度與 targetImage 相同
而高度設成 0.552 就只是因為這邊範例圖片比例是 0.552：1
另外再補充一點，掃描出來後的實體物件錨點(0,0,0)位於 imageTarget 的中心點
:::

```js showLineNumbers
<a-plane
  color="blue"
  opacity="0.5"
  position="0 0 0"
  height="0.552"
  width="1"
  rotation="0 0 0"
></a-plane>
```

### 在瀏覽器執行建構好的 imageTarget 應用

:::tip
要 https 才可以開啟相機鏡頭
:::

1. 這邊利用前面裝的軟體 Prepros 來開啟，我們目前的成品

![](https://i.imgur.com/D7yo4D8.png)

![](https://i.imgur.com/9q92Y7C.png)

## 加入 3D 素材資源

### 加入 a-assets

:::info
A-Frame 的資產管理系統，允許我們將資產放在一個地方，並預加載和緩存資產以獲得更好的性能。請注意，資產管理系統純粹用於預加載資產。

我們將要使用的資源放在`<a-assets>`中，並將`<a-assets>`放在`<a-scene>`場景內用以場景載入完成即加載完成這些資源。

:::

1. `<a-asset-item>` - 雜項資產，例如 3D 模型/素材
2. `<audio>` - 聲音文件
3. `<img>` - 圖像紋理
4. `<video>` - 視頻紋理

:::info

- 下面的 `<a-assets>` 包裝著 image 是圖片辨識成功後要出現的的圖片
- `<a-asset-item>` 中是 gltf 格式的 3D model，Aframe 幾乎支援所有標準的 3D 格式，所以等等你可以選擇自己喜歡的模型來替換

:::

```html showLineNumbers
<a-assets>
  <img
    id="card"
    src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/examples/image-tracking/assets/card-example/card.png"
  />
  <a-asset-item
    id="avatarModel"
    src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/examples/image-tracking/assets/card-example/softmind/scene.gltf"
  ></a-asset-item>
</a-assets>
```

### 實體化 3D 模型

> 將資源都在`<a-entity>`實體化

#### 將前面做的藍色 plane，導入 image 紋理置換顯示的素材

```js showLineNumbers
<a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
```

#### 在 plane 上面加載一個 3D 模型

:::info

- rotation / position / scale 基本上跟在 unity 中都差不多分別代表物件的 角度 / 座標位置 / 大小
- 這邊設定一個動畫可以讓 3D model 在 z 軸上 0 ~ 0.1 之間擺動

:::

```html showLineNumbers
<a-gltf-model
  rotation="0 0 0 "
  position="0 0 0.1"
  scale="0.005 0.005 0.005"
  src="#avatarModel"
  animation="property: position; to: 0 0.1 0.1; dur: 1000;
              easing: easeInOutQuad;
              loop: true;
              dir: alternate"
></a-gltf-model>
```

### 結合上述的操作就等於以下的程式碼

```html showLineNumbers
<html>
  <head>
    <!-- 你的網頁頁面名稱 -->
    <title>我的WebAR</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- MindAR 圖片辨識的核心 library  -->
    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/dist/mindar-image.prod.js"></script>
    <!-- A-Frame 框架 library  -->
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
    <!-- MindAR 整合 A-Frame library  -->
    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/dist/mindar-image-aframe.prod.js"></script>
  </head>
  <body>
    <!-- a-scene 可看作 unity 中的 scene 創建WebAR一個場景 -->
    <a-scene
            mindar-image="imageTargetSrc: ./targets.mind;"
             color-space="sRGB"
             renderer="colorManagement: true, physicallyCorrectLights"
             vr-mode-ui="enabled: false"
             device-orientation-permission-ui="enabled: false">
    <!-- a-assets 主要是包裝靜態要加載在場景中的資源 -->
      <a-assets>
        <!-- img 就是 image 圖片紋理 -->
        <img id="card" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/examples/image-tracking/assets/card-example/card.png" />
        <!-- 通常是拿來放比較雜的資源，例如 3D 模型和材料 -->
        <a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/examples/image-tracking/assets/card-example/softmind/scene.gltf"></a-asset-item>
      </a-assets>

      <!-- 場景中的攝影機 -->
      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
      <!-- entity 類似 unity 中的 GameObject 是實體化掛載在A-Frame中的物件 因此可以使用position rotation scale 等屬性   -->
      <a-entity mindar-image-target="targetIndex: 0">
        <a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
        <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.005 0.005 0.005" src="#avatarModel" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate">
      </a-entity>
    </a-scene>
  </body>
</html>

```

### 恭喜～完成第一個 WebAR 應用

> 如果你也一步一步順利的操作到這邊，你應該可以達成像下面這個 gif 的效果呦
> 你可以將這個專案部署到你的 netlify 上面

![](https://hiukim.github.io/mind-ar-js-doc/assets/images/basic-demo-fde07aa7567bf213e61b37dbaa192fec.gif)

### MindAR Tracking Config

> 可以透過微調一些參數讓 MindAR 影像追蹤的功能

#### Smoothing Control

> 平滑處理，AR 影像辨識的抖動不管是對開發者或是使用者都是一樣很棘手又惱人的問題

造成抖動的原因是因為程式每一幀(Frame)都在運算 target 的位置，而我們看不到的是這些包裹在程式底層裡那些運算，是一直不斷地計算並且重新賦予新的座標，所以即便我們以為已經穩穩地握者手機或是 webcam，但 target 每一幀(Frame)的 position 還是有些細微的不同，才看起來一直抖似乎不是很穩定。

##### 解決方案

> 濾波
> 用多個幀(Frame)的 target 座標取平均，Ｎ 幀(Frame)賦予 target postion 的值
> 這樣做缺點在於當使用者快速移動相機時內容移動到新座標的位置會延遲，並且越快越明顯

#### MindAR 提供的平滑 OneEuroFilter

有兩個可調參數，稱為截止頻率 ( filterMinCF) 和速度係數 ( filterBeta)。
一般來說，減小 的值 filterMinCF 可以減少抖動，反之增加可以 filterBeta 減少延遲。
它們的默認值為 filterMinCF: 0.001 和 filterBeta: 1000。
您可以通過在 mindar-image 屬性中指定這些參數來更改它

**範例**

```javascript
<a-scene mindar-image="filterMinCF:0.1; filterBeta: 10" />
```

#### WarmUp Tolerance

> MindAR 有個默認的機制會延遲觸發 target found event ，應該是說需要連續幾幀(Frame)都檢測到辨識圖才會觸發 target found event，而定義要延遲幾幀(Frame)的屬性就是 “ warmupTolerance ”，默認值為 5 (warmupTolerance: 5)

**範例**

```javascript
<a-scene mindar-image="warmupTolerance: 1" />
```

#### Miss Tolerance

> MindAR 有個默認的機制會延遲觸發 target lost event ，應該是說需要連續幾幀(Frame)都檢測到辨識圖才會觸發 target lost event，而定義要延遲幾幀(Frame)的屬性就是 “missTolerance”默認值為 5 (missTolerance: 5)

**範例**

```javascript
<a-scene mindar-image="missTolerance: 1" />
```

## imageTarge content 變化

> 更多的內容可以參考 A-frame 的官方文檔來添加更多內容在 mindAR 中
> https://aframe.io/

1. video

```javascript
  <a-assets>
    <video id="penguin-sledding" autoplay loop="true" src="penguin-sledding.mp4"></video>
  </a-assets>

  <!-- Using the asset management system. -->
  <a-video src="#penguin-sledding" width="16" height="9" position="0 0 -20"></a-video>
```

2. 3D model

```javascript
 <a-assets>
    <a-asset-item id="cityModel" src="https://cdn.aframe.io/test-models/models/glTF-2.0/virtualcity/VC.gltf"></a-asset-item>
  </a-assets>
  <a-entity gltf-model="#cityModel" modify-materials></a-entity>
```

3. Text

```javascript
<a-text
  value="Portfolio"
  color="black"
  align="center"
  width="2"
  position="0 0.4 0"
  text=""
></a-text>
```

4. box share

```javascript
<a-box
  rotation="0 0 0"
  position="0 0 0.1"
  scale="0.3 0.3 0.3"
  animation=" property: position; to: 0 1 0.1 ;
    dur:1000;
    easing:easeInOutQuad;
    loop: true; "
></a-box>
```

5. image

```javascript
a-assets>
    <img id="logo" src="logoImg.png">
  </a-assets>

  <!-- Using the asset management system. -->
  <a-image src="#logo" width="3" height="1.5"></a-image>
```

```
MIT License

Copyright (c) 2020 hiukim

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 開始利用前面所學實作自己的ＡＲ名片

## 結語

1. WebXR 是一種產業界的趨勢(5G 發展/雲端服務的成熟/瀏覽器的支援度增加)
2. WebXR 的優點在於不用安裝任何軟體，以此獲得使用者青睞
3. WebXR 的缺點為瀏覽器能有許多安全性的限制(Ex:Chrome 限制不能自動播音樂/不能自動進入 XR 模式)
4. Apple 仍然不開放 Safari 支援 WebXR
5. 效能的限制比手機 App 還要嚴格許多

## 未來職涯建議

1. Unity3D vs Unreal
2. 是否執著一定要做遊戲
3. 目前產業界的現況以及未來的需求
4. 未來想成為 3D 美術 /2D 美術 / Ｕ nity3D 工程師 or Unreal 工程師
5. 是否要去實習
6. 增強自己的英文能力及除錯的能力

## 相關學習資源

1. W3School - https://www.w3schools.com/
2. Aframe - https://aframe.io/
3. Three.js - https://threejs.org/
4. MindAR - https://github.com/hiukim/mind-ar-js
5. 互動名片 - https://github.com/85223/cjcu-ARBusinessCard

<!-- ## 最後給予今天課程一點反饋吧，問卷網址如下

https://forms.gle/izPQJsrWC4nYAy4aA -->

## 參考資料

1. Aframe - https://aframe.io/
2. MindAR Document - https://hiukim.github.io/mind-ar-js-doc/
3. MindAR github - https://github.com/hiukim/mind-ar-js
