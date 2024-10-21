<script>
	import { inview } from 'svelte-inview';

	import translation from '$lib/translations/how_to_start';

	import itemsContent from './items';
	import HowToStartItem from './HowToStartItem.svelte';

	import './scss/how-to-start.scss';

	export let lang;

	const content = translation[lang];
	const { h2, items } = content;

	let isInView;
	const options = {
		threshold: 1,
		unobserveOnEnter: true
	};
	const handleChange = ({ detail }) => (isInView = detail.inView);
</script>

<h2 use:inview={options} on:inview_change={handleChange}>
	{h2}
</h2>
<div class="start-list">
	{#each items as item, index}
		<HowToStartItem {index} {item} content={itemsContent[index]} {isInView} />
	{/each}
</div>
