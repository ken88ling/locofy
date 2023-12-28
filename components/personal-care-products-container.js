import { memo } from "react";
import ProductDetailsContainer from "./product-details-container";
import styles from "./personal-care-products-container.module.css";

const PersonalCareProductsContainer = memo(() => {
  return (
    <div className={styles.section}>
      <div className={styles.divelementorContainer}>
        <div className={styles.divelementorWidgetWrap}>
          <div className={styles.divelementorContainer1}>
            <div className={styles.divelementorWidgetWrap}>
              <div className={styles.divelementorElement}>
                <div className={styles.divwdtHeadingA180990}>
                  <div className={styles.divwdtHeadingSubtitleWrapp}>
                    <div className={styles.newCollections}>NEW Collections</div>
                  </div>
                  <div className={styles.heading2}>
                    <div className={styles.personalCareProducts}>
                      Personal Care Products
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divelementorElement1}>
                <div className={styles.divwdtProductsCarouselCont}>
                  <div className={styles.divswiperuniqueid1}>
                    <div className={styles.divwdtProductsBulletPagina}>
                      <div className={styles.buttonGoToSlide1} />
                      <div className={styles.buttonGoToSlide2}>
                        <div className={styles.before} />
                      </div>
                      <div className={styles.buttonGoToSlide3}>
                        <div className={styles.before} />
                      </div>
                    </div>
                    <div className={styles.list}>
                      <div className={styles.item}>
                        <div className={styles.divproductWrapper}>
                          <div className={styles.itemLinkA00d364eef8f7b25}>
                            <div className={styles.link}>
                              <div className={styles.divwdtButtonText}>
                                <div className={styles.span}>
                                  <div className={styles.addToCart}>
                                    Add to cart
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              className={styles.itemLinkA00d364eef8f7b25Child}
                              alt=""
                              src="/frame-1000001381@2x.png"
                            />
                            <img
                              className={styles.itemLinkA00d364eef8f7b25Item}
                              alt=""
                              src="/frame-1000001382@2x.png"
                            />
                          </div>
                          <ProductDetailsContainer
                            sheetMaskType="Exfoliation Sheet Mask"
                            maskName="Pore care mask"
                            propWidth="324px"
                            propLeft="calc(50% - 81.4px)"
                            propLeft1="calc(50% - 39.55px)"
                            propWidth1="90%"
                            propRight="10%"
                          />
                        </div>
                      </div>
                      <div className={styles.item1}>
                        <div className={styles.divproductWrapper}>
                          <img
                            className={styles.itemLink9083d9244f3896ce}
                            alt=""
                            src="/item--link--4efd6bfd39021031ebe4114f89338028jpg@2x.png"
                          />
                          <div className={styles.divproductDetails}>
                            <div className={styles.itemStrongLinkParent}>
                              <div className={styles.itemStrong}>
                                Calming Water Gel Mask
                              </div>
                              <div className={styles.itemList}>
                                Emergency moisturizing smoothing mask pack
                              </div>
                              <div className={styles.itemList1}>25g x 3ea</div>
                              <div className={styles.itemListContainer}>
                                <span>{`Selling price : `}</span>
                                <span>$22.00</span>
                              </div>
                            </div>
                            <div className={styles.divproductRatingWrapper}>
                              <div className={styles.imgRated400OutOf5} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.item2}>
                        <div className={styles.divproductWrapper2}>
                          <div className={styles.divproductThumb}>
                            <img
                              className={styles.itemLinkDbe3a9ba02669c48}
                              alt=""
                              src="/item--link--dbe3a9ba02669c48c2b327217d87cffbjpg@2x.png"
                            />
                            <div className={styles.divfeaturedTag}>
                              <div className={styles.after} />
                              <div className={styles.div}>
                                <div className={styles.iwdticonThumbTack}>
                                  <div className={styles.symbol}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ProductDetailsContainer
                            sheetMaskType="Moisture Sheet Mask"
                            maskName="Daily moisture mask"
                            propWidth="unset"
                            propAlignSelf="stretch"
                            propLeft="calc(50% - 80.9px)"
                            propLeft1="calc(50% - 51.55px)"
                            propWidth1="80%"
                            propRight="20%"
                          />
                        </div>
                      </div>
                      <div className={styles.item3}>
                        <div className={styles.divproductWrapper}>
                          <img
                            className={styles.itemLink9083d9244f3896ce}
                            alt=""
                            src="/item--link--9083d9244f3896ce2da7732ab984d3d2jpg@2x.png"
                          />
                          <div className={styles.divproductDetails}>
                            <div className={styles.itemStrongLinkGroup}>
                              <div className={styles.itemStrong1}>
                                Detoxing Sheet Mask
                              </div>
                              <div className={styles.itemList2}>
                                Vitality filter mask
                              </div>
                              <div className={styles.itemList3}>14g x 3ea</div>
                              <div className={styles.itemListContainer1}>
                                <span>{`Selling price : `}</span>
                                <span>$22.00</span>
                              </div>
                            </div>
                            <div className={styles.divproductRatingWrapper}>
                              <div className={styles.imgRated400OutOf51}>
                                <div className={styles.before2}>
                                  <img
                                    className={styles.icon}
                                    alt=""
                                    src="/icon@2x.png"
                                  />
                                </div>
                                <div className={styles.span1}>
                                  <div className={styles.before2}>
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
      </div>
    </div>
  );
});

export default PersonalCareProductsContainer;
