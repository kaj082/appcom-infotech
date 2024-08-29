import React from "react";
import {
  DetailWithImage,
  HomeSlide3,
  HomeSlide4,
  HomeSlide5,
  HomeSlide6,
  HomeSlide7,
  OurMission,
  PrimaryLayout,
} from "../../components";
import {
  homeslide1Data,
  homeslide6Data,
  homeslide7Data,
} from "../../contants/dummy";
import styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../contants/RouterContant";

const Home = () => {
  const navigation = useNavigate();

  const handleSlide1Click = () => {
    navigation(ROUTES.SERVICES);
  };

  const handleSlide5Click = () => {
    navigation(ROUTES.CONTACT_US);
  };
  return (
    <div className={styles.Home}>
      <PrimaryLayout>
        <DetailWithImage
          type2={true}
          data={homeslide1Data}
          className={styles.slide1}
          onClick={handleSlide1Click}
        />
        <OurMission className={styles.slide2} />
        <HomeSlide3 />
        <HomeSlide4 />
        <HomeSlide5 />
        <DetailWithImage
          onClick={handleSlide5Click}
          data={homeslide6Data}
          className={styles.slide6}
        />
        <HomeSlide6 />
        <HomeSlide7 />
        <DetailWithImage
          type1={true}
          data={homeslide7Data}
          className={styles.slide7}
        />
      </PrimaryLayout>
    </div>
  );
};

export default React.memo(Home);
