import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const gift = {
	title: "Package 1",
	price: "₦100,000",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
	image:
		"https://mandilax.com/wp-content/uploads/2020/01/11991075086_856659551-1.jpg",
};

const PackageDetail = () => {
	return (
		<Container fluid className="package-detail-container mt-5">
			<Row>
				<Col lg={12} sm={12} md={12} className="text-center">
					<h1>Package Detail </h1>
				</Col>
			</Row>
			<Row>
				<Col lg={6} sm={12} md={6} xs={12} className="text-center">
					<img
						src={gift.image}
						alt={gift.title}
						className="category-detail-image p-5"
						style={{ objectFit: "cover", height: "100%", width: "100%" }}
					/>
				</Col>
				<Col lg={6} sm={12} md={6} xs={12} className="text-center">
					<h1>{gift.title}</h1>
					<p>{gift.description}</p>
					<p>{gift.price}</p>
				</Col>
			</Row>
		</Container>
	);
};

export default PackageDetail;
