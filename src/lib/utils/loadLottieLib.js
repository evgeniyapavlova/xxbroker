import { isLottieLoaded } from '$lib/stores/isLottieLoaded';

export function loadLottieLib() {
	const script = document.createElement('script');
	script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie_light.min.js';
	script.defer = true;
	// script.async = true;

	script.onload = () => {
		isLottieLoaded.set(true);
	};

	document.body.appendChild(script);
}
