import "./breadcrumbs.scss";

const Breadcrumbs = (props) => {
  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__item">
        <span>{props.first}</span>
        <span>/</span>
        <span>{props.second}</span>
        <span>{props.third}</span>
      </div>
      <div className="breadcrumbs__title">
        <div></div>
        <h1>{props.title}</h1>
        <div></div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
