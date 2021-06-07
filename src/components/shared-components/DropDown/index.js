import React from "react";
import { useAppContext } from "../../../context/state";
import "./dropdown.scss";

const DropDown = () => {
  const state = useAppContext();

  return (
    <>
      <ul className={state.isDropDown ? "dropdown--active" : "dropdown--off"}>
        <ul className="categorie__production">
          <lh>PRODUCTION CATEGORIES</lh>
        </ul>
        <ul className="categorie__sale"></ul>
      </ul>
    </>
  );
};

export default DropDown;
