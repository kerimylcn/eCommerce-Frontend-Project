import "./popularitems.scss";
import {
  ProductTile1,
  ProductTile2,
} from "../../shared-components/ProductTile";

//ProductTile JSON oluştur.
//Componentleri propslarıyla beraber oluştur.

const PopularItems = () => {
  return (
    <div>
      <ProductTile1 />
    </div>
  );
};

export default PopularItems;
