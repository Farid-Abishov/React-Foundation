import React from "react"; // ??
import "./app.css";
import Navi from "./Navi";
import Product from "./Product";
import Category from "./Category";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>

        <Row>
          <Col xs="3">
            <Category />
          </Col>

          <Col xs="9">
            <Product />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
