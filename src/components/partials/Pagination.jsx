import React from "react";
import { Row, Col } from "react-bootstrap";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
	if (totalPages <= 1) return null;

	return (
		<Row>
			<Col className="col-12 d-flex justify-content-center">
				<nav aria-label="Page navigation">
					<ul className="pagination">
						<li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
							<button
								className="page-link"
								onClick={() => onPageChange(currentPage - 1)}
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
										onClick={() => onPageChange(page)}
									>
										{page}
									</button>
								</li>
							);
						})}

						<li
							className={`page-item ${
								currentPage === totalPages ? "disabled" : ""
							}`}
						>
							<button
								className="page-link"
								onClick={() => onPageChange(currentPage + 1)}
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
