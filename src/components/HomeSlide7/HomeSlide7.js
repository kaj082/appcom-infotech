import React from "react";
import styles from "./HomeSlide7.module.scss";
import image from "../../assets/slide7.png";
import Button from "../button/Button";

const HomeSlide7 = () => {
  return (
    <div className={styles.HomeSlide7}>
      <div className={styles.left}>
        <div className={styles.upper}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
        </div>
        <textarea
          name="Message"
          id=""
          placeholder="Message"
          className={styles.textarea}
        ></textarea>
        <Button className={styles.btn}>Send Message</Button>
      </div>
      <div className={styles.right}>
        <img src={image} alt="background-image" className={styles.image} />
        <p className={styles.title}>Contact Us for Tailored IT Solutions</p>
      </div>
    </div>
  );
};

export default HomeSlide7;
