import Image from "next/image";
import React from "react";
import { Container, Header, List } from "semantic-ui-react";
import styles from './service.module.scss'
import heroImage from '../../../assets/image/service/hero_image.png'

const ServiceContent = () => (
  <Container className={styles.service}>
  <div>
    <Header as="h2" className={styles.header}>We Engage as one of your most valuable resources.</Header>
    <List>
      <List.Item>
        ur services have been sort out generally by word of mouth due to our
        commitment to continuous improvement approach with a positive outlook.
      </List.Item>
      <List.Item>
        A team of highly skilled master tradesmen with years of industry
        experience from defence, automotive, construction/earth moving machine
        building, toolmaking, CAD & CAM design at your disposal.
      </List.Item>
    </List>
    </div>
    <div>
      <Image src={heroImage} width={464} height={618} alt='services'></Image>
    </div>
  </Container>
);

export default ServiceContent;
