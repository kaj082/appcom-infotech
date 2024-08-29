import React, { useState } from "react";
import styles from "./ContactUs.module.scss";
import bg from "../../assets/contacts1.png";
import bg1 from "../../assets/contactus.png";
import Button from "../button/Button";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the mailto link
    const mailtoLink = `mailto:sales@appcominfotech.com?subject=Contact Form Submission from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `Sender Email: ${email}\nName: ${name}\nMessage: ${message}`
    )}`;

    // Open the mailto link in the default email client
    window.location.href = mailtoLink;

    // Optionally clear the form after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className={styles.ContactUs}>
      <div className={styles.bg}>
        <img src={bg} alt="Background" className={styles.image} />
        <div className={styles.bgg} />
      </div>

      <div className={styles.main}>
        <div className={styles.details}>
          <p className={styles.title}>Contact Us for Tailored IT Solutions</p>
          <form onSubmit={handleSubmit} className={styles.left}>
            <div className={styles.upper}>
              <input
                type="text"
                placeholder="Name"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <textarea
              placeholder="Message"
              className={styles.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <Button type="submit" className={styles.btn}>
              Send Message
            </Button>
          </form>
          <div className={styles.bg1}>
            <img src={bg1} alt="group" className={styles.image} />
          </div>
          <div className={styles.rec} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
