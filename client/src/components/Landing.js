import React, {Component} from 'react';

import logo from '../images/logo.gif';

class Landing extends Component {
  render() {
    return (
      <div className="valign-wrapper">
        <img
          style={{
            width: '90%',
            height: '90%',
            maxWidth: '600px',
            resize: 'auto',
          }}
          src={logo}
          alt="Iceberg"
        />
        <a className="waves-effect waves-light btn" href='/actions/connect'>
          DB
          <i className="material-icons">save</i>
        </a>
      </div>
    );
  }
}

export default Landing;
