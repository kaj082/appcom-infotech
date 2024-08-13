import React from "react";
import image from "../../assets/sslide4.png";
import small from "../../assets/sslide4small.gif";
import CheckIconWithdesc from "../CheckIconWithdesc/CheckIconWithdesc";
import styles from "./ServiceSlide3.module.scss";
import Button from "../button/Button";

const ServiceSlide3 = () => {
  const desc = [
    "Expertise in building a complete turn-key Data Centre which includes all aspects – Rack, HACS, Power, Cooling, Networking, Security, Compliance, Computing, Storage and Backup.",
    "Optimising your requirements to meet changing density needs from low to ultra-high-density solutions for high-density Infra applications & all workloads.",
    "Tier 3 Data Centre design and implementation. Modern Infrastructure for superior sustainability",
  ];
  return (
    <div className={styles.ServiceSlide3}>
      <div className={styles.details}>
        <h3 className={styles.title}>services</h3>
        <h4 className={styles.subTitle}>
          Data Center Consulting and Solution Design
        </h4>

        <div className={styles.desc}>
          {desc.map((item, index) => (
            <CheckIconWithdesc desc={item} key={`${item}index`} />
          ))}
        </div>
        <Button className={styles.btn}>get started</Button>
      </div>

      <div className={styles.imageContainer}>
        <img src={image} alt="description" className={styles.image} />
        <div className={styles.small}>
          <img src={small} alt="" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default ServiceSlide3;
