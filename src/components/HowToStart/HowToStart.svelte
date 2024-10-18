<script>
	// import { onMount } from 'svelte';

	import translation from '$lib/translations/how_to_start';

	import itemsContent from './items';
	import HowToStartItem from './HowToStartItem.svelte';

	import './scss/how-to-start.scss';

	export let lang;

	const content = translation[lang];
	const { h2, items } = content;

	let section;

	// let HowToStartItemComponent;
	// async function loadHowToStartItemComponent() {
	// 	const module = await import('./HowToStartItem.svelte');
	// 	HowToStartItemComponent = module.default;
	// }

	// onMount(() => {
	// 	const observer = new IntersectionObserver((entries) => {
	// 		entries.forEach(
	// 			(entry) => {
	// 				if (entry.isIntersecting) {
	// 					loadHowToStartItemComponent();
	// 					observer.unobserve(entry.target);
	// 				}
	// 			},
	// 			{
	// 				root: null,
	// 				rootMargin: '800px 0px 0px 0px'
	// 			}
	// 		);
	// 	});

	// 	observer.observe(section);

	// 	return () => observer.disconnect();
	// });
</script>

<h2>
	{h2}
</h2>
<div class="start-list" bind:this={section}>
	{#each items as item, index}
		<!-- {#if HowToStartItemComponent}
			<svelte:component
				this={HowToStartItemComponent}
				{index}
				{item}
				content={itemsContent[index]}
			/>
		{/if} -->
		<HowToStartItem {index} {item} content={itemsContent[index]} />
	{/each}
</div>
