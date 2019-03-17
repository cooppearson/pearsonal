import React from 'react';
import Navigation from './Navigation';
import { HashRouter as Router, Link } from "react-router-dom";

export default class Banner extends React.Component {
	constructor(props) {
		super(props);

		this.siteName = 'Pearsonal';
	}

	render() {
		return(

			<div className="bannerContainer">
				<span className="bannerTitlesContainer">
					<Router>
						<Link to="/">
							<div className="pearsonalLogo">{this.siteName}</div>
						</Link>
					</Router>
					<div className="bannerSubtitle">a website for all things Pearson</div>
				</span>
				<Navigation/>
			</div>
		)
	}
};
