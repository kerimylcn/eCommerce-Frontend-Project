import React, { useState } from "react";
import { useAppContext } from "../../../context/state";
import "./dropdown.scss";

const DropDown = () => {
  const state = useAppContext();
  const [services] = useState([
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
  ]);

  return (
    <ul className={state.isDropDown ? "dropdown--active" : "dropdown--off"}>
      <div className="dropdown__list">
        <ul className="dropdown__list--header">
          <lh className="dropdown__list--header--item">PRODUCT CATEGORIE</lh>
          <lh className="dropdown__list--header--item">SALE</lh>
        </ul>
        <div className="dropdown__list--sub">
          <ul className="dropdown__list--sub__item">
            {services.slice(0, 8).map((service, index) => (
              <li className="dropdown__list--sub__item--item" key={index}>
                {service}
              </li>
            ))}
          </ul>
          <ul className="dropdown__list--sub__item">
            {services.slice(8, 16).map((service, index) => (
              <li className="dropdown__list--sub__item--item" key={index}>
                {service}
              </li>
            ))}
          </ul>
          <ul className="dropdown__list--sub__item">
            {services.slice(16, 24).map((service, index) => (
              <li className="dropdown__list--sub__item--item" key={index}>
                {service}
              </li>
            ))}
          </ul>
          <ul className="dropdown__list--sub__item">
            {services.slice(0, 8).map((service, index) => (
              <li className="dropdown__list--sub__item--item" key={index}>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ul>
  );
};

export default DropDown;
