import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Components
import Banner from './Banner';
import Footer from './Footer';
import About from './About';
import Landing from './Landing';
import Dryice_Info from './Dryice_Info';
import Dryice_Safety from './Dryice_Safety';
import Dryice_Uses from './Dryice_Uses';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Error from './Error';
import './default.css';

class App extends Component {
  // componentDidMount is $(document).ready(function)
  componentDidMount() {
    this.props.fetchUser();
    //$('.dropdown-button').dropdown({ hover: false });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <Banner />
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/dryice/info" component={Dryice_Info} />
            <Route exact path="/dryice/safety" component={Dryice_Safety} />
            <Route exact path="/dryice/uses" component={Dryice_Uses} />
            <Route exact path="/auth" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/error" component={Error} />
          </div>
          <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
