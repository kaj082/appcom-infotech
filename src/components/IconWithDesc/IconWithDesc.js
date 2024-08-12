import React from "react";
import { ArrowLeft } from "../../icons";
import styles from "./IconWithDesc.module.scss";
import cx from "classnames";

const IconWithDesc = (props) => {
  const { isActive, desc, onClick } = props;
  return (
    <div
      className={cx(styles.IconWithDesc, { [styles.active]: isActive })}
      onClick={onClick}
    >
      <p className={styles.desc}>{desc}</p>
      <ArrowLeft />
    </div>
  );
};

export default IconWithDesc;
