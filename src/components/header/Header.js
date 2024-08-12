import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Hamburger, Logo, MobileLogo } from "../../icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import SideMenu from "../SideMenu/SideMenu";
import { routerConstant } from "../../contants";

const Header = () => {
  const navlink = [
    {
      to: routerConstant.ROUTES.HOME,
      title: "Home",
    },
    {
      to: routerConstant.ROUTES.ABOUT,
      title: "about",
    },
    {
      to: routerConstant.ROUTES.SERVICES,
      title: "services",
    },
  ];
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    navigate(routerConstant.ROUTES.CONTACT_US);
  };
  return (
    <nav className={styles.Header}>
      <Link to={"/"} className={styles.logo}>
        <Logo />
      </Link>
      <Link to={"/"} className={styles.mobileLogo}>
        <MobileLogo />
      </Link>
      <div className={styles.menu} onClick={handleChange}>
        <Hamburger />
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
      <SideMenu handleChange={handleChange} isOpen={isOpen} />
      <Button className={styles.btn} onClick={handleClick}>
        Contact Us
      </Button>
    </nav>
  );
};

export default Header;
