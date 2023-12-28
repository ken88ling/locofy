import { memo } from "react";
import styles from "./timeless-beauty-card.module.css";

const TimelessBeautyCard = memo(() => {
  return (
    <section className={styles.hero3}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.frame}>
        <div className={styles.timelessBeautyParent}>
          <b className={styles.timelessBeauty}>Timeless Beauty</b>
          <b className={styles.unveilYourGlow}>
            Unveil Your Glow with Our Skincare Secrets!
          </b>
          <div className={styles.shopNowWrapper}>
            <b className={styles.shopNow}>Shop Now</b>
          </div>
        </div>
      </div>
      <div className={styles.frame1}>
        <img
          className={styles.pngClipartSmilingWomanSpaIcon}
          alt=""
          src="/pngclipartsmilingwomanspafacialbathingskincarewomanbeautyskincreamhairaccessorythumbnail-11@2x.png"
        />
      </div>
    </section>
  );
});

export default TimelessBeautyCard;
