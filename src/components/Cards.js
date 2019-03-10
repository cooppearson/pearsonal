import React from 'react';

export default class Cards extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
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
