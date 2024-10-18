<script>
	import { onMount } from 'svelte';
	import { isLottieLoaded } from '$lib/stores/isLottieLoaded';

	function loadDeferScript() {
		const script = document.createElement('script');
		script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie_svg.min.js';
		// script.defer = true;
		script.async = true;

		script.onload = () => {
			$isLottieLoaded = true;
		};

		document.body.appendChild(script);
	}

	onMount(() => {
		loadDeferScript();
	});
</script>
