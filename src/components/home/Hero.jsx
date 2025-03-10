import { Container, Row, Col, Button, Carousel } from "react-bootstrap";

const Hero = () => {
	const slides = [
		{
			id: 1,
			title: "Amazing Gift Ideas",
			description:
				"Discover a wide range of unique and personalized gift ideas for any occasion.",
			imgSrc: "/home/hero.jpg",
		},
		{
			id: 2,
			title: "Personalized Gifts",
			description: "Create personalized gifts that are truly one-of-a-kind.",
			imgSrc: "/home/hero2.png",
		},
	];

	return (
		<Container fluid className="hero-container mb-3">
			<Carousel className="hero-carousel">
				{slides.map((slide) => (
					<Carousel.Item key={slide.id}>
						<Row
							className="hero-section d-flex justify-content-center align-items-center "
							style={{
								height: "100vh",
							}}
						>
							<Col
								lg={6}
								md={6}
								className="hero-text text-center text-md-start  "
							>
								<h2 className="m-3 ">{slide.title}</h2>
								<p className="fs-5">{slide.description}</p>
								<Button variant="primary" className="btn btn-primary btn-lg">
									Learn More
								</Button>
							</Col>
							<Col lg={6} md={6} className="hero-image">
								<img
									src={slide.imgSrc}
									alt="Hero"
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
									}}
								/>
							</Col>
						</Row>
					</Carousel.Item>
				))}
			</Carousel>
		</Container>
	);
};

export default Hero;
