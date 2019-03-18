import React from 'react';
import { HashRouter as Router, Link } from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return(
			<div>
				<div className="homeBackground">
					<div className="blurbContainer">
						<div className="blurbText">
							<p>
								<h3>Hello and welcome to Pearsonal,</h3> a personal website dedicated to the Pearson family and my professional work!
							</p>
						</div>
					</div>
					<div className="blurbContainer">
						<div className="blurbText">
							<h3>
								If you're reading this, it means you're either:
							</h3>
							<p>
								a) a friend to whom I have mentioned this site and are eager to rediscover the hilarity of my family's <Link to="/Cards/" className="linkUnderlineGreen">Christmas cards</Link>,
							</p>
							<p>
								b) a prospective employer who has come to see if my development skills are <Link to="/About/" className="linkUnderlinePurple">up to snuff</Link> (and
								who is hopefully not alarmed by my family's humor),
							</p>
							<p>
								c) an improbably lucky internet denizen who has incorrectly spelled 'personal' or gotten hopelessly lost while searching for Pearson Education (no affiliation).
							</p>
						</div>
					</div>
					<div className="blurbContainer">
						<div className="blurbText">
							<p>
								<h3>I've created this site</h3> for the purpose of providing an easy way to show my family's hijinks/creations,
								showcasing initial progress on some of my smaller side-projects, and to add some <i>pearsonality</i> to the internet.
								Check in every so often for updates, and <Link to="/Contact/" className="linkUnderlineYellow">let me know</Link> if
								there's anything I can help with while you shop around.
							</p>
							<p>
								Enjoy!
							</p>
							<p>
								- Coop
							</p>
						</div>
					</div>
				</div>
                <div className="ritigoContainer">
                    <span className="upper ritigo ritigoLightBlue"></span>
                    <span className="middle ritigo ritigoDarkBlue"></span>
                    <span className="lower ritigo ritigoMediumBlue"></span>
                    <span className="upperRight ritigo ritigoMediumBlue"></span>
                    <span className="middleRight ritigo ritigoLightBlue"></span>
                    <span className="lowerRight ritigo ritigoDarkBlue"></span>
                </div>
			</div>
		)
    }
}
