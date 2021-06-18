import ProductTile from "../../shared-components/ProductTile";
import productData from "../../shared-components/ProductTile/productData";

import "./popularitems.scss";

const PopularItems = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", background: "#262A32" }}>
      {productData.map((product) => (
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
        />
      ))}
    </div>
  );
};

export default PopularItems;
