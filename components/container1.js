import { memo } from "react";
import styles from "./container1.module.css";

const Container1 = memo(() => {
  return (
    <div className={styles.section}>
      <div className={styles.divelementorContainer}>
        <div className={styles.divelementorElement}>
          <div className={styles.divwdtAnimationItem}>
            <img
              className={styles.brandLogo5webpIcon}
              alt=""
              src="/brandlogo5webp@2x.png"
            />
          </div>
          <div className={styles.divwdtAnimationItem1}>
            <img
              className={styles.brandLogo5webpIcon}
              alt=""
              src="/brandlogo3webp@2x.png"
            />
          </div>
          <div className={styles.divwdtAnimationItem2}>
            <img
              className={styles.brandLogo5webpIcon}
              alt=""
              src="/brandlogo2webp@2x.png"
            />
          </div>
          <div className={styles.divwdtAnimationItem3}>
            <img
              className={styles.logo1webpIcon}
              alt=""
              src="/logo1webp@2x.png"
            />
          </div>
          <div className={styles.divwdtAnimationItem4}>
            <img
              className={styles.logo1webpIcon}
              alt=""
              src="/logo5webp@2x.png"
            />
          </div>
          <div className={styles.divwdtAnimationItem5}>
            <img
              className={styles.logo1webpIcon}
              alt=""
              src="/logo4webp@2x.png"
            />
          </div>
          <div className={styles.divwdtAnimationItem6}>
            <img
              className={styles.logo1webpIcon}
              alt=""
              src="/logo2webp@2x.png"
            />
          </div>
          <div className={styles.before} />
          <div className={styles.after} />
        </div>
      </div>
    </div>
  );
});

export default Container1;
