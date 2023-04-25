import WorkModal from "../../components/WorkModal";
import { useState } from "react";
import React from "react";
import classes from "./WorkCard.module.sass";

interface Props {
  path: string;
  title: string;
  link?: string;
  introArr: string[];
}

const WorkCard = ({ path, title, link, introArr }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const onClick = () => {
    setIsModalVisible(true);
  };
  return (
    <>
      <div className={classes.root} onClick={onClick}>
        <figure>
          <img className={classes.image} src={path} alt="-" />
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
            {introArr.map((item, index) => (
              <figure key={index} className={classes.modalFigure}>
                <img className={classes.image} src={item} alt="" />
              </figure>
            ))}
          </div>
        }
      />
    </>
  );
};

export default WorkCard;
