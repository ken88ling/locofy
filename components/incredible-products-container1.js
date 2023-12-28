import { memo } from "react";
import FormContainer from "./form-container";
import FormContainer2 from "./form-container2";
import styles from "./incredible-products-container1.module.css";

const IncredibleProductsContainer1 = memo(() => {
  return (
    <div className={styles.section}>
      <div className={styles.divelementorContainer}>
        <div className={styles.section1}>
          <div className={styles.divelementorContainer1}>
            <div className={styles.divelementorWidgetWrap}>
              <div className={styles.divelementorElement}>
                <div className={styles.divwdtHeading3f390de}>
                  <div className={styles.divwdtHeadingSubtitleWrapp}>
                    <div className={styles.topRated}>Top Rated</div>
                  </div>
                  <div className={styles.heading2}>
                    <div className={styles.incredibleProducts}>
                      Incredible Products
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divelementorElement1}>
                <div className={styles.list}>
                  <div className={styles.itemParent}>
                    <FormContainer
                      imageDimensions="/item--link--4efd6bfd39021031ebe4114f89338028jpg1@2x.png"
                      propLeft="calc(50% - 117.6px)"
                    />
                    <FormContainer2
                      imageDimensions="/list--item--link--aa0c2054200d0aa391778d15bf0c8b2fpng@2x.png"
                      propLeft="calc(50% - 117.6px)"
                    />
                    <div className={styles.item}>
                      <div className={styles.divproductThumb}>
                        <img
                          className={styles.itemLink9083d9244f3896ce}
                          alt=""
                          src="/item--link--dbe3a9ba02669c48c2b327217d87cffbjpg1@2x.png"
                        />
                      </div>
                      <div className={styles.divproductDetails}>
                        <div className={styles.itemStrongLinkParent}>
                          <div className={styles.itemStrong}>
                            Moisture Sheet Mask
                          </div>
                          <div className={styles.itemList}>
                            Daily moisture mask
                          </div>
                          <div className={styles.itemList1}>14g x 3ea</div>
                          <div className={styles.itemListContainer}>
                            <span>{`Selling price : `}</span>
                            <span>$22.00</span>
                          </div>
                        </div>
                        <div className={styles.divproductRatingWrapper}>
                          <div className={styles.imgRated400OutOf5}>
                            <div className={styles.before}>
                              <img
                                className={styles.icon}
                                alt=""
                                src="/icon1@2x.png"
                              />
                            </div>
                            <div className={styles.span}>
                              <div className={styles.before}>
                                <img
                                  className={styles.icon}
                                  alt=""
                                  src="/icon1@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <FormContainer
                      imageDimensions="/item--link--0c4d14a0feb45c73861a0ef4964312c2jpg@2x.png"
                      propLeft="calc(50% - 118.1px)"
                    />
                  </div>
                  <div className={styles.itemGroup}>
                    <FormContainer2
                      imageDimensions="/list--item--link--aa0c2054200d0aa391778d15bf0c8b2fpng@2x.png"
                      propLeft="calc(50% - 117.1px)"
                    />
                    <div className={styles.item}>
                      <img
                        className={styles.itemLink9083d9244f3896ce}
                        alt=""
                        src="/item--link--a00d364eef8f7b258b07ef8423e8a080jpg1@2x.png"
                      />
                      <div className={styles.divproductDetails1}>
                        <div className={styles.itemStrongLinkParent}>
                          <div className={styles.itemStrong}>
                            Exfoliation Sheet Mask
                          </div>
                          <div className={styles.itemList2}>Pore care mask</div>
                          <div className={styles.itemList1}>14g x 3ea</div>
                          <div className={styles.itemListContainer}>
                            <span>{`Selling price : `}</span>
                            <span>$22.00</span>
                          </div>
                        </div>
                        <div className={styles.divproductRatingWrapper}>
                          <div className={styles.imgRated400OutOf5}>
                            <div className={styles.before}>
                              <img
                                className={styles.icon}
                                alt=""
                                src="/icon1@2x.png"
                              />
                            </div>
                            <div className={styles.span1}>
                              <div className={styles.before}>
                                <img
                                  className={styles.icon}
                                  alt=""
                                  src="/icon1@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <FormContainer2
                      imageDimensions="/item--link--8c30e942fe99006f5f0fb196ef06e2d6png@2x.png"
                      propLeft="calc(50% - 117.1px)"
                    />
                    <div className={styles.item2}>
                      <img
                        className={styles.itemLink9083d9244f3896ce}
                        alt=""
                        src="/item--link--9083d9244f3896ce2da7732ab984d3d2jpg1@2x.png"
                      />
                      <div className={styles.divproductDetails}>
                        <div className={styles.itemStrongLinkContainer}>
                          <div className={styles.itemStrong}>
                            Detoxing Sheet Mask
                          </div>
                          <div className={styles.itemList4}>
                            Vitality filter mask
                          </div>
                          <div className={styles.itemList1}>14g x 3ea</div>
                          <div className={styles.itemListContainer}>
                            <span>{`Selling price : `}</span>
                            <span>$22.00</span>
                          </div>
                        </div>
                        <div className={styles.divproductRatingWrapper}>
                          <div className={styles.imgRated400OutOf5}>
                            <div className={styles.before}>
                              <img
                                className={styles.icon}
                                alt=""
                                src="/icon@2x.png"
                              />
                            </div>
                            <div className={styles.span}>
                              <div className={styles.before}>
                                <img
                                  className={styles.icon}
                                  alt=""
                                  src="/icon@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default IncredibleProductsContainer1;
