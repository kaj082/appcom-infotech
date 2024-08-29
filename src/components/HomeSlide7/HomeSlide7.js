import React, { useState } from "react";
import styles from "./HomeSlide7.module.scss";
import image from "../../assets/slide7.png";
import Button from "../button/Button";

const HomeSlide7 = () => {
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

    window.location.href = mailtoLink;
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className={styles.HomeSlide7}>
      <form onSubmit={handleSubmit} className={styles.left}>
        <div className={styles.upper}>
          <input
            type="text"
            placeholder="Name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          name="Message"
          placeholder="Message"
          className={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <Button type="submit" className={styles.btn}>
          Send Message
        </Button>
      </form>
      <div className={styles.right}>
        <img src={image} alt="background-image" className={styles.image} />
        <p className={styles.title}>Contact Us for Tailored IT Solutions</p>
      </div>
    </div>
  );
};

export default HomeSlide7;
