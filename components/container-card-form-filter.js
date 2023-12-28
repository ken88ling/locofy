import { memo } from "react";
import styles from "./container-card-form-filter.module.css";

const ContainerCardFormFilter = memo(
  ({ imageDimensions, onLinkContainer8Click }) => {
    return (
      <div className={styles.diventryGridLayout}>
        <div className={styles.article}>
          <div className={styles.diventryBodymargin}>
            <div className={styles.p}>
              <div className={styles.distinctivelyReconceptualizeContainer}>
                <p className={styles.distinctivelyReconceptualize}>
                  Distinctively reconceptualize resource maximizing
                </p>
                <p className={styles.distinctivelyReconceptualize}>
                  methodologies for enterprise strategic theme areas.
                </p>
                <p className={styles.distinctivelyReconceptualize}>
                  Energistically revolutionize high...
                </p>
              </div>
            </div>
          </div>
          <div className={styles.diventryThumbmargin}>
            <img
              className={styles.pastelInspiredPackagingDesi}
              alt=""
              src={imageDimensions}
            />
          </div>
          <div className={styles.diventryTitlemargin}>
            <div className={styles.heading4}>
              <div className={styles.link}>
                <a
                  className={styles.premiumFeatherLightComfortContainer}
                  href="https://wdtlilacdemo.wpengine.com/premium-feather-light-comfortable-lipstick/"
                  target="_blank"
                >
                  <p className={styles.distinctivelyReconceptualize}>
                    Premium feather-light, comfortable
                  </p>
                  <p className={styles.distinctivelyReconceptualize}>
                    lipstick
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.diventryButton}>
            <div className={styles.link1} onClick={onLinkContainer8Click}>
              <div className={styles.before} />
              <a
                className={styles.readMore}
                href="https://wdtlilacdemo.wpengine.com/premium-feather-light-comfortable-lipstick/"
                target="_blank"
              >
                Read More
              </a>
              <div className={styles.after} />
            </div>
          </div>
          <div className={styles.diventryDate}>
            <div className={styles.jun12}>Jun - 12 - 2023</div>
          </div>
        </div>
      </div>
    );
  }
);

export default ContainerCardFormFilter;
