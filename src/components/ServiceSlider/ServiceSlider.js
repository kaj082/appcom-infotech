import React from "react";
import styles from "./ServiceSlider.module.scss";
import { serviceslide5Data } from "../../contants/dummy";
import Slider from "react-slick";
import ServicesBox from "../ServicesBox/ServicesBox";

const ServiceSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    centerPadding: "0",
    variableWidth: true, // Allows variable widths and gaps
    responsive: [],
  };

  return (
    <div className={styles.box1}>
      <Slider {...settings} className={styles.slider}>
        {serviceslide5Data.map((item, index) => (
          <div key={index} className={styles.slideItem}>
            <ServicesBox data={item.data} desc={item.desc} title={item.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceSlider;
