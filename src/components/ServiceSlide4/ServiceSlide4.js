import React, { useRef, useState } from "react";
import styles from "./ServiceSlide4.module.scss";
import Button from "../button/Button";
import { ArrowRight } from "../../icons";
import bg from "../../assets/sslide5.png";
import ServicesBox from "../ServicesBox/ServicesBox";
import { serviceslide5Data } from "../../contants/dummy";
import ServiceSlider from "../ServiceSlider/ServiceSlider";

const ServiceSlide4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className={styles.ServiceSlide4}>
      <div className={styles.bg}>
        <img src={bg} alt="background" className={styles.image} />
      </div>
      <div className={styles.main}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>services</p>
          <Button
            className={styles.btn}
            prefixIcon={<ArrowRight />}
            onClick={handleNextClick}
          >
            Next
          </Button>
        </div>

        <div className={styles.box}>
          <ServiceSlider
            ref={sliderRef}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
          />
        </div>
        <div className={styles.box1}>
          {serviceslide5Data.map((item, index) => (
            <ServicesBox
              data={item.data}
              desc={item.desc}
              title={item.title}
              key={`${index}item.title`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSlide4;
