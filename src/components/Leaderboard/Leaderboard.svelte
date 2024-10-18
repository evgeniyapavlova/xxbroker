<script>
	import { onMount } from 'svelte';
	import translation from '$lib/translations/leaderboard';

	import LiveTag from './LiveTag.svelte';

	import './scss/leaderboard.scss';
	import './scss/pedestal.scss';

	export let lang;

	const content = translation[lang];

	let section;

	let TableComponent;
	async function loadTableComponent() {
		const module = await import('./Table.svelte');
		TableComponent = module.default;
	}

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(
				(entry) => {
					if (entry.isIntersecting) {
						loadTableComponent();
						observer.unobserve(entry.target);
					}
				},
				{
					root: null,
					rootMargin: '1000px 0px 0px 0px'
				}
			);
		});

		observer.observe(section);

		return () => observer.disconnect();
	});
</script>

<div class="leaderboard-content-wrap" bind:this={section}>
	<LiveTag>{content.live}</LiveTag>
	<div class="content">
		<h2>{content.h2}</h2>

		{#if TableComponent}
			<svelte:component
				this={TableComponent}
				content={content.table_head}
				buy={content.buy}
				sell={content.sell}
			/>
		{/if}
	</div>
</div>
