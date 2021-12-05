import React, { useContext } from "react";
import { Card, Button, Col } from "react-bootstrap";
import "./product.scss";
import { shorten, isInCart, quantityCount } from "../helpers/functions";
import { Link } from "react-router-dom";
// *icons
import { MdAdd, MdOutlineRemove, MdDelete } from "react-icons/md";

// *context
import { CartContext } from "../../context/CartContextProvider";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <Col className="my-3 d-flex justify-content-around">
      <Card className="my-cards" style={{ width: "18rem", height: "30rem" }}>
        <Card.Img
          variant="top"
          style={{ height: "15rem" }}
          src={productData.image}
          fluid
        />
        <Card.Body>
          <Card.Title>{`${productData.price} $`}</Card.Title>
          <Card.Text>
            <Link
              to={`/products/${productData.id}`}
              className="card-text-link text-decoration-none"
            >
              {shorten(productData.title)}
            </Link>
          </Card.Text>
        </Card.Body>

        {/* <Button className="mx-2 my-3">Add to card</Button> */}
        {isInCart(state, productData.id) ? (
          <div className="d-flex justify-content-center">
            <Button
              className="mx-2 my-3 button-added-one-to-card"
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              <MdAdd />
            </Button>
            {quantityCount(state, productData.id) === 1 && (
              <Button
                className="mx-2 my-3 button-added-one-to-card"
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: productData })
                }
              >
                <MdDelete />
              </Button>
            )}
            {quantityCount(state, productData.id) > 1 && (
              <Button
                className="mx-2 my-3 button-added-one-to-card"
                onClick={() =>
                  dispatch({ type: "DECREASE", payload: productData })
                }
              >
                <MdOutlineRemove />
              </Button>
            )}
          </div>
        ) : (
          <Button
            className="mx-2 my-3 button-add-to-card"
            onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
          >
            Add to card
          </Button>
        )}
      </Card>
    </Col>
  );
};

export default Product;
