import { memo, useMemo } from "react";
import styles from "./product-details-container.module.css";

const ProductDetailsContainer = memo(
  ({
    sheetMaskType,
    maskName,
    propWidth,
    propAlignSelf,
    propLeft,
    propLeft1,
    propWidth1,
    propRight,
  }) => {
    const divproductDetailsStyle = useMemo(() => {
      return {
        width: propWidth,
        alignSelf: propAlignSelf,
      };
    }, [propWidth, propAlignSelf]);

    const groupDivStyle = useMemo(() => {
      return {
        left: propLeft,
      };
    }, [propLeft]);

    const itemListStyle = useMemo(() => {
      return {
        left: propLeft1,
      };
    }, [propLeft1]);

    const spanStyle = useMemo(() => {
      return {
        width: propWidth1,
        right: propRight,
      };
    }, [propWidth1, propRight]);

    return (
      <div className={styles.divproductDetails} style={divproductDetailsStyle}>
        <div className={styles.itemStrongLinkParent} style={groupDivStyle}>
          <div className={styles.itemStrong}>{sheetMaskType}</div>
          <div className={styles.itemList} style={itemListStyle}>
            {maskName}
          </div>
          <div className={styles.itemList1}>14g x 3ea</div>
          <div className={styles.itemListContainer}>
            <span>{`Selling price : `}</span>
            <span>$22.00</span>
          </div>
        </div>
        <div className={styles.divproductRatingWrapper}>
          <div className={styles.imgRated450OutOf5}>
            <div className={styles.before}>
              <img className={styles.icon} alt="" src="/icon@2x.png" />
            </div>
            <div className={styles.span} style={spanStyle}>
              <div className={styles.before}>
                <img className={styles.icon} alt="" src="/icon@2x.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ProductDetailsContainer;
