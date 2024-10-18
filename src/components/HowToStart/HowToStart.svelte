<script>
	import { onMount } from 'svelte';
	import translation from '$lib/translations/how_to_start';

	import HowToStartItem from './HowToStartItem.svelte';

	import itemsContent from './items';

	export let lang;

	const content = translation[lang];
	const { h2, items } = content;

	let isStyleLoaded = false;

	async function loadStyle() {
		if (!isStyleLoaded) {
			await import('./scss/how-to-start.scss');
			isStyleLoaded = true;
		}
	}

	onMount(async () => {
		loadStyle();
	});
</script>

<h2>
	{h2}
</h2>
<div class="start-list">
	{#each items as item, index}
		<HowToStartItem {index} {item} content={itemsContent[index]} />
	{/each}
</div>
