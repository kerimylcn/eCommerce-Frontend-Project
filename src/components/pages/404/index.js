import Breadcrumbs from "../../shared-components/Breadcrumbs";
import Error from "../../shared-components/Error";
import "./404.scss";

const ErrorPage = () => {
  return (
    <div className="error">
      <Breadcrumbs first={"Home"} second={"404"} title={"404"} />
      <Error />
    </div>
  );
};

export default ErrorPage;
