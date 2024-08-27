import React from "react";
import styles from "./Loader.module.scss";

const Loader = ({ isLoading }) => {
  if (!isLoading) return null; // Skip rendering if not loading

  return (
    <div className={styles.loaderContainer} aria-live="polite">
      <div className={styles.loader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className={styles.text}>Just thinking about JavaScript</p>
    </div>
  );
};

export default Loader;
