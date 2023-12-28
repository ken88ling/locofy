import { memo, useCallback } from "react";
import styles from "./connect-with-us-container.module.css";

const ConnectWithUsContainer = memo(() => {
  const onLinkFacebookSVGClick = useCallback(() => {
    window.open("https://www.facebook.com/DermStore");
  }, []);

  const onLinkTwitterSVGClick = useCallback(() => {
    window.open("https://twitter.com/dermstore");
  }, []);

  const onLinkInstagramSVGClick = useCallback(() => {
    window.open("http://instagram.com/dermstore");
  }, []);

  const onLinkYouTubeSVGClick = useCallback(() => {
    window.open("http://www.youtube.com/user/dermstore/shopblushtv");
  }, []);

  const onLinkPinterestSVGClick = useCallback(() => {
    window.open("http://www.pinterest.com/dermstore/");
  }, []);

  const onLinkTiktokSVGClick = useCallback(() => {
    window.open("https://www.tiktok.com/@dermstoreofficial");
  }, []);

  return (
    <div className={styles.diveastendfooterSectiontwoL}>
      <div className={styles.diveastendfooterSectiontwoco}>
        <div className={styles.diveastendfooterFirstcolumn}>
          <div className={styles.diveastendfooterFirstcolumn1}>
            <div className={styles.diveastendfooterSignup}>
              <div className={styles.diveastendfooterSignuptext}>
                <div className={styles.diveastendfooterSignuptitle}>
                  <div className={styles.signUpTo}>
                    Sign up to our newsletters and receive the latest exclusive
                    discounts and deals
                  </div>
                </div>
                <div className={styles.diveastendfooterSignupbutton}>
                  <div className={styles.divsignup}>
                    <div className={styles.form}>
                      <div className={styles.buttonSignMeUp}>
                        <div className={styles.signMeUp}>Sign me up</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.diveastendfooterFirstcolumn}>
          <div className={styles.diveastendfooterSocialicons1}>
            <div className={styles.diveastendFooterSocialButt}>
              <div className={styles.signUpTo}>Connect with us</div>
            </div>
            <div className={styles.diveastendfootersocialicons}>
              <div className={styles.listConnectWithUs}>
                <div className={styles.item}>
                  <div
                    className={styles.linkFacebookSvg}
                    onClick={onLinkFacebookSVGClick}
                  >
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div
                    className={styles.linkFacebookSvg}
                    onClick={onLinkTwitterSVGClick}
                  >
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div
                    className={styles.linkFacebookSvg}
                    onClick={onLinkInstagramSVGClick}
                  >
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div
                    className={styles.linkFacebookSvg}
                    onClick={onLinkYouTubeSVGClick}
                  >
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div
                    className={styles.linkFacebookSvg}
                    onClick={onLinkPinterestSVGClick}
                  >
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div
                    className={styles.linkFacebookSvg}
                    onClick={onLinkTiktokSVGClick}
                  >
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame@2x.png"
                    />
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

export default ConnectWithUsContainer;
