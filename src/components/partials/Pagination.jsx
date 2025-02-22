import React from "react";
import { Row, Col } from "react-bootstrap";
const Pagination = () => {
	return (
		<Row>
			<Col className="col-12 d-flex justify-content-center">
				<div>
					<nav aria-label="Page navigation example">
						<ul className="pagination">
							<li className="page-item">
								<a className="page-link" href="#">
									Previous
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									1
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									2
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									3
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									Next
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</Col>
		</Row>
	);
};

export default Pagination;
