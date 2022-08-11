import React from "react";

import  Images  from "../../Utils/Images";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <img src={Images.spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;
