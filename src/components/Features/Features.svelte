<script>
	import { onMount } from 'svelte';
	import translation from '$lib/translations/features';
	import FeaturesContent from './FeaturesContent.svelte';

	import './scss/features.scss';
	import './scss/feature-item.scss';

	export let lang;
	const content = translation[lang];

	let isScriptLoaded = false;

	function loadDeferScript() {
		const script = document.createElement('script');
		script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie_svg.min.js';
		script.defer = true;

		script.onload = () => {
			isScriptLoaded = true;
		};

		document.body.appendChild(script);
	}

	onMount(() => {
		loadDeferScript();
	});
</script>

<div class="features-content-wrap">
	<div class="content">
		<div class="features-title">
			<h2>{content.h2}</h2>
			<div class="caption">{content.caption}</div>
		</div>
		{#if isScriptLoaded}
			<FeaturesContent />
		{/if}
	</div>
</div>
