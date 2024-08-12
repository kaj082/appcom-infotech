import React from "react";
import styles from "./CheckIconWithdesc.module.scss";
import { Check } from "../../icons";

const CheckIconWithdesc = ({ desc }) => {
  return (
    <div className={styles.CheckIconWithdesc}>
      <div className={styles.check}>
        <Check />
      </div>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

export default CheckIconWithdesc;
