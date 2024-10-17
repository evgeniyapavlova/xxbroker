<script>
	import { onDestroy, onMount } from 'svelte';
	import { base } from '$app/paths';
	import { inview } from 'svelte-inview';

	export let id, path;

	let lottieInstance;

	function loadAnimation() {
		if (lottieInstance) {
			lottieInstance.destroy();
		}

		lottieInstance = lottie.loadAnimation({
			container: document.getElementById(id),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: `${base}/animations/${path}.json`,
			setSubframe: false
		});
	}

	onMount(async () => {
		if (window.lottie) loadAnimation();
	});

	let isInView;
	const options = {
		threshold: 0.8
	};
	const handleChange = ({ detail }) => {
		isInView = detail.inView;

		if (lottieInstance) {
			if (isInView) {
				lottieInstance.play();
			} else {
				lottieInstance.pause();
			}
		}
	};

	onDestroy(() => {
		if (lottieInstance) lottieInstance.destroy();
	});

	$: path, loadAnimation();
</script>

<div use:inview={options} on:inview_change={handleChange}>
	<div {id}></div>
</div>
