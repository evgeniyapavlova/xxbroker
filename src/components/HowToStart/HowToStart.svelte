<script>
	import { inview } from 'svelte-inview';

	import './scss/how-to-start.scss';
	import itemsContent from './items';

	export let content;
	const { h2, items } = content;

	let isInView;
	const options = {
		rootMargin: '5%',
		threshold: '0.4',
		unobserveOnEnter: true
	};
	const handleChange = ({ detail }) => (isInView = detail.inView);
</script>

<section id="start">
	<h2>
		{h2}
	</h2>
	<div class="start-list" use:inview={options} on:inview_change={handleChange}>
		{#each items as item, index}
			<div class="start-item start-item-{index}" class:visible={isInView}>
				<div class="start-number number-italic">{index + 1}</div>
				<svelte:component this={itemsContent[index]} />
				<div class="start-title">{item.title}</div>
				<div class="start-caption">{item.caption}</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.start-item.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.start-item {
		opacity: 0;
		transform: translateY(150px);
		transition:
			opacity 1s ease,
			transform 1s ease;
	}
	.start-item-1 {
		transition-delay: 0.1s;
	}
	.start-item-2 {
		transition-delay: 0.2s;
	}
	.start-item-3 {
		transition-delay: 0.3s;
	}
</style>
