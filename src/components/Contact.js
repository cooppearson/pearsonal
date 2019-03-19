import React from 'react';

export default class Contact extends React.Component {
	// Adds and removes body styling upon component mounting/unmounting
	componentWillMount(){
	    document.body.classList.add("contactBackground");
	}

	componentWillUnmount(){
		document.body.classList.remove("contactBackground");
	}

	render() {
		return(
			<div>
				<div className="contactCanvas">
					<div className="contactContainer">
						<div className="blurbText">
							<div className="contactSubject">
								Don't be a stranger, contact me here!
							</div>
							<form action="http://formspree.io/cooppearson@gmail.com" method="POST">
								<input className="gotchaHoneypot" type="text" name="_gotcha" />
								<div className="contactInputContainer">
									<input className="blurbText contactInput" type="text" name="name" placeholder="Name" />
									<input className="blurbText contactInput" type="text" name="email" placeholder="Email" />
									<input className="blurbText contactInput" type="text" name="subject" placeholder="Subject" />
									<textarea className="blurbText contactInput" name="message" placeholder="Message" rows="8"></textarea>
									<input className="blurbText contactInput" type="submit" value="Send Message!" />
								</div>
							</form>
						</div>
					</div>
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
