import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CategoryList from "../partials/CategoryList";
import { NavLink } from "react-router";

const categories = [
	{
		title: "For Him",
		description:
			"Find the perfect gift for him with our wide range of products.",
		image:
			"https://mandilax.com/wp-content/uploads/2020/01/11991075086_856659551-1.jpg",
	},
	{
		title: "For Her",
		description:
			"Discover a wide range of products for her, from jewelry to beauty products.",
		image:
			"https://m.media-amazon.com/images/I/71ZKWDhv-TL._AC_UF1000,1000_QL80_.jpg",
	},
	{
		title: "For Kids",
		description:
			"Discover a wide range of products for kids, from toys to books.",
		image:
			"https://kp-pharma.ams3.digitaloceanspaces.com/J2XRk6e68R5FPP1qgxJKVHAIA9v8ijypOs8mTJYR.jpg",
	},
	{
		title: "Birthday",
		description:
			"Discover a wide range of products for birthday, from cakes to flowers.",
		image: "https://i.ebayimg.com/images/g/NcUAAOSwvaVi1pCN/s-l1200.png",
	},
	{
		title: "Anniversary",
		description:
			"Discover a wide range of products for anniversary, from flowers to chocolates.",
		image:
			"https://www.petalsfloristonline.co.uk/upload/mt/pf77/products/Interflora/lg_null-ruby-kisses-anniversary-gift-set.jpg",
	},
	{
		title: "Valentine's Day",
		description:
			"Discover a wide range of products for Valentine's Day, from flowers to chocolates.",
		image:
			"https://a-homehousing.org/wp-content/uploads/2020/01/ValentinesSugar_Free_ValSKU_8161332.jpg",
	},
];

const LatestCategories = () => {
	return (
		<Container fluid className="categories-container text-center mb-3 p-5">
			<Row>
				<Col>
					<h2 className="display-2 mb-5">Shop by Categories</h2>
				</Col>
			</Row>
			<CategoryList categories={categories} />
			<Row>
				<Col>
					<Button
						as={NavLink}
						to="/categories"
						variant="primary"
						className="btn-lg"
					>
						View All Categories
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default LatestCategories;
