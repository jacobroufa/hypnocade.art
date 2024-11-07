import { useLocation } from 'preact-iso';
import Logo from './Logo';
import { useEffect, useState } from 'preact/hooks';

const removeWord = (str: string, word: string) => {
	return str.split(' ').filter(s => s !== word).join(' ');
};

const addWord = (str: string, word: string) => {
	return removeWord(str, word) + ' ' + word;
}

export function Header() {
	const { url } = useLocation();
	const [logoClass, setLogoClass] = useState('logo');

	useEffect(() => {
		if (url === '/') {
			setLogoClass(addWord(logoClass, 'active'));
		} else {
			setLogoClass(removeWord(logoClass, 'active'));
		}
	}, [url]);

	return (
		<header>
			<nav>
				<a href="/" class={logoClass}>
					<Logo />
				</a>
				<span class="spacer">&nbsp;</span>
				<a href="/machines" class={url.includes('machine') && 'active'}>
					Machines
				</a>
				<a href="/contact" class={url == '/contact' && 'active'}>
					Contact
				</a>
			</nav>
		</header>
	);
}
