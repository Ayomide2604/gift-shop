import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router";
const PackageCard = ({ gift }) => {
	return (
		<>
			<Col lg={4} sm={12} md={6} className="mb-3">
				<Card>
					<Card.Img src={gift.image_url} />
					<Card.Body>
						<Card.Title>{gift.title}</Card.Title>
						<Card.Text>{gift.description}</Card.Text>
						<Card.Text>{gift.price}</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Button variant="primary">
							<NavLink
								to={`/packages/${gift.title}`}
								className="text-white"
								style={{ textDecoration: "none", color: "white" }}
							>
								View Package
							</NavLink>
						</Button>
					</Card.Footer>
				</Card>
			</Col>
		</>
	);
};

export default PackageCard;
