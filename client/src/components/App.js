import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import styles from './default.css';
//import { connect } from 'react-redux';
//import * as actions from '../actions';

// Components
import Banner from './Banner';
import Footer from './Footer';
import About from './About';
import Dryice_Info from './Dryice_Info';
import Dryice_Safety from './Dryice_Safety';
import Dryice_Uses from './Dryice_Uses';

class App extends Component {
  //  componentDidMount() {
  //    this.props.fetchUser();
  //  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className={styles.container}>
            <Banner />
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/dryice/info" component={Dryice_Info} />
            <Route exact path="/dryice/safety" component={Dryice_Safety} />
            <Route exact path="/dryice/uses" component={Dryice_Uses} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
// Passing all the actions to App as props
//export default connect(null, actions)(App);
