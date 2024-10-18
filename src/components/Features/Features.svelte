<script>
	import { isLottieLoaded } from '$lib/stores/isLottieLoaded';
	import translation from '$lib/translations/features';
	import FeaturesContent from './FeaturesContent.svelte';

	import './scss/features.scss';
	import './scss/feature-item.scss';

	export let lang;
	const content = translation[lang];
</script>

<div class="features-content-wrap">
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
