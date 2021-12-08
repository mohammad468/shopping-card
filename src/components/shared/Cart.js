import React, { useContext } from "react";
import { Badge, Image, Container, Col, Row, Button } from "react-bootstrap";
import { shorten } from "../helpers/functions";

// *Icons
import { MdAdd, MdOutlineRemove, MdDelete } from "react-icons/md";

// *context
import { CartContext } from "../../context/CartContextProvider";

const Cart = (props) => {
  const { dispatch } = useContext(CartContext);
  const { image, title, price, quantity } = props.data;
  return (
    <Container>
      <Row className="d-flex border rounded px-2 py-3 my-2">
        <Col className="d-flex justify-content-center align-items-center">
          <Image variant="top" style={{ height: "15rem" }} src={image} fluid />
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h6>{shorten(title)}</h6>
          <h4>{`${price} $`}</h4>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <h5>
            <Badge bg="danger">{quantity}</Badge>
          </h5>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {quantity > 1 ? (
            <Button
              variant="primary"
              className="me-1"
              onClick={() =>
                dispatch({ type: "DECREASE", payload: props.data })
              }
            >
              <MdOutlineRemove />
            </Button>
          ) : (
            <Button
              variant="primary"
              className="me-1"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: props.data })
              }
            >
              <MdDelete />
            </Button>
          )}
          <Button
            variant="primary"
            className="me-1"
            onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
          >
            <MdAdd />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
