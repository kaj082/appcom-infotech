import React, { useState } from "react";
import styles from "./HomeSlide7.module.scss";
import image from "../../assets/slide7.png";
import Button from "../button/Button";
import emailjs from "emailjs-com";

const HomeSlide7 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    // emailjs
    //   .send(
    //     "YOUR_SERVICE_ID", // Replace   EmailJS service ID
    //     "YOUR_TEMPLATE_ID", // Replace EmailJS template ID
    //     templateParams,
    //     "YOUR_USER_ID" // Replace EmailJS user ID
    //   )
    //   .then(
    //     (response) => {
    //       console.log("SUCCESS!", response.status, response.text);
    //     },
    //     (err) => {
    //       console.error("FAILED...", err);
    //     }
    //   );
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
