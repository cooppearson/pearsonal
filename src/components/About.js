import React from 'react';
import { HashRouter as Router, Link } from "react-router-dom";

export default class About extends React.Component {

	render() {
		return(
			<div>
				<div className="homeBackground">
					<div className="blurbContainer">
						<div className="blurbText">
							<p>
								<h3>Who am I?</h3>
							</p>
							<p>
								Some guy.
							</p>
						</div>
					</div>
					<div className="blurbContainer">
						<div className="blurbText">
							<h3>
								Where did Pearsonal come from?
							</h3>
							<p>
							</p>
						</div>
					</div>
					<div className="blurbContainer">
						<div className="blurbText">
							<p>
								<h3>Links</h3>
							</p>
						</div>
					</div>
				</div>
				<div className="ritigoContainer">
					<span className="upper ritigo ritigoLightPurple"></span>
					<span className="middle ritigo ritigoDarkPurple"></span>
					<span className="lower ritigo ritigoMediumPurple"></span>
					<span className="upperRight ritigo ritigoMediumPurple"></span>
					<span className="middleRight ritigo ritigoLightPurple"></span>
					<span className="lowerRight ritigo ritigoDarkPurple"></span>
				</div>
			</div>
		)
	}
};
