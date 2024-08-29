import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./PartnerSection.module.scss";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";
import image6 from "../../assets/6.png";
import image7 from "../../assets/7.png";
import image8 from "../../assets/8.png";
import image9 from "../../assets/9.png";
import image10 from "../../assets/10.png";
import image11 from "../../assets/11.png";
import image12 from "../../assets/12.png";
import image13 from "../../assets/13.png";
import image14 from "../../assets/14.png";
import image15 from "../../assets/15.png";
import image16 from "../../assets/16.png";
import image17 from "../../assets/17.png";
import image18 from "../../assets/18.png";
import image19 from "../../assets/19.png";
import image20 from "../../assets/20.png";
import image21 from "../../assets/21.png";
import image22 from "../../assets/22.png";
import image23 from "../../assets/23.png";
const imageList = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
];

const PartnerSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 2000, // Slide every 2 seconds
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.partner}>
      <p className={styles.title}>Our trusted partners</p>
      <Slider {...settings} className={styles.imageContainer}>
        {imageList.map((item, index) => (
          <div className={styles.con}>
            <img
              src={item}
              alt=""
              className={styles.image}
              key={`${item}index`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnerSection;
