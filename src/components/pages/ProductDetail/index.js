import ProductDetail from "../../shared-components/ProductDetail";
import DetailedImages from "../../../assets/images/productdetail/detailedImages.js";

import "./productdetail.scss";

const ProductDetailPage = () => {
  return (
    <div className="productDetail">
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
    </div>
  );
};

export default ProductDetailPage;
