import React from 'react';

export default class Home extends React.Component {
    render() {
        return(
			<div>
				<div className="homeBackground">
					<div className="homeBlurbContainer">
						<div className="homeBlurb">
                        <p>Hello there!</p>
                        <p>
                        	Welcome to Pearsonal, a personal website dedicated to the Pearson family and my professional work. If you're reading this, it means you're either:
                        </p>
                        <p>
                        	a) a friend to whom I have mentioned this site and are eager to rediscover the hilarity of my family's Christmas cards,
                        	b) a prospective employer who has come to inspect my React skills and learn a little bit more about me (and who is hopefully not alarmed by my family's humor),
                        	or C) an incredibly lucky internet denizen who has incorrectly spelled 'personal' or gotten lost while searching for Pearson Education (no affiliation).
                    	</p>
                        <p>
                            I've created this site for the purpose of providing an easy way to show my family's hijinks/creations,
                            showcasing initial progress on some of my smaller side-projects, and preserving the weirdness of the internet.
                        	Check in from time to time for updates, and let me know if there's anything I can help with while you shop around. Enjoy!
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
