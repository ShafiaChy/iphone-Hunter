import React, { useEffect, useState } from "react";
import Phone from "./Phone";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  // console.log(phones);
  useEffect(() => {
    fetch("http://localhost:5000/phones")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);
  return (
    <div id={"phones"} className="d-flex justify-content-center">
      <div className="row row-cols-1 row-cols-md-3 g-4 my-5 w-75">
        {phones.map((phone) => (
          <Phone phone={phone} key={phone.id}></Phone>
        ))}
      </div>
    </div>
  );
};

export default Phones;
