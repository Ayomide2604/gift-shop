import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Pagination from "../partials/Pagination";
const packages = [
	{
		title: "Package 1",
		price: "₦100,000",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		image:
			"https://mandilax.com/wp-content/uploads/2020/01/11991075086_856659551-1.jpg",
	},
	{
		title: "Package 2",
		price: "₦200,000",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		image:
			"https://m.media-amazon.com/images/I/71ZKWDhv-TL._AC_UF1000,1000_QL80_.jpg",
	},
	{
		title: "Package 3",
		price: "₦300,000",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		image:
			"https://kp-pharma.ams3.digitaloceanspaces.com/J2XRk6e68R5FPP1qgxJKVHAIA9v8ijypOs8mTJYR.jpg",
	},
	{
		title: "Package 4",
		price: "₦400,000",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		image: "https://i.ebayimg.com/images/g/NcUAAOSwvaVi1pCN/s-l1200.png",
	},
	{
		title: "Package 5",
		price: "₦500,000",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		image:
			"https://www.petalsfloristonline.co.uk/upload/mt/pf77/products/Interflora/lg_null-ruby-kisses-anniversary-gift-set.jpg",
	},
	{
		title: "Package 6",
		price: "₦600,000",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		image:
			"https://a-homehousing.org/wp-content/uploads/2020/01/ValentinesSugar_Free_ValSKU_8161332.jpg",
	},
];

const Packages = () => {
	return (
		<div>
			<Container fluid className="packages-container mt-3 text-center p-2">
				<Row>
					<Col lg={12} sm={12} md={12}>
						<h1>All GiftPackages</h1>
					</Col>
				</Row>
				<Row>
					<Col lg={3} sm={12} md={3} className="p-3">
						<p className="">Filters</p>
						<div
							className="accordion accordion-flush p-3"
							id="accordionFlushExample"
						>
							<div className="accordion-item">
								<h2 className="accordion-header">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#flush-collapseOne"
										aria-expanded="false"
										aria-controls="flush-collapseOne"
									>
										Category
									</button>
								</h2>
								<div
									id="flush-collapseOne"
									className="accordion-collapse collapse"
									data-bs-parent="#accordionFlushExample"
								>
									<div className="accordion-body">Placeholder</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#flush-collapseTwo"
										aria-expanded="false"
										aria-controls="flush-collapseTwo"
									>
										Price
									</button>
								</h2>
								<div
									id="flush-collapseTwo"
									className="accordion-collapse collapse"
									data-bs-parent="#accordionFlushExample"
								>
									<div className="accordion-body">Placeholder</div>
								</div>
							</div>
						</div>
					</Col>
					<Col lg={9} sm={12} md={9}>
						<p>All Gifts</p>
						<Row className=" p-5">
							{packages.map((gift) => (
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
							))}
						</Row>
						<Row>
							<Col className="col-12 d-flex justify-content-center">
								<Pagination />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Packages;
