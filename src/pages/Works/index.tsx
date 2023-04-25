import React from "react";
import Layout from "@theme/Layout";
import WorkCard from "../../components/WorkCard";
import config from "../../config/file";
import classes from "./Work.module.sass";

const Works = () => {
  return (
    <Layout>
      <div className={classes.workCardWrapper}>
        {config.web.map((item) => (
          <WorkCard
            key={item.id}
            path={item.path}
            title={item.title}
            link={item.link}
            introArr={item.introImg}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Works;
