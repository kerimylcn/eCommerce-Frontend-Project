import { useAppContext } from "../../../context/state";
import { Search, User, Heart, Bag } from "../../../assets/icons/SVG";
import "./iconbar.scss";

const IconBar = () => {
  const state = useAppContext();
  return (
    <ul className="icons">
      <li className="icons--item">
        <Search width={10} />
      </li>
      <li className="icons--item" onClick={() => state.setShowLogin(true)}>
        <User />
      </li>
      <li className="icons--item--fav">
        <Heart />
        <div
          className="icons--item--badge"
          style={
            state.favorites.length > 0
              ? { display: "block" }
              : { display: "none" }
          }
        >
          {state.favorites.length}
        </div>
      </li>
      <li className="icons--item--cart">
        <Bag />
        <div
          className="icons--item--badge"
          style={
            state.cart.length > 0 ? { display: "block" } : { display: "none" }
          }
        >
          {state.cart.length}
        </div>
      </li>
    </ul>
  );
};

export default IconBar;
