---
authors: Buzz
name: Buzz
title: "[Docker] Docker初探筆記"
tags: [docker]
---

# Docker 初探

## Agenda

- Docker 是什麼？
- Docker 可以做到什麼
- Docker 基本指令操作
- 利用 Docker 將 react 專案 打包成 Docker image

## Docker 是什麼？

:::info

Docker 概念上類似 VM，但比 VM 輕量很多，提供一個完全隔離的 ”環境“ 運行在現有的系統中，而這個環境在 Docker 中被稱為 container(容器)，每一個容器都獨立運作。
:::

#### Docker 三大重點概念

1. Dockerfile
   Dockerfile 就是一個建立 image 的自動化腳本，Dockerfile 執行就像是我們在安裝軟體時一樣，只是這邊把需要安裝和執行的命令寫到 Dockerfile 中。

2. image
   裡面裝了所有這個專案或是你要安裝運行的所有 libs 以及套件，透過 image 可以快速建立許多不同的 container 。

3. container
   每一台 container 就像是一台一台運行的 VM，裡面運行著裝在 image 中的應用程式，每個容器都是獨立運行且相互之間不影響。

## Docker 可以做到什麼

:::info
可讓您快速地建立、測試和部署應用程式。
Docker 將軟體封裝到名為容器的標準化單位，其中包含程式庫、系統工具、程式碼和執行時間等執行軟體所需的所有項目
:::

套在前端的應用有以下幾種

1. 統一專案的開發環境
2. 專案 build 打包時，打包成 docker image 再連線到遠端伺服器更新。

## Docker 基本指令操作

FROM { image name } : {image 版本}
ex => node:19-alpine3.15

指定基礎鏡像(base image)
就是開發環境的運行環境
在 docker hub 中可以找到很多優質的操作系統 image，也有一些是用來開發某種語言的 image。 比如說 node python ubnutu alpine 等等

WORKDIR
指定之後所有 docker 指令執行的工作路徑
要注意的是這個命令之後的所有 docker 指令

COPY <本地路徑><目標路徑>
ex => COPY ./src /app/src
ps.目標路徑也就是說 docker image 中的路徑

將所有程式複製到 docker image 中

RUN
在建立 docker image 中 執行 shell 指令

CMD
在 Dockerfile 的最後會用 CMD 指定當 docker container 運行時要跑的指令

:::tip
RUN 是建立 docker image 中使用的
CMD 是 docker container 執行時使用的
:::

- docker build
  建立 docker image
  docker build -t { docker image name } .
  . 是在當前目錄尋找 Dockerfile
  -t 指的是 tag

- docker run
  啟動 docker container
  docker run -p 80:5000 -d my-finance
  -p 將容器某個 port 映射到本地主機上 80 是本地主機的 port 5000 是容器上的 port
  -d 讓程式在背景執行，而不會直接顯示在控制台

- docker images
  列出所有 image

- docker ps -a
  列出所有 container

- docker stop `<container id>`
  停止 container 運行

- docker kill `<container id>`
  當程式沒辦法再操作後，停止 container 運行

- docker restart `<container id>`
  重啟 container

- docker exec -it `<container id>` /bin/bash
  透過 shell 調整 container

- docker rm `<container id>`  
  刪除 container

- docker rmi `<image id>  `
  刪除 image

- docker compose

## 利用 Docker 將 React 專案打包成 Docker image

Example

```docker showLineNumbers
FROM node:19-alpine3.15
RUN mkdir -p /app
WORKDIR /app

COPY ./src /app/src
COPY ./public /app/public
COPY ./package.json /app
COPY ./tsconfig.json /app
COPY ./yarn.lock /app

RUN ls -a /app



RUN yarn install

# docker run -p 8080:3000 -it 6ee1 sh


CMD ["yarn" , "run" , "start"]
```
