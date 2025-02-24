import { useEffect } from "react";
import { RiPrinterLine } from "react-icons/ri";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { RiEmotionNormalFill } from "react-icons/ri";
import { RiHourglassFill } from "react-icons/ri";
import Numeral from "react-numeral";
import { formatDistanceToNow } from "date-fns";
import useOrderStore from "../../../store/orderStore";

const OrderList = () => {
	const { orders, loading, error, fetchOrders } = useOrderStore(
		(state) => state
	);

	useEffect(() => {
		fetchOrders();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!orders) {
		return <div>No orders found</div>;
	}

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
									All Orders
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
									Ongoing
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
										<h4 className="fw-bold m-0">{orders.length} Orders</h4>
										<a href="#" className="btn btn-outline-dark rounded-3">
											<RiPrinterLine />
										</a>
									</div>
									<div className="bg-white">
										{orders.map((order) => (
											<div key={order.id} className="pb-4 border-bottom mb-4">
												<div className="row">
													<div className="col-xl-10 col-lg-9 col-md-9 col-8">
														<div className="card-body d-flex align-items-start justify-content-between">
															<div>
																<h6 className="card-title fw-bold mb-1">
																	#{order.id}
																</h6>

																<h6 className="card-text fw-bold mb-0">
																	Total Amount: ₦
																	<Numeral
																		value={order.total_price}
																		format={"0,0"}
																	/>
																</h6>
															</div>

															{formatDistanceToNow(new Date(order.created_at), {
																addSuffix: true,
															})}

															<span
																className={`badge ${
																	order.status === "pending"
																		? "bg-warning"
																		: order.status === "processing"
																		? "bg-info"
																		: order.status === "shipped"
																		? "bg-primary"
																		: order.status === "delivered"
																		? "bg-success"
																		: order.status === "cancelled"
																		? "bg-danger"
																		: "bg-secondary"
																}`}
															>
																{order.status}
															</span>
														</div>
													</div>
												</div>
											</div>
										))}
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
