import React, { useContext } from "react";
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

// *context
import { CartContext } from "../../context/CartContextProvider";

const MyNavbar = () => {
  const { state } = useContext(CartContext);

  return (
    <Navbar
      style={{
        backgroundImage: "linear-gradient(160deg, #0093e9 0%, #80d0c7 100%)",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
      expand="lg"
      sticky="top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>Mohammad Kala</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link>
              <Link to="/products" className="nav-link">
                products
              </Link>
            </Nav.Link>
            <Link>
              <Link to="/cart" className="nav-link">
                <Button variant="warning">
                  <MdOutlineShoppingCart />{" "}
                  <Badge bg="primary">{state.itemsCounter}</Badge>
                </Button>
              </Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
