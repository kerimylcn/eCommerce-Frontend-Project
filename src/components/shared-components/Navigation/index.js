//768px view should done
//NAVIGATION_1 left

import Image from "../../../assets/images/dropdownitem.png";
import { ArrowDown } from "../../../assets/icons/SVG";

import "./navigation.scss";

const Navigation = () => {
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
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list--item">
          <span>SERVICES</span>
          <ArrowDown />
          <div className="navigation__list--item__services">
            <ul className="navigation__list--item__services__container">
              <li className="navigation__list--item__services__container--categorie--a">
                <lh className="navigation__list--item__services__container--categorie--title">
                  Product Categories
                </lh>
                <ul className="navigation__list--item__services__container--categorie__list">
                  {services.ProductCategories.map((product, index) => (
                    <li key={index}>{product}</li>
                  ))}
                </ul>
              </li>
              <li className="navigation__list--item__services__container--categorie--b">
                <lh className="navigation__list--item__services__container--categorie--title">
                  Sale
                </lh>
                <ul className="navigation__list--item__services__container--categorie__list">
                  {services.Sale.map((sale, index) => (
                    <li key={index}>{sale}</li>
                  ))}
                </ul>
              </li>
            </ul>
            <div>
              <img src={Image} alt="Fashion Woman" />
            </div>
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
