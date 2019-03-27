import React from 'react';
import Navigation from './Navigation';
import { HashRouter as Router, Link } from 'react-router-dom';

import PearsonalImage from '../images/pearsonal.png'

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
							<Link to="/" aria-label="Link to home page">
								<img className="pearsonalLogo" src={PearsonalImage} alt="Pearsonal Logo" aria-label="Pearsonal Logo"/>
							</Link>
						</Router>
					</span>
					<span className="bannerSubtitle" aria-label="Banner tagline">a website for all things Pearson</span>
				</div>
				<Navigation/>
			</div>
		)
	}
};
