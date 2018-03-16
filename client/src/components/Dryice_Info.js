import React, { Component } from 'react';
import cooler from '../images/pages/cooler.png';
import car from '../images/pages/car.jpg';
import placard from '../images/pages/placard9.gif';
import blockmaster from '../images/pages/Blockmaster.jpg';
import styles from './default.css';

class Dryice_Info extends Component {
  render() {
    return (
      <div>
        <div className={styles.section}>
            <img style={{float: 'left', width: '40%', resize: 'auto'}} src={cooler} alt="img01" />
            <h1>Storage</h1>
            Keep dry ice <b>insulated</b>, and <b>dry</b> for best results.<br />
            <br />
            Wrap your dry ice tightly in a plastic bag or newspaper, and store it in a camping cooler.
            Dry Ice will sublimate quickly, if stored well only losing the greater of<br />
            <b>5 lbs. or 5% per night</b>.<br />
            <br />
            Do <b>NOT</b> seal it in an air tight container. (see <a href='/NEW/pages/dryice/safety'>safety</a>)<br />
            Storage in a freezer is not recommended as dry ice can damage some thermostats.
        </div>

        <div className={styles.section}>
            <img style={{float: 'right'}} src={car} alt="img01" />
            <h1>Transport</h1>
            Dry Ice is classified as a dangerous good and has certain restrictions.<br />
            <br />
            no regulations (<b>0 - 5 kg</b>)<br />
            Class 9 sticker and TDG Forms (<b>5 - 499 kg</b>)<br />
            Class 9 placards on vehicle (<b>500+ kg</b>)
        </div>

        <div className={styles.section}>
            <img style={{float: 'left'}} src={placard} alt="img01" />
            <h1>Dangerous Goods</h1>
            <table rules='rows'>
                <tbody>
                    <tr>
                        <td width='200px'>UN Number</td>
                        <td>UN 1845</td>
                    </tr><tr>
                        <td>Shipping Name</td>
                        <td>Carbon Dioxide, Solid OR Dry Ice</td>
                    </tr><tr>
                        <td>Class</td>
                        <td>9</td>
                    </tr><tr>
                        <td>Packing Group</td>
                        <td>III</td>
                    </tr><tr>
                        <td valign="top">Special Provision 18</td>
                        <td>When used as a refridgerant, the container must be marked as such.  The container must be
                            designed and constructed to permit the release of CO2 to prevent the buildup of pressure.</td>
                    </tr><tr>
                        <td valign="top">Special Provision 81</td>
                        <td>Dry Ice should be transported in a means of containment that will prevent accidental release
                            that could endanger public safety under normal circumstances.</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <a target='_blank' href='/NEW/images/msds_dryice.pdf'>Material Safety Data Sheet (MSDS)</a>
        </div>

        <div className={styles.section}>
            <img style={{float: 'right'}} src={blockmaster} alt="img01" />
            <h1>How Dry Ice is Made</h1>
            Dry ice starts as liquid carbon dioxide, which needs to be stored at high pressure. The liquid
            is released at atmospheric pressure which causes one third of it to change into a solid state
            like snow.  As the remaining two thirds are recaptured and cycled back into the liquid storage,
            the snow is pressed through a dye to form blocks, pellets, or rice.
        </div>
    </div>
    );
  }
}

export default Dryice_Info;


    