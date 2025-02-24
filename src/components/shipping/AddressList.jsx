import React from "react";
import { RiEditBoxFill } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const AddressList = () => {
	return (
		<div className="col-lg-8 ps-lg-0 pb-5">
			<div className="ps-lg-5 pt-lg-5">
				<div className="d-flex align-items-center justify-content-between w-100 mb-5">
					<h1 className="m-0 fw-bold">Addresses</h1>
				</div>
				<div>
					<div>
						<div className="d-flex align-items-start justify-content-between border rounded-4 border-secondary-emphasis p-4 mb-4">
							<div>
								<span className="px-3 py-2 rounded-pill bg-opacity-purple text-purple mb-2 badge">
									DEFAULT
								</span>
								<h6 className="fw-bold mb-1 mt-2">Work</h6>
								<p className="text-secondary-emphasis mb-2">
									Apart 4 New York, NY 10001 US
								</p>
								<p className="fw-bold mb-0">+91 12345-67890</p>
							</div>
							<div className="d-flex align-items-cneter gap-2">
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#addaddress"
									className="btn btn-outline-secondary rounded-3"
								>
									<RiEditBoxFill />
								</a>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#delete"
									className="btn btn-outline-danger rounded-3"
								>
									<RiDeleteBin5Fill />
								</a>
							</div>
						</div>
						<div className="d-flex align-items-start justify-content-between border rounded-4 border-secondary-emphasis p-4 mb-4">
							<div>
								<span className="px-3 py-2 rounded-pill bg-opacity-purple text-purple mb-2 badge">
									HOME
								</span>
								<h6 className="fw-bold mb-1 mt-2">Office</h6>
								<p className="text-secondary-emphasis mb-2">
									Apart 4 New York, NY 10001 US
								</p>
								<p className="fw-bold mb-0">+91 12345-67890</p>
							</div>
							<div className="d-flex align-items-cneter gap-2">
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#addaddress"
									className="btn btn-outline-secondary rounded-3"
								>
									<RiEditBoxFill />
								</a>
								<a
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#delete"
									className="btn btn-outline-danger rounded-3"
								>
									<RiDeleteBin5Fill />
								</a>
							</div>
						</div>
						<Button
							as={Link}
							to="#"
							className="btn btn-purple btn-theme w-100 rounded-3"
							data-bs-toggle="modal"
							data-bs-target="#addaddress"
						>
							<RiAddFill />
							ADD A NEW ADDRESS
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddressList;
