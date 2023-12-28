import { memo } from "react";
import styles from "./main-header.module.css";

const MainHeader = memo(() => {
  return (
    <header className={styles.desktop5} id="header">
      <div className={styles.frameParent}>
        <div className={styles.vcareLogoParent}>
          <img
            className={styles.vcareLogoIcon}
            alt=""
            src="/vcare-logo@2x.png"
          />
          <b className={styles.vcare}>VCARE</b>
        </div>
        <nav className={styles.homeParent}>
          <div className={styles.home}>HOME</div>
          <div className={styles.about}>ABOUT</div>
          <div className={styles.productsParent}>
            <div className={styles.about}>PRODUCTS</div>
            <img
              className={styles.mingcutedownLineIcon}
              alt=""
              src="/mingcutedownline@2x.png"
            />
          </div>
        </nav>
        <img
          className={styles.frameChild}
          alt=""
          src="/frame-1000001370@2x.png"
        />
      </div>
    </header>
  );
});

export default MainHeader;
