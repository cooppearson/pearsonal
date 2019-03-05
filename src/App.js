import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './css/general.css';

import Banner from './components/Banner';
import Home from './components/Home';

class App extends Component {
    render() {
        return (
            <Banner siteName={this.siteName}/>
        );
    }
}

export default App;
