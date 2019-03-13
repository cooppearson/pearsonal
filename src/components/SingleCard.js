import React from 'react';

export default class SingleCard extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return(
			<div className="cardLayout">
				<div>
					<img className="cardCover" src={this.props.cover} alt="Cover" />
				</div>
				<div>
					<img className="cardInside" src={this.props.inside} alt="Inside" />
				</div>
				<div className="cardTextContainer">
					<div className="cardYear">
						{this.props.cardYear}
					</div>
					<div className="cardDescription">
						{this.props.cardDescription}
					</div>
				</div>
			</div>
		)
	}
};
