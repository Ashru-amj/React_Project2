import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { IoCallOutline } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {

  const [name, setName] = useState("Ashru")
  const [email, setEmail] = useState("Ashru@gmail.com")
  const [text, setText] = useState("Rama is Lord")




  const onSubmit = (event) => {

    event.preventDefault();
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)

    const newName = event.target[0].value;
  const newEmail = event.target[1].value;
  const newText = event.target[2].value;

  // Update the state with the new values
  setName(newName);
  setEmail(newEmail);
  setText(newText);

  // Clear the form inputs
  event.target[0].value = "";
  event.target[1].value = "";
  event.target[2].value = "";

    console.log(
      name,
      email,
      text,
    )

  }


  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<IoCallOutline fontSize="24px" />} />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">TEXT</label>
            <textarea name="text" rows="6" />
          </div>
          <div style={{
            display: "flex",
            justifyContent: "end"
          }}>
            <Button text="SUBMIT" />
          </div>
          <div>
            {name + " " + email + " " + text}
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/photos/Union.png" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
