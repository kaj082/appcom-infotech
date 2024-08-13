import React from "react";
import { ArrowLeft } from "../../icons";
import styles from "./IconWithDesc.module.scss";
import cx from "classnames";

const IconWithDesc = (props) => {
  const { isActive, desc, onClick, icon, textColor, className } = props;
  return (
    <div
      className={cx(styles.IconWithDesc, className, {
        [styles.active]: isActive,
      })}
      onClick={onClick}
    >
      <p
        className={styles.desc}
        style={{
          color: textColor,
        }}
      >
        {desc}
      </p>
      {icon ? icon : <ArrowLeft />}
    </div>
  );
};

export default IconWithDesc;
