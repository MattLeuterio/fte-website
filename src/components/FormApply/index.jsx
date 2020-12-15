import React from "react";
import emailjs from "emailjs-com";

import {} from "./style";
import { withMediaQueries } from "../../hoc/withMediaQueries";

const FormApply = () => {
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <form className="contact-form" onSubmit={sendEmail}>
        <input placeholder="Nickname" type="text" name="nickname" />
        <input placeholder="Age" type="number" name="age" />
        <input
          placeholder="Discord ID (es. Name#0000)"
          type="text"
          name="discord"
        />
        <input placeholder="Role (apply)" type="text" name="role" />
        <label>Experience</label>
        <textarea name="experience" />
        <input type="submit" value="Complete" />
      </form>
    </>
  );
};

export default withMediaQueries(FormApply);
