import React from 'react';
import { Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

export default class NotFound extends React.Component {
	render() {
		return(
			<DocumentTitle title="Pearsonal - 404">
				<div>
					<div className="notFoundContainer" aria-label="Page not found container">
						<div className="notFound">
							<div>
								404 page not found, my dude.
							</div>
							<Link className="navigationHome" to="/" aria-label="Link to return to home page">Back to Home</Link>
						</div>
					</div>
					<div className="ritigoContainer">
						<span className="upper ritigo ritigoLightGrey"></span>
						<span className="middle ritigo ritigoDarkGrey"></span>
						<span className="lower ritigo ritigoMediumGrey"></span>
						<span className="upperRight ritigo ritigoDarkGrey"></span>
						<span className="middleRight ritigo ritigoLightGrey"></span>
						<span className="lowerRight ritigo ritigoMediumGrey"></span>
					</div>
				</div>
			</DocumentTitle>
		)
	}
};
