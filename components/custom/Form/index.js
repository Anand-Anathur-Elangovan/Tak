import React, { Component, useState } from "react";
import Image from "next/image";
import {
  Button,
  Checkbox,
  Container,
  Form,
  Header,
  Input,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";
import locationImage from "../../../assets/image/location/location.png";
import weldImage from "../../../assets/image/gallery/weld1.jpg";
import styles from "./Form.module.scss";
import MainForm from "../MainForm";
import axios from "axios";

const FormExampleFieldControl = () => {
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    Email: "",
    Phone: "",
    Message: "",
  });

  const handleChange = (e, data) => {
    if (data === "Fname") {
      setFormData({ ...formData, Fname: e.target.value });
    }
    if (data === "Lname") {
      setFormData({ ...formData, Lname: e.target.value });
    }
    if (data === "Email") {
      setFormData({ ...formData, Email: e.target.value });
    }
    if (data === "Phone") {
      setFormData({ ...formData, Phone: e.target.value });
    }
    if (data === "Message") {
      setFormData({ ...formData, Message: e.target.value });
    }
  };
  const submitHandler = async () => {
    try {
      if (
        formData?.Fname &&
        formData?.Lname &&
        formData?.Email &&
        formData?.Phone
      ) {
        const res = await axios({
          method: "POST",
          url: `http://localhost:3000/api/triggerMail/triggerMail`,
          data: {
            mail_body: `<h2>Name:</h2><p>${formData?.Fname} ${formData?.Lname}</p>
           <h2> Email ID: </h2> <p>${formData?.Email} </p>
           <h2>Phone:</h2><p>${formData?.Phone}</p>
           <h2> Message: </h2> <p>${formData?.Message} </p>
          `,
          },
        });
        console.log("res", res);
        window.alert("Successfully Submitted...");
        setFormData({
          Fname: "",
          Lname: "",
          Email: "",
          Phone: "",
          Message: "",
        });
      } else {
        window.alert("Fill all mandatory fields...");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const url =
    "https://www.google.com/maps/place/Tak+Fabrications+and+Precision+Engg/@-38.0368691,145.2040785,20z/data=!4m5!3m4!1s0x6ad613654a2dff81:0x986e3aba0b0f8f20!8m2!3d-38.0367851!4d145.2043024!5m1!1e2";
  return (
    <Container className={styles.contactUs} id="contactUs">
      <div className={styles.location}>
        <Image src={weldImage} alt="N Image" width={500} height={450}></Image>
      </div>
      <div className={styles.form}>
        <Header as="h2" className={styles.header}>
          {" "}
          Contact Us
        </Header>
        <Form className={styles.form_Data}>
          <Form.Group widths="equal" className={styles.form_Data_Group1}>
            <Form.Field
              control={Input}
              label="First name"
              placeholder="First name"
              onChange={(e) => handleChange(e, "Fname")}
              value={formData?.Fname}
              className={styles.form_Data_Group_Field}
              required
            />
            <Form.Field
              control={Input}
              label="Last name"
              placeholder="Last name"
              onChange={(e) => handleChange(e, "Lname")}
              value={formData?.Lname}
              className={styles.form_Data_Group_Field}
              required
            />
          </Form.Group>
          <Form.Group widths="equal" className={styles.form_Data_Group2}>
            <Form.Field
              control={Input}
              label="Email"
              placeholder="Email"
              onChange={(e) => handleChange(e, "Email")}
              value={formData?.Email}
              className={styles.form_Data_Group_Field}
              required
              type="email"
            />
            <Form.Field
              type="number"
              control={Input}
              label="Phone"
              placeholder="Phone"
              onChange={(e) => handleChange(e, "Phone")}
              value={formData?.Phone}
              className={styles.form_Data_Group_Field}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label="Message"
            placeholder="Tell us more..."
            onChange={(e) => handleChange(e, "Message")}
            value={formData?.Message}
            className={styles.form_Data_Group_Field}
          />

          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Send Message"
            onClick={submitHandler}
            type="submit"
            // label="Submit"
          />
        </Form>
      </div>
      <div className={styles.location}>
        <Header as="h2" className={styles.header}>
          Location
        </Header>
        <a href={url} target="_blank" rel="noreferrer noopener">
          <Image
            src={locationImage}
            alt="N Image"
            width={500}
            height={450}
          ></Image>
        </a>
      </div>

      {/* <MainForm /> */}
    </Container>
  );
};

export default FormExampleFieldControl;
