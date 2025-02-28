import { Container, Spinner } from "react-bootstrap";
import "./home.css";
import Hero from "./Hero";
import Info from "./Info";
import Newsletter from "../partials/Newsletter";
import LatestCategories from "./LatestCategories";
import LatestPackages from "./LatestPackages";
import useCategoryStore from "./../../../store/categoryStore";
import usePackageStore from "./../../../store/packageStore";
import { useEffect, useState } from "react";

const Home = () => {
	const {
		categories,
		Loading: categoriesLoading,
		error: categoriesError,
		fetchCategories,
	} = useCategoryStore();
	const {
		packages,
		Loading: packagesLoading,
		error: packagesError,
		fetchPackages,
	} = usePackageStore();

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchCategories();
		fetchPackages();
	}, []);

	useEffect(() => {
		if (!categoriesLoading && !packagesLoading) {
			setTimeout(() => {
				setIsLoading(false);
			}, 5000);
		}
	}, [categoriesLoading, packagesLoading]);

	if (isLoading) {
		return (
			<Container
				className="d-flex justify-content-center align-items-center"
				style={{ height: "100vh" }}
			>
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</Container>
		);
	}

	return (
		<Container fluid className="home-container">
			<Hero />
			<LatestCategories categories={categories} error={categoriesError} />
			<LatestPackages packages={packages} error={packagesError} />
			<Info />
			<Newsletter />
		</Container>
	);
};

export default Home;
