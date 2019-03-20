import React from 'react';

// Import ImageZoom to replicate Medium's inline image zooming functionality
import ImageZoom from 'react-medium-image-zoom'

export default class SingleCard extends React.Component {

	render() {

		return(
			<div className="cardLayout">
				<div className="cardTextContainer">
					<span className="cardYear" aria-label="Year card was released">
						{this.props.cardYear}
					</span>
					<span className="cardDescription" aria-label="Unofficial description of card">
						{this.props.cardDescription}
					</span>
				</div>
				<div className="imageLayout">
					<span>
						<ImageZoom image={{src: this.props.cover, alt: 'Cover', className: 'cardCover'}} aria-label="Card cover image"/>
					</span>
					<span>
						<ImageZoom image={{src: this.props.inside, alt: 'Inside', className: 'cardInside'}} aria-label="Card inside image"/>
					</span>
					{this.props.additionalImage1 && (
						<div className="additionalCardImages">
							<span>
								<ImageZoom image={{src: this.props.additionalImage1, alt: 'AdditionalInside', className: 'cardInside'}} aria-label="Addition card inside image"/>
							</span>
							<span>
								<ImageZoom image={{src: this.props.additionalImage2, alt: 'AdditionalInside', className: 'cardInside'}} aria-label="Addition card inside image"/>
							</span>
							<span>
								<ImageZoom image={{src: this.props.additionalImage3, alt: 'AdditionalInside', className: 'cardInside'}} aria-label="Addition card inside image"/>
							</span>
							<span>
								<ImageZoom image={{src: this.props.additionalImage4, alt: 'AdditionalInside', className: 'cardInside'}} aria-label="Addition card inside image"/>
							</span>
							<span>
								<ImageZoom image={{src: this.props.additionalImage5, alt: 'AdditionalInside', className: 'cardInside'}} aria-label="Addition card inside image"/>
							</span>
						</div>
					)}
				</div>
			</div>
		)
	}
};
