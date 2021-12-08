import React, { useContext } from "react";
import { Badge, Col, Container, Button } from "react-bootstrap";
// *context
import { CartContext } from "../context/CartContextProvider";
//*component
import Cart from "./shared/Cart";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      {state.itemsCounter > 0 && (
        <Container className="d-flex justify-content-center border border-danger rounded my-3 p-3 mb-5 bg-body rounded">
          <Col className="d-flex justify-content-center align-items-center">
            <span> total Items: </span>
            <Badge bg="danger" className="ms-1"> {state.itemsCounter} </Badge>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <span> total payments: </span>
            <Badge bg="danger" className="ms-1"> {state.total} $ </Badge>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Button
              variant="success"
              className="me-1"
              onClick={() => dispatch({ type: "CHECKOUT" })}
            >
              checkOut
            </Button>
            <Button
              variant="danger"
              className="me-1"
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              Clear
            </Button>
          </Col>
        </Container>
      )}
      {state.itemsCounter === 0 && (
        <Container className="d-flex justify-content-center align-items-center border rounded mt-3">
          <Col className="d-flex justify-content-center align-items-center">
            <h3 className="mt-1">
              <Badge bg="danger">its empty</Badge>
            </h3>
          </Col>
        </Container>
      )}
      {state.checkout && (
        <Container className="d-flex justify-content-center align-items-center border rounded mt-3">
          <Col className="d-flex justify-content-center align-items-center">
            <h3 className="mt-1">
              <Badge bg="success">check out successfully</Badge>
            </h3>
          </Col>
        </Container>
      )}
      {state.selectedItems.map((item) => (
        <Cart key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ShopCart;
