import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
//create your first component
const Home = () => {
	return (
		<>
			<header className="sticky-top">
				<Navbar />
			</header>
			<div className="container m-2 justify-content-center">
				<div className="row">
					<Jumbotron />
				</div>
				<div className="row justify-content-center">
					<div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mb-3">
						<Card
							title={"Tarjeta 1"}
							button={"Find out more!"}
						/>
					</div>
					<div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mb-3">
						<Card
							title={"Tarjeta 2"}
							button={"Cuentame más!"}
						/>
					</div>
					<div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mb-3">
						<Card
							title={"Tarjeta 3"}
							button={"Take me out!"}
						/>
					</div>
					<div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mb-3">
						<Card
							title={"Tarjeta 4"}
							button={"Si te cuento!"}
						/>
					</div>

				</div>
			</div>
			
		</>
	);
};

export default Home;