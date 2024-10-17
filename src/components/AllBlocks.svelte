<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	import Header from '$comps/Header/Header.svelte';
	import Intro from '$comps/Intro/Intro.svelte';
	import Leaderboard from './Leaderboard/Leaderboard.svelte';
	import HowToStart from './HowToStart/HowToStart.svelte';
	import People from './People/People.svelte';
	import Conditions from './Conditions/Conditions.svelte';
	import Features from './Features/Features.svelte';
	import Achievements from './Achievements/Achievements.svelte';
	import Reviews from './Reviews/Reviews.svelte';
	import Footer from './Footer/Footer.svelte';
	import Logo from '$common/LogoFooter.svelte';

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

<div class="main">
	<!-- <div style="background-image: url({base}/images/bgr/intro_bgr.svg);" class="intro-bgr">
		{#if isTranslationLoaded}
			<Header content={translation.header} />
			<Intro content={translation.intro} />
		{/if}
	</div>
	{#if isTranslationLoaded}
		<Leaderboard content={translation.leaderboard} />
		<HowToStart content={translation.how_to_start} />
	{/if}

	<People /> -->

	{#if isTranslationLoaded}
		<!-- <Conditions content={translation.conditions} />
		<Features content={translation.features} />
		<Achievements content={translation.achievements} />-->
		<!-- <Reviews content={translation.reviews} /> -->
		<Footer content={translation.footer} />
	{/if}
</div>
<section class="footer-logo">
	<Logo />
</section>

<style>
	.intro-bgr {
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
	}
</style>
