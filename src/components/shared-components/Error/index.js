import { ErrorIcon, Search } from "../../../assets/icons/SVG";
import { Link } from "react-router-dom";
import "./error.scss";

const Error = () => {
  return (
    <div className="error__wrapper">
      <div className="error__wrapper--leftColumn">
        <ErrorIcon />
        <h1>Oops!</h1>
      </div>
      <div className="error__wrapper--rightColumn">
        <h2>Sorry, this page could not be found!</h2>
        <p>
          Aenean commodo liguala eget dolor. Aenean massa. Cum soclis natoque
          penatibus et magnis dls partulient montes, nascetur ridiculus mus.
        </p>
        <p>
          Lorem Ipsum dolor sit amet, consectetuer adlipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>

        <Link to="/">Go back to Homepage</Link>

        <div className="error__wrapper--rightColumn--searchBar">
          <h2>Search our site</h2>
          <input type="text" placeholder=" SEARCH"></input>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Error;
