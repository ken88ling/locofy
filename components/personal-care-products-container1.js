import { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import FormContainer from "./form-container";
import FormContainer2 from "./form-container2";
import styles from "./personal-care-products-container1.module.css";

const PersonalCareProductsContainer1 = memo(() => {
  return (
    <section className={styles.section}>
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
                      <div className={styles.buttonGoToSlide2}>
                        <div className={styles.before} />
                      </div>
                    </div>
                    <div className={styles.list}>
                      <div className={styles.item}>
                        <div className={styles.divproductWrapper}>
                          <div className={styles.itemLinkA00d364eef8f7b25}>
                            <div className={styles.frame}>
                              <img
                                className={styles.frameIcon}
                                alt=""
                                src="/frame6@2x.png"
                              />
                              <img
                                className={styles.frameIcon}
                                alt=""
                                src="/frame7@2x.png"
                              />
                            </div>
                            <Button
                              className={styles.link}
                              variant="outline-primary"
                            >
                              Add to cart
                            </Button>
                          </div>
                          <div className={styles.divproductDetails}>
                            <div className={styles.itemStrongLinkParent}>
                              <div className={styles.itemStrong}>
                                Exfoliation Sheet Mask
                              </div>
                              <div className={styles.frame1}>
                                <div className={styles.itemList}>
                                  Pore care mask
                                </div>
                                <div className={styles.itemList1}>
                                  14g x 3ea
                                </div>
                                <div className={styles.itemListContainer}>
                                  <span>{`Selling price : `}</span>
                                  <span>$22.00</span>
                                </div>
                              </div>
                            </div>
                            <div className={styles.divproductRatingWrapper}>
                              <div className={styles.imgRated450OutOf5}>
                                <div className={styles.before2}>
                                  <img
                                    className={styles.icon}
                                    alt=""
                                    src="/icon@2x.png"
                                  />
                                </div>
                                <div className={styles.span}>
                                  <div className={styles.before3}>
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
                      <div className={styles.item}>
                        <div className={styles.divproductWrapper}>
                          <img
                            className={styles.itemLink9083d9244f3896ce}
                            alt=""
                            src="/item--link--4efd6bfd39021031ebe4114f89338028jpg2@2x.png"
                          />
                          <div className={styles.divproductDetails1}>
                            <div className={styles.itemStrongLinkGroup}>
                              <div className={styles.itemStrong1}>
                                Calming Water Gel Mask
                              </div>
                              <div className={styles.frame2}>
                                <div className={styles.itemList}>
                                  Emergency moisturizing smoothing mask pack
                                </div>
                                <div className={styles.itemList1}>
                                  25g x 3ea
                                </div>
                                <div className={styles.itemListContainer}>
                                  <span>{`Selling price : `}</span>
                                  <span>$22.00</span>
                                </div>
                              </div>
                            </div>
                            <div className={styles.divproductRatingWrapper}>
                              <div className={styles.imgRated400OutOf5} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.item}>
                        <div className={styles.divproductWrapper2}>
                          <div className={styles.divproductThumb}>
                            <img
                              className={styles.itemLink9083d9244f3896ce}
                              alt=""
                              src="/item--link--dbe3a9ba02669c48c2b327217d87cffbjpg2@2x.png"
                            />
                          </div>
                          <div className={styles.divproductDetails2}>
                            <div className={styles.itemStrongLinkParent}>
                              <div className={styles.itemStrong}>
                                Moisture Sheet Mask
                              </div>
                              <FormContainer />
                            </div>
                            <div className={styles.divproductRatingWrapper2}>
                              <div className={styles.imgRated450OutOf5}>
                                <div className={styles.before2}>
                                  <img
                                    className={styles.icon}
                                    alt=""
                                    src="/icon@2x.png"
                                  />
                                </div>
                                <div className={styles.span1}>
                                  <div className={styles.before3}>
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
                      <div className={styles.item3}>
                        <div className={styles.divproductWrapper}>
                          <img
                            className={styles.itemLink9083d9244f3896ce}
                            alt=""
                            src="/item--link--9083d9244f3896ce2da7732ab984d3d2jpg2@2x.png"
                          />
                          <div className={styles.divproductDetails3}>
                            <div className={styles.itemStrongLinkParent}>
                              <div className={styles.itemStrong}>
                                Detoxing Sheet Mask
                              </div>
                              <FormContainer2 />
                            </div>
                            <div className={styles.divproductRatingWrapper}>
                              <div className={styles.imgRated450OutOf5}>
                                <div className={styles.before2}>
                                  <img
                                    className={styles.icon}
                                    alt=""
                                    src="/icon@2x.png"
                                  />
                                </div>
                                <div className={styles.span1}>
                                  <div className={styles.before3}>
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
    </section>
  );
});

export default PersonalCareProductsContainer1;
