import React from 'react';

export default class Contact extends React.Component {
	componentWillMount(){
	    document.body.classList.add("contactBackground");
	}

	componentWillUnmount(){
		document.body.classList.remove("contactBackground");
	}

	render() {
		return(
			<div className="blah">
			<div>
			</div>
			<div className="ritigoContainer">
				<span className="upper ritigo ritigoLightYellow"></span>
				<span className="middle ritigo ritigoDarkYellow"></span>
				<span className="lower ritigo ritigoMediumYellow"></span>
				<span className="upperRight ritigo ritigoMediumYellow"></span>
				<span className="middleRight ritigo ritigoLightYellow"></span>
				<span className="lowerRight ritigo ritigoDarkYellow"></span>
			</div>
			</div>
		)
	}
};
