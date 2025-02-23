import { Col, Card } from "react-bootstrap";

const ProductFilters = () => {
	return (
		<Card className="package-filters text-black text-center">
			<Card.Header className="fw-bold">
				Filters <i className="bi bi-funnel-fill"></i>
			</Card.Header>

			<Card.Body className="text-black">
				<Card.Text>Price</Card.Text>
				<Card.Text>High to Low</Card.Text>
				<Card.Text>Low to High</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default ProductFilters;
