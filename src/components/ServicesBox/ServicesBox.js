import React from "react";
import styles from "./ServicesBox.module.scss";
import Button from "../button/Button";
import CheckIconWithdesc from "../CheckIconWithdesc/CheckIconWithdesc";

const ServicesBox = ({ data, title, desc }) => {
  return (
    <div className={styles.ServicesBox}>
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.box}>
        {data.map((item, index) => (
          <CheckIconWithdesc desc={item} key={`${item}+index`} />
        ))}
      </div>
      {/* <Button className={styles.btn}>Learn more</Button> */}
    </div>
  );
};

export default ServicesBox;
