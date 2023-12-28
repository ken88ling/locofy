import { memo, useCallback } from "react";
import styles from "./footer-component.module.css";

const FooterComponent = memo(() => {
  const onItemLinkClick = useCallback(() => {
    window.open("https://www.dermstore.com/help-center.list");
  }, []);

  const onItemLink1Click = useCallback(() => {
    window.open("https://www.dermstore.com/info/returns.list");
  }, []);

  const onItemLink2Click = useCallback(() => {
    window.open("https://www.dermstore.com/info/delivery-information.list");
  }, []);

  const onItemLink3Click = useCallback(() => {
    window.open("https://www.dermstore.com/track-your-order.list");
  }, []);

  return (
    <div className={styles.diveastendfooterSectionthree}>
      <div className={styles.diveastendfooterSectionthree1}>
        <div className={styles.diveastendfooterlinkcolumns}>
          <div className={styles.diveastendfooterlinkcolumnsL}>
            <div className={styles.diveastendfooterlinkcolumnsL1}>
              <div className={styles.diveastendfooterlinkcolumnsL2}>
                <div className={styles.before} />
                <div className={styles.spaneastendfooterlinkcolumns}>
                  <div className={styles.spaneastendFooterLevelOne}>
                    <div className={styles.customerService}>
                      Customer Service
                    </div>
                  </div>
                </div>
                <div className={styles.list}>
                  <div className={styles.itemLink} onClick={onItemLinkClick}>
                    <div className={styles.spaneastendfooterlinkcolumns1}>
                      <img
                        className={styles.svgIcon}
                        alt=""
                        src="/svg6@2x.png"
                      />
                    </div>
                    <a
                      className={styles.helpCenter}
                      href="https://www.dermstore.com/help-center.list"
                      target="_blank"
                    >
                      Help Center / FAQs
                    </a>
                  </div>
                  <div className={styles.itemLink1} onClick={onItemLink1Click}>
                    <div className={styles.spaneastendfooterlinkcolumns1}>
                      <img
                        className={styles.svgIcon}
                        alt=""
                        src="/svg7@2x.png"
                      />
                    </div>
                    <a
                      className={styles.helpCenter}
                      href="https://www.dermstore.com/info/returns.list"
                      target="_blank"
                    >
                      Returns
                    </a>
                  </div>
                  <div className={styles.itemLink2} onClick={onItemLink2Click}>
                    <div className={styles.spaneastendfooterlinkcolumns1}>
                      <img
                        className={styles.svgIcon}
                        alt=""
                        src="/svg8@2x.png"
                      />
                    </div>
                    <a
                      className={styles.helpCenter}
                      href="https://www.dermstore.com/info/delivery-information.list"
                      target="_blank"
                    >
                      Shipping Information
                    </a>
                  </div>
                  <div className={styles.itemLink3} onClick={onItemLink3Click}>
                    <div className={styles.spaneastendfooterlinkcolumns1}>
                      <img
                        className={styles.svgIcon}
                        alt=""
                        src="/svg9@2x.png"
                      />
                    </div>
                    <a
                      className={styles.helpCenter}
                      href="https://www.dermstore.com/track-your-order.list"
                      target="_blank"
                    >
                      Track my order
                    </a>
                  </div>
                  <div className={styles.itemLink4}>
                    <div className={styles.spaneastendfooterlinkcolumns1}>
                      <img
                        className={styles.svgIcon}
                        alt=""
                        src="/svg10@2x.png"
                      />
                    </div>
                    <div className={styles.cookieSettings}>Cookie Settings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.diveastendfooterlinkcolumnsL3}>
            <div className={styles.diveastendfooterlinkcolumnsL4}>
              <div className={styles.diveastendfooterlinkcolumnsL5}>
                <div className={styles.diveastendfooterlinkcolumnsL6}>
                  <div className={styles.before1} />
                  <div className={styles.spaneastendfooterlinkcolumns6}>
                    <div className={styles.spaneastendFooterLevelOne}>
                      <div className={styles.customerService}>My Account</div>
                    </div>
                  </div>
                </div>
                <div className={styles.list1}>
                  <div className={styles.item}>
                    <div className={styles.link}>
                      <a
                        className={styles.helpCenter}
                        href="https://www.dermstore.com/subscriptions.account"
                        target="_blank"
                      >
                        <p className={styles.manageMyAuto}>Manage My Auto-</p>
                        <p className={styles.manageMyAuto}>Replenishments</p>
                      </a>
                    </div>
                  </div>
                  <div className={styles.item1}>
                    <div className={styles.link1}>
                      <a
                        className={styles.myRewards}
                        href="https://www.dermstore.com/account/redeem-points.list"
                        target="_blank"
                      >
                        My Rewards
                      </a>
                    </div>
                  </div>
                  <div className={styles.item2}>
                    <div className={styles.link2}>
                      <a
                        className={styles.myRewards}
                        href="https://www.dermstore.com/wishlists.account"
                        target="_blank"
                      >
                        My Favorites
                      </a>
                    </div>
                  </div>
                  <div className={styles.item3}>
                    <div className={styles.link3}>
                      <a
                        className={styles.myRewards}
                        href="https://www.dermstore.com/myreferrals.list"
                        target="_blank"
                      >
                        Refer a Friend
                      </a>
                    </div>
                  </div>
                  <div className={styles.item4}>
                    <div className={styles.diveastendfooterlinkcolumnsL7}>
                      <div className={styles.link3}>
                        <a
                          className={styles.myRewards}
                          href="https://www.dermstore.com/accountOrderHistory.account"
                          target="_blank"
                        >
                          Order History
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.diveastendfooterlinkcolumnsL4}>
              <div className={styles.diveastendfooterlinkcolumnsL9}>
                <div className={styles.diveastendfooterlinkcolumnsL6}>
                  <div className={styles.before1} />
                  <div className={styles.spaneastendfooterlinkcolumns7}>
                    <div className={styles.spaneastendFooterLevelOne}>
                      <div className={styles.customerService}>Company</div>
                    </div>
                  </div>
                </div>
                <div className={styles.list2}>
                  <div className={styles.item}>
                    <div className={styles.link5}>
                      <a
                        className={styles.myRewards}
                        href="https://www.dermstore.com/info/affiliates.list"
                        target="_blank"
                      >
                        Affiliate Program
                      </a>
                    </div>
                  </div>
                  <div className={styles.item6}>
                    <div className={styles.link6}>
                      <a
                        className={styles.myRewards}
                        href="https://secure.gocertify.me/at/dermstore/essential-worker"
                        target="_blank"
                      >
                        Key Workers Discount
                      </a>
                    </div>
                  </div>
                  <div className={styles.item7}>
                    <div className={styles.link7}>
                      <a
                        className={styles.myRewards}
                        href="https://www.dermstore.com/info/about-us.list"
                        target="_blank"
                      >
                        About Us
                      </a>
                    </div>
                  </div>
                  <div className={styles.item8}>
                    <div className={styles.link8}>
                      <a
                        className={styles.myRewards}
                        href="https://www.dermstore.com/info/press.list"
                        target="_blank"
                      >
                        Press
                      </a>
                    </div>
                  </div>
                  <div className={styles.item9}>
                    <div className={styles.diveastendfooterlinkcolumnsL7}>
                      <div className={styles.link9}>
                        <a
                          className={styles.myRewards}
                          href="https://www.dermstore.com/info/klarna.list"
                          target="_blank"
                        >
                          What is Klarna?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.diveastendfooterlinkcolumnsL4}>
              <div className={styles.diveastendfooterlinkcolumnsL13}>
                <div className={styles.diveastendfooterlinkcolumnsL6}>
                  <div className={styles.before1} />
                  <div className={styles.spaneastendfooterlinkcolumns8}>
                    <div className={styles.spaneastendFooterLevelOne}>
                      <div className={styles.customerService}>Legal</div>
                    </div>
                  </div>
                </div>
                <div className={styles.list3}>
                  <div className={styles.item}>
                    <div className={styles.link10}>
                      <a
                        className={styles.myRewards}
                        href="https://www.dermstore.com/info/privacy-policy.list"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                    </div>
                  </div>
                  <div className={styles.item6}>
                    <div className={styles.link11}>
                      <a
                        className={styles.myRewards}
                        href="https://www.dermstore.com/exclusions/new-customer.list"
                        target="_blank"
                      >
                        Site Wide Exclusions
                      </a>
                    </div>
                  </div>
                  <div className={styles.item7}>
                    <div className={styles.link12}>
                      <a
                        className={styles.myRewards}
                        href="https://www.dermstore.com/info/terms-conditions.list"
                        target="_blank"
                      >{`Terms & Conditions`}</a>
                    </div>
                  </div>
                  <div className={styles.item8}>
                    <div className={styles.link13}>
                      <a
                        className={styles.myRewards}
                        href="https://s1.thcdn.com/design-assets/documents/dermstore/Modern%20Slavery%20Policy-pages-2.pdf"
                        target="_blank"
                      >
                        Modern Slavery Statement
                      </a>
                    </div>
                  </div>
                  <div className={styles.item14}>
                    <div className={styles.link14}>
                      <a
                        className={styles.myRewards}
                        href="https://www.dermstore.com/info/product-recall.list"
                        target="_blank"
                      >
                        Product Recall
                      </a>
                    </div>
                  </div>
                  <div className={styles.item15}>
                    <div className={styles.diveastendfooterlinkcolumnsL7}>
                      <div className={styles.link1}>
                        <a
                          className={styles.myRewards}
                          href="https://www.dermstore.com/statement.accessibility"
                          target="_blank"
                        >
                          Accessibility
                        </a>
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

export default FooterComponent;
