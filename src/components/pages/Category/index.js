import FeaturedProducts from "../../layouts/Featured";
import Results from "../../layouts/Results";
import Breadcrumbs from "../../shared-components/Breadcrumbs";
import Filters from "../../shared-components/Filters";

import "./categorylanding.scss";

const CategoryLanding = () => {
  return (
    <div className="category">
      <Breadcrumbs
        first={"Home"}
        second={"Category Landing"}
        title={"Services"}
      />
      <Filters />
      <Results />
      <FeaturedProducts />
    </div>
  );
};

export default CategoryLanding;
