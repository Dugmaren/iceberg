import React, { Component } from 'react';
import gloves from '../images/pages/gloves.jpg';
import pressure_gauge from '../images/pages/pressure_gauge.jpg';
import no_air from '../images/pages/no_air.png';
import styles from './default.css';

class Dryice_Safety extends Component {
	render() {
		return(
			<div>
		        <div className={styles.section}>
					<img style={{float: 'left'}} src={gloves} alt="img01" />
					<h1>Extreme Cold</h1>
					Dry Ice is (-78.5 C / -109.3 F) and will cause frostbite if it contacts bare skin.<br />
					<br />
					<i><b>You should always use gloves (garden or ski gloves work, rubber gloves don't) or tongs to handle it.</b></i>
				</div>

		        <div className={styles.section}>
					<img style={{float: 'right'}} src={pressure_gauge} alt="img01" />
					<h1>Expansion</h1>
					Dry Ice will slowly expand up to 800 times its original volume as it warms up.<br />
					<br />
					<i><b>NEVER store dry ice	in an air tight container or this expansion may cause an explosion.</b></i>
				</div>

		        <div className={styles.section}>
					<img style={{float: 'left'}} src={no_air} alt="img01" />
					<h1>Carbon Dioxide (CO2)</h1>
					Carbon Dioxide (CO2) is the gas we breathe out and plants breathe in.  If you allow CO2
					to fill up your vehicle, or room, it will displace the oxygen and you won't be able to
					breath.<br />
					<br />
					<i><b>Always ensure good ventilation by keeping a window or door open!</b></i>
				</div>
			</div>
		);
	}
}

export default Dryice_Safety;