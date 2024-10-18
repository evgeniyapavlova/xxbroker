<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	import Header from '$comps/Header/Header.svelte';
	import Intro from '$comps/Intro/Intro.svelte';

	export let lang;

	let LeaderboardComponent;
	async function loadLeaderboardComponent() {
		const module = await import('./Leaderboard/Leaderboard.svelte');
		LeaderboardComponent = module.default;
	}
	let HowToStartComponent;
	async function loadHowToStartComponent() {
		const module = await import('./HowToStart/HowToStart.svelte');
		HowToStartComponent = module.default;
	}
	let PeopleComponent;
	async function loadPeopleComponent() {
		const module = await import('./People/People.svelte');
		PeopleComponent = module.default;
	}
	let ConditionsComponent;
	async function loadConditionsComponent() {
		const module = await import('./Conditions/Conditions.svelte');
		ConditionsComponent = module.default;
	}
	let FeaturesComponent;
	async function loadFeaturesComponent() {
		const module = await import('./Features/Features.svelte');
		FeaturesComponent = module.default;
	}
	let AchievementsComponent;
	async function loadAchievementsComponent() {
		const module = await import('./Achievements/Achievements.svelte');
		AchievementsComponent = module.default;
	}
	let FooterComponent;
	async function loadFooterComponent() {
		const module = await import('./Footer/Footer.svelte');
		FooterComponent = module.default;
	}
	let ReviewsComponent;
	async function loadReviewsComponent() {
		const module = await import('./Reviews/Reviews.svelte');
		ReviewsComponent = module.default;
	}

	onMount(async () => {
		loadLeaderboardComponent();
		loadHowToStartComponent();
		loadConditionsComponent();
		loadFeaturesComponent();
		loadAchievementsComponent();
	});

	let section;

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(
				(entry) => {
					if (entry.isIntersecting) {
						loadPeopleComponent();
						loadFooterComponent();
						loadReviewsComponent();
						observer.unobserve(entry.target);
					}
				},
				{
					root: null,
					rootMargin: '800px 0px 0px 0px'
				}
			);
		});

		observer.observe(section);

		return () => observer.disconnect();
	});
</script>

<div class="main">
	<div class="intro-bgr has-bgr" data-bgimage="{base}/images/bgr/intro_bgr.svg">
		<Header {lang} />
		<Intro {lang} />
	</div>
	<section class="leaderboard" id="leaderboard">
		{#if LeaderboardComponent}
			<svelte:component this={LeaderboardComponent} {lang} />
		{/if}
	</section>

	<section id="start" bind:this={section}>
		{#if HowToStartComponent}
			<svelte:component this={HowToStartComponent} {lang} />
		{/if}
	</section>

	<div class="people">
		{#if PeopleComponent}
			<svelte:component this={PeopleComponent} />
		{/if}
	</div>
	{#if ConditionsComponent}
		<svelte:component this={ConditionsComponent} {lang} />
	{/if}
	<section class="features" id="features">
		{#if FeaturesComponent}
			<svelte:component this={FeaturesComponent} {lang} />
		{/if}
	</section>
	<section class="achievements" id="awards">
		{#if AchievementsComponent}
			<svelte:component this={AchievementsComponent} {lang} />
		{/if}
	</section>

	{#if ReviewsComponent}
		<svelte:component this={ReviewsComponent} {lang} />
	{/if}
	{#if FooterComponent}
		<svelte:component this={FooterComponent} {lang} />
	{/if}
</div>
