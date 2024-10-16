<script>
	import itemsContent from './items';
	import './scss/how-to-start.scss';
	export let content;
	const { h2, items } = content;
</script>

<section id="start">
	<h2>
		{h2}
	</h2>
	<div class="start-list">
		{#each items as item, index}
			<div class="start-item">
				<div class="start-number number-italic">{index + 1}</div>
				<svelte:component this={itemsContent[index]} />
				<div class="start-title">{item.title}</div>
				<div class="start-caption">{item.caption}</div>
			</div>
		{/each}
	</div>
</section>
