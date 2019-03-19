import React from 'react';
import Navigation from './Navigation';
import { HashRouter as Router, Link } from 'react-router-dom';

export default class Banner extends React.Component {
	constructor(props) {
		super(props);

		this.siteName = 'Pearsonal';
	}

	render() {
		return(
			<div className="bannerContainer">
				<div className="bannerTitlesContainer">
					<span>
						<Router>
							<Link to="/">
								<div className="pearsonalLogo">{this.siteName}</div>
							</Link>
						</Router>
					</span>
					<span className="bannerSubtitle">a website for all things Pearson</span>
				</div>
				<Navigation/>
			</div>
		)
	}
};
