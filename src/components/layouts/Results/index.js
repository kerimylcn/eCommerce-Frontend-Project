import { useAppContext } from "../../../context/state";
import ProductTile from "../../shared-components/ProductTile/index";

import "./results.scss";

const Results = () => {
  const state = useAppContext();
  return (
    <div className="results">
      <span className="results--title">
        {state.productData.length - 2} results in apparel
      </span>
      <div className="results__wrapper">
        {state.productData.map((product) => (
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
            cartHandler={() => "cartHandler()"}
            favHandler={() => "favHandler()"}
          />
        ))}
      </div>
      <button className="results--button" onClick={() => window.scroll(0, 0)}>
        SCROLL TO TOP
      </button>
    </div>
  );
};

export default Results;
