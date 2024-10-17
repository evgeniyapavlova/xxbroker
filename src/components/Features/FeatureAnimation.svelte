<script>
	import { onDestroy, onMount } from 'svelte';
	import { base } from '$app/paths';
	import { inview } from 'svelte-inview';

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

	let LottiePlayerComponent;

	let isLoaded = false;

	async function loadLottiePlayerComponent() {
		const module = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayerComponent = module.LottiePlayer;
	}

	onMount(async () => {
		await loadLottiePlayerComponent();
		isLoaded = true;
	});

	onDestroy(() => {
		if (lottieInstance) lottieInstance.destroy();
	});
</script>

{#if isLoaded}
	<div use:inview={options} on:inview_change={handleChange}>
		<LottiePlayerComponent
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
{/if}
