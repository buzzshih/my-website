import React from "react";
import Layout from "@theme/Layout";

const About = () => {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>
          Edit <code>pages/helloReact.js</code> and save to reload.
        </p>

        <p>對程式開發很熱情的前端工程師</p>
      </div>
    </Layout>
  );
};

export default About;
