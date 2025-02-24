import React from "react";

const Footer = () => {
	return (
		<div className="footer-container mt-5   mb-3">
			<footer className="">
				<div className="row p-5">
					<div className="col-3">
						<h5>Site Map</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Home
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									About Us
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Contact Us
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Packages
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Products
								</a>
							</li>
						</ul>
					</div>

					<div className="col-3">
						<h5>Frequently Asked Questions</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Terms & Conditions
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Returns & Refunds
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Shipping & Delivery
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Payment Methods
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									Customer Support
								</a>
							</li>
						</ul>
					</div>
					<div className="col-5 py-5 px-3">
						<form>
							<h5>Subscribe to our newsletter</h5>
							<p>Monthly digest of whats new and exciting from us.</p>
							<div className="d-flex w-100 gap-2">
								<label htmlFor="newsletter1" className="visually-hidden">
									Email address
								</label>
								<input
									id="newsletter1"
									type="text"
									className="form-control"
									placeholder="Email address"
								/>
								<button className="btn btn-primary" type="button">
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="d-flex justify-content-between mt-5 py-5 px-5 border-top">
					<p>© 2024 , Gift Shop. All rights reserved.</p>
					<ul className="list-unstyled d-flex">
						<li className="ms-3">
							<a className="link-dark" href="#">
								<i className="bi bi-twitter"></i>
							</a>
						</li>
						<li className="ms-3">
							<a className="link-dark" href="#">
								<i className="bi bi-instagram"></i>
							</a>
						</li>
						<li className="ms-3">
							<a className="link-dark" href="#">
								<i className="bi bi-facebook"></i>
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
