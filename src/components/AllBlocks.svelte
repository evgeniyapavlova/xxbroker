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
</script>

<div class="main">
	<div class="intro-bgr has-bgr" data-bgimage="{base}/images/bgr/intro_bgr.svg">
		<Header {lang} />
		<Intro {lang} />
	</div>
	<Leaderboard {lang} />
	<HowToStart {lang} />

	<People />
	<Conditions {lang} />
	<Features {lang} />

	<Achievements {lang} />

	<Reviews {lang} />
	<Footer {lang} />
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
