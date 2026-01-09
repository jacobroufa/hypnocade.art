import { useLocation } from 'preact-iso';

import Hypno from '../Hypno';
import Future from './future';
import Enso from './enso';

import './style.css';

export default function Machine() {
	const { route, url } = useLocation();
	let [root, section, machine] = url.split('/');

	if (machine.includes('?')) {
		machine = machine.split('?')[0];
	}

	switch (machine) {
		case 'hypno':
			return <Hypno />;
		case 'enso':
			return <Enso />;
		case 'future':
			return <Future />;
		default:
			route('/machines', true);
			return null;
	}
}
