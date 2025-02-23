import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Numeral } from "react-numeral";
const PackageCard = ({ gift }) => {
	return (
		<Col lg={4} md={6} sm={12} className="categories-card mb-3">
			<Card className="overlay-card">
				<div className="imageoverlay">
					<Card.Img
						variant="top"
						src={gift.image_url}
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
							objectPosition: "center",
						}}
						className="category-image"
					/>
					<div className="overlay-content">
						<Card.Title className="overlay-title">{gift.title}</Card.Title>
						<Card.Text className="fw-bold">
							₦<Numeral value={gift.price} format={"0,0"} />
						</Card.Text>
						<Button variant="primary" as={Link} to={`/packages/${gift.id}`}>
							Shop Now
						</Button>
					</div>
				</div>
			</Card>
		</Col>
	);
};

export default PackageCard;
