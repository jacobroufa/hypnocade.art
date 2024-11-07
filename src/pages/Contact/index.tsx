import './style.css';

/**
				<div class="form">
					<form>
						<fieldset>
							<label for="name">Name</label>
							<input name="name" type="text" required></input>
						</fieldset>

						<fieldset>
							<label for="email">Email</label>
							<input name="email" type="email" required></input>
						</fieldset>

						<fieldset>
							<label for="message">Message</label>
							<textarea name="message" required></textarea>
						</fieldset>

						<button type="submit">Send</button>
					</form>
				</div>
 */

export default function Contact() {
	return (
		<div class="contact">
			<h1>Contact Us</h1>
			<section>
				<div class="info">Contact us to discuss bringing a Hypnocade unit to your next event! Email us at <a href="mailto:info@hypnocade.art">info@hypnocade.art</a></div>

				<p>You can also find us on social media:
					<ul>
						<li><a href="https://www.instagram.com/hypnocade" target="_blank">Instagram</a></li>
						<li><a href="https://www.facebook.com/hypnocade" target="_blank">Facebook</a></li>
					</ul>
				</p>
			</section>
		</div>
	);
}
