import WorkModal from "../../components/WorkModal";
import { useState } from "react";
import React from "react";
import classes from "./WorkCard.module.sass";

interface Props {
  path: string;
  title: string;
  link?: string;
  introArr: string[];
  partner?: Partner;
}

interface Partner {
  planning?: string;
  art?: string;
  fontEnd?: string;
}
const WorkCard = ({ path, title, link, introArr, partner }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const onClick = () => {
    setIsModalVisible(true);
    console.log("87");
  };
  return (
    <>
      <div className={classes.root}>
        <figure onClick={onClick}>
          <img className={classes.image} src={path} alt="" />
        </figure>
        <figcaption>{title}</figcaption>
      </div>
      <WorkModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        title={title}
        content={
          <div>
            <a href={link} target="_blank" rel="noreferrer" className={classes.link}>
              作品連結：{title}
            </a>
            {
              <ul className={classes.partner}>
                {partner?.planning && <li>企劃：{partner?.planning}</li>}
                {partner?.art && <li>美術：{partner?.art}</li>}
                {partner?.fontEnd && <li>程式：{partner?.fontEnd}</li>}
              </ul>
            }
            {/* {introArr.map((item, index) => (
              <figure key={index} className={classes.modalFigure}>
                <img className={classes.image} src={item} alt="" />
              </figure>
            ))} */}
          </div>
        }
      />
    </>
  );
};

export default WorkCard;
