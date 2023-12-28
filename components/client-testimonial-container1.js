import { memo, useCallback } from "react";
import styles from "./client-testimonial-container1.module.css";

const ClientTestimonialContainer1 = memo(() => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://wdtlilacdemo.wpengine.com/home-ii/");
  }, []);

  return (
    <div className={styles.divelementorContainer}>
      <div className={styles.soWhitePattern}>
        <div className={styles.section}>
          <div className={styles.divelementorContainer1}>
            <div className={styles.divelementorWidgetWrap}>
              <div className={styles.divelementorElement}>
                <div className={styles.divwdtHeading8b6eda3}>
                  <div className={styles.divwdtHeadingSubtitleWrapp}>
                    <div className={styles.testimonials}>Testimonials</div>
                  </div>
                  <div className={styles.heading2}>
                    <div className={styles.whatOurClientsSay}>
                      What Our Clients Say
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divelementorElement1}>
                <div className={styles.divwdtTestimonial07eee1b}>
                  <div className={styles.divwdtTestimonialSwiper07e}>
                    <div className={styles.divwdtTestimonialWrapper}>
                      <div className={styles.divswiperSlide}>
                        <div className={styles.divwdtContentItem}>
                          <div className={styles.divwdtContentMediaGroup}>
                            <div className={styles.before} />
                            <div className={styles.after} />
                            <div className={styles.divwdtContentImageWrapper}>
                              <div
                                className={styles.divwdtContentImageWrapper1}
                              >
                                <div
                                  className={styles.link}
                                  onClick={onLinkContainerClick}
                                >
                                  <img
                                    className={styles.homeTestimonial2webpIcon}
                                    alt=""
                                    src="/hometestimonial2webp1@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.divwdtContentElementsGroup}>
                              <div
                                className={styles.divwdtContentElementsGroup1}
                              >
                                <div className={styles.divwdtContentTitleGroup}>
                                  <div className={styles.divwdtContentTitle}>
                                    <div className={styles.heading5}>
                                      <a
                                        className={styles.linkElisabeth}
                                        href="https://wdtlilacdemo.wpengine.com/home-ii/"
                                        target="_blank"
                                      >
                                        Elisabeth John
                                      </a>
                                    </div>
                                  </div>
                                  <div className={styles.divwdtContentSubtitle}>
                                    <div className={styles.topModel}>
                                      Top Model
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.divwdtContentDetailGroup}>
                            <div className={styles.divwdtContentDescription}>
                              <div
                                className={
                                  styles.nullaBibendumVolutpatContainer
                                }
                              >
                                <p className={styles.nullaBibendumVolutpat}>
                                  “Nulla bibendum volutpat nisl, in ullamcorper
                                  sem vehicula non. Vestibulum quis ipsum
                                  elementum, pulvinar enim eget,
                                </p>
                                <p className={styles.nullaBibendumVolutpat}>
                                  suscipit nisl. Nullam aliquam est a vulputate
                                  placerat. Ut quis lectus sodales, laoreet nisi
                                  ut, ultricies ex Maecenas consequat
                                </p>
                                <p className={styles.nullaBibendumVolutpat}>
                                  nunc purus, non maximus nunc gravida nec.”
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.buttonPreviousSlide}>
                    <img
                      className={styles.svgIcon}
                      alt=""
                      src="/svg21@2x.png"
                    />
                  </div>
                  <div className={styles.buttonNextSlide}>
                    <img
                      className={styles.svgIcon}
                      alt=""
                      src="/svg22@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divelementorElement2}>
          <div className={styles.divelementorImage}>
            <img
              className={styles.lefImage1webpIcon}
              alt=""
              src="/lefimage1webp1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default ClientTestimonialContainer1;
