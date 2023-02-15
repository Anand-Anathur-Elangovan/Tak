import React, { Component, useState, useMemo } from "react";
import countryList from "react-select-country-list";
import Select from "react-select";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  TextArea,
} from "semantic-ui-react";
import sampleImage from "../../../assets/image/location/location.png";
// import FormWithCaptcha from "../FormWithCaptcha";

const MainForm = () => {
  //  const  handleChange = (e, { value }) => this.setState({ value });
  const [value, setValue] = useState({ label: "Australia", value: "AU" });
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setValue(value);
  };
  return (
    <>
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="First name *"
            placeholder="First name"
          />
          <Form.Field
            control={Input}
            label="Last name *"
            placeholder="Last name"
          />
          <Form.Field control={Input} label="Company" placeholder="Company" />

          <Form.Field control={Input} label="Email *" placeholder="Email" />
          <Form.Field control={Input} label="Phone *" placeholder="Phone" />
          <Form.Field
            control={Input}
            label="Street Address *"
            placeholder="Street Address"
          />
          <Form.Field
            control={Input}
            label="City / Suburb*"
            placeholder="City / Suburb"
          />
          {/* <Form.Field
            control={Input}
            label="State / Province *"
            placeholder="State / Province"
          />
          <Form.Field
            control={Input}
            label="Zip / Postal Code"
            placeholder="Zip / Postal Code"
          /> */}
          {/* <Form.Select
            fluid
            control={Input}
            options={options}
            onChange={changeHandler}
            label="Country"
            placeholder="Country"
          /> */}
        </Form.Group>
        <Select
          options={options}
          value={value}
          onChange={changeHandler}
          defaultValue={"AU"}
        />
        {/* <Form.Group inline>
          <label>Quantity</label>
          <Form.Field
            control={Radio}
            label="One"
            value="1"
            checked={value === "1"}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label="Two"
            value="2"
            checked={value === "2"}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label="Three"
            value="3"
            checked={value === "3"}
            onChange={this.handleChange}
          />
        </Form.Group> */}
        <Form.Field
          control={TextArea}
          label="Message *"
          placeholder="Tell us more..."
        />
        {/* <Form.Field
          control={Checkbox}
          label="I agree to the Terms and Conditions"
        /> */}
        {/* <Form.Field control={Button}>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form.Field> */}
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Submit"
        />
      </Form>
    </>
  );
};

export default MainForm;
