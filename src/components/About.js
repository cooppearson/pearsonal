import React from 'react';
import { HashRouter as Router, Link } from "react-router-dom";

export default class About extends React.Component {
	componentWillMount(){
	    document.body.classList.add("aboutBackground");
	}

	componentWillUnmount(){
		document.body.classList.remove("aboutBackground");
	}

	render() {
		return(
			<div>
				<div className="homeCanvas">
					<div className="blurbContainer">
						<div className="blurbText">
							<span className="subject">
								Who Am I?
							</span>
							<p>
								A developer/software engineer living in Boston.
							</p>
						</div>
					</div>

					<div className="blurbContainer">
						<div className="blurbText">
							<p className="subject">
								Links
							</p>
						</div>
						<p>
						</p>
						<ul className="aboutLinks">
							<li>
								<Link to="/" className="noStyling">
									<div className="aboutButtons">Github</div>
								</Link>
							</li>
							<li>
								<Link to="/Cards/" className="noStyling">
									<div className="aboutButtons">Linkedin</div>
								</Link>
							</li>
							<li>
								<Link to="/About/" className="noStyling">
									<div className="aboutButtons">Resume</div>
								</Link>
							</li>
						</ul>
					</div>

					<div className="blurbContainer">
						<div className="blurbText">
							<p className="subject">
								Where did Pearsonal come from?
							</p>
							<p>
								When I was much younger, my dad bought a Power Mac G3 to use for work. As a creative in advertising,
								naturally his work involved using Photoshop and Illustrator to make taglines, design aesthetic logos,
								and write hilarious advertisements that would capture the peoples' attention. As a 6 year old, I put
								quarters and chewing gum in the disk drive of the Mac to capture <i>his</i> attention. Along the way
								he'd come up with these genius ideas for products (probably while laboriously cleaning gum out of the
								disk drive), some of which would end up making the final cut, while others would end up on the cutting room floor.
							</p>
							<p>
								Those unique taglines and ideas that stuck in his mind and that he personally wanted to work on as
								side-projects were immortalized by being placed into the "Pearson Personals" folder to be expanded
								upon later. Constantly toiling to imbue his own life with some witty Pearson branding, my dad spontaneously
								amalgamated "Pearson Personals" into "Pearsonal" and the rest is history.
							</p>
							<p>
								Decades later this folder still exists at the top level of his (gum-less!) Mac's desktop and it is absolutely
								brimming with funny, outlandish, and brilliant ideas. Some of these are fully realized and
								critically-acclaimed (e.g., our Christmas cards), and others half-baked but for which the dough still rises.
								I made this website in honor of that folder and all the little bits of Pearson that went into it.
							</p>
						</div>
					</div>
				</div>
				<div className="ritigoContainer">
					<span className="upper ritigo ritigoLightPurple"></span>
					<span className="middle ritigo ritigoDarkPurple"></span>
					<span className="lower ritigo ritigoMediumPurple"></span>
					<span className="upperRight ritigo ritigoMediumPurple"></span>
					<span className="middleRight ritigo ritigoLightPurple"></span>
					<span className="lowerRight ritigo ritigoDarkPurple"></span>
				</div>
			</div>
		)
	}
};
