import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ServiceSlider.module.scss";
import { serviceslide5Data } from "../../contants/dummy";
import ServicesBox from "../ServicesBox/ServicesBox";

const ServiceSlider = React.forwardRef((props, ref) => {
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    speed: 1000,
    // autoplaySpeed: 1000,
    // autoplay: true,
    afterChange: props.setCurrentSlide,
  };

  return (
    <div className={styles.sliderWrapper}>
      <Slider {...settings} ref={ref} className={styles.slider}>
        {serviceslide5Data.map((item, index) => (
          <div className={styles.cardContainer} key={index}>
            <ServicesBox data={item.data} desc={item.desc} title={item.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
});

export default ServiceSlider;
