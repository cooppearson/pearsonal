import React from 'react';
import ImageZoom from 'react-medium-image-zoom'

export default class SingleCard extends React.Component {

	render() {
		return(
			<div className="cardLayout">
				<div className="cardTextContainer">
					<div className="cardYear">
						{this.props.cardYear}
					</div>
					<span className="cardDescription">
						{this.props.cardDescription}
					</span>
				</div>
				<div>
					<ImageZoom image={{src: this.props.cover, alt: 'Cover', className: 'cardCover'}}/>
				</div>
				<div>
					<ImageZoom image={{src: this.props.inside, alt: 'Inside', className: 'cardInside'}}/>
				</div>
			</div>
		)
	}
};
