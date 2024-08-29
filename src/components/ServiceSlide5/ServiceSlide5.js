import React, { useState } from "react";
import styles from "./ServiceSlide5.module.scss";
import CheckIconWithdesc from "../CheckIconWithdesc/CheckIconWithdesc";
import ButtonType2 from "../buttontype2/ButtonType2";
import { descriptionsServiceSlide4 } from "../../contants/dummy";

const ServiceSlide5 = () => {
  const [active, setActive] = useState(0);

  const handleChange = (index) => {
    console.log("Button clicked, setting active to:", index); // Debugging
    setActive(index);
  };

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
              <ButtonType2
                key={index}
                active={active !== index} // Check if the button is active
                onClick={() => handleChange(index)} // Correctly pass index to handler
              >
                {item}
              </ButtonType2>
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
            {/* <Button className={styles.btn}>Learn more</Button> */}
          </div>
          <div className={styles.row1}>
            {descriptionsServiceSlide4[active]?.map((item, idx) => (
              <CheckIconWithdesc
                key={`${item}idx`}
                desc={item}
                className={styles.rowItem}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlide5;
