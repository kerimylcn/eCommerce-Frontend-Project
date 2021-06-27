import ProductDetail from "../../shared-components/ProductDetail";
import DetailedImages from "../../../assets/images/productdetail/detailedImages.js";
import Tabs from "../../shared-components/Tabs";
import PopularItems from "../../layouts/Popular Items";
import Breadcrumbs from "../../shared-components/Breadcrumbs";
import Benefits from "../../shared-components/Benefits";

import "./productdetail.scss";

//720 p left
const ProductDetailPage = () => {
  return (
    <div className="productDetail">
      <Breadcrumbs
        first={"Home"}
        second={"OSF Theme"}
        third={`/ Ruffle Front V-Neck Cardigan`}
        title={"Ruffle Front V-Neck Cardigan"}
      />
      <ProductDetail
        imageFirst={DetailedImages.product1}
        imageFirstBehind={DetailedImages.product1behind}
        imageFirstSmall={DetailedImages.product1small}
        imageFirstSmallBehind={DetailedImages.product1smallbehind}
        imageSecond={DetailedImages.product2}
        imageSecondBehind={DetailedImages.product2behind}
        imageSecondSmall={DetailedImages.product2small}
        imageSecondSmallBehind={DetailedImages.product2smallbehind}
      />
      <Tabs />
      <PopularItems sliceValue={5} />
      <Benefits />
    </div>
  );
};

export default ProductDetailPage;
