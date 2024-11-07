import hypnocade from '../../assets/hypnocade.jpg';

import './style.css';

export default function Home() {
	return (
		<div class="home">
			<div class="hypnocade">
				<img src={hypnocade} />
			</div>
			<section>
				<h2>Interact, Play, Create!</h2>
				<p>Hypnocade is a project designed to bring the element of play with visual art to a friendly and approachable form.</p>
			</section>
			<section>
				<h2>Opportunities</h2>
				<p>Want a Hypnocade machine for your event? Interested in your own machine? <a href="/contact">Contact us</a> &mdash; we would love to work with you!</p>
			</section>
		</div>
	);
}
