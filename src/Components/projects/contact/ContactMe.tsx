import React, { FormEvent } from "react";
import { useState } from "react";
import styles from "./ContactMe.module.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmationText, setconfirmationText] = useState("");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4plghef",
        "template_ir8hwll",
        form.current!,
        "IqLuCPhM0wjoJw8mv"
      )
      .then(
        (result) => {
          setconfirmationText(
            `Thanks ${name}! We will contact you at ${email}.`
          );
          setMessage("");
          setName("");
          setEmail("");

          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h2 style={{ marginTop: "2rem", marginLeft: "2rem" }}>Contacteer mij:</h2>
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <label>Naam*</label>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Email*</label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Bericht*</label>
        <textarea
          name="message"
          cols={30}
          rows={10}
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit">Verstuur</button>
      </form>

      {confirmationText && (
        <div className={styles.confirmation}>{confirmationText}</div>
      )}
    </div>
  );
};

export default ContactForm;
