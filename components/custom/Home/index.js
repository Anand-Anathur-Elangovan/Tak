import React from "react";
import { Container, Header } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import styles from "./home.module.scss";
import headerBg from "../../../assets/image/header_bg.webp";

const Home = (props) => {
  return (
    <Container textAlign="center" className={styles.homeContainer} id="home">
      <Header as="h1" className={styles.customHeaderHome}>
        Fabricating and delivering various custom sheet metal components is a
        skill and its what TAK does at its best. We convert thoughts into
        feasible solutions, starting from design to assembly.
      </Header>
    </Container>
  );
};
export default Home;
