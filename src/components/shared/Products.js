import React, { useContext } from "react";
import Product from "./Product";

// *react bootstrap
import { Container, Row } from "react-bootstrap";

//*context
import { ProductsContext } from "../../context/ProductContextProvider";

const Products = () => {
  const products = useContext(ProductsContext);
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Product key={product.id} productData={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
