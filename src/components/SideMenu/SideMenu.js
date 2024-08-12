import React from "react";
import styles from "./SideMenu.module.scss";
import cx from "classnames";
import { CrossIcon, Line, MobileLogo, Social } from "../../icons";
import { Link } from "react-router-dom";

const SideMenu = ({ handleChange, isOpen }) => {
  const navlink = [
    {
      to: "/about",
      title: "About",
    },
    {
      to: "/services",
      title: "services",
    },
    {
      to: "/",
      title: "Works",
    },
    {
      to: "/contact-us",
      title: "Support",
    },
    {
      to: "/contact-us",
      title: "Help",
    },
  ];
  return (
    <div className={cx(styles.SideMenu, { [styles.visible]: isOpen })}>
      <div className={styles.navbar}>
        <Link href={"/"}>
          <MobileLogo />
        </Link>
        <div className={styles.crossIcon} onClick={handleChange}>
          <CrossIcon />
        </div>
      </div>
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
    </div>
  );
};

export default SideMenu;
