import Results from "../../layouts/Results";
import Breadcrumbs from "../../shared-components/Breadcrumbs";
import Filters from "../../shared-components/Filters";

import "./categorylanding.scss";

const CategoryLanding = () => {
  return (
    <div className="category">
      <Breadcrumbs />
      <Filters />
      <Results />
    </div>
  );
};

export default CategoryLanding;
