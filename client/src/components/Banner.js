import React, {Component} from 'react';

//import logo from '../images/logo.gif';

class Banner extends Component {
  render() {
    return (
      <div>
        <nav className="header">
          <div className="nav-wrapper black">
            <a href="/" className="brand-logo center">
              <h2 style={{margin: '0px', padding: '0px'}}>Iceberg Dry Ice</h2>
            </a>
            <ul className="right hide-on-med-and-down">
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
              <li>
                <a href="/auth/google">LOGIN</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="header_spacer" />
      </div>
    );
  }
}

export default Banner;
/*
class='active' <-- current page
          <img  src={logo} 
                alt='Home'
                style={{position: 'absolute', top: '0px', right: '0px', height: '90%', resize: 'auto'}} />
*/
