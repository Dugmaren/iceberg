import React, { Component } from 'react';
//import logo from '../images/logo.gif';
import styles from './default.css';

class Banner extends Component {
  render() {
    return (
      <div className={styles.header}>
        <center>Iceberg Dry Ice</center>
        <a href='/dryice/info'>
          LOGO
        </a>
      </div>
    );
  }
}

export default Banner;
/*
          <img  src={logo} 
                alt='Home'
                style={{position: 'absolute', top: '0px', right: '0px', height: '90%', resize: 'auto'}} />
*/