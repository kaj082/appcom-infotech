import React from "react";
import styles from "./Service.module.scss";
import {
  AboutSlide4,
  DetailWithImage,
  HomeSlide7,
  PrimaryLayout,
  ServiceSlide1,
  ServiceSlide2,
  ServiceSlide3,
  ServiceSlide4,
  ServiceSlide5,
} from "../../components";
import bg from "../../assets/sslide3.png";
import { serviceslide7Data } from "../../contants/dummy";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../contants/RouterContant";

const Service = () => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation(ROUTES.CONTACT_US);
  };
  return (
    <div className={styles.Service}>
      <PrimaryLayout>
        <ServiceSlide1 />
        <ServiceSlide2 />
        <AboutSlide4
          image={bg}
          className={styles.slide3}
          onClick={handleClick}
        />
        <ServiceSlide3 />
        <ServiceSlide4 />
        <ServiceSlide5 />
        <AboutSlide4 />
        <DetailWithImage
          type1={true}
          data={serviceslide7Data}
          className={styles.slide7}
          onClick={handleClick}
        />
        <HomeSlide7 />
      </PrimaryLayout>
    </div>
  );
};

export default React.memo(Service);
