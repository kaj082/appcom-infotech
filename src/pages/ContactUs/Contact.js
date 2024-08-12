import React from "react";
import styles from "./Contact.module.scss";

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
