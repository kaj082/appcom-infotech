import React from "react";
import styles from "./CheckIconWithdesc.module.scss";
import { Check } from "../../icons";
import cx from "classnames";

const CheckIconWithdesc = ({ desc, className }) => {
  return (
    <div className={cx(styles.CheckIconWithdesc, className)}>
      <div className={styles.check}>
        <Check />
      </div>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

export default CheckIconWithdesc;
