import React, { useState } from "react";
import styles from "./ContactUsSlide2.module.scss";
import bg1 from "../../assets/contactSlide2.png";
import { Location } from "../../icons";
import MyMapComponent from "../MapComponent/MapComponent";

const locations = [
  {
    lat: 23.0275, // Latitude for Appcom Infotech LLP, Jodhpur Cross Road
    lng: 72.5086, // Longitude for Appcom Infotech LLP, Jodhpur Cross Road
    label: "Appcom Infotech LLP, Jodhpur Cross Road",
  },
  {
    lat: 23.0235, // Latitude for Appcom Infotech LLP, S G Highway
    lng: 72.5486, // Longitude for Appcom Infotech LLP, S G Highway
    label: "Appcom Infotech LLP, S G Highway",
  },
];

const ContactUsSlide2 = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <div className={styles.ContactUsSlide2}>
      <div className={styles.main}>
        <div
          className={`${styles.box1} ${
            selectedLocation === locations[0] ? styles.selected : ""
          }`}
          onClick={() => setSelectedLocation(locations[0])}
        >
          {selectedLocation === locations[0] && <Location />}
          <p className={styles.value}>
            Registered Office Address: Appcom Infotech LLP. 1st Floor, OM World,
            Jodhpur Cross Road, Satellite, Ahmedabad-380015
          </p>
        </div>
        <div
          className={`${styles.box2} ${
            selectedLocation === locations[1] ? styles.selected : ""
          }`}
          onClick={() => setSelectedLocation(locations[1])}
        >
          {selectedLocation === locations[1] && <Location />}
          <div className={styles.rec}></div>
          <p className={styles.value}>
            Office Address: Appcom Infotech LLP. B-506, Sankalp Iconic Tower,
            Opp: Vikram Nagar Colony, Near: ISCON Cross Road, S G Highway,
            Ahmedabad-380058
          </p>
        </div>
      </div>
      <div className={styles.AboutSlide4}>
        <div className={styles.bg} />
        <div className={styles.bg1}>
          <img src={bg1} alt="background-image" className={styles.image} />
        </div>

        <div className={styles.detail}>
          <h3 className={styles.title}>
            We look forward to partnering with you to build a reliable,
            scalable, and secure IT infrastructure that drives your business
            forward.
          </h3>

          <div className={styles.details}>
            <div className={styles.item}>
              <p className={styles.value}>Phone: </p>
              <p className={styles.value}>9824413186</p>
            </div>
            <div className={styles.item}>
              <p className={styles.value}>Email: </p>
              <p className={styles.value}>sales@appcominfotech.com</p>
            </div>
            <div className={styles.item}>
              <p className={styles.value}>Website: </p>
              <p className={styles.value}>www.appcominfotech.com</p>
            </div>
          </div>
        </div>
      </div>
      <MyMapComponent center={selectedLocation} />
    </div>
  );
};

export default ContactUsSlide2;
