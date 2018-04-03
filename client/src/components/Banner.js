import React, {Component} from 'react';
import {connect} from 'react-redux';

//import logo from '../images/logo.gif';

class Banner extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a className="yellow-text" href="/auth">Login</a>;
      default:
        return <a className="green-text" href="/api/logout">Logout</a>;
    }
  }

  renderDashboard() {
    if (this.props.auth) {
      return <li><a href="/dashboard">Dashboard</a></li>
    }
  }

  render() {
    return (
      <div>
        <nav className="header">
          <div className="nav-wrapper black">
            <a href="/" className="brand-logo center">
              <h2 style={{margin: '0px', padding: '0px'}}>Iceberg Dry Ice</h2>
            </a>
            <ul className="right hide-on-med-and-down">
              {this.renderDashboard()}
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/dryice/info">Info</a>
              </li>
              <li>
                <a href="/dryice/uses">Uses</a>
              </li>
              <li>
                <a href="/dryice/safety">Safety</a>
              </li>
              <li className="divider" />
              <li>{this.renderContent()}</li>
            </ul>
          </div>
        </nav>
        <div className="header_spacer" />
      </div>
    );
  }
}

// because we only care about state.auth
/*
function mapStateToProps(state) {
  return { auth: state.auth };
}
 */
function mapStateToProps({auth}) {
  return {auth};
}

export default connect(mapStateToProps)(Banner);
