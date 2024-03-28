import React from "react"; // ??
import "./app.css";
import Navi from "./Navi";
import Product from "./Product";
import Category from "./Category";
import { Container, Row, Col } from "reactstrap";

function App() {
  let categoryInfo={title:"CategoryList"}
  let productInfo={title:"ProductList",otherting:"othertging"}
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>

        <Row>
          <Col xs="3">
            <Category info={categoryInfo}/>
          </Col>

          <Col xs="9">
            <Product info={productInfo}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
