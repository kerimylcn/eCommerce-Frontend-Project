import Navigation from "../../shared-components/Navigation";
import Logo from "../../../assets/images/logo.png";
import { Search, User, Heart, Bag } from "../../../assets/icons/SVG";
import { useAppContext } from "../../../context/state";
import { HamburgerOpen } from "../../../assets/icons/SVG";
import "./header.scss";

//HEADER_3 left.

const Header = () => {
  const state = useAppContext();

  return (
    <>
      <header className="header">
        <div
          className="header__hamburger"
          onClick={() => state.hamburgerHandler()}
        >
          {state.hamburger ? (
            <div
              className="header__hamburger--close"
              onClick={() => state.hamburgerHandler()}
            >
              X
            </div>
          ) : (
            <HamburgerOpen />
          )}
        </div>
        <div className="header__logo">
          <img
            src={Logo}
            width={state.size < 1024 && 50}
            alt="OSF Academy Logo"
          />
          <div className="header__logo--text">
            <span>OSF</span>
            <span>Academy</span>
          </div>
        </div>
        <Navigation />
        <ul className="header__icons">
          <li className="header__icons--item">
            <Search width={10} />
          </li>
          <li className="header__icons--item">
            <User />
          </li>
          <li className="header__icons--item--fav">
            <Heart />
            <div className="header__icons--item--badge">
              {state.favorites.length}
            </div>
          </li>
          <li className="header__icons--item--cart">
            <Bag />
            <div className="header__icons--item--badge">
              {state.cart.length}
            </div>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
