import { useState } from "react";
import { useAppContext } from "../../../context/state";
import { Undo } from "../../../assets/icons/SVG";
import ProductTile from "../../shared-components/ProductTile";
import "./popularitems.scss";

const PopularItems = (props) => {
  const state = useAppContext();
  const [navigationValue, setNavigationValue] = useState(0);

  const onClickHandler = (e) => {
    return setNavigationValue(parseInt(e.target.value));
  };

  const cartHandler = () => state.setCart([...state.cart, this]);
  const favHandler = () => state.setFavorites([...state.favorites, this]);

  return (
    <div className="popular">
      <div className="popular__line--container">
        <div className="popular__line--border"></div>
        <div className="popular__line--title">Popular Items</div>
        <div className="popular__line--border"></div>
      </div>
      <div className="popular__item--container">
        <div
          className="popular__item--container--wrapper"
          style={
            navigationValue === 0
              ? { transform: "translate(0)" }
              : navigationValue === 1
              ? { transform: "translate(-12.5%)" }
              : navigationValue === 2
              ? { transform: "translate(-25%)" }
              : navigationValue === 3
              ? { transform: "translate(-37.5%)" }
              : navigationValue === 4
              ? { transform: "translate(-50%)" }
              : null
          }
        >
          {state.productData.slice(0, props.sliceValue).map((product) => (
            <ProductTile
              id={product.id}
              image={product.image}
              name={product.name}
              time={product.time}
              price={`$ ${product.price}`}
              button={product.button}
              hover={product.hover}
              icon={product.icon}
              message={product.message}
              cartHandler={() => cartHandler()}
              favHandler={() => favHandler()}
            />
          ))}
        </div>
        <ul
          className="popular__navigation"
          style={state.size < 720 ? { display: "flex" } : { display: "none" }}
        >
          <li>
            <input
              type="radio"
              name="foo"
              value={0}
              onClick={(e) => onClickHandler(e)}
            ></input>
          </li>
          <li>
            <input
              type="radio"
              name="foo"
              value={1}
              onClick={(e) => onClickHandler(e)}
            ></input>
          </li>
          <li>
            <input
              type="radio"
              name="foo"
              value={2}
              onClick={(e) => onClickHandler(e)}
            ></input>
          </li>
          <li>
            <input
              type="radio"
              name="foo"
              value={3}
              onClick={(e) => onClickHandler(e)}
            ></input>
          </li>
          <li>
            <input
              type="radio"
              name="foo"
              value={4}
              onClick={(e) => onClickHandler(e)}
            ></input>
          </li>
        </ul>
        <div className="popular__button--wrapper">
          <button>
            LOAD MORE <Undo />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularItems;
