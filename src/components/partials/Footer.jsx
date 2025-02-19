import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
const Footer = () => {
	return (
		<>
			<Container fluid className="footer-container">
				<nav>
					<Row>
						<Col
							lg={4}
							className=" p-5"
							style={{ borderRight: "1px solid #6c757d" }}
						>
							<h5>Contact Us</h5>
							<Col lg={12} className="gap-4 d-grid justify-content-between ">
								<Col>
									<i class="bi bi-geo-alt"></i>

									<span>Address 234, Lagos, Nigeria</span>
								</Col>
								<Col>
									<i class="bi bi-telephone"></i>

									<span>(123) 456-7890</span>
								</Col>
								<Col>
									<i class="bi bi-envelope"></i>

									<span>email@gmail.com</span>
								</Col>
							</Col>
						</Col>
						<Col
							lg={4}
							className=" p-5"
							style={{ borderRight: "1px solid #6c757d" }}
						>
							<h5>Gift Shop</h5>
							<p>Home</p>
							<p>About</p>
							<p>Packages</p>
							<p>Contact</p>
							<p>Login</p>
						</Col>
						<Col lg={4} className=" p-5">
							<h5>Useful Links</h5>
							<p>Cookies Policy</p>
							<p>Privacy Policy</p>
							<p>Terms & Conditions</p>
						</Col>

						<Col
							lg={12}
							className="d-flex justify-content-between align-items-center   p-5"
							style={{ borderTop: "1px solid #6c757d" }}
						>
							<Col lg={8}>
								<div className="d-flex gap-2 justify-content-left">
									<p>
										Copyright &copy; <strong>GiftShop</strong>. All Rights
										Reserved
									</p>
								</div>
							</Col>
							<Col lg={4}>
								<div className="d-flex gap-2 justify-content-end">
									<i class="bi bi-instagram p-3"></i>
									<i class="bi bi-facebook p-3"></i>
									<i class="bi bi-twitter p-3"></i>
									<i class="bi bi-youtube p-3"></i>
								</div>
							</Col>
						</Col>
					</Row>
				</nav>
			</Container>
		</>
	);
};

export default Footer;
