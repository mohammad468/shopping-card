import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const Product = ({ productData }) => {
  return (
    <Col className="my-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={productData.image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Add to card</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
