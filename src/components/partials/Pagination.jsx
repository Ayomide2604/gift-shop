import React from "react";
import { Row, Col } from "react-bootstrap";
import useProductStore from "../../../store/productStore";

const Pagination = () => {
	const { totalProducts, currentPage, fetchProducts, nextPage, previousPage } =
		useProductStore();

	const pageSize = 2;
	const totalPages = Math.ceil(totalProducts / pageSize);

	const handlePageChange = (page) => {
		if (page > 0 && page <= totalPages) {
			fetchProducts(page);
		}
	};

	return (
		<Row>
			<Col className="col-12 d-flex justify-content-center">
				<nav aria-label="Page navigation">
					<ul className="pagination">
						<li className={`page-item ${!previousPage ? "disabled" : ""}`}>
							<button
								className="page-link"
								onClick={() => handlePageChange(currentPage - 1)}
							>
								Previous
							</button>
						</li>

						{[...Array(totalPages)].map((_, index) => {
							const page = index + 1;
							return (
								<li
									key={page}
									className={`page-item ${
										currentPage === page ? "active" : ""
									}`}
								>
									<button
										className="page-link"
										onClick={() => handlePageChange(page)}
									>
										{page}
									</button>
								</li>
							);
						})}

						<li className={`page-item ${!nextPage ? "disabled" : ""}`}>
							<button
								className="page-link"
								onClick={() => handlePageChange(currentPage + 1)}
							>
								Next
							</button>
						</li>
					</ul>
				</nav>
			</Col>
		</Row>
	);
};

export default Pagination;
