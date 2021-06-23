import { Link } from "react-router-dom";
import "./filters.scss";

//Home link olayı yapılacak, selectlerin okunun stilizasyonu yapılacak
//onclick handler to cart and fav

const Filters = () => {
  return (
    <div className="filter">
      <ul className="filter__container">
        <div className="filter__container__wrapper">
          <li className="filter__container__wrapper--item">
            <span>Price</span>
            <select
              className="filter__container--selects"
              name="prices"
              id="price-select"
            >
              <option>$0.00 - $100.00</option>
              <option>$100.00 - $1000.00</option>
            </select>
          </li>
          <li className="filter__container__wrapper--item">
            <span>Color</span>
            <label
              for="color-select1"
              className="filter__container__wrapper--item--radio"
            >
              <input
                className="filter__container__wrapper--item--radio__input"
                type="radio"
                name="colors"
                id="color-select1"
                value="white"
              ></input>
              <div
                className="filter__container__wrapper--item--radio__radio"
                id="color-select-1"
              ></div>
            </label>
            <label
              for="color-select2"
              className="filter__container__wrapper--item--radio"
            >
              <input
                className="filter__container__wrapper--item--radio__input"
                type="radio"
                name="colors"
                id="color-select2"
                value="turquoise"
              ></input>
              <div
                className="filter__container__wrapper--item--radio__radio"
                id="color-select-2"
              ></div>
            </label>
            <label
              for="color-select3"
              className="filter__container__wrapper--item--radio"
            >
              <input
                className="filter__container__wrapper--item--radio__input"
                type="radio"
                name="colors"
                id="color-select3"
                value="black"
              ></input>
              <div
                className="filter__container__wrapper--item--radio__radio"
                id="color-select-3"
              ></div>
            </label>
            <label
              for="color-select4"
              className="filter__container__wrapper--item--radio"
            >
              <input
                className="filter__container__wrapper--item--radio__input"
                type="radio"
                name="colors"
                id="color-select4"
                value="green"
              ></input>
              <div
                className="filter__container__wrapper--item--radio__radio"
                id="color-select-4"
              ></div>
            </label>
            <label
              for="color-select5"
              className="filter__container__wrapper--item--radio"
            >
              <input
                className="filter__container__wrapper--item--radio__input"
                type="radio"
                name="colors"
                id="color-select5"
                value="blue"
              ></input>
              <div
                className="filter__container__wrapper--item--radio__radio"
                id="color-select-5"
              ></div>
            </label>
            <label
              for="color-select6"
              className="filter__container__wrapper--item--radio"
            >
              <input
                className="filter__container__wrapper--item--radio__input"
                type="radio"
                name="colors"
                id="color-select6"
                value="orange"
              ></input>
              <div
                className="filter__container__wrapper--item--radio__radio"
                id="color-select-6"
              ></div>
            </label>
            <label
              for="color-select7"
              className="filter__container__wrapper--item--radio"
            >
              <input
                className="filter__container__wrapper--item--radio__input"
                type="radio"
                name="colors"
                id="color-select7"
                value="red"
              ></input>
              <div
                className="filter__container__wrapper--item--radio__radio"
                id="color-select-7"
              ></div>{" "}
            </label>
            <label
              for="color-select8"
              className="filter__container__wrapper--item--radio"
            >
              <input
                className="filter__container__wrapper--item--radio__input"
                type="radio"
                name="colors"
                id="color-select8"
                value="grey"
              ></input>
              <div
                className="filter__container__wrapper--item--radio__radio"
                id="color-select-8"
              ></div>
            </label>
          </li>
        </div>
        <div className="filter__container__wrapper">
          <li className="filter__container__wrapper--item">
            <span>Brands</span>
            <select
              className="filter__container--selects"
              name="brands"
              id="brand-select"
            >
              <option>Ukraine sport</option>
              <option>Turkey sport</option>
            </select>
          </li>
          <li className="filter__container__wrapper--item">
            <span>Sort by</span>
            <select
              className="filter__container--selects"
              name="sort-by"
              id="sort-select"
            >
              <option>Price</option>
              <option>Size</option>
            </select>
          </li>
        </div>
        <div className="filter__container__wrapper">
          <li className="filter__container__wrapper--item">
            <span>Size</span>
            <select
              className="filter__container--selects"
              name="sizes"
              id="size-select"
            >
              <option>Small</option>
              <option>Medium</option>
            </select>
          </li>
          <li className="filter__container__wrapper--item">
            <span>Show </span>
            <select
              className="filter__container--selects"
              name="show"
              id="show-select"
            >
              <option>16 per page</option>
              <option>32 per page</option>
            </select>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Filters;
