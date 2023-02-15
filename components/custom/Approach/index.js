import { Container, Header, List } from "semantic-ui-react";
import styles from "./approach.module.scss";

const Approach = (props) => {
  return (
    <Container id="services" className={styles.approach}>
      <div className={styles.info}>
        <Header as="h2" className={styles.header}>
          FUTURE VISION:
        </Header>
        <p>
          Our future vision to expand our business through including the
          following machineries.
        </p>
        <List bulleted>
          <List.Item>Turret Punching</List.Item>
          <List.Item>Laser Cutting</List.Item>
          <List.Item>Robotic Welding</List.Item>
          <List.Item>Powder Coating Line</List.Item>
        </List>
      </div>
      <div className={styles.values}>
        <Header as="h2" className={styles.header}>
          In addition to our manufacturing capabilities, TAK also offers:
        </Header>
        <List bulleted>
          <List.Item>Assembly Support</List.Item>
          <List.Item>Logistics Support</List.Item>
        </List>
      </div>
    </Container>
  );
};

export default Approach;
