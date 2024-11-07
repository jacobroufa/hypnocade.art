import hypno from '../../assets/hypno_card.jpg';
import enso from '../../assets/enso_card.jpg';
import future from '../../assets/future_card.jpg';

import './style.css';

export default function Machines() {
	return (
		<div class="machines">
			<h1>Machines</h1>

			<p>The idea for Hypnocade was born out of a session of video synthesizer play with a group of friends. It was suggested “what if we had big controls here that anybody could walk up to and use?” That simply had to happen. Combining art and engineering, we discussed what concepts to expose to players and passersby, how to deliver that in a usable form-factor, and arrived at an arcade cabinet.</p>

			<p>Our first unit is the <a href="/machines/hypno">Hypno</a>, based on the synthesizer that started the original conversation. <a href="/machines/enso">Enso</a> is our second unit currently in development. There are multiple units planned for the future as well, all based around different concepts of video art.</p>

			<p>We are exploring other interactive pieces as well, that can be used in settings with existing displays and other hardware designs. <a href="/contact">Contact us</a> if you are interested to learn more or bring a Hypnocade unit to your next event!</p>

			<section>
				<Card name="Hypno" image={hypno} href="hypno" description="The Original" />
				<Card name="Enso" image={enso} href="enso" description="Pure Feedback" />
				<Card name="Future" image={future} href="future" description="What's Next?" />
			</section>
		</div>
	);
}

function Card(props: { name: string, image: string, href: string, description: string }) {
	const { name, image, href, description } = props;
	return (
		<a href={`/machines/${href}`} class="machine">
			<h2>{name}</h2>
			<div class="rollover">
				<img src={image} />
				<div><span>{description}</span></div>
			</div>
		</a>
	);
}
