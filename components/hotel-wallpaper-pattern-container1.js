import { memo, useCallback } from "react";
import styles from "./hotel-wallpaper-pattern-container1.module.css";

const HotelWallpaperPatternContainer1 = memo(() => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://wdtlilacdemo.wpengine.com/home-ii/");
  }, []);

  return (
    <div className={styles.hotelWallpaperPattern}>
      <div className={styles.monsteraLeafLineDrawingParent}>
        <img
          className={styles.monsteraLeafLineDrawing}
          alt=""
          src="/monstera-leaf--line-drawing2@2x.png"
        />
        <img
          className={styles.monsteraLeafLineDrawing1}
          alt=""
          src="/monstera-leaf--line-drawing3@2x.png"
        />
        <img
          className={styles.gardeniaLineDrawing}
          alt=""
          src="/gardenia--line-drawing2@2x.png"
        />
        <img
          className={styles.gardeniaLineDrawing1}
          alt=""
          src="/gardenia--line-drawing3@2x.png"
        />
        <img
          className={styles.chrysanthemumLineDrawing}
          alt=""
          src="/chrysanthemum--line-drawing2@2x.png"
        />
        <img
          className={styles.chrysanthemumLineDrawing1}
          alt=""
          src="/chrysanthemum--line-drawing3@2x.png"
        />
        <img
          className={styles.carnationLineDrawing}
          alt=""
          src="/carnation--line-drawing2@2x.png"
        />
        <img
          className={styles.carnationLineDrawing1}
          alt=""
          src="/carnation--line-drawing3@2x.png"
        />
        <img
          className={styles.tulipLineDrawing}
          alt=""
          src="/tulip--line-drawing2@2x.png"
        />
        <img
          className={styles.tulipLineDrawing1}
          alt=""
          src="/tulip--line-drawing3@2x.png"
        />
        <img
          className={styles.hyacinthLineDrawing}
          alt=""
          src="/hyacinth--line-drawing1@2x.png"
        />
        <img
          className={styles.quakingGrassLineDrawing}
          alt=""
          src="/quaking-grass--line-drawing1@2x.png"
        />
      </div>
      <div className={styles.divelementorRow}>
        <div className={styles.section}>
          <div className={styles.divelementorContainer}>
            <div className={styles.divelementorRow1}>
              <div className={styles.divelementorWidgetWrap}>
                <div className={styles.divelementorElementmargin}>
                  <div className={styles.divwdtHeadingD588fa3}>
                    <div className={styles.divwdtHeadingSubtitleWrapp}>
                      <div className={styles.awardWinningBeauty}>
                        Award winning beauty products
                      </div>
                    </div>
                    <div className={styles.heading3}>
                      <div className={styles.highlyPerformingBeautyFormu}>
                        Highly performing beauty formula
                      </div>
                    </div>
                    <div className={styles.divwdtHeadingContentWrappe}>
                      <div
                        className={styles.etiamUllamcorperFacilisisContainer}
                      >
                        <p className={styles.etiamUllamcorperFacilisis}>
                          Etiam ullamcorper facilisis porta. Donec tincidunt
                          metus a elit tempor, a condimentum sapien
                        </p>
                        <p className={styles.etiamUllamcorperFacilisis}>
                          laoreet. Nullam metus orci, malesuada ac tincidunt
                          vitae, tincidunt eu elit. Phasellus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divelementorElement}>
                  <div className={styles.divelementorWidgetContainer}>
                    <div className={styles.divwdtButton3ff0c0c}>
                      <div
                        className={styles.link}
                        onClick={onLinkContainerClick}
                      >
                        <div className={styles.divwdtButtonText}>
                          <div className={styles.span}>
                            <a
                              className={styles.exploreNow}
                              href="https://wdtlilacdemo.wpengine.com/home-ii/"
                              target="_blank"
                            >
                              Explore Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divelementorWidgetWrap1}>
                <div className={styles.divelementorElement1}>
                  <div className={styles.divelementorWidgetContainer1}>
                    <div className={styles.divwdtPopupBoxTriggerB4cf}>
                      <div className={styles.divwdtPopupBoxTriggerElem}>
                        <div className={styles.spanwdtPopupBoxTriggerIte}>
                          <div className={styles.spanwdtPopupBoxTriggerIte1}>
                            <div className={styles.playVideo}>Play Video</div>
                            <div className={styles.aftermargin}>
                              <div className={styles.after} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.spanwdtPopupBoxTriggerIte2}>
                          <div className={styles.after1} />
                          <img
                            className={styles.svgIcon}
                            alt=""
                            src="/svg20@2x.png"
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
  );
});

export default HotelWallpaperPatternContainer1;
