import React from 'react';

export default class SingleCard extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return(
			<div className="cardLayout">
				<div className="cardImage">
					<img src={this.xmasCardImage.cover} alt="Cover" />
					<img src={this.xmasCardImage.inside} alt="Inside" />
				</div>
			</div>
		)
	}
};
