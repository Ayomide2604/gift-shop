import React from "react";
import { RiPrinterLine } from "react-icons/ri";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { RiEmotionNormalFill } from "react-icons/ri";
import { RiHourglassFill } from "react-icons/ri";
const OrderList = () => {
	return (
		<div className="col-lg-8 ps-lg-0">
			<div className="ps-lg-5 pt-lg-5">
				<div className="d-flex align-items-center justify-content-between w-100 mb-5">
					<h1 className="m-0 fw-bold">Orders</h1>
				</div>
				<div>
					<div>
						<ul
							className="nav nav-pills align-items-center justify-content-center bg-light order-tabs mb-4 rounded-3 p-2 purple-tab nav-fill"
							id="pills-tab"
							role="tablist"
						>
							<li className="nav-item" role="presentation">
								<button
									className="nav-link py-2 px-4 active"
									id="pills-in-progress-tab"
									data-bs-toggle="pill"
									data-bs-target="#pills-in-progress"
									type="button"
									role="tab"
									aria-controls="pills-in-progress"
									aria-selected="true"
								>
									In Progress
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button
									className="nav-link py-2 px-4"
									id="pills-order-history-tab"
									data-bs-toggle="pill"
									data-bs-target="#pills-order-history"
									type="button"
									role="tab"
									aria-controls="pills-order-history"
									aria-selected="false"
									tabIndex={-1}
								>
									Order History
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button
									className="nav-link py-2 px-4"
									id="pills-failed-orders-tab"
									data-bs-toggle="pill"
									data-bs-target="#pills-failed-orders"
									type="button"
									role="tab"
									aria-controls="pills-failed-orders"
									aria-selected="false"
									tabIndex={-1}
								>
									Failed Orders
								</button>
							</li>
						</ul>
						<div className="tab-content" id="pills-tabContent">
							<div
								className="tab-pane fade active show"
								id="pills-in-progress"
								role="tabpanel"
								aria-labelledby="pills-in-progress-tab"
								tabIndex={0}
							>
								<div className="mb-4">
									<div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-4">
										<h4 className="fw-bold m-0">
											2 Orders
											<span className="text-secondary-emphasis fw-normal fs-6">
												(Order #403-3644257-9688312)
											</span>
										</h4>
										<a href="#" className="btn btn-outline-dark rounded-3">
											<RiPrinterLine />
										</a>
									</div>
									<div className="bg-white">
										<div className="pb-4 border-bottom mb-4">
											<div className="row">
												<div className="col-xl-2 col-lg-3 col-md-3 col-4">
													<img
														src="https://img.freepik.com/free-photo/gift-box-valentine_169016-3267.jpg?uid=R187989283&ga=GA1.1.683011030.1739465736&semt=ais_hybrid"
														className="img-fluid rounded-3"
														alt="deliverd-order"
													/>
												</div>
												<div className="col-xl-10 col-lg-9 col-md-9 col-8">
													<div className="card-body d-flex align-items-start justify-content-between">
														<div>
															<span className="px-3 py-2 rounded-pill bg-opacity-purple text-purple mb-3 badge">
																<span className="fw-bold">Delivery</span>
																on July 20
															</span>
															<h6 className="card-title fw-bold mb-1">
																The Organic Taper Jean
															</h6>
															<p className="card-text">
																<small className="text-body-secondary">
																	Size: XL, Colour: Blue
																</small>
															</p>
															<h5 className="card-text fw-bold mb-0">
																<del className="text-dark-emphasis fw-normal small">
																	$2,299.00
																</del>
																$1,269.00
															</h5>
														</div>
														<a
															href="#"
															className="btn btn-outline-purple btn-theme rounded-pill"
														>
															BUY IT AGAIN
														</a>
													</div>
												</div>
											</div>
										</div>
										<div className="pb-4 border-bottom mb-4">
											<div className="row">
												<div className="col-xl-2 col-lg-3 col-md-3 col-4">
													<img
														src="https://img.freepik.com/free-photo/gift-box-valentine_169016-3267.jpg?uid=R187989283&ga=GA1.1.683011030.1739465736&semt=ais_hybrid"
														className="img-fluid rounded-3"
														alt="deliverd-order"
													/>
												</div>
												<div className="col-xl-10 col-lg-9 col-md-9 col-8">
													<div className="card-body d-flex align-items-start justify-content-between">
														<div>
															<span className="px-3 py-2 rounded-pill bg-opacity-purple text-purple mb-3 badge">
																<span className="fw-bold">Delivery</span>
																on Jul 20
															</span>
															<h6 className="card-title fw-bold mb-1">
																Bomber jacket
															</h6>
															<p className="card-text">
																<small className="text-body-secondary">
																	Size: XL, Colour: Blue
																</small>
															</p>
															<h5 className="card-text fw-bold mb-0">
																$2,539.00
															</h5>
														</div>
														<a
															href="#"
															className="btn btn-outline-purple btn-theme rounded-pill"
														>
															BUY IT AGAIN
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="row g-4">
									<div className="col-lg-6 col-12">
										<div className="bg-light p-4 mb-4 rounded-4">
											<h5 className="fw-bold pb-2">Shipping Address</h5>
											<p className="text-secondary-empahsis mb-0">
												277 babcock Street Rich hall <br />
												407 02215 Surulere Lagos <br />
												Nigeria
											</p>
										</div>
										<div className="bg-light p-4 rounded-4">
											<h5 className="fw-bold pb-2">Payment details</h5>
											<p className="text-secondary-empahsis mb-1">
												Payment method: Credit/Debit card
											</p>
											<h6 className="fw-bold mb-0">XXXX-XXXX-XXXX-5098</h6>
										</div>
									</div>
									<div className="col-lg-6 col-12">
										<div className="bg-light p-4 mb-4 rounded-4">
											<h5 className="fw-bold pb-2">Loyalty Program</h5>
											<p className="text-secondary-empahsis mb-0">Member</p>
										</div>
										<div className="bg-light p-4 rounded-4">
											<h5 className="fw-bold pb-2">
												Summary
												<span className="text-secondary-emphasis fw-normal fs-6">
													(2 Items)
												</span>
											</h5>
											<div>
												<div className="d-flex align-items-center justify-content-between text-secondary-emphasis mb-1">
													<p className="mb-0">Order value</p>
													<p className="mb-0">₦2,798.00</p>
												</div>
												<div className="d-flex align-items-center justify-content-between text-secondary-emphasis mb-2">
													<p className="mb-0">Delivery</p>
													<p className="mb-0">FREE</p>
												</div>
												<div className="d-flex align-items-center justify-content-between text-secondary-emphasis mb-3">
													<p className="mb-0">Discount code</p>
													<p className="mb-0">NONE</p>
												</div>
												<div className="d-flex align-items-center justify-content-between">
													<h4 className="fw-bold mb-0">Total</h4>
													<h4 className="fw-bold mb-0">$2,878.00</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className="tab-pane fade"
								id="pills-order-history"
								role="tabpanel"
								aria-labelledby="pills-order-history-tab"
								tabIndex={0}
							>
								<h4 className="fw-bold mb-4 border-bottom pb-4">
									Order History
								</h4>
								<div>
									<div className="pb-4 border-bottom mb-4">
										<div className="row">
											<div className="col-xl-2 col-lg-3 col-md-3 col-4">
												<img
													src="https://img.freepik.com/free-photo/gift-box-valentine_169016-3267.jpg?uid=R187989283&ga=GA1.1.683011030.1739465736&semt=ais_hybrid"
													className="img-fluid rounded-3"
													alt="cart-item"
												/>
											</div>
											<div className="col-xl-10 col-lg-9 col-md-9 col-8">
												<div className="card-body d-flex align-items-start justify-content-between">
													<div>
														<span className="px-3 py-2 rounded-pill bg-opacity-purple text-purple mb-3 badge">
															IN PROGRESS
														</span>
														<h6 className="card-title fw-bold mb-1">
															Travis Scott Sweatshirts &amp; Hoodies
														</h6>
														<p className="card-text mb-1">
															<small className="text-body-secondary">
																Size: XL, Colour: Blue
															</small>
														</p>
														<h5 className="card-text fw-bold mb-0 pb-4">
															<del className="text-dark-emphasis fw-normal small">
																$2,299.00
															</del>
															$1,269.00
														</h5>
														<div>
															<h6 className="fw-bold mb-1">
																Delivery expected between Mon, Oct 05 and Thu,
																Oct 08
															</h6>
															<p className="small text-secondary-emphasis mb-0">
																Your item has been received in the hub nearest
																to you
															</p>
														</div>
													</div>
													<a
														href="#"
														className="btn btn-outline-dark rounded-3"
													>
														<RiHourglassFill />
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className="pb-4 border-bottom mb-4">
										<div className="row">
											<div className="col-xl-2 col-lg-3 col-md-3 col-4">
												<img
													src="https://img.freepik.com/free-photo/gift-box-valentine_169016-3267.jpg?uid=R187989283&ga=GA1.1.683011030.1739465736&semt=ais_hybrid"
													className="img-fluid rounded-3"
													alt="cart-item"
												/>
											</div>
											<div className="col-xl-10 col-lg-9 col-md-9 col-8">
												<div className="card-body d-flex align-items-start justify-content-between">
													<div>
														<span className="px-3 py-2 rounded-pill bg-opacity-purple text-purple mb-3 badge">
															DELIVERED
														</span>
														<h6 className="card-title fw-bold mb-1">
															Vintage Grateful Dead Lithu
														</h6>
														<p className="card-text mb-1">
															<small className="text-body-secondary">
																Size: XL, Colour: Blue
															</small>
														</p>
														<h5 className="card-text fw-bold mb-0 pb-4">
															$2,269.00
														</h5>
														<div>
															<h6 className="fw-bold mb-1">
																Delivery on Aug 25
															</h6>
															<p className="small text-secondary-emphasis mb-0">
																Your item has been delivered
															</p>
														</div>
													</div>
													<a
														href="#"
														className="btn btn-outline-dark rounded-3"
													>
														<RiCheckboxCircleFill />
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className="pb-4 mb-4">
										<div className="row">
											<div className="col-xl-2 col-lg-3 col-md-3 col-4">
												<img
													src="https://img.freepik.com/free-photo/gift-box-valentine_169016-3267.jpg?uid=R187989283&ga=GA1.1.683011030.1739465736&semt=ais_hybrid"
													className="img-fluid rounded-3"
													alt="cart-item"
												/>
											</div>
											<div className="col-xl-10 col-lg-9 col-md-9 col-8">
												<div className="card-body d-flex align-items-start justify-content-between">
													<div>
														<span className="px-3 py-2 rounded-pill bg-opacity-purple text-purple mb-3 badge">
															CANCELLED
														</span>
														<h6 className="card-title fw-bold mb-1">
															Travis Scott Sweatshirts &amp; Hoddies
														</h6>
														<p className="card-text mb-1">
															<small className="text-body-secondary">
																Size: XL, Colour: Blue
															</small>
														</p>
														<h5 className="card-text fw-bold mb-0 pb-4">
															$4,269.00
														</h5>
														<div>
															<h6 className="fw-bold mb-1">Cancelled</h6>
															<p className="small text-secondary-emphasis mb-0">
																As per your request, your item has been
																cancelled
															</p>
														</div>
													</div>
													<a
														href="#"
														className="btn btn-outline-dark rounded-3"
													>
														<RiEmotionNormalFill />
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* return request */}
							<div
								className="tab-pane fade"
								id="pills-failed-orders"
								role="tabpanel"
								aria-labelledby="pills-failed-orders-tab"
								tabIndex={0}
							>
								<h4 className="fw-bold mb-4 border-bottom pb-4">
									Failed Orders
								</h4>
								<div>
									<div className="pb-4 mb-4">
										<div className="row">
											<div className="col-xl-2 col-lg-3 col-md-3 col-4">
												<img
													src="https://img.freepik.com/free-photo/gift-box-valentine_169016-3267.jpg?uid=R187989283&ga=GA1.1.683011030.1739465736&semt=ais_hybrid"
													className="img-fluid rounded-3"
													alt="failed-order"
												/>
											</div>
											<div className="col-xl-10 col-lg-9 col-md-9 col-8">
												<div className="card-body d-flex align-items-start justify-content-between">
													<div>
														<span className="px-3 py-2 rounded-pill bg-opacity-10 text-danger bg-danger mb-3 badge">
															Failed
														</span>
														<h6 className="card-title fw-bold mb-1">
															The Navy Blue Shirt
														</h6>
														<p className="card-text">
															<small className="text-body-secondary">
																Size: XL, Colour: Blue
															</small>
														</p>
														<h5 className="card-text fw-bold mb-0">
															<del className="text-dark-emphasis fw-normal small">
																$2,299.00
															</del>
															$1,269.00
														</h5>
													</div>
													<a
														href="#"
														className="btn btn-outline-danger rounded-3"
													>
														<RiArrowGoBackFill />
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderList;
