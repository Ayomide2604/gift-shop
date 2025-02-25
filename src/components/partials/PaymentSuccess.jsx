import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import useOrderStore from "../../../store/orderStore";
const PaymentSuccess = () => {
	const [searchParams] = useSearchParams();
	const reference = searchParams.get("reference");
	const navigate = useNavigate();
	const verifyPayment = useOrderStore((state) => state.verifyPayment);

	useEffect(() => {
		const verifyAndRedirect = async () => {
			if (reference) {
				const orderId = await verifyPayment(reference); // Get order ID after verification
				if (orderId) {
					setTimeout(() => {
						navigate(`/dashboard/orders/${orderId}`); // Redirect to order detail page
					}, 5000);
				} else {
					setTimeout(() => {
						navigate("/dashboard/orders"); // Fallback to orders list if something goes wrong
					}, 5000);
				}
			}
		};

		verifyAndRedirect();
	}, [reference, navigate, verifyPayment]);

	return (
		<div class="content">
			<div class="wrapper-1">
				<div class="wrapper-2">
					<h1>Thank you !</h1>
					<h4>Awesome! Your payment is successful.</h4>
					<p>
						Thank you for your purchase. Your order will be processed shortly.
					</p>

					<button class="go-home btn btn-primary">
						<i class="bi bi-check-circle"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default PaymentSuccess;
