import React from 'react';

export default class Foot extends React.Component {
	constructor(props) {
		super(props);
		this.header = {
			siteName:'Pearsonal',
			tagLine:'A website for all things Pearson'
		}
	}

	render() {
		return(
			<div className="footerContainer">
				<hr></hr>
				<div className="footerText">
					Pearsonal. Created by Cooper Pearson, 2019.
				</div>
			</div>
		)
	}
};
