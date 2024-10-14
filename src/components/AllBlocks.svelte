<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	import Header from '$comps/Header/Header.svelte';
	import Intro from '$comps/Intro/Intro.svelte';

	export let lang;

	let isTranslationLoaded = false,
		translation = {};

	async function loadTranslations() {
		if (!isTranslationLoaded) {
			const module = await import(`$lib/translations/${lang}.js`);
			translation = module.default;
			isTranslationLoaded = true;
		}
	}

	onMount(async () => {
		loadTranslations();
	});
</script>

<div style="background-image: url({base}/images/bgr/intro_bgr.svg);">
	{#if isTranslationLoaded}
		<Header content={translation.header} />
		<Intro content={translation.intro} />
	{/if}
	<!-- <div style="height: 300vh;"></div> -->
</div>

<style>
	div {
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
	}
</style>
