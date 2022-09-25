import React from "react";
import ImageOne from "../../../Images/images.jpg";
const Banner = () => {
  return (
    <div>
      <div>
        <img
          src={ImageOne}
          style={{ height: "500px" }}
          className="w-100"
          alt="..."
        />
      </div>
    </div>
  );
};

export default Banner;
