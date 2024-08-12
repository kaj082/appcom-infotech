import React, { useState } from "react";
import styles from "./ServiceSlide5.module.scss";
import Button from "../button/Button";
import CheckIconWithdesc from "../CheckIconWithdesc/CheckIconWithdesc";
import ButtonType2 from "../buttontype2/ButtonType2";

const ServiceSlide5 = () => {
  const [active, setActive] = useState(0);
  const buttons = [
    "Workstation AMC",
    "Server AMC",
    "Storage AMC",
    "HPC AMC",
    "Datacentre AMC",
  ];
  return (
    <div className={styles.ServiceSlide5}>
      <div className={styles.main}>
        <div className={styles.upper}>
          <h4 className={styles.title}>
            AMC Services for Workstations, Servers, Storage and HPC
          </h4>
          <p className={styles.desc}>
            AMC Services for Workstations, Servers, Storage and HPC
          </p>
          <div className={styles.btnContainer}>
            {buttons.map((item, index) => (
              <ButtonType2 active={active !== index}>{item}</ButtonType2>
            ))}
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.con1}>
            <p className={styles.desc}>
              We provide expert HPC consulting services to help you design and
              implement high-performance computing solutions that meet your
              specific needs. Our services include:
            </p>
            <Button className={styles.btn}>Learn more</Button>
          </div>
          <div className={styles.row1}>
            <CheckIconWithdesc
              desc={
                "Hardware Maintenance: Regular maintenance and troubleshooting workstations of various OEM like Dell, Lenovo, HP, Fujitsu, Supermicro, Tyrone, and many more Make in India OEM."
              }
            />
            <CheckIconWithdesc
              desc={
                "Software Updates: Ensuring that operating systems, drivers, and software applications are up to date and properly functioning"
              }
            />
          </div>
          <div className={styles.row2}>
            <CheckIconWithdesc
              desc={
                "Virus Protection: Implementing and managing robust antivirus solutions to safeguard workstations against malware and security threats."
              }
            />
            <CheckIconWithdesc
              desc={
                "Help Desk Support: Prompt assistance and remote troubleshooting to address user queries and technical issues."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlide5;
