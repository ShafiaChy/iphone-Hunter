import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const SinglePhoneDetail = () => {
  const { phoneId } = useParams();
  const [phoneDetail, setPhoneDetail] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/phones/${phoneId}`)
      .then((res) => res.json())
      .then((data) => setPhoneDetail(data));
  }, [phoneId]);

  return (
    // used boostrap card horizontal
    <div className="d-flex justify-content-center mt-5">
      <div
        className="card mb-3 d-flex justify-content-center align-items-center"
        style={{ maxWidth: "600px", height: "300px" }}
      >
        {/* phone image */}
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={phoneDetail?.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          {/* phone details */}
          <div className="col-md-8">
            <div className="card-body text-start">
              <h4 className="card-title">{phoneDetail?.name}</h4>
              <h5 className="card-title">Price: ${phoneDetail?.price}</h5>
              <p className="card-text">{phoneDetail.description}</p>
              <NavLink to="/" className="btn btn-dark">
                Go back
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePhoneDetail;
