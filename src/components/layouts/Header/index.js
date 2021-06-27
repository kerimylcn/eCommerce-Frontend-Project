import Navigation from "../../shared-components/Navigation";
import Login from "../../shared-components/Login";
import Logo from "../../../assets/images/logo.png";
import IconBar from "../../shared-components/IconBar";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/state";
import { HamburgerOpen } from "../../../assets/icons/SVG";
import "./header.scss";

const Header = () => {
  const state = useAppContext();

  return (
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
      <Link to="/">
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
      </Link>
      <Navigation />
      <IconBar />
      <div
        className="login"
        style={state.showLogin ? { display: "flex" } : { display: "none" }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: "5",
          }}
          onClick={() => state.setShowLogin(false)}
        ></div>
        <Login />
      </div>
    </header>
  );
};

export default Header;
