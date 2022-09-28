import { NavLink, useLoaderData } from "react-router-dom";

const SinglePhoneDetail = () => {
  // const { phoneId } = useParams();
  const data = useLoaderData();
  // console.log(data);
  // const [phoneDetail, setPhoneDetail] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/phones/${phoneId}`)
  //     .then((res) => res.json())
  //     .then((data) => setPhoneDetail(data));
  // }, [phoneId]);

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
              src={data?.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          {/* phone details */}
          <div className="col-md-8">
            <div className="card-body text-start">
              <h4 className="card-title">{data?.name}</h4>
              <h5 className="card-title">Price: ${data?.price}</h5>
              <p className="card-text">{data.description}</p>
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
