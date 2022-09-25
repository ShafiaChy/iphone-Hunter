import React from "react";
import { useNavigate } from "react-router-dom";

const Phone = (props) => {
  const { id, image, name, price } = props.phone;
  const navigate = useNavigate();
  const phoneDetailHandler = () => {
    navigate(`/phone/${id}`);
  };
  return (
    <div>
      <div className="col">
        <div className="card">
          <img
            src={image}
            className="card-img-top w-50 d-flex mx-auto my-3"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Price: ${price}</p>

            <button
              onClick={() => phoneDetailHandler(id)}
              className="btn btn-dark"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
