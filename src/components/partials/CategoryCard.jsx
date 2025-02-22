import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const CategoryCard = ({ category }) => {
	return (
		<Col lg={4} md={6} sm={12} className="categories-card mb-3">
			<Card className="overlay-card">
				<div className="imageoverlay">
					<Card.Img
						variant="top"
						src={category.image_url}
						className="category-image"
					/>
					<div className="overlay-content">
						<Card.Title className="overlay-title">{category.name}</Card.Title>
						<Card.Text>{category.description}</Card.Text>
						<Button
							variant="primary"
							as={Link}
							to={`/categories/${category.id}`}
						>
							Shop Now
						</Button>
					</div>
				</div>
			</Card>
		</Col>
	);
};

export default CategoryCard;
