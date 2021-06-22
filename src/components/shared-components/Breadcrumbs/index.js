import "./breadcrumbs.scss";

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__item">
        <span>Home</span>
        <span>/</span>
        <span>Category Landing</span>
      </div>
      <div className="breadcrumbs__title">
        <div></div>
        <h1>Services</h1>
        <div></div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
