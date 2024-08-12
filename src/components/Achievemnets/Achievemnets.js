import React from "react";
import styles from "./Achievemnets.module.scss";
import { Award } from "../../icons";
import cx from "classnames";

const Achievemnets = ({ type = false }) => {
  return (
    <div className={cx(styles.Achievemnets, { [styles.type]: type })}>
      <div className={styles.upper}>
        <p className={styles.title}>Achievements</p>
        <Award />
      </div>
      <p className={styles.desc}>
        Supply, Installation, and Maintenance of 1PF HPC at PRL, Ahmedabad,
        ranked 14th in Top 100 Supercomputers of India.
      </p>
    </div>
  );
};

export default Achievemnets;
