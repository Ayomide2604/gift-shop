import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getGiftPackageById } from "../../api/apiServices";

const PackageDetail = () => {
	const { id } = useParams();
	const [giftPackage, setGiftPackage] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchGift = async () => {
			try {
				const gift = await getGiftPackageById(id);
				setGiftPackage(gift);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchGift();
	}, [id]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<Container fluid className="package-detail-container mt-5">
			<Row>
				<Col lg={12} sm={12} md={12} className="text-center">
					<h1>Package Detail </h1>
				</Col>
			</Row>
			<Row>
				<Col lg={6} sm={12} md={6} xs={12} className="text-center">
					<img
						src={gift.image}
						alt={gift.title}
						className="category-detail-image p-5"
						style={{ objectFit: "cover", height: "100%", width: "100%" }}
					/>
				</Col>
				<Col lg={6} sm={12} md={6} xs={12} className="text-center">
					<h1>{gift.title}</h1>
					<p>{gift.description}</p>
					<p>{gift.price}</p>
				</Col>
			</Row>
		</Container>
	);
};

export default PackageDetail;
