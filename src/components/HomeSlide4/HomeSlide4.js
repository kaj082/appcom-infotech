import React from "react";
import styles from "./HomeSlide4.module.scss";
import bg1 from "../../assets/slide4bg1.png";
import bg2 from "../../assets/slide4bg2.png";

const HomeSlide4 = () => {
  const details = [
    {
      title: "1.67x",
      desc1: "Impressive Performance",
      desc2: "Another way to grow fast",
    },
    {
      title: "29%",
      desc1: "Customer Retention",
      desc2: "On your website",
    },
    {
      title: "19%",
      desc1: "Extra Growth Revenue",
      desc2: "From your sales",
    },
    {
      title: "19%",
      desc1: "Extra Growth Revenue",
      desc2: "From your sales",
    },
  ];
  return (
    <div className={styles.HomeSlide4}>
      <div className={styles.bg1}>
        <img src={bg2} alt="" className={styles.image} />
      </div>
      <div className={styles.box}>
        <h4 className={styles.title}>
          Start building high perfoming website & grow your business fast
        </h4>
        <div className={styles.details}>
          {details.map((item, index) => (
            <div className={styles.titleWithdes} key={`${index}item`}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.desc1}>{item.desc1}</p>
              <p className={styles.desc2}>{item.desc2}</p>
            </div>
          ))}
        </div>
        {/* <Button className={styles.btn}>get started</Button> */}
      </div>
      <div className={styles.bg2}>
        <img src={bg1} alt="" className={styles.image} />
      </div>
    </div>
  );
};

export default HomeSlide4;
