import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./home.css";
import Hero from "./Hero";
import Info from "./Info";
import Newsletter from "../partials/Newsletter";
import LatestCategories from "./LatestCategories";
import LatestPackages from "./LatestPackages";
const Home = ({ categories, packages }) => {
	return (
		<Container fluid className="home-container">
			<Hero />
			<LatestCategories categories={categories} />
			<LatestPackages packages={packages} />
			{/* Info Section */}
			<Info />
			{/* Newsletter Section */}
			<Newsletter />
		</Container>
	);
};
export default Home;
