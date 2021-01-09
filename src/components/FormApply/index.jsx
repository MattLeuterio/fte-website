import React, { useState } from "react";
import emailjs from "emailjs-com";

import { Form, Input, Textarea, Label, InputCtn, Success } from "./style";
import { withMediaQueries } from "../../hoc/withMediaQueries";
import Inter from "../../ui/typography/inter";
import { Icon } from "../../atoms";
import {
  IconFormUbisoft,
  IconFormEmail,
  IconFormExperience,
  IconFormFullname,
  IconFormPhone,
  IconFormRole,
  IconFormCalendar,
  IconDiscord,
} from "../../ui/assets/icons";

const emailSuccessTemplate = () => (
  <>
    <Inter type="emailSuccessHead">Success!</Inter>
    <Inter type="emailSuccessBody">Request sent successfully.</Inter>
  </>
);

const FormApply = () => {
  const [emailSuccess, setEmailSuccess] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_ud95it8",
        e.target,
        "user_r6vp0JvYPxBM4P50T1BF0"
      )
      .then(
        (result) => {
          setEmailSuccess(emailSuccessTemplate());
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Form className="contact-form" onSubmit={sendEmail}>
      <InputCtn>
        <Label>
          <Icon icon={IconFormEmail} size={24} />
        </Label>
        <Input placeholder="Email" type="email" name="email" />
      </InputCtn>
      <InputCtn>
        <Label>
          <Icon icon={IconFormFullname} size={24} />
        </Label>
        <Input placeholder="Nickname*" type="text" name="nickname" required />
      </InputCtn>
      <InputCtn>
        <Label>
          <Icon icon={IconFormCalendar} size={24} />
        </Label>
        <Input placeholder="Age*" type="number" name="age" required />
      </InputCtn>
      <InputCtn>
        <Label>
          <Icon icon={IconFormPhone} size={24} />
        </Label>
        <Input
          placeholder="Mobile number"
          type="tel"
          name="phone"
          pattern="[0-9]{10}"
        />
      </InputCtn>
      <InputCtn>
        <Label>
          <Icon icon={IconDiscord} size={24} />
        </Label>
        <Input
          placeholder="Discord ID (es. Name#0000)"
          type="text"
          name="discord"
          //pattern="[(.*)#(\d{4})]"
        />
      </InputCtn>
      <InputCtn>
        <Label>
          <Icon icon={IconFormUbisoft} size={24} />
        </Label>
        <Input placeholder="UplayID" type="text" name="ubisoft" />
      </InputCtn>
      <InputCtn>
        <Label>
          <Icon icon={IconFormRole} size={24} />
        </Label>
        <Input placeholder="Role (apply)*" type="text" name="role" required />
      </InputCtn>
      <InputCtn>
        <Label>
          <Icon icon={IconFormExperience} size={24} />
        </Label>
        <Inter type="h3">Experience</Inter>
      </InputCtn>
      <Textarea rows="7" name="experience" />
      <Input type="submit" value="Submit" />
      <Success>{emailSuccess}</Success>
    </Form>
  );
};

export default withMediaQueries(FormApply);
