import { memo, useCallback } from "react";
import ContainerCardFormFilter from "./container-card-form-filter";
import styles from "./news-blogs-container.module.css";

const NewsBlogsContainer = memo(() => {
  const onLinkContainer1Click = useCallback(() => {
    window.open(
      "https://wdtlilacdemo.wpengine.com/premium-feather-light-comfortable-lipstick/"
    );
  }, []);

  const onLinkContainerClick = useCallback(() => {
    window.open(
      "https://wdtlilacdemo.wpengine.com/premium-feather-light-comfortable-lipstick/"
    );
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    window.open(
      "https://wdtlilacdemo.wpengine.com/premium-feather-light-comfortable-lipstick/"
    );
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.divelementorContainer}>
        <div className={styles.divelementorWidgetWrap}>
          <div className={styles.divelementorElement}>
            <div className={styles.divwdtHeadingF9a28d3}>
              <div className={styles.divwdtHeadingSubtitleWrapp}>
                <div className={styles.latest}>Latest</div>
              </div>
              <div className={styles.heading2}>
                <div className={styles.newsBlogs}>{`News & Blogs`}</div>
              </div>
            </div>
          </div>
          <div className={styles.section1}>
            <div className={styles.divelementorContainer1}>
              <div className={styles.divelementorElement1}>
                <div className={styles.divtplBlogHolder}>
                  <div className={styles.diventryGridLayout}>
                    <div className={styles.article}>
                      <div className={styles.diventryBodymargin}>
                        <div className={styles.p}>
                          <div
                            className={
                              styles.distinctivelyReconceptualizeContainer
                            }
                          >
                            <p className={styles.distinctivelyReconceptualize}>
                              Distinctively reconceptualize resource maximizing
                            </p>
                            <p className={styles.distinctivelyReconceptualize}>
                              methodologies for enterprise strategic theme
                              areas.
                            </p>
                            <p className={styles.distinctivelyReconceptualize}>
                              Energistically revolutionize high...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.diventryThumbmargin}>
                        <div className={styles.diventryThumb}>
                          <div
                            className={styles.link}
                            onClick={onLinkContainerClick}
                          >
                            <img
                              className={styles.blog1webpIcon}
                              alt=""
                              src="/blog1webp@2x.png"
                            />
                          </div>
                          <img
                            className={styles.listItemLink6b50acd2c}
                            alt=""
                            src="/list--item--link--6b50acd2c9aeef332a1c4951047401b9png@2x.png"
                          />
                        </div>
                      </div>
                      <div className={styles.diventryTitlemargin}>
                        <div className={styles.heading4}>
                          <div className={styles.link1}>
                            <a
                              className={
                                styles.premiumFeatherLightComfortContainer
                              }
                              href="https://wdtlilacdemo.wpengine.com/premium-feather-light-comfortable-lipstick/"
                              target="_blank"
                            >
                              <p
                                className={styles.distinctivelyReconceptualize}
                              >
                                Premium feather-light, comfortable
                              </p>
                              <p
                                className={styles.distinctivelyReconceptualize}
                              >
                                lipstick
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className={styles.diventryButton}>
                        <div
                          className={styles.link2}
                          onClick={onLinkContainer2Click}
                        >
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
                  <ContainerCardFormFilter
                    imageDimensions="/34-pastelinspired-packaging-designs-to-help-ring-in-springtime-2@2x.png"
                    onLinkContainer8Click={onLinkContainer1Click}
                  />
                  <ContainerCardFormFilter
                    imageDimensions="/where-does-skincare-go-after-you-apply-it--2@2x.png"
                    onLinkContainer8Click={onLinkContainer1Click}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default NewsBlogsContainer;
