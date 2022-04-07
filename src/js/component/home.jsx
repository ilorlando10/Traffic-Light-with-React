import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	return (
		<div>
			<div className="header"></div>
			<div className="main-container">
				<div
					className={color == "red" ? "light redglow" : "light red"}
					onClick={() => {
						setColor("red");
					}}></div>
				<div
					className={
						color == "yellow" ? "light yellowglow" : "light yellow"
					}
					onClick={() => {
						setColor("yellow");
					}}></div>
				<div
					className={
						color == "green" ? "light greenglow" : "light green"
					}
					onClick={() => {
						setColor("green");
					}}></div>
			</div>
		</div>
	);
};

export default Home;
