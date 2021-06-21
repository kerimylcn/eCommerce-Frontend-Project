import { useState } from "react";
import { useAppContext } from "../../../context/state";
import ProductTile from "../../shared-components/ProductTile";
import "./featuredproducts.scss";

const FeaturedProducts = () => {
  const [navigationValue, setNavigationValue] = useState(0);
  const state = useAppContext();

  const onClickHandlerLeft = () => {
    return navigationValue == 0 ? setNavigationValue(1) : setNavigationValue(0);
  };

  const onClickHandlerRight = () => {
    return navigationValue == 1 ? setNavigationValue(0) : setNavigationValue(1);
  };

  return (
    <div
      className="products__container"
      style={state.size <= 480 ? { display: "none" } : { display: "flex" }}
    >
      <h1 className="products__container--header">Featured Products</h1>
      <p className="products__container--paragraph">
        Unde omnis iste natus error sit voluptatem
      </p>
      <div className="products__container--controller">
        <button onClick={() => onClickHandlerLeft()}>{"<"}</button>
        <div className="products__container--controller--line"></div>
        <div className="products__container--controller--mid">///</div>
        <div className="products__container--controller--line"></div>
        <button onClick={() => onClickHandlerRight()}>{">"}</button>
      </div>

      <div className="products__container--items">
        <div
          className="products__container--items--container"
          style={
            navigationValue == 0
              ? { marginLeft: "0" }
              : { marginLeft: "-62rem" }
          }
        >
          <div style={{ display: "flex" }}>
            {state.productData.slice(0, 5).map((product) => (
              <ProductTile
                id={product.id}
                image={product.image}
                name={product.name}
                time={product.time}
                price={`Awesome`}
                button={product.button}
                hover={product.hover}
                icon={product.icon}
                message={product.message}
                cartHandler={() => ""}
                favHandler={() => ""}
              />
            ))}
          </div>
          <div style={{ display: "flex" }}>
            {state.productData.slice(4, 9).map((product) => (
              <ProductTile
                id={product.id}
                image={product.image}
                name={product.name}
                time={product.time}
                price={`Awesome`}
                button={product.button}
                hover={product.hover}
                icon={product.icon}
                message={product.message}
                cartHandler={() => ""}
                favHandler={() => ""}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
