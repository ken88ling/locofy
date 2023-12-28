import { memo } from "react";
import styles from "./premium-ingredients-container.module.css";

const PremiumIngredientsContainer = memo(
  ({ productDimensions, productDescription, productSubtitle }) => {
    return (
      <div className={styles.divwdtContentItem}>
        <div className={styles.divwdtContentMediaGroupma}>
          <div className={styles.divwdtContentMediaGroup}>
            <div className={styles.span}>
              <div className={styles.i}>
                <img
                  className={styles.svgIcon}
                  alt=""
                  src={productDimensions}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divwdtContentDetailGroupm}>
          <div className={styles.divwdtContentDetailGroup}>
            <div className={styles.divwdtContentTitlemargin}>
              <div className={styles.heading5}>
                <div className={styles.premiumNaturalIngredients}>
                  {productDescription}
                </div>
              </div>
            </div>
            <div className={styles.divwdtContentDescription}>
              <div className={styles.morbiPellentesqueSem}>
                {productSubtitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default PremiumIngredientsContainer;
