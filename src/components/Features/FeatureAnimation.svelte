<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import lottie from 'lottie-web';

	export let id, path, isActive;

	onMount(() => {
		lottie.loadAnimation({
			container: document.getElementById(`lottie-container-${id}`),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: `${base}/animations/${path}.json`
		});
	});
</script>

<div id="lottie-container-{id}" class:active={isActive}></div>

<style>
	div {
		display: none;
	}
	div.active {
		display: block;
	}
</style>
