import FeaturedProducts from "../../layouts/Featured";
import Results from "../../layouts/Results";
import Breadcrumbs from "../../shared-components/Breadcrumbs";
import Filters from "../../shared-components/Filters";
import Tabs from "../../shared-components/Tabs";

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
      <Tabs />
    </div>
  );
};

export default CategoryLanding;
