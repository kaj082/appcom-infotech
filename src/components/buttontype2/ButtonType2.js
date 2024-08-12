import React from "react";
import cx from "classnames";
import styles from "./ButtonType2.module.scss";

const ButtonType2 = ({ children, active }) => {
  return (
    <button
      className={cx(styles.ButtonType2, {
        [styles.active]: active,
      })}
    >
      {children}
    </button>
  );
};

export default ButtonType2;
