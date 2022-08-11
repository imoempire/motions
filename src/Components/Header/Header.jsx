import React from "react";
import "./styles.css";
import SubHeading from "../SubHeader/subHeader";
import Images from "../../Utils/Images";

const Header = () => {
  return (
    <div className="app__header app__wrapper section_padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={Images.welcome} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
