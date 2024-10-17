<script>
	import HowToStartItem from './HowToStartItem.svelte';
	import './scss/how-to-start.scss';
	import itemsContent from './items';

	export let content;
	const { h2, items } = content;
</script>

<section id="start">
	<h2>
		{h2}
	</h2>
	<div class="start-list">
		{#each items as item, index}
			<HowToStartItem {index} {item} content={itemsContent[index]} />
		{/each}
	</div>
</section>
