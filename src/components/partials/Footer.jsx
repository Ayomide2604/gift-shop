import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-top bg-black text-white">
				<Container className="pt-5 mt-5 ">
					<Row className="g-md-5 g-4 pt-5">
						<Col lg={3}>
							<div className="">
								<h6 className="fw-bold pb-2">Contact Info</h6>
								<p className="text-secondary-emphasis">
									Lorem ipsum dolor sit amet, ea has ignota putent. Ridens
									aliquid indoctum an est, his ad movet graece.
								</p>
							</div>
						</Col>

						<Col lg={3}>
							<div className="">
								<h6 className="fw-bold pb-2">About Us</h6>
								<ul className="list-unstyled d-grid gap-2">
									<li>
										<a href="#" className="link-secondary">
											About Organization
										</a>
									</li>
									<li>
										<a href="#" className="link-secondary">
											Our Clients
										</a>
									</li>
									<li>
										<a href="#" className="link-secondary">
											Our Partners
										</a>
									</li>
								</ul>
							</div>
						</Col>

						{/* Quick Links */}
						<Col lg={3}>
							<div className="">
								<h6 className="fw-bold pb-2">Quick links</h6>
								<ul className="list-unstyled d-grid gap-2">
									<li>
										<a href="#" className="link-secondary">
											Simple Product
										</a>
									</li>
									<li>
										<a href="#" className="link-secondary">
											Variable Product
										</a>
									</li>
									<li>
										<a href="#" className="link-secondary">
											Grouped Product
										</a>
									</li>
								</ul>
							</div>
						</Col>

						{/* Important Links */}
						<Col lg={3}>
							<div className="">
								<h6 className="fw-bold pb-2">Important Links</h6>
								<ul className="list-unstyled d-grid gap-2">
									<li>
										<a href="#" className="link-secondary">
											Privacy Policy
										</a>
									</li>
									<li>
										<a href="#" className="link-secondary">
											Cookies Policy
										</a>
									</li>
									<li>
										<a href="#" className="link-secondary">
											Terms &amp; Conditions
										</a>
									</li>
								</ul>
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			<div className="bg-black ">
				<div className="container">
					<div className="row align-items-center justify-content-between py-4">
						<div className="col-auto">
							<div className="d-flex align-items-center gap-5 footer-links">
								<a href="../index.html" className="link-secondary">
									HOME
								</a>
								<a href="#" className="link-secondary">
									ABOUT
								</a>
								<a href="#" className="link-secondary">
									CONTACT
								</a>
							</div>
						</div>
						<div className="col-auto d-flex gap-5">
							<p className="text-center m-0 text-white-50">
								Copyright ©{" "}
								<a href="#" className="text-white">
									Website Name
								</a>{" "}
								2025
							</p>
							<div className="d-flex align-items-center gap-4">
								<a href="#" className="link-secondary">
									<i className="ri-facebook-circle-fill ri-lg" />
								</a>
								<a href="#" className="link-secondary">
									<i className="ri-twitter-fill ri-lg" />
								</a>
								<a href="#" className="link-secondary">
									<i className="ri-instagram-fill ri-lg" />
								</a>
								<a href="#" className="link-secondary">
									<i className="ri-dribbble-line ri-lg" />
								</a>
								<a href="#" className="link-secondary">
									<i className="ri-slack-fill ri-lg" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
