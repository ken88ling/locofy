import { memo, useMemo } from "react";
import styles from "./form-container.module.css";

const FormContainer = memo(({ imageDimensions, propLeft }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.item}>
      <img
        className={styles.itemLink4efd6bfd39021031}
        alt=""
        src={imageDimensions}
      />
      <div className={styles.divproductDetails}>
        <div className={styles.itemStrongLinkParent} style={groupDiv1Style}>
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

export default FormContainer;
