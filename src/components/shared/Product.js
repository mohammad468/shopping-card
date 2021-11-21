import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import "./product.scss";

const Product = ({ productData }) => {
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
          <Card.Text>{productData.title}</Card.Text>
        </Card.Body>
        <Button variant="primary" className="mx-2 my-3">
          Add to card
        </Button>
      </Card>
    </Col>
  );
};

export default Product;
