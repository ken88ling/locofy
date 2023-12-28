import { memo, useMemo } from "react";
import styles from "./form-container2.module.css";

const FormContainer2 = memo(({ imageDimensions, propLeft }) => {
  const groupDiv2Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.item}>
      <img
        className={styles.listItemLinkAa0c20542}
        alt=""
        src={imageDimensions}
      />
      <div className={styles.divproductDetails}>
        <div className={styles.divproductRatingWrapper}>
          <div className={styles.imgRated300OutOf5}>
            <div className={styles.before}>
              <img className={styles.icon} alt="" src="/icon@2x.png" />
            </div>
            <div className={styles.span}>
              <div className={styles.before}>
                <img className={styles.icon} alt="" src="/icon@2x.png" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divproductPrice} />
        <div className={styles.itemStrongLinkParent} style={groupDiv2Style}>
          <div className={styles.itemStrong}>Calming Water Gel Mask</div>
          <div className={styles.itemList}>
            Emergency moisturizing smoothing mask pack
          </div>
          <div className={styles.itemList1}>25g x 3ea</div>
          <div className={styles.itemListContainer}>
            <span>{`Selling price : `}</span>
            <span>$22.00</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FormContainer2;
