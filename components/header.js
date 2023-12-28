import { memo } from "react";
import styles from "./header.module.css";

const Header = memo(() => {
  return (
    <div className={styles.desktop5}>
      <div className={styles.frameParent}>
        <div className={styles.vcareLogoParent}>
          <img
            className={styles.vcareLogoIcon}
            alt=""
            src="/vcare-logo@2x.png"
          />
          <b className={styles.vcare}>VCARE</b>
        </div>
        <div className={styles.homeParent}>
          <div className={styles.home}>HOME</div>
          <div className={styles.about}>ABOUT</div>
          <div className={styles.productsParent}>
            <div className={styles.products}>PRODUCTS</div>
            <img
              className={styles.mingcutedownLineIcon}
              alt=""
              src="/mingcutedownline@2x.png"
            />
          </div>
        </div>
        <img
          className={styles.frameChild}
          alt=""
          src="/frame-1000001370@2x.png"
        />
      </div>
    </div>
  );
});

export default Header;
