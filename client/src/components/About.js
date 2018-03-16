import React, { Component } from 'react';
import logo from '../images/logo.gif';
import tyler from '../images/pages/tyler.jpg';
import joc from '../images/pages/joc.jpg';
import chris from '../images/pages/chris.jpg';
import styles from './default.css';

class About extends Component {
  render() {
    return (
      <div>
        <div className={styles.section}>
            <img style={{float: 'left'}} src={logo} alt="img01" />
            <h1>Iceberg</h1>
            Iceberg was founded by Tyler in 1999 with a single dry ice blasting machine.  Soon
            after he purchased 4 dry ice making machines and delivered the ice himself
            between blasting jobs.<br />
            <br />
            As we expanded into Alberta, Chris joined Iceberg and developed the dry
            ice blasting department. In recent years we've specialized as a distribution company
            and left the delivery to professional courier companies.
        </div>

        <div className={styles.section}>
            <img style={{float: 'right'}} src={tyler} alt="img01" />
            <h1>Tyler</h1>
            Tyler won a Mustang in a Much Music contest and sold it to buy
            his first dry ice blasting machine.  His first jobs were blast cleaning industrial sanding
            belts and delivering dry ice in his truck.  He currently lives in Montreal and loves
            snowboarding and going to the street festivals downtown.	
        </div>

        <div className={styles.section}>
            <img style={{float: 'left'}} src={joc} alt="img01" />
            <h1>Jocelyne</h1>
            Jocelyne handles the majority of office work in the company.
            In her free time she's an avid cross country skiier and loves to
            travel the world; most recently visiting Vietnam, Italy, and Greece.
        </div>

        <div className={styles.section}>
            <img style={{float: 'right'}} src={chris} alt="img01" />
            <h1>Chris</h1>
            Chris manages the software side of Iceberg and set up the online ordering system
            as well as developing the blasting portion of the company.  He actively trains and teaches
            martial arts and recently spent 8 months travelling around the world.
        </div>	
      </div>
    );
  }
}

export default About;


