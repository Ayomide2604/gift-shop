import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useProductStore from "./../../../store/productStore";
import useCartStore from "../../../store/cartStore";
import Numeral from "react-numeral";

const ProductDetail = () => {
	const { product, Loading, error, fetchProductById } = useProductStore();
	const { id } = useParams();
	const { addToCart } = useCartStore();

	const handleAddToCart = () => {
		addToCart(gift.get_content_type_id, gift.id);
	};
	useEffect(() => {
		fetchProductById(id);
	}, [id, fetchProductById]);

	if (Loading) {
		return <div>Loading product details...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (!product) return <div>No product found.</div>;

	return (
		<Container fluid className="package-detail-container mt-5">
			<Row>
				<Col lg={4} sm={12} md={4} xs={12} className="px-5 mb-3">
					<Card>
						<Card.Img
							src={product.image_url}
							alt={product.name}
							className="category-detail-image "
							style={{ objectFit: "contain" }}
						/>
					</Card>
				</Col>
				<Col lg={8} sm={12} md={8} xs={12} className="">
					<div className="package-detail-content p-5">
						<h3>{product.name}</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto at
							corrupti vitae facilis vel illo ducimus, aliquid eaque soluta enim
							obcaecati praesentium nisi numquam nemo, esse provident? Sint
							accusamus voluptatum reiciendis cumque quidem harum.
						</p>
						<p>
							₦<Numeral value={product.price} format={"0,0"} />
						</p>
						<Button variant="primary" onClick={handleAddToCart}>
							Add to Cart
						</Button>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductDetail;
