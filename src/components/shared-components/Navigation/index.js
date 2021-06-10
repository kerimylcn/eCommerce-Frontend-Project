import { useAppContext } from "../../../context/state";
import Image from "../../../assets/images/dropdownitem.png";

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
    <nav className="navigation">
      <ul className="navigation__list">
        <li
          className="navigation__list--item"
          onClick={() => state.onClickHandler()}
        >
          SERVICES
          <div className="navigation__list--item__services">
            <ul className="navigation__list--item__services__container">
              <li className="navigation__list--item__services__container--categorie">
                <lh className="navigation__list--item__services__container--categorie--title">
                  Product Categories
                </lh>
                <ul className="navigation__list--item__services__container--categorie__list">
                  {services.ProductCategories.map((product, index) => (
                    <li>{product}</li>
                  ))}
                </ul>
              </li>
              <li className="navigation__list--item__services__container--categorie">
                <lh className="navigation__list--item__services__container--categorie--title">
                  Sale
                </lh>
                <ul className="navigation__list--item__services__container--categorie__list">
                  {services.Sale.map((sale, index) => (
                    <li>{sale}</li>
                  ))}
                </ul>
              </li>
            </ul>
            <div>
              <img src={Image} />
            </div>
          </div>
        </li>
        <li className="navigation__list--item">COMPANY</li>
        <li className="navigation__list--item">LIBRARY</li>
        <li className="navigation__list--item">CONTACT US</li>
        <li className="navigation__list--item">EN</li>
        <li className="navigation__list--item">$US</li>
      </ul>
    </nav>
  );
};

export default Navigation;
