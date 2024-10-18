<script>
	import { onMount } from 'svelte';
	import { isLottieLoaded } from '$lib/stores/isLottieLoaded';
	import translation from '$lib/translations/features';
	import FeaturesContent from './FeaturesContent.svelte';
	import { loadLottieLib } from '$lib/utils/loadLottieLib';

	import './scss/features.scss';
	import './scss/feature-item.scss';

	export let lang;
	const content = translation[lang];

	let section;

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(
				(entry) => {
					if (entry.isIntersecting) {
						loadLottieLib();
						observer.unobserve(entry.target);
					}
				},
				{
					root: null,
					threshold: 0.2
				}
			);
		});

		observer.observe(section);

		return () => observer.disconnect();
	});
</script>

<div class="features-content-wrap" bind:this={section}>
	<div class="content">
		<div class="features-title">
			<h2>{content.h2}</h2>
			<div class="caption">{content.caption}</div>
		</div>
		{#if $isLottieLoaded}
			<FeaturesContent />
		{/if}
	</div>
</div>
