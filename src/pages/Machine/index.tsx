import { useLocation } from 'preact-iso';

import './style.css';

export default function Machine() {
	const { url } = useLocation();
	const [root, section, machine] = url.split('/');

	console.log(machine);

	switch (machine) {
		case 'hypno':
			return 'Hypno';
		case 'enso':
			return 'Enso';
		case 'future':
			return 'Future';
		default:
			return useLocation().route('/machines', true);
	}
}
