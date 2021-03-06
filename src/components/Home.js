import React from 'react';
import { Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import PearsonalImage from '../images/pearsonal.png'

export default class Home extends React.Component {
	// Adds and removes body styling upon component mounting/unmounting
	componentWillMount(){
		document.body.classList.add("homeBackground");
	}

	componentWillUnmount(){
		document.body.classList.remove("homeBackground");
	}

    render() {
        return(
			<DocumentTitle title="Pearsonal - Home">
			<div>
				<div className="homeCanvas">
					<div>
						<img className="homePearsonalLogo" src={PearsonalImage} alt="Pearsonal Logo" aria-label="Pearsonal Logo"/>
					</div>
					<div className="blurbContainer">
						<div className="blurbText">
							<p>
								Hello and welcome to Pearsonal, a personal website dedicated to the Pearson family and my professional work!
							</p>
						</div>
					</div>
					<div className="blurbContainer">
						<div className="blurbText">
							<p>
								If you're reading this, it means you're either:
							</p>
							<p>
								a) a friend to whom I have mentioned this site and are eager to rediscover the hilarity of my
								family's <Link to="/Cards/" className="linkUnderlineGreen" aria-label="Link to cards page">Christmas cards</Link>,
							</p>
							<p>
								b) a prospective employer who has come to see if my development skills
								are <Link to="/About/" className="linkUnderlinePurple" aria-label="Link to about page">up to par</Link> (and
								who is hopefully not alarmed by my family's humor),
							</p>
							<p>
								c) an improbably lucky internet denizen who has incorrectly spelled 'personal'
								or gotten hopelessly lost while searching for Pearson Education (no affiliation).
							</p>
						</div>
					</div>
					<div className="blurbContainer">
						<div className="blurbText">
							<p>
								I've created this site for the purpose of providing an easy way to show my family's hijinks/creations,
								showcasing initial progress on some of my smaller side-projects, and to add some <i>pearsonality</i> to the internet.
								Check in every so often for updates,
								and <Link to="/Contact/" className="linkUnderlineYellow" aria-label="Link to contact page">let me know</Link> if
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
			</DocumentTitle>
		)
    }
}
