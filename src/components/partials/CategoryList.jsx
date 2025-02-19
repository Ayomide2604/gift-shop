import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
const CategoryList = ({ categories }) => {
	return (
		<>
			<Row className="justify-content-center mb-5">
				{categories.map((category, index) => (
					<Col
						key={index}
						lg={4}
						md={6}
						sm={12}
						className="categories-card mb-3"
					>
						<Card className="overlay-card">
							<div className="imageoverlay">
								<Card.Img
									variant="top"
									src={category.image}
									className="category-image"
								/>
								<div className="overlay-content">
									<Card.Title className="overlay-title">
										{category.title}
									</Card.Title>
									<Card.Text>{category.description}</Card.Text>
									<Button variant="primary">Shop Now</Button>
								</div>
							</div>
						</Card>
					</Col>
				))}
			</Row>
		</>
	);
};

export default CategoryList;
