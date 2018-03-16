import React, { Component } from 'react';
import pumpkin from '../images/pages/Dry_Ice_Pumpkin.JPG';
import peasouper from '../images/pages/peasouper.jpg';
import food_packing from '../images/pages/food_packing.jpg';
import coffee from '../images/pages/blasting_coffee.jpg';
import styles from './default.css';

class Dryice_Uses extends Component {
	render() {
		return(
			<div>
				<div className={styles.section}>
					<img style={{float: 'left'}} src={pumpkin} alt="img01" />
					<h1>Fog Effects</h1>
					If you put dry ice in water it will sublimate and spill CO2 and water
					vapor out in a cold fog that hugs the ground.  Hot water produces fog faster
					and the effect tends to last around 10 minutes.<br />
					<br />
					We recommend ~ 10 lbs. per hour for continuous fog effects.
				</div>
				<div className={styles.section}>
					<img style={{float: 'right'}} src={peasouper} alt="img01" />
					<h1>Industrial Fog</h1>
					For large effects like a creepy graveyard or a dance floor you can use an
					industrial fog machine like a Pea Souper.  This automates heating the water
					and adjusting the fog flow rate for a bigger effect.<br />
					<br />
					Pea Soupers use ~ 20 lbs. per 5 minute effect.
				</div>
				<div className={styles.section}>
					<img style={{float: 'left'}} src={food_packing} alt="img01" />
					<h1>Food Storage and Transport</h1>
					Dry Ice can be used to keep food cold for extended periods of time, and won't melt
					into a wet mess like regular ice.  To keep food cold pack dry ice on the bottom, to
					keep food frozen, pack dry ice on top.  Ideally separate the dry ice and food with
					cardboard, bubble wrap, or even newspaper to prevent the chances of freezer burn.
				</div>
				<div className={styles.section}>
					<img style={{float: 'right'}} src={coffee} alt="img01" />
					<h1>Dry Ice Blasting</h1>
					Dry Ice Blasting is just like power washing or sand blasting except we use dry ice pellets instead of
					water or sand.  There are several advantages to this including:<br />
					<ul>
						<li>Less Cleanup - dry ice sublimates, no left over water or sand to clean up.</li>
						<li>Non-abrasive - dry ice can be very delicate even allowing the cleaning of electronics, and is certainly less abrasive then sandblasting which can pit metal.</li>
						<li>Cold - because of the temperature dry ice can be used to freeze glues and the like so they chip off instead of just spread around.</li>
					</ul>
					If you're interested in dry ice blasting we currently rent out machines and have a decade of experience
					working on a variety of projects with multiple machines; please send us an <a href='mailto:admin@icebergdryice.com?subject=Dry Ice Blasting'>email</a>.
					We require a copy of appropriate insurance documentation before rental.
				</div>
			</div>
		);
	}
}

export default Dryice_Uses;