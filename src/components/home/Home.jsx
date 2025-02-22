import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./home.css";
import Hero from "./Hero";
import Info from "./Info";
import Newsletter from "../partials/Newsletter";
import LatestCategories from "./LatestCategories";
import LatestPackages from "./LatestPackages";

const Home = () => {
	return (
		<Container fluid className="home-container">
			<Hero />
			<LatestCategories />
			<LatestPackages />
			<Info />
			<Newsletter />
		</Container>
	);
};
export default Home;
