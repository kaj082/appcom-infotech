import React, { useRef, useState } from "react";
import Slider from "react-slick";
import hs1 from "../../assets/slide1.webm";
import hs2 from "../../assets/slide12.mp4";
import hs3 from "../../assets/slide13.mp4";
import styles from "./HomeSlider.module.scss";
import { Dot } from "../../icons";

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();
  const data = [hs1, hs2, hs3];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 1000,
    autoplay: false,
    fade: false,
    cssEase: "linear",
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div className={styles.HomeSlider}>
      <Slider ref={sliderRef} {...settings} className={styles.slider}>
        {data.map((image, index) => (
          <div key={index} className={styles.slide}>
            <video
              className={styles.image}
              src={image}
              alt={`Slide ${index + 1}`}
              muted
              autoPlay
            />
          </div>
        ))}
      </Slider>
      <div className={styles.pageNumbers}>
        {data.map((_, index) => (
          <div
            key={index}
            onClick={() => sliderRef.current.slickGoTo(index)}
            className={currentSlide === index ? styles.active : ""}
          >
            <Dot
              stroke={currentSlide !== index ? "#CFCFCF" : "white"}
              fill={currentSlide !== index ? "#CFCFCF" : "none"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
