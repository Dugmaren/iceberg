import React, {Component} from 'react';

import logo from '../images/logo.gif';

class Landing extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Landing;
