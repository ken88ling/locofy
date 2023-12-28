import { memo } from "react";
import styles from "./hero-container.module.css";

const HeroContainer = memo(() => {
  return (
    <div className={styles.hero3}>
      <div className={styles.monsteraLeafLineDrawingParent}>
        <img
          className={styles.monsteraLeafLineDrawing}
          alt=""
          src="/monstera-leaf--line-drawing@2x.png"
        />
        <img
          className={styles.monsteraLeafLineDrawing1}
          alt=""
          src="/monstera-leaf--line-drawing1@2x.png"
        />
        <img
          className={styles.gardeniaLineDrawing}
          alt=""
          src="/gardenia--line-drawing@2x.png"
        />
        <img
          className={styles.gardeniaLineDrawing1}
          alt=""
          src="/gardenia--line-drawing1@2x.png"
        />
        <img
          className={styles.chrysanthemumLineDrawing}
          alt=""
          src="/chrysanthemum--line-drawing@2x.png"
        />
        <img
          className={styles.chrysanthemumLineDrawing1}
          alt=""
          src="/chrysanthemum--line-drawing1@2x.png"
        />
        <img
          className={styles.carnationLineDrawing}
          alt=""
          src="/carnation--line-drawing@2x.png"
        />
        <img
          className={styles.carnationLineDrawing1}
          alt=""
          src="/carnation--line-drawing1@2x.png"
        />
        <img
          className={styles.tulipLineDrawing}
          alt=""
          src="/tulip--line-drawing@2x.png"
        />
        <img
          className={styles.tulipLineDrawing1}
          alt=""
          src="/tulip--line-drawing1@2x.png"
        />
        <img
          className={styles.hyacinthLineDrawing}
          alt=""
          src="/hyacinth--line-drawing@2x.png"
        />
        <img
          className={styles.quakingGrassLineDrawing}
          alt=""
          src="/quaking-grass--line-drawing@2x.png"
        />
      </div>
      <img
        className={styles.pngClipartSmilingWomanSpaIcon}
        alt=""
        src="/pngclipartsmilingwomanspafacialbathingskincarewomanbeautyskincreamhairaccessorythumbnail-1@2x.png"
      />
      <div className={styles.catchphraseParent}>
        <b className={styles.catchphrase}>CATCHPHRASE</b>
        <b className={styles.supportingText}>SUpporting Text</b>
        <div className={styles.shopNowWrapper}>
          <b className={styles.shopNow}>Shop Now</b>
        </div>
      </div>
    </div>
  );
});

export default HeroContainer;
