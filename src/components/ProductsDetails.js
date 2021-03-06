import React, { useContext } from "react";
import { Badge, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./shared/product.scss";
import { FaArrowCircleLeft } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

// *import context
import { ProductsContext } from "../context/ProductContextProvider";

const ProductsDetails = (props) => {
  const id = props.match.params.id;
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  const { image, title, price, description, category } = product;
  return (
    <div>
      <Container>
        <div className="border rounded-3 mt-5 p-2">
          <Row>
            <Col className="d-flex align-items-center">
              <Image
                src={image}
                className="p-0"
                style={{ height: "20rem" }}
                fluid
              />
            </Col>
            <Col className="d-flex align-items-center">
              <div className="align-items-start justify-content-center details-product-texts">
                <h3>{title}</h3>
                <h3>
                  <Badge data-tip={`${parseInt(price) * 28000} تومان`}>
                    {price} $
                  </Badge>
                  <ReactTooltip />
                </h3>
                <p>{description}</p>
                <p>
                  <Badge>{category}</Badge>
                </p>
                <Link to="/products">
                  <FaArrowCircleLeft className="text-danger FaArrowCircleLeft" />
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ProductsDetails;
