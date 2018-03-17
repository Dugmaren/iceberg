import React, {Component} from 'react';

import gloves from '../images/pages/gloves.jpg';
import pressure_gauge from '../images/pages/pressure_gauge.jpg';
import no_air from '../images/pages/no_air.png';

class Dryice_Safety extends Component {
  render() {
    return (
      <div>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img src={gloves} alt="Gloves Protect Your Skin" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h2 style={{margin: '0px', padding: '0px'}}>Extreme Cold</h2>
                <p>
                  Dry Ice is (-78.5 C / -109.3 F) and will cause frostbite if it
                  contacts bare skin.<br />
                  <br />
                  <i>
                    <b>
                      You should always use gloves (garden or ski gloves work,
                      rubber gloves don't) or tongs to handle it.
                    </b>
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img src={pressure_gauge} alt="Dry Ice Expands Rapidly as it Sublimates" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h2 style={{margin: '0px', padding: '0px'}}>Expansion</h2>
                <p>
                  Dry Ice will slowly expand up to 800 times its original volume
                  as it warms up.<br />
                  <br />
                  <i>
                    <b>
                      NEVER store dry ice in an air tight container or this
                      expansion may cause an explosion.
                    </b>
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img src={no_air} alt="Dry Ice Pushes Breathable Air Out" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h2 style={{margin: '0px', padding: '0px'}}>
                  Carbon Dioxide (CO2)
                </h2>
                <p>
                  Carbon Dioxide (CO2) is the gas we breathe out and plants
                  breathe in. If you allow CO2 to fill up your vehicle, or room,
                  it will displace the oxygen and you won't be able to breath.<br />
                  <br />
                  <i>
                    <b>
                      Always ensure good ventilation by keeping a window or door
                      open!
                    </b>
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dryice_Safety;
