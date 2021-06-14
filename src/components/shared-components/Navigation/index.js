//768px view should done
//NAVIGATION_1 left

import Image from "../../../assets/images/dropdownitem.png";
import { ArrowDown } from "../../../assets/icons/SVG";
import { useAppContext } from "../../../context/state";
import "./navigation.scss";

const Navigation = () => {
  const state = useAppContext();

  const services = {
    ProductCategories: [
      "Accesories",
      "Alcohol",
      "Art",
      "Books",
      "Drink",
      "Electronics",
      "Flowers & Plants",
      "Food",
      "Gadgets",
      "Garden",
      "Grocery",
      "Home",
      "Jewelry",
      "Kids & Baby",
      "Men's Fashion",
      "Mobile",
      "Motorcycles",
      "Movies",
      "Music",
      "Office",
      "Pets",
      "Romantic",
      "Sport",
      "Toys",
    ],
    Sale: [
      "Accesories",
      "Alcohol",
      "Art",
      "Books",
      "Drink",
      "Electronics",
      "Flowers & Plants",
      "Food",
    ],
  };

  return (
    <nav className={state.hamburger ? "navigation--active" : "navigation"}>
      <ul className="navigation__list">
        <li className="navigation__list--item">
          <div onClick={() => state.servicesHandler()}>
            <span>SERVICES</span>
            <div
              style={
                state.services
                  ? { transform: "rotate(180deg)" }
                  : { transform: "none" }
              }
            >
              <ArrowDown />
            </div>
          </div>
          <div
            className={
              state.services && state.size < 480
                ? "navigation__list--item__services--active"
                : "navigation__list--item__services"
            }
          >
            <ul className="navigation__list--item__services__container">
              <li className="navigation__list--item__services__container--categorie--a">
                <lh
                  className="navigation__list--item__services__container--categorie--title"
                  onClick={() => state.categorieHandlerA()}
                >
                  Product Categories
                  <div
                    style={
                      state.categorieA
                        ? { transform: "rotate(180deg)" }
                        : { transform: "none" }
                    }
                  >
                    <ArrowDown />
                  </div>
                </lh>
                <ul
                  className="navigation__list--item__services__container--categorie__list"
                  style={
                    state.categorieA ? { display: "flex" } : { display: "none" }
                  }
                >
                  {services.ProductCategories.map((product, index) => (
                    <li key={index}>{product}</li>
                  ))}
                </ul>
              </li>
              <li className="navigation__list--item__services__container--categorie--b">
                <lh
                  className="navigation__list--item__services__container--categorie--title"
                  onClick={() => state.categorieHandlerB()}
                >
                  Sale
                  <div
                    style={
                      state.categorieB
                        ? { transform: "rotate(180deg)" }
                        : { transform: "none" }
                    }
                  >
                    <ArrowDown />
                  </div>
                </lh>
                <ul
                  className="navigation__list--item__services__container--categorie__list"
                  style={
                    state.categorieB ? { display: "flex" } : { display: "none" }
                  }
                >
                  {services.Sale.map((sale, index) => (
                    <li key={index}>{sale}</li>
                  ))}
                </ul>
              </li>
              <div>
                <img src={Image} alt="Fashion Woman" />
              </div>
            </ul>
          </div>
        </li>
        <li className="navigation__list--item">
          COMPANY
          <ArrowDown />
        </li>
        <li className="navigation__list--item">
          LIBRARY
          <ArrowDown />
        </li>
        <li className="navigation__list--item">
          CONTACT US
          <ArrowDown />
        </li>
        <li className="navigation__list--item">EN</li>
        <li className="navigation__list--item">$US</li>
      </ul>
    </nav>
  );
};

export default Navigation;
