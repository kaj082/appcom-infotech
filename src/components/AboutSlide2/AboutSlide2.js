import React from "react";
import styles from "./AboutSlide2.module.scss";
import bg from "../../assets/abouts2.png";
import OurMission from "../ourMission/OurMission";
import Button from "../button/Button";
import { ArrowRight } from "../../icons";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../contants/RouterContant";
import PartnerSection from "../PartnerSection/PartnerSection";

const AboutSlide2 = () => {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation(ROUTES.SERVICES);
  };
  return (
    <div className={styles.AboutSlide2}>
      <PartnerSection />
      <div className={styles.main}>
        <div className={styles.upperdiv}>
          <div className={styles.left}>
            <h4 className={styles.title}>Company Overview</h4>
            <h5 className={styles.subTitle}>
              we specialize in designing, implementing, and managing
            </h5>
          </div>
          <div className={styles.right}>
            <p className={styles.desc}>
              we specialize in designing, implementing, and managing robust IT
              infrastructure solutions that empower businesses to thrive in the
              digital age. Our company was founded on the belief that a strong
              IT foundation is essential for organizations to stay competitive
              and drive innovation. With 4 years and five months of experience
              in the industry, we have successfully served a diverse clientele,
              ranging from small startups to large enterprises across various
              sectors.
            </p>
            <Button
              prefixIcon={<ArrowRight />}
              onClick={handleClick}
              className={styles.btn}
            >
              get started
            </Button>
          </div>
        </div>
        <OurMission />
      </div>
      <div className={styles.bg}>
        <img src={bg} alt="background" />
      </div>
    </div>
  );
};

export default AboutSlide2;
