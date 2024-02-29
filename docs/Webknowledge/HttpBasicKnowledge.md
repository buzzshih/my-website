---
authors: Buzz
name: Buzz
title: "HTTP 基本知識筆記"
tags: [Webknowledge, Http]
---

# HTTP 基本知識筆記

> 本文章內容來自看完 Will 保哥的影片 - 初學者都該學會的 HTTP 通訊協定基礎的筆記
>
> - 初學者都該學會的 HTTP 通訊協定基礎 : https://www.youtube.com/watch?v=Taq5TV1K4XU
> - MDN Web Docs : https://developer.mozilla.org/zh-TW/

HTTP（Hypertext Transfer Protocol）是一種用於在網際網路上傳輸超文本的應用層協議。
並規定了 client 端和 server 端之間的通信基本方式和規則。
由 client 端發送請求，伺服器回應該請求。HTTP 使用 TCP（Transmission Control Protocol）作為傳輸層協定，並使用 URL（Uniform Resource Locator）來識別資源。

例如：我們今天在瀏覽器輸入一個網址，例如`https://www.google.com`，瀏覽器會發送一個 HTTP 請求到 Google 的伺服器，伺服器會回應該請求並返回網頁內容給瀏覽器，瀏覽器則會解析該內容並顯示在畫面上。

1.  如何發送 HTTP Request

    - 請求的方法（Request Methoods）

      > HTTP 定義了幾種請求方法，包括 GET、POST、PUT、DELETE 等等。不同的請求方法代表著不同的意義和操作，常用的請求方法如下：

      1.  GET：用於向伺服器請求取回資源，通常用於獲取資料。
          - 範例：當使用者在瀏覽器中輸入網址或點擊頁面連結時，瀏覽器就會向伺服器發送 GET 請求來取得頁面的 HTML、CSS 和 JavaScript 等資源。
      2.  POST：用於向伺服器提交資源，通常用於發送資料或創建新資源。
          - 範例：當使用者在網站中填寫表單，並點擊提交時，瀏覽器就會向伺服器發送 POST 請求來提交表單資料。
      3.  PUT：用於更新伺服器上的現有資源。
          - 範例：當使用者在部落格上修改個人資料時，瀏覽器就會向伺服器發送 PUT 請求來更新伺服器上的資料。
      4.  DELETE：用於刪除伺服器上的現有資源。
          - 範例：當使用者在當使用者在部落格刪除已經發表的文章，瀏覽器就會向伺服器發送 DELETE 請求來刪除伺服器上的資料。
      5.  PATCH：用於更新伺服器上部分資源。
          - 範例：當使用者在部落格修改已經發表的文章，編輯內文並完成編輯時，瀏覽器就會向伺服器發送 PATCH 請求來將修改的部分資源更新至伺服器上。

2.  發請求的表頭
    HTTP 表頭（Header）是在 HTTP 請求和回應中，用來傳遞各種訊息的元素。
    HTTP 表頭包含了 Request Header 和 Response Header 兩種類型。

    Request Header 存放著請求的相關訊息，例如：

    - User-Agent: 發送請求的使用者代理程式，用來標記不同的軟體和硬體資訊，例如：使用什麼裝置、使用什麼瀏覽器等等。
    - Accept: 會對伺服器告知用戶端可解讀的內容類型。
    - Host: 目標伺服器的域名/IP。
    - Authorization: 發送請求的認證憑證。
    - Cookie: 發送請求的 HTTP Cookie。

    Response Header 則存放著回應的相關訊息，例如：

    - Content-Type: 回應的內容類型。
    - Content-Length: 回應內容的長度。
    - Server: server 使用的伺服器軟體。
    - Set-Cookie: server 要求用戶端保存的 Cookie。

    HTTP 表頭中的資訊可以提供給伺服器和瀏覽器使用，以使其能夠更好地處理請求和回應。
    例如，Content-Type 首部能夠讓瀏覽器知道回應內容的格式，而 Cookie 首部能夠讓伺服器記錄使用者的狀態，從而實現 Session 功能。

範例：

- 網頁中發送 HTTP 請求時，會自動加上一些預設的 Request Header
  - Host 指定要請求的目標網域名稱或 IP
  - User-Agent 指定了發送請求的用戶端程式名稱和版本號
  - Accept、Accept-Language 和 Accept-Encoding 則分別指定了用戶端接受的內容格式、語言和壓縮方式。
  - Connection 則指定了連線的狀態，可以是 keep-alive 表示持續連線，或者是 close 表示一次性連線。
  - Referer 指定了發送請求的頁面 URL。
  - Cookie 則是用來傳送 HTTP Cookie 資訊。

```
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Referer: https://www.google.com/
Cookie: SID=31d4d96e407aad42
```

- 收到 server 回應的 header
  - HTTP/1.1 200 OK 表示回應狀態是成功，狀態碼是 200，並採用 HTTP 1.1 協議。
  - Content-Type 告訴 client 端回應資料的類型是 HTML，且使用的編碼方式是 UTF-8。
  - Content-Length 表示回應資料的長度為 1234 bytes。
  - Cache-Control 告訴 client 端可以在本地快取該回應的資料，且最長快取時間為 3600 秒。
  - Server 表示 server 端正在使用的 Web 伺服器軟體是 Apache；X-Powered-By 告訴 client 端該網頁是使用 PHP 7.4.2 撰寫的
  - Date 告訴 client 端回應的時間是 GMT 時間的 2023 年 5 月 10 日 08:30:00。

```
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 1234
Cache-Control: max-age=3600, public
Server: Apache
X-Powered-By: PHP/7.4.2
Date: Mon, 10 May 2023 08:30:00 GMT
```

3. HTTP 回應的狀態代碼(Response status code)

   > 當伺服器收到請求時，會根據請求的內容和資源狀態回傳相應的狀態碼。HTTP 狀態碼由三位數組成，第一位數指定了狀態碼的類型。常見的 HTTP 狀態碼包括：

   - 1xx Informational：表示請求已被接受，繼續處理。
     - 例如：100 Continue，表示伺服器已收到請求的一部分，並且 client 端應該繼續發送剩餘的請求。
   - 2xx Success：表示請求已成功被伺服器接收、理解、接受處理。
     - 例如：200 OK，表示請求已成功，並返回相應的資料。
   - 3xx Redirection：表示需要 client 端採取進一步的操作才能完成請求。
     - 例如：301 Moved Permanently，表示所請求的資源已永久移動到新的位置。
   - 4xx Client Error：表示 client 端發生錯誤，伺服器無法處理請求。
     - 例如：404 Not Found，表示所請求的資源不存在。
   - 5xx Server Error：表示伺服器發生錯誤，無法完成請求。

     - 例如：500 Internal Server Error，表示伺服器內部錯誤，無法完成請求。

     範例：

     - 200 OK：當 client 端請求一個存在的資源時，伺服器會返回一個 200 狀態碼，表示請求成功並且伺服器已經成功返回相應的資料。
     - 404 Not Found：當 client 端請求一個不存在的資源時，伺服器會返回一個 404 狀態碼，表示所請求的資源不存在。
     - 500 Internal Server Error：當伺服器出現內部錯誤時，會返回一個 500 狀態碼，表示伺服器無法完成請求。
