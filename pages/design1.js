import { useCallback } from "react";
import Header from "../components/header";
import HeroContainer from "../components/hero-container";
import PersonalCareProductsContainer from "../components/personal-care-products-container";
import PremiumIngredientsContainer from "../components/premium-ingredients-container";
import HotelWallpaperPatternContainer from "../components/hotel-wallpaper-pattern-container";
import IncredibleProductsContainer1 from "../components/incredible-products-container1";
import ClientTestimonialContainer from "../components/client-testimonial-container";
import Container1 from "../components/container1";
import NewsBlogsContainer from "../components/news-blogs-container";
import InstagramCard1 from "../components/instagram-card1";
import ConnectWithUsContainer from "../components/connect-with-us-container";
import FooterComponent from "../components/footer-component";
import Footer from "../components/footer";
import styles from "./design1.module.css";

const Design1 = () => {
  const onLinkContainer1Click = useCallback(() => {
    window.open(
      "https://wdtlilacdemo.wpengine.com/premium-feather-light-comfortable-lipstick/"
    );
  }, []);

  const onLinkContainerClick = useCallback(() => {
    window.open("https://wdtlilacdemo.wpengine.com/home-ii/");
  }, []);

  const onLinkContainer1Click = useCallback(() => {
    window.open("https://wdtlilacdemo.wpengine.com/home-ii/");
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    window.open("https://wdtlilacdemo.wpengine.com/home-ii/");
  }, []);

  const onLinkContainer3Click = useCallback(() => {
    window.open("https://wdtlilacdemo.wpengine.com/home-ii/");
  }, []);

  return (
    <div className={styles.design1}>
      <main className={styles.desktop5Parent}>
        <Header />
        <HeroContainer />
        <PersonalCareProductsContainer />
        <div className={styles.divelementorRow}>
          <div className={styles.divelementorWidgetWrap}>
            <div className={styles.divelementorElement}>
              <div className={styles.divwdtHeading6afadc2}>
                <div className={styles.divwdtHeadingSubtitleWrapp}>
                  <div className={styles.whoWeAre}>Who we Are</div>
                </div>
                <div className={styles.heading3}>
                  <div className={styles.bestSellingAestheticianSkin}>
                    <p className={styles.brands}>
                      Best Selling Aesthetician Skincare 
                    </p>
                    <p className={styles.brands}>Brands</p>
                  </div>
                </div>
                <div className={styles.divwdtHeadingContentWrappe}>
                  <div className={styles.nullamEuismodPurusContainer}>
                    <p className={styles.brands}>
                      Nullam euismod purus quis blandit eleifend. Nullam
                      egestas, diam ut ornare ultrices, nibh metus
                    </p>
                    <p className={styles.brands}>
                      feugiat ante, id sclerisque ague est.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divelementorElement1}>
              <div className={styles.divwdtIconBox9cb11f3}>
                <PremiumIngredientsContainer
                  productDimensions="/svg@2x.png"
                  productDescription="Premium Natural Ingredients"
                  productSubtitle="Morbi pellentesque sem ac nulla molestie euismod."
                />
                <PremiumIngredientsContainer
                  productDimensions="/svg1@2x.png"
                  productDescription="High-quality Raw Materials"
                  productSubtitle="Gorbi pellentesque sem ac nulla molestie euismod."
                />
                <div className={styles.divwdtContentItem}>
                  <div className={styles.divwdtContentMediaGroupma}>
                    <div className={styles.divwdtContentMediaGroup}>
                      <div className={styles.span}>
                        <div className={styles.i}>
                          <img
                            className={styles.svgIcon}
                            alt=""
                            src="/svg2@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.divwdtContentDetailGroupm}>
                    <div className={styles.divwdtContentDetailGroup}>
                      <div className={styles.divwdtContentTitlemargin}>
                        <div className={styles.heading5}>
                          <div className={styles.endToEndBeautySolution}>
                            End-to-end Beauty Solution
                          </div>
                        </div>
                      </div>
                      <div className={styles.divwdtContentDescription}>
                        <div className={styles.duisEleifendIpsumContainer}>
                          <p className={styles.brands}>
                            Duis eleifend ipsum a justo vehicula, ut vestibulum
                            sem
                          </p>
                          <p className={styles.brands}>
                            volutpat. Donec at aliquam purus. Mauris.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divelementorElement2}>
              <div className={styles.divelementorWidgetContainer}>
                <div className={styles.divwdtButton9426bac}>
                  <div className={styles.link}>
                    <div className={styles.divwdtButtonText}>
                      <div className={styles.span1}>
                        <div className={styles.exploreNow}>Explore Now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divelementorColumn}>
            <div className={styles.divelementorWidgetWrap1}>
              <div className={styles.divelementorWidgetWrap2}>
                <img
                  className={styles.versedLvmhLuxuryVentures}
                  alt=""
                  src="/versed--lvmh-luxury-ventures-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <HotelWallpaperPatternContainer />
        <IncredibleProductsContainer1 />
        <ClientTestimonialContainer />
        <Container1 />
        <NewsBlogsContainer />
        <InstagramCard1
          instaImg2webp="/instaimg2webp@2x.png"
          instaImg3webp="/instaimg3webp@2x.png"
          instaImg6webp="/instaimg6webp@2x.png"
          instaImg5webp="/instaimg5webp@2x.png"
          divelementorElementHeight="27.18%"
          divelementorElementBottom="60.83%"
          onLinkContainerClick={onLinkContainerClick}
          onLinkContainer1Click={onLinkContainer1Click}
          onLinkContainer2Click={onLinkContainer2Click}
          onLinkContainer3Click={onLinkContainer3Click}
        />
        <div className={styles.footer}>
          <ConnectWithUsContainer />
          <FooterComponent />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Design1;
