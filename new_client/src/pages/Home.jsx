import React from "react";
import Header from "../components/Header";
import Page from "../components/Page";
import Container from "../components/Container";

const Home = () => {
  console.log(">>>>>>>>", import.meta.env.VITE_API_BASE_URL);
  return (
    <Page>
      <Header />
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Hello world!</h2>
      </Container>
    </Page>
  );
};

export default Home;
