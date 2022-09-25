import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "../../../Images/640px-Apple-logo.png";
const Header = () => {
  return (
    <div>
      {/* used react-bootstrap brand text navbar */}
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Image}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            iphone Hunter
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
