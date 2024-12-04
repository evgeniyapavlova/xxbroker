import { derived, readable } from 'svelte/store';

export const device = readable('', (set) => {
	const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';

	const isAndroid = /android/i.test(userAgent);
	const isIos = /ip[honead]{2,4}/i.test(userAgent);
	const isDesktop = !isAndroid && !isIos;

	let device = isDesktop ? 'desktop' : isIos ? 'ios' : 'android';

	if (isDesktop) {
		device = userAgent.includes('Windows') ? 'windows' : 'mac';
	}

	set(device);
	return function stop() {};
});

export const isDesktop = derived(device, ($device) => $device === 'desktop');
