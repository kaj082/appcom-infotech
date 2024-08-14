import React from "react";
import styles from "./HomeSlide6.module.scss";
import Button from "../button/Button";
import { ArrowRight } from "../../icons";
import Achievemnets from "../Achievemnets/Achievemnets";
import bg2 from "../../assets/slide4bg2.png";

const HomeSlide6 = () => {
  return (
    <div className={styles.HomeSlide6}>
      <div className={styles.bg1}>
        <img src={bg2} alt="" className={styles.image} />
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.title}>We take pride in our achievements</p>
        <Button prefixIcon={<ArrowRight />} className={styles.btn}>
          View Our Success Stories
        </Button>
      </div>
      <div className={styles.row1}>
        <Achievemnets
          desc={"ranked 14th in Top 100 Supercomputers of India...."}
          type={true}
        />
        <Achievemnets
          type={true}
          desc={"Comprehensive AMC services for a 100TF HPC system."}
        />
        <Achievemnets
          type={true}
          desc={"Management of DC and DR infrastructure ..."}
        />
      </div>
      <div className={styles.row2}>
        <Achievemnets
          type={true}
          desc={"AMC for over 1500 high-end servers..."}
        />
        <Achievemnets
          type={true}
          desc={"Implementation of multi-petabyte NetApp FAS..."}
        />
      </div>
      <Button prefixIcon={<ArrowRight />} className={styles.btn1}>
        View Our Success Stories
      </Button>
    </div>
  );
};

export default HomeSlide6;
