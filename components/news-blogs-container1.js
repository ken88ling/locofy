import { memo, useCallback } from "react";
import ContainerCardFormFilter1 from "./container-card-form-filter1";
import styles from "./news-blogs-container1.module.css";

const NewsBlogsContainer1 = memo(() => {
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
                  <ContainerCardFormFilter1
                    carDimensions="/blog1webp@2x.png"
                    carImageDimensions="/list--item--link--6b50acd2c9aeef332a1c4951047401b9png@2x.png"
                    onLinkContainer3Click={onLinkContainerClick}
                    onLinkContainer5Click={onLinkContainer2Click}
                  />
                  <ContainerCardFormFilter1
                    carDimensions="/blog1webp@2x.png"
                    carImageDimensions="/list--item--link--6b50acd2c9aeef332a1c4951047401b9png@2x.png"
                    onLinkContainer3Click={onLinkContainerClick}
                    onLinkContainer5Click={onLinkContainer2Click}
                  />
                  <ContainerCardFormFilter1
                    carDimensions="/blog1webp@2x.png"
                    carImageDimensions="/list--item--link--6b50acd2c9aeef332a1c4951047401b9png@2x.png"
                    onLinkContainer3Click={onLinkContainerClick}
                    onLinkContainer5Click={onLinkContainer2Click}
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

export default NewsBlogsContainer1;
