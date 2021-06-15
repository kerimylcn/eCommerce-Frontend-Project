import React from "react";
import { useAppContext } from "../../../context/state.js";
import {
  Facebook,
  Google,
  Twitter,
  Pinterest,
  ArrowDown,
} from "../../../assets/icons/SVG.js";
import "./footer.scss";

const Footer = () => {
  const state = useAppContext();
  const date = new Date();

  const information = {
    categories: [
      "Alcohol",
      "Art",
      "Books",
      "Drink",
      "Electronics",
      "Home",
      "Jewelry",
      "Kids & Baby",
      "Men's Fashion",
      "Mobile",
      "Motorcycles",
      "Movies",
      "Music",
      "Sport",
      "Toys",
      "Travel",
      "Women's Fashion",
    ],
    about: ["About us", "Delivery", "Testimonials", "Contact"],
  };

  return (
    <footer className="footer">
      <ul className="footer__container">
        <li className="footer__container__section">
          <ul className="footer__container__section--a">
            <li className="footer__container__section--item">
              <p>© Copyright {date.getFullYear()}</p>
              <p>All rights Reserved.</p>
            </li>
            <li>
              <h onClick={() => state.footerContactHandler()}>
                CONTACT
                <div
                  style={
                    state.footerContact
                      ? { rotate: "180deg" }
                      : { rotate: "none" }
                  }
                >
                  <ArrowDown />
                </div>
              </h>
              <div
                style={
                  state.footerContact
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <p className="footer__container__section--item ">
                  Headquarters:
                </p>
                <p className="footer__container__section--item ">
                  5600, Blvd. des Galeries, Bur 530
                </p>
                <p className="footer__container__section--item ">
                  Québec, Québec G2K 2H6
                </p>
              </div>
            </li>

            <div
              style={
                state.footerContact ? { display: "block" } : { display: "none" }
              }
            >
              <li className="footer__container__section--item">
                <a href=" mailto: contact@osf-global.com">
                  contact@osf-global.com
                </a>
              </li>
              <li className="footer__container__section--item">
                <a href="tel: +18885484344">+1(888) 548-4344</a>
              </li>
            </div>
          </ul>

          <li className="footer__container__section--b">
            <ul className="footer__container__section--b__container">
              <li className="footer__container__section--b__container__a">
                <h onClick={() => state.footerCategoriesHandler()}>
                  CATEGORIES
                  <div
                    style={
                      state.footerCategories
                        ? { transform: "rotate(180deg)" }
                        : { transform: "none" }
                    }
                  >
                    <ArrowDown />
                  </div>
                </h>
                <ul
                  className="footer__container__section--b__container__a__list"
                  style={
                    state.footerCategories
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  {information.categories.map((categorie, index) => (
                    <li
                      className="footer__container__section--item"
                      key={index}
                    >
                      <a href="##">{categorie}</a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="footer__container__section--b__container--b">
                <h onClick={() => state.footerAboutHandler()}>
                  ABOUT{" "}
                  <div
                    style={
                      state.footerAbout
                        ? { transform: "rotate(180deg)" }
                        : { transform: "none" }
                    }
                  >
                    <ArrowDown />
                  </div>
                </h>
                <ul
                  className="footer__container__section--b__container--b__list"
                  style={
                    state.footerAbout
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  {information.about.map((info, index) => (
                    <li
                      className="footer__container__section--item"
                      key={index}
                    >
                      <a href="##">{info}</a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </li>
          <li className="footer__container__section--c">
            <ul>
              <li>
                <a href="https://www.facebook.com/OSFDigital/" target="_blank">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="https://osf.digital/" target="_blank">
                  <Google />
                </a>
              </li>
              <li>
                <a href="https://osf.digital/" target="_blank">
                  <Pinterest />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/osfdigital" target="_blank">
                  <Twitter />
                </a>
              </li>
            </ul>
          </li>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
