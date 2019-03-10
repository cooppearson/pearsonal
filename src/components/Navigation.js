import React from 'react';
import { HashRouter as Router, Link } from "react-router-dom";

export default class Navigation extends React.Component {
    render() {
        return(
			<Router>
				<div>
					<ul className="navigationContainer">
						<li>
							<Link to="/" className="noStyling">
								<div className="navigationHome navButtons">Home</div>
							</Link>
						</li>
						<li>
							<Link to="/Cards/" className="noStyling">
								<div className="navigationCards navButtons">Cards</div>
							</Link>
						</li>
						<li>
							<Link to="/Projects/" className="noStyling">
								<div className="navigationProjects navButtons">Projects</div>
							</Link>
						</li>
						<li>
							<Link to="/About/" className="noStyling">
								<div className="navigationAbout navButtons">About</div>
							</Link>
						</li>
					</ul>
					<div className="bannerBar"></div>
				</div>
			</Router>
		)
    }
}
