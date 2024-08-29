import React from "react";
import styles from "./Contact.module.scss";

import {
  ContactUs,
  ContactUsSlide2,
  HomeSlide7,
  PrimaryLayout,
} from "../../components";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <PrimaryLayout>
        <ContactUs />
        <div className={styles.contactus}>
          <HomeSlide7 />
        </div>
        <ContactUsSlide2 />
      </PrimaryLayout>
    </div>
  );
};

export default React.memo(Contact);
