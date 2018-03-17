import React, {Component} from 'react';
import logo from '../images/logo.gif';
import tyler from '../images/pages/tyler.jpg';
import joc from '../images/pages/joc.jpg';
import chris from '../images/pages/chris.jpg';

class About extends Component {
  render() {
    return (
      <div>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img src={logo} alt="Iceberg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h2 style={{margin: '0px', padding: '0px'}}>Iceberg</h2>
                <p>
                  Iceberg was founded by Tyler in 1999 with a single dry ice
                  blasting machine. Soon after he purchased 4 dry ice making
                  machines and delivered the ice himself between blasting jobs.
                </p>
                <p>
                  As we expanded into Alberta, Chris joined Iceberg and
                  developed the dry ice blasting department. In recent years
                  we've specialized as a distribution company and left the
                  delivery to professional courier companies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img src={tyler} alt="Tyler" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h2 style={{margin: '0px', padding: '0px'}}>Tyler</h2>
                <p>
                  Tyler won a Mustang in a Much Music contest and sold it to buy
                  his first dry ice blasting machine. His first jobs were blast
                  cleaning industrial sanding belts and delivering dry ice in
                  his truck. He currently lives in Montreal and loves
                  snowboarding and going to the street festivals downtown.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img src={joc} alt="Jocelyne" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h2 style={{margin: '0px', padding: '0px'}}>Jocelyne</h2>
                <p>
                  Jocelyne handles the majority of office work in the company.
                  In her free time she's an avid cross country skiier and loves
                  to travel the world; most recently visiting Vietnam, Italy,
                  and Greece.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img src={chris} alt="Chris" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h2 style={{margin: '0px', padding: '0px'}}>Chris</h2>
                <p>
                  Chris manages the software side of Iceberg and set up the
                  online ordering system as well as developing the blasting
                  portion of the company. He actively trains and teaches martial
                  arts and recently spent 8 months travelling around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
