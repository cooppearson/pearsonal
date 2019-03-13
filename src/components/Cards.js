import React from 'react';
import SingleCard from './SingleCard'

// Importing images
import Cover2001 from '../images/2001/Cover2001.jpg'
import Inside2001 from '../images/2001/Inside2001.jpg'
import Cover2007 from '../images/2007/Cover2007.jpg'
import Inside2007 from '../images/2007/Inside2007.jpg'
import Cover2008 from '../images/2008/Cover2008.jpg'
import Inside2008 from '../images/2008/Inside2008.jpg'
import Cover2009 from '../images/2009/Cover2009.jpg'
import Inside2009 from '../images/2009/Inside2009.jpg'
import Cover2010 from '../images/2010/Cover2010.jpg'
import Inside2010 from '../images/2010/Inside2010.jpg'
import Cover2011 from '../images/2011/Cover2011.jpg'
import Inside2011 from '../images/2011/Inside2011.jpg'
import Cover2013 from '../images/2013/Cover2013.jpg'
import Inside2013_6 from '../images/2013/Inside2013_6.jpg'

export default class Cards extends React.Component {
	constructor(props) {
		super(props);

			this.cardDescription2001 = '"The Beginning..."';
			this.cardDescription2007 = '"Three Wise Children"';
			this.cardDescription2008 = '"Shredding Santa"';
			this.cardDescription2009 = '"Cataloging Christmas"';
			this.cardDescription2010 = '"The Sound of Pearson"';
			this.cardDescription2011 = '"Hurricane Sandy is Coming to Town"';
			this.cardDescription2013 = '"Christmas Fitness"';

	}

	render() {
		return(
			<div>
				<div className="cardsSummary">
					The Vault of Pearson Family Christmas Cards
				</div>
				<div className="cardsContainer">
					<SingleCard cover={Cover2001} inside={Inside2001} cardYear={"2001"} cardDescription={this.cardDescription2001}/>
					<SingleCard cover={Cover2007} inside={Inside2007} cardYear={"2007"} cardDescription={this.cardDescription2007}/>
					<SingleCard cover={Cover2008} inside={Inside2008} cardYear={"2008"} cardDescription={this.cardDescription2008}/>
					<SingleCard cover={Cover2009} inside={Inside2009} cardYear={"2009"} cardDescription={this.cardDescription2009}/>
					<SingleCard cover={Cover2010} inside={Inside2010} cardYear={"2010"} cardDescription={this.cardDescription2010}/>
					<SingleCard cover={Cover2011} inside={Inside2011} cardYear={"2011"} cardDescription={this.cardDescription2011}/>
					<SingleCard cover={Cover2013} inside={Inside2013_6} cardYear={"2013"} cardDescription={this.cardDescription2013}/>
				</div>
				<div className="ritigoContainer">
					<span className="upper ritigo ritigoLightRed"></span>
					<span className="middle ritigo ritigoDarkGreen"></span>
					<span className="lower ritigo ritigoLightRed"></span>
					<span className="upperRight ritigo ritigoMediumGreen"></span>
					<span className="middleRight ritigo ritigoLightRed"></span>
					<span className="lowerRight ritigo ritigoDarkGreen"></span>
				</div>
			</div>
		)
	}
};
