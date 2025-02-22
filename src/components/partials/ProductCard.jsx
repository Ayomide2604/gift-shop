import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Numeral from "react-numeral";
const ProductCard = ({ product }) => {
	return (
		<>
			<Col lg={4} sm={12} md={6} className="mb-3">
				<Card>
					<Card.Img src={product.image_url} />
					<Card.Body>
						<Card.Title>{product.title}</Card.Title>
						<Card.Text>{product.description}</Card.Text>
						<Card.Text>
							₦<Numeral value={product.price} format={"0,0"} />
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Button variant="primary">
							<Link
								to={`/products/${product.id}`}
								className="text-white"
								style={{ textDecoration: "none", color: "white" }}
							>
								View Product
							</Link>
						</Button>
					</Card.Footer>
				</Card>
			</Col>
		</>
	);
};

export default ProductCard;
