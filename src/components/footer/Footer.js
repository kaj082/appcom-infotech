import React from "react";
import styles from "./Footer.module.scss";
import { Line, Logo, MobileLogo, Social } from "../../icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const navlink = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/about",
      title: "About",
    },
    {
      to: "/services",
      title: "Services",
    },

    {
      to: "/contact-us",
      title: "Contact Us",
    },
  ];
  return (
    <footer className={styles.Footer}>
      <Link to={"/"} className={styles.logo}>
        <Logo />
      </Link>
      <Link to={"/"} className={styles.mobileLogo}>
        <MobileLogo />
      </Link>

      <ul className={styles.listItem}>
        {navlink.map((item, index) => (
          <li>
            <Link className={styles.item} to={item.to} key={`${item}index`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.footer}>
        <Line />
        <div className={styles.iconList}>
          <Social />
        </div>
        <div className={styles.copyText}>
          © Copyright 2024, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
