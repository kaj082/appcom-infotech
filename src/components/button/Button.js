import React from "react";
import cx from "classnames";
import styles from "./Button.module.scss";

const Button = (props) => {
  const {
    children,
    className,
    prefixIcon,
    suffixIcon,
    onClick,
    isActive = false,
  } = props;

  return (
    <button
      className={cx(styles.button, className, { [styles.isActive]: isActive })}
      onClick={onClick}
    >
      {prefixIcon && <div className={cx(styles.prefixIcon)}>{prefixIcon}</div>}

      {children}

      {suffixIcon && <div className={cx(styles.suffixIcon)}>{suffixIcon}</div>}
    </button>
  );
};

export default Button;
