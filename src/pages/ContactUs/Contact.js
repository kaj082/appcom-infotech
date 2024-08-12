import React from "react";
import styles from "./Contact.module.scss";
import bg from "../../assets/slide7.png";
import bg1 from "../../assets/contactus.png";
import { ContactUs, HomeSlide7, PrimaryLayout } from "../../components";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <PrimaryLayout>
        <ContactUs />
        <div className={styles.contactus}>
          <HomeSlide7 />
        </div>
      </PrimaryLayout>
    </div>
  );
};

export default React.memo(Contact);
