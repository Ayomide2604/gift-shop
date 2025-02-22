import { useParams } from "react-router-dom";
import useProductStore from "./../../../store/productStore";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
const ProductDetail = () => {
	const { id } = useParams();
	const { product, Loading, error, fetchProductById } = useProductStore();

	useEffect(() => {
		fetchProductById(id);
	}, [id]);

	if (Loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}
	if (!product) return <div>No product found.</div>;

	return (
		<Container fluid className="package-detail-container mt-5">
			<Row>
				<Col lg={12} sm={12} md={12} className="text-center">
					<h1>Product Detail</h1>
				</Col>
			</Row>
			<Row>
				<Col lg={6} sm={12} md={6} xs={12} className="text-center">
					<img
						src={product.image_url}
						alt={product.title}
						className="category-detail-image p-5"
						style={{ objectFit: "cover", height: "100%", width: "100%" }}
					/>
				</Col>
				<Col lg={6} sm={12} md={6} xs={12} className="text-center">
					<h1>{product.title}</h1>
					<p>{product.description}</p>
					<p>{product.price}</p>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductDetail;
