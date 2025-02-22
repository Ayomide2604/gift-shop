import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./home.css";
import Hero from "./Hero";
import LatestCategories from "./LatestCategories";
import Info from "./Info";
import Newsletter from "../partials/Newsletter";
const Home = ({ categories }) => {
	return (
		<Container fluid className="home-container">
			<Hero />
			<LatestCategories categories={categories} />
			<Info />
			<Newsletter />
		</Container>
	);
};
export default Home;
