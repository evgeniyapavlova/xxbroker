<script>
	import { base } from '$app/paths';
	import { onMount, onDestroy } from 'svelte';
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

	export let id, path, isActive;

	// onMount(() => {
	// 	lottie.loadAnimation({
	// 		container: document.getElementById(`lottie-container-${id}`),
	// 		renderer: 'svg',
	// 		loop: true,
	// 		autoplay: true,
	// 		path: `${base}/animations/${path}.json`
	// 	});
	// });

	// onDestroy(() => {
	// 	if (animation) {
	// 		animation.destroy();
	// 	}
	// });
</script>

<!-- <div id="lottie-container-{id}" class:active={isActive}></div> -->

<LottiePlayer
	src={`${base}/animations/${path}.json`}
	autoplay={true}
	loop={true}
	controls={false}
	renderer="svg"
	background="transparent"
	height={496}
	width={471}
/>

<style>
	div {
		display: none;
	}
	div.active {
		display: block;
	}
</style>
