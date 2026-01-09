import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LocationProvider, Router, Route, hydrate, prerender as ssr, useLocation } from 'preact-iso';

import { Header } from './components/Header.jsx';

import Home from './pages/Home/index.jsx';
import Machines from './pages/Machines/index.jsx';
import Machine from './pages/Machine/index.jsx';
import Contact from './pages/Contact/index.jsx';

import './style.css';

function NotFound() {
	useLocation().route('/', true);
	return null;
}

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/machines" component={Machines} />
					<Route path="/machines/:id" component={Machine} />
					<Route path="/contact" component={Contact} />
					<Route default component={NotFound} />
				</Router>
			</main>
			<footer>
				<span class="founded">&copy; 2024 <a href="https://jacobroufa.com" target="_blank">Jacob Roufa</a></span>
				<span class="spacer">&nbsp;</span>
				<a href="https://www.instagram.com/hypnocade" target="_blank">
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<a href="https://www.facebook.com/hypnocade" target="_blank">
					<FontAwesomeIcon icon={faFacebook} />
				</a>
			</footer>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
