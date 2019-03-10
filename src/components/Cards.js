import React from 'react';
import SingleCard from './SingleCard'

import Cover2001 from '../images/2001/Cover2001.jpg'
import Inside2001 from '../images/2001/Inside2001.jpg'

export default class Cards extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<div className="cardsContainer">
					<SingleCard cover={Cover2001} inside={Inside2001}/>
				</div>
				<div className="ritigoContainer">
					<span className="upper ritigo ritigoLightRed"></span>
					<span className="middle ritigo ritigoDarkGreen"></span>
					<span className="lower ritigo ritigoMediumGreen"></span>
					<span className="upperRight ritigo ritigoMediumGreen"></span>
					<span className="middleRight ritigo ritigoLightRed"></span>
					<span className="lowerRight ritigo ritigoDarkGreen"></span>
				</div>
			</div>
		)
	}
};
