import React from "react";
import styles from "./ContactUs.module.scss";
import bg from "../../assets/contacts1.png";
import bg1 from "../../assets/contactus.png";
import Button from "../button/Button";

const ContactUs = () => {
  return (
    <div className={styles.ContactUs}>
      <div className={styles.bg}>
        <img src={bg} alt="back-image" className={styles.image} />
        <div className={styles.bgg} />
      </div>

      <div className={styles.main}>
        <div className={styles.details}>
          <p className={styles.title}>Contact Us for Tailored IT Solutions</p>
          <div className={styles.left}>
            <div className={styles.upper}>
              <input type="text" placeholder="Name" className={styles.input} />
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
              />
            </div>
            <textarea
              name="Message"
              id=""
              placeholder="Message"
              className={styles.textarea}
            ></textarea>
            <Button className={styles.btn}>Send Message</Button>
          </div>
          <div className={styles.bg1}>
            <img src={bg1} alt="background" className={styles.image} />
          </div>
          <div className={styles.rec} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
