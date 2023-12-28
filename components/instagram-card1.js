import { memo, useMemo } from "react";
import styles from "./instagram-card1.module.css";

const InstagramCard1 = memo(
  ({
    instaImg2webp,
    instaImg3webp,
    instaImg6webp,
    instaImg5webp,
    divelementorElementHeight,
    divelementorElementBottom,
    onLinkContainerClick,
    onLinkContainer1Click,
    onLinkContainer2Click,
    onLinkContainer3Click,
  }) => {
    const divelementorElementStyle = useMemo(() => {
      return {
        height: divelementorElementHeight,
        bottom: divelementorElementBottom,
      };
    }, [divelementorElementHeight, divelementorElementBottom]);

    return (
      <div className={styles.section}>
        <div className={styles.divelementorContainer}>
          <div className={styles.divelementorWidgetWrap}>
            <div className={styles.divelementorElement}>
              <div className={styles.divwdtHeading48cb09c}>
                <div className={styles.divwdtHeadingSubtitleWrapp}>
                  <div className={styles.followUs}>Follow us</div>
                </div>
                <div className={styles.heading2}>
                  <div className={styles.instagram}>Instagram</div>
                </div>
              </div>
            </div>
            <div className={styles.divelementorElementmargin}>
              <div className={styles.divwdtContentElementsGroup}>
                <div className={styles.divelementorWidgetContainer}>
                  <div className={styles.divwdtImageBox940a420}>
                    <div className={styles.divwdtImageBoxSwiper940a4}>
                      <div className={styles.divwdtImageBoxWrapper}>
                        <div className={styles.divswiperSlidemargin}>
                          <div className={styles.divwdtContentElementsGroup}>
                            <div className={styles.divwdtContentImageWrapper}>
                              <div
                                className={styles.link}
                                onClick={onLinkContainerClick}
                              >
                                <img
                                  className={styles.instaImg2webpIcon}
                                  alt=""
                                  src={instaImg2webp}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.divswiperSlidemargin}>
                          <div className={styles.divwdtContentElementsGroup}>
                            <div className={styles.divwdtContentImageWrapper}>
                              <div
                                className={styles.link}
                                onClick={onLinkContainer1Click}
                              >
                                <img
                                  className={styles.instaImg2webpIcon}
                                  alt=""
                                  src={instaImg3webp}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.divswiperSlidemargin}>
                          <div className={styles.divwdtContentElementsGroup}>
                            <div className={styles.divwdtContentImageWrapper}>
                              <div
                                className={styles.link}
                                onClick={onLinkContainer2Click}
                              >
                                <img
                                  className={styles.instaImg2webpIcon}
                                  alt=""
                                  src={instaImg6webp}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.divswiperSlidemargin}>
                          <div className={styles.divwdtContentElementsGroup}>
                            <div className={styles.divwdtContentImageWrapper}>
                              <div
                                className={styles.link}
                                onClick={onLinkContainer3Click}
                              >
                                <img
                                  className={styles.instaImg2webpIcon}
                                  alt=""
                                  src={instaImg5webp}
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
            <div
              className={styles.divelementorElement2}
              style={divelementorElementStyle}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default InstagramCard1;
