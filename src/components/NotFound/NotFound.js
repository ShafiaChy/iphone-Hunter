import React from "react";
import { Link } from "react-router-dom";
import Error from "../../Images/notFound.jpg";
const NotFound = () => {
  return (
    <div>
      <img src={Error} alt="" className="w-50 mt-5" />
      <Link to="/" className="d-block">
        Let's go home
      </Link>
    </div>
  );
};

export default NotFound;
