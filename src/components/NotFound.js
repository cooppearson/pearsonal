import React from 'react';
import { Link } from "react-router-dom";

export default class NotFound extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<div className="ritigoContainer">
					<span className="upper ritigo ritigoLightGrey"></span>
					<span className="middle ritigo ritigoDarkGrey"></span>
					<span className="lower ritigo ritigoMediumGrey"></span>
					<span className="upperRight ritigo ritigoDarkGrey"></span>
					<span className="middleRight ritigo ritigoLightGrey"></span>
					<span className="lowerRight ritigo ritigoMediumGrey"></span>
				</div>
				<div className="notFound">
					<div>
						404 page not found, my dude.
					</div>
					<Link className="navigationHome" to="/">Back to Home</Link>
				</div>
			</div>
		)
	}
};
