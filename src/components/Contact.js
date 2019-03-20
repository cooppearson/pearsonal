import React from 'react';
import DocumentTitle from 'react-document-title';

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
			<DocumentTitle title="Pearsonal - Contact">
				<div>
					<div className="contactCanvas">
						<div className="contactContainer">
							<div className="blurbText">
								<div className="contactSubject" aria-label="Title of contact container">
									Don't be a stranger, feel free to contact me!
								</div>
								<form action="http://formspree.io/cooppearson@gmail.com" method="POST" aria-label="Contact form">
									<input className="gotchaHoneypot" type="text" name="_gotcha" />
									<div className="contactInputContainer">
										<input className="blurbText contactInput" type="text" name="name" placeholder="Name" label="Name input"/>
										<input className="blurbText contactInput" type="text" name="email" placeholder="Email" label="Email input"/>
										<input className="blurbText contactInput" type="text" name="subject" placeholder="Subject" label="Subject line input"/>
										<textarea className="blurbText contactInput" name="message" placeholder="Message" label="Message textbox" rows="5"></textarea>
										<input className="blurbText contactInput" type="submit" value="Send Message" label="Submit message button" />
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
			</DocumentTitle>
		)
	}
};
