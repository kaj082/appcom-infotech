import React, { useState } from "react";
import styles from "./Achievemnets.module.scss";
import { Award } from "../../icons";
import cx from "classnames";

const Achievemnets = ({ type = false, desc, hoverDesc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cx(styles.Achievemnets, { [styles.type]: type })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.upper}>
        <p className={styles.title}>Achievements</p>
        <Award />
      </div>
      <p className={cx(styles.desc, { [styles.hovered]: isHovered })}>
        {isHovered
          ? "Supply, Installation, and Maintenance of 1PF HPC at PRL, Ahmedabad, ranked 14th in Top 100 Supercomputers of India."
          : desc}
      </p>
    </div>
  );
};

export default Achievemnets;
