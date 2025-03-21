import React from "react";
import cx from "classnames";
import styles from "./ButtonType2.module.scss";

const ButtonType2 = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cx(styles.ButtonType2, {
        [styles.active]: active,
      })}
    >
      {children}
    </button>
  );
};

export default ButtonType2;
