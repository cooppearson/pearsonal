import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export default class Navigation extends React.Component {
    render() {
        return(
			<Router>
				<span>
					<ul className="navigationContainer" aria-label="Navigation buttons container">
						<li>
							<Link to="/" className="noStyling" aria-label="Link to home page">
								<div className="navigationHome navButtons">Home</div>
							</Link>
						</li>
						<li>
							<Link to="/Cards/" className="noStyling" aria-label="Link to cards page">
								<div className="navigationCards navButtons">Cards</div>
							</Link>
						</li>
						<li>
							<Link to="/About/" className="noStyling" aria-label="Link to about page">
								<div className="navigationAbout navButtons">About</div>
							</Link>
						</li>
						<li>
							<Link to="/Contact/" className="noStyling" aria-label="Link to contact page">
								<div className="navigationContact navButtons">Contact</div>
							</Link>
						</li>
					</ul>
					<div className="bannerBar"></div>
				</span>
			</Router>
		)
    }
}
