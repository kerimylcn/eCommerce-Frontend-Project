import { useAppContext } from "../../../context/state";
import ProductTile from "../../shared-components/ProductTile";
import "./popularitems.scss";

//LOAD MORE BUTTON
//border width
//Product Tile1
//favid will match, if it's already in it then it will remove it.

const PopularItems = () => {
  const state = useAppContext();
  const cartHandler = () => state.setCart([...state.cart, this]);
  const favHandler = () => state.setFavorites([...state.favorites, this]);
  return (
    <div className="popular">
      <div className="popular--line"></div>
      <span className="popular--text">Popular Item</span>
      <div className="popular__item--container">
        {state.productData.map((product) => (
          <ProductTile
            id={product.id}
            image={product.image}
            name={product.name}
            time={product.time}
            price={product.price}
            button={product.button}
            hover={product.hover}
            icon={product.icon}
            message={product.message}
            cartHandler={() => cartHandler()}
            favHandler={() => favHandler()}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
