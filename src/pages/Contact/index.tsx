import './style.css';

export default function Contact() {
	return (
		<div class="contact">
			<h1>Contact Us</h1>
			<section>
				<div class="info">Contact us to discuss bringing a Hypnocade unit to your next event! Fill out our contact form or email <a href="mailto:info@hypnocade.art">info@hypnocade.art</a></div>

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
			</section>
		</div>
	);
}
