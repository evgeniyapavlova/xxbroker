<script>
	import { onDestroy } from 'svelte';
	import { base } from '$app/paths';
	import { inview } from 'svelte-inview';
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

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

	export let path;

	let lottieInstance;

	onDestroy(() => {
		lottieInstance.destroy();
	});
</script>

<div use:inview={options} on:inview_change={handleChange}>
	<LottiePlayer
		src={`${base}/animations/${path}.json`}
		autoplay={true}
		loop={true}
		controls={false}
		renderer="svg"
		background="transparent"
		height={496}
		width={471}
		setSubframe={false}
		bind:this={lottieInstance}
	/>
</div>
