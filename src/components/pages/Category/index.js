import Breadcrumbs from "../../shared-components/Breadcrumbs";
import Filters from "../../shared-components/Filters";
import "./categorylanding.scss";

const CategoryLanding = () => {
  return (
    <div className="category">
      <Breadcrumbs />
      <Filters />
    </div>
  );
};

export default CategoryLanding;
