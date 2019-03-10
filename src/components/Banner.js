import React from 'react';
import Navigation from './Navigation';

export default class Banner extends React.Component {
	constructor(props) {
		super(props);
		this.header = {
			siteName:'Pearsonal',
			tagLine:'A website for all things Pearson'
		}
	}

	render() {
		return(
			<div className="bannerContainer">
				<div className="bannerTitlesContainer">
					<div className="pearsonalLogo">{this.header.siteName}</div>
				</div>
				<div className="bannerSubtitle">{this.header.tagLine}</div>
				<Navigation/>
			</div>
		)
	}
};
