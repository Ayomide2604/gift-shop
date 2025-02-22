import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

const Cart = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Shopping Cart</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table responsive="sm" bordered hover className="text-center">
            <thead className="bg-light">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {[ // Sample product list
                {
                  id: 1,
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6U1vL6XuBTGT-JOTv08oDNiT1WPDik_QPzA&s",
                  price: 200000,
                },
                {
                  id: 2,
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOMjt5hRn5oxpe-Yfm5M01euti6_nzyUC0Rw&s",
                  price: 150000,
                },
              ].map((item) => (
                <tr key={item.id}>
                  <td className="align-middle">
                    <img
                      src={item.img}
                      alt="product"
                      className="img-fluid rounded"
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                  </td>
                  <td className="align-middle">₦ {item.price.toLocaleString()}</td>
                  <td className="align-middle">
                    <div className="d-flex justify-content-center align-items-center">
                      <Button variant="outline-secondary" size="sm">-</Button>
                      <span className="mx-2">1</span>
                      <Button variant="outline-secondary" size="sm">+</Button>
                    </div>
                  </td>
                  <td className="align-middle">₦ {item.price.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="text-center">
          <Button variant="primary" size="lg">Proceed to Checkout</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
