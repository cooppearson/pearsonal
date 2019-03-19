import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

// CSS files
import './css/general.css';
import './css/home.css';
import './css/cards.css';
import './css/contact.css';
import './css/about.css';
import './css/notfound.css';

// Components
import Banner from './components/Banner';
import Home from './components/Home';
import About from './components/About';
import Cards from './components/Cards';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
			<div>
				<Banner/>
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/Cards/" component={Cards} />
						<Route path="/About/" component={About} />
						<Route path="/Contact/" component={Contact} />
						<Route component={NotFound}/>
					</Switch>
				</Router>
				<Footer/>
			</div>
        );
    }
}

export default App;

// 248, 208, 231 (Pink)
