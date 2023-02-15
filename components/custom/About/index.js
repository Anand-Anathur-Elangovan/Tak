import React from "react";
import { Container, Header, List } from "semantic-ui-react";
import styles from "./About.module.scss";
import heroImage from "../../../assets/image/about/hero_image.png";
import Image from "next/image";

const About = () => (
  <Container className={styles.aboutUs} id="about">
    <div className={styles.heroImage}>
      <Image src={heroImage} width="793" height="600" alt=""></Image>
    </div>
    <div className={styles.description}>
      <Header as="h2" className={styles.header6}>
        TAK FABRICATIONS AND PRECISION ENGINEERING PYT LTD is a welding shop.
      </Header>
      <div className={styles.bulletList}>
        <p>
          Fabricating and delivering various custom sheet metal components is a
          skill and its what TAK does at its best. We convert thoughts into
          feasible solutions, starting from design till assembly. We have most
          qualified staff members with relevant experience in producing complex
          and custom sheet metal parts which includes enclosures, custom trim,
          brackets and many more.
        </p>
        <p>Our Services Include:</p>
        <p>
          We use reliable and efficient equipment and procedures to deliver our
          custom sheet metal components, including the following standard
          equipment and strategies:
        </p>
        <List bulleted>
          <List.Item>BREAK PRESS (3.2M 135T)</List.Item>
          <List.Item>
            MIG/GMAW (Metal Inert Gas/Gas Metal Arc Welding)
          </List.Item>
          <List.Item>
            TIG/GTAW (Tungsten Inert Gas/Gas Tungsten Arc Welding)
          </List.Item>
          <List.Item>Spot Welding Various Material Alloys</List.Item>
          <List.Item>Haeger Machine (Self clinching and nutserting)</List.Item>
        </List>
        <p>
          Small repetition runs keep your component costs affordable for you. We
          have found the balance between “Just in time” and “mass production”
          can keep business workflow at a level that does not stress the end
          consumer with long delivery schedules and does not require warehouses
          full of stock.
        </p>
      </div>
    </div>
  </Container>
);

export default About;
