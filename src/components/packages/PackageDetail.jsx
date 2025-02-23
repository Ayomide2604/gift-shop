import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import usePackageStore from "./../../../store/packageStore";
import useCartStore from "../../../store/cartStore";

const PackageDetail = () => {
	const { gift, Loading, error, fetchPackageById } = usePackageStore();
	const { id } = useParams();
	const { addToCart } = useCartStore();

	const handleAddToCart = () => {
		addToCart(gift.get_content_type_id, gift.id);
	};
	useEffect(() => {
		fetchPackageById(id);
	}, [id, fetchPackageById]);

	if (Loading) {
		return <div>Loading package details...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (!gift) return <div>No package found.</div>;

	return (
		<Container fluid className="package-detail-container mt-5">
			<Row>
				<Col lg={12} sm={12} md={12} className="text-center">
					<h1>Package Detail</h1>
				</Col>
			</Row>
			<Row>
				<Col lg={6} sm={12} md={6} xs={12} className="text-center">
					<img
						src={gift.image_url}
						alt={gift.title}
						className="category-detail-image p-5"
						style={{ objectFit: "cover", height: "100%", width: "100%" }}
					/>
				</Col>
				<Col lg={6} sm={12} md={6} xs={12} className="text-center">
					<h1>{gift.title}</h1>
					<p>{gift.description}</p>
					<p>{gift.price}</p>
					<Button variant="primary" onClick={handleAddToCart}>
						Add to Cart
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default PackageDetail;
