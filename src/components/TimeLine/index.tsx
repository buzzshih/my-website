import React from "react";
import { Timeline } from "antd";
import classes from "./TimeLine.module.sass";

const TimeLine = () => (
  <div className={classes.wrapper}>
    <Timeline
      mode="left"
      reverse={true}
      items={[
        {
          color: "#838e83",
          label: "2014 - 09",
          children: "進入台南長榮大學就讀資訊管理學系",
        },
        {
          color: "#838e83",
          label: "2017 - 05",
          children: (
            <>
              <div>畢業專題第二名 - VR人體腸胃導覽系統</div>
              <a href="https://www.youtube.com/watch?v=ZypQ99JFdQs" target="_blank">
                當時的宣傳影片
              </a>
            </>
          ),
        },
        {
          color: "#838e83",
          label: "2018 - 12 - 16",
          children: (
            <>
              <div>大眾傳播學系小舞台劇 -男男女女 擔任男主角 </div>
              <a href="https://www.youtube.com/watch?v=kh_kF4xGx54" target="_blank">
                當時側錄影片
              </a>
            </>
          ),
        },
        {
          color: "#838e83",
          label: "2018 - 09",
          children: "就讀長榮大學資訊暨設計研究所",
        },
        {
          color: "#838e83",
          label: "2019 - 07 ~ 2019 - 08 ",
          children: (
            <>
              <div>捷克暑期交換兩個月</div>
              <div className={classes.image}>
                <img src="./work-image/exchange_student.jpg" alt="" />
              </div>
            </>
          ),
        },
        {
          color: "#838e83",
          label: "2020 - 08",
          children: (
            <>
              <div>研究所畢業 </div>
              <a
                href="https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/login?o=dnclcdr&s=id=%22108CJU0080A004%22.&searchmode=basic"
                target="_blank"
              >
                畢業論文 - 六軸動感平台整合頭戴式虛擬實境下動暈症對臨場感與使用者體驗之影響
              </a>
            </>
          ),
        },
        {
          color: "#838e83",
          label: "2020 - 08 ~ 2021 - 11",
          children: "在高雄的數位內容科技公司擔任 Unity 工程師",
        },
        {
          color: "#838e83",
          label: "2021 - 11 ",
          children: "因為當時公司業務轉型，轉職成前端工程師",
        },
        {
          color: "#838e83",
          label: "2021 - 09 ",
          children: "進入位在台南科技的公司，開始遠端工作",
        },
      ]}
    />
  </div>
);

export default TimeLine;
