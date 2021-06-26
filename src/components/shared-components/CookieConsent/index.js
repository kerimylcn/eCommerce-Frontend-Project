import { useState } from "react";
import { useAppContext } from "../../../context/state";
import "./cookieconsent.scss";

const CookieConsent = () => {
  const state = useAppContext();
  const [showCookieModal, setShowCookieModal] = useState(true);
  return (
    <div
      className="cookie--overlay"
      style={
        document.cookie.includes("jdc") || !showCookieModal
          ? { display: "none" }
          : { display: "flex" }
      }
    >
      <div className="cookie__container">
        <div className="cookie__container__textSide">
          <span className="cookie__container__textSide--title">
            This website uses cookies
          </span>
          <p className="cookie__container__textSide--paragraph">
            OSF uses its own and third-party cookies for statistical purposes,
            to know your preferences , for website performance and interaction
            with social media offering publicity tailored to your interests. If
            you continue browsing, we consider that you accept its use. You can
            expand this information consulting our{" "}
            <span>Cookies Policy Page.</span>
          </p>
        </div>
        <div className="cookie__container__buttonSide">
          <button
            className="cookie__container__buttonSide--close"
            onClick={() => setShowCookieModal(false)}
          >
            X
          </button>
          <button
            className="cookie__container__buttonSide--accept"
            onClick={() => (
              state.saveToStorage(state.storageType), setShowCookieModal(false)
            )}
          >
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
