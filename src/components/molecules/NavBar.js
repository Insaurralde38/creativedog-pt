import React from 'react';
import Image from "next/image";
import styles from "../../globalStyles.module.css";

const Navbar = () => {
  return (
    <nav className={styles["navbar"]} >
      <div className={styles["navbar-logo"]} >
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={185}
          height={34}
        />
      </div>
    </nav>
  );
};

export default Navbar;
