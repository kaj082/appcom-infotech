import React, { useState } from "react";
import styles from "./HomeSlide5.module.scss";
import box1 from "../../assets/hsol1.png";
import box2 from "../../assets/hsol2.png";
import box3 from "../../assets/hsol3.png";
import bg from "../../assets/clipPath.png";
import IconWithDesc from "../IconWithDesc/IconWithDesc";
import { LeftIcon } from "../../icons";

const HomeSlide5 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const imageTitle = [
    {
      image: box1,
      title: "HPC Consulting and Solution Design",
    },
    {
      image: box2,
      title: "HPC System Deployment and Configuration",
    },
    {
      image: box3,
      title: "HPC Software and Application Support",
    },
  ];
  return (
    <div className={styles.HomeSlide5}>
      <div className={styles.bg}>
        <img src={bg} alt="backgroud" className={styles.image} />
      </div>
      {/* <div className={styles.rec}>
        <Circle />
      </div> */}
      <div className={styles.upperDiv}>
        <h6 className={styles.title}>Comprehensive IT Solutions</h6>
        <p className={styles.desc}>
          We offer a wide range of services to meet your IT infrastructure
          needs, including:
        </p>
      </div>
      <div className={styles.lowerDiv}>
        {imageTitle.map((item, index) => (
          <div
            className={styles.imageContainer}
            key={`${item.title}index`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={item.image} alt="" className={styles.image} />
            <p className={styles.title}>{item.title}</p>

            {hoveredIndex === index && (
              <div className={styles.box}>
                <IconWithDesc
                  desc={"Customized solution design"}
                  textColor={"#ffff"}
                  icon={<LeftIcon />}
                  className={styles.singleItem}
                />
                <IconWithDesc
                  desc={"Performance optimization and workload analysis"}
                  textColor={"#ffff"}
                  icon={<LeftIcon />}
                  className={styles.singleItem}
                />
                <IconWithDesc
                  desc={"Architecture planning and system integration"}
                  textColor={"#ffff"}
                  icon={<LeftIcon />}
                  className={styles.singleItem}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.con}>
        <button className={styles.btn}>Explore Our Services</button>
      </div>
    </div>
  );
};

export default HomeSlide5;
