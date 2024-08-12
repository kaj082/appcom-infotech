import React from "react";
import styles from "./PrimaryLayout.module.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const PrimaryLayout = ({ children }) => {
  return (
    <div className={styles.PrimaryLayout}>
      <Header />
      <div className={styles.child}>{children}</div>
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
