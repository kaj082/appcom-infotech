import React from "react";
import {
  AboutSlide1,
  AboutSlide2,
  AboutSlide3,
  AboutSlide4,
  DetailWithImage,
  HomeSlide3,
  HomeSlide4,
  HomeSlide5,
  HomeSlide6,
  HomeSlide7,
  OurMission,
  PrimaryLayout,
} from "../../components";
import { homeslide6Data, homeslide7Data } from "../../contants/dummy";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.About}>
      <PrimaryLayout>
        <AboutSlide1 />
        <AboutSlide2 />
        <AboutSlide3 />

        <HomeSlide5 />
        <DetailWithImage
          type1={true}
          data={homeslide7Data}
          className={styles.slide7}
        />
        <AboutSlide4 />
        <HomeSlide6 />
        <HomeSlide7 />
      </PrimaryLayout>
    </div>
  );
};

export default React.memo(About);
