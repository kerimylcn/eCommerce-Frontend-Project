import "./producttile.scss";
import { Plus, Like } from "../../../assets/icons/SVG";

const ProductTile = (props) => {
  return props.message ? (
    <div className="productMessage">
      <div className="productMessage--gradient"></div>
      <div className="productMessage__msgContainer">
        <p>{props.name}</p>
        <div className="productMessage__msgContainer--altContainer">
          <img src={props.icon} alt={props.name} />
          <span>{props.time}</span>
        </div>
      </div>
    </div>
  ) : props.hover ? (
    <div className="productHover">
      <div className="productHover__hoverState">
        <button onClick={props.cartHandler}>
          <Plus />
        </button>
        <button onClick={props.favHandler}>
          <Like />
        </button>
      </div>
      <img src={props.image} alt={props.name} />
      <div className="productHover__alt">
        <p>{props.name}</p>
        <p className="productHover__alt--price">{props.price}</p>
      </div>
    </div>
  ) : (
    <div className="productButton">
      <img src={props.image} alt={props.name} />
      <div className="productButton__alt">
        <p>{props.name}</p>
        <button>
          <div>
            <span>{props.price}</span>
          </div>
          <span>BUY NOW</span>
        </button>
      </div>
    </div>
  );
};

export default ProductTile;
