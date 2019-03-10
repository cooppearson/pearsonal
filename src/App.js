import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

import './css/general.css';
import './css/home.css';
import './css/cards.css';
import './css/projects.css';
import './css/about.css';
import './css/notfound.css';

import Banner from './components/Banner';
import Home from './components/Home';
import About from './components/About';
import Cards from './components/Cards';
import Projects from './components/Projects';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
			<div>
				<Banner siteName={this.siteName}/>
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/Cards/" component={Cards} />
						<Route path="/Projects/" component={Projects} />
						<Route path="/About/" component={About} />
						<Route component={NotFound}/>
					</Switch>
				</Router>
			</div>
        );
    }
}

export default App;

// 248, 208, 231 (Pink)
// <Footer/>
