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

const Home = () => {
  return (
    <div className={styles.Home}>
      <PrimaryLayout>
        <DetailWithImage
          type2={true}
          data={homeslide1Data}
          className={styles.slide1}
        />
        <OurMission className={styles.slide2} />
        <HomeSlide3 />
        <HomeSlide4 />
        <HomeSlide5 />
        <DetailWithImage data={homeslide6Data} className={styles.slide6} />
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
