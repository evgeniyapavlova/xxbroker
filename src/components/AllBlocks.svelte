<script>
	import { onMount } from 'svelte';

	import Header from '$comps/Header/Header.svelte';

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

{#if isTranslationLoaded}
	<Header content={translation.header} />
{/if}
