import React from "react";
import Image from "next/image";
import socialIcons from "../../data/SocialIcons";
import styles from "../../globalStyles.module.css";

const FooterTop = () => {
  return (
    <div className={styles.footerTop}>
      <div className={styles.footerLogo}>
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={129.36}
          height={23.82}
        />
      </div>
      <div className={styles.socialIcons}>
        {socialIcons.map((icon) => (
          <a
            key={icon.name}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            title={icon.name}
            dangerouslySetInnerHTML={{ __html: icon.icon }}
          ></a>
        ))}
      </div>
    </div>
  );
};

export default FooterTop;