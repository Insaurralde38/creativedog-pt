import React from "react";
import FooterData from "@/data/FooterData";
import styles from "../../globalStyles.module.css";

const FooterBottom = () => {
  return (
    <footer className={`${styles.footerBottom} d-flex justify-content-around align-items-center`}>
      <p className={styles.footerBottomText}>{FooterData.terms}</p>
      <p className={styles.footerBottomText}>{FooterData.copyright}</p>
      <p className={styles.footerBottomText}>
        {FooterData.designAndDev.text}{" "}
        <a
          href={FooterData.designAndDev.agency.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerBottomLink}
        >
          {FooterData.designAndDev.agency.name}
        </a>
      </p>
    </footer>
  );
};

export default FooterBottom;