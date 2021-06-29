import { useState, useEffect } from "react";
import { useAppContext } from "../../../context/state";
import ProductTile from "../../shared-components/ProductTile";
import "./featuredproducts.scss";

const FeaturedProducts = () => {
  const [navigationValue, setNavigationValue] = useState(false);
  const state = useAppContext();

  useEffect(() => {
    setTimeout(() => setNavigationValue(!navigationValue), 5000);
  });

  const onClickHandlerLeft = () => {
    return navigationValue === false
      ? setNavigationValue(true)
      : setNavigationValue(false);
  };

  const onClickHandlerRight = () => {
    return navigationValue === true
      ? setNavigationValue(false)
      : setNavigationValue(true);
  };

  return (
    <div
      className="products__container"
      style={state.size <= 720 ? { display: "none" } : { display: "flex" }}
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
        <div className="products__container--items--wrapper">
          <div
            className="products__container--items--container"
            style={
              navigationValue === false
                ? { transform: "translate(0%)" }
                : { transform: "translate(-50%)" }
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
    </div>
  );
};

export default FeaturedProducts;
