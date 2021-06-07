import { useAppContext } from "../../../context/state";

import "./navigation.scss";

const Navigation = () => {
  const state = useAppContext();

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li
          className="navigation__list--item"
          onClick={() => state.onClickHandler()}
        >
          SERVICES
        </li>
        <li className="navigation__list--item">COMPANY</li>
        <li className="navigation__list--item">LIBRARY</li>
        <li className="navigation__list--item">CONTACT US</li>
        <li className="navigation__list--item">EN</li>
        <li className="navigation__list--item">$US</li>
      </ul>
    </nav>
  );
};

export default Navigation;
