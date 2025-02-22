import React from "react";
import { Col, Row, Card } from "react-bootstrap";
const PackageCard = ({ gift }) => {
	return (
		<>
			<Col lg={4} sm={12} md={6} className="mb-3">
				<Card>
					<Card.Img src={gift.image} />
					<Card.Body>
						<Card.Title>{gift.title}</Card.Title>
						<Card.Text>{gift.description}</Card.Text>
						<Card.Text>{gift.price}</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
};

export default PackageCard;
