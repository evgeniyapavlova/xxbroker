<script>
	import { inview } from 'svelte-inview';
	import rating from './img/rating.svelte';
	export let index, data, item;

	let isInView;
	const options = {
		rootMargin: '5%',
		threshold: '0.4',
		unobserveOnEnter: true
	};
	const handleChange = ({ detail }) => (isInView = detail.inView);
</script>

<div
	class="achievement achievement-{index}"
	style="background-image: url({data.image})"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="achievement-year achievement-secondary-text">{data.year}</div>
	<div class="achievement-rating" class:visible={isInView}>
		<svelte:component this={rating} />
	</div>
	<div class="achievement-title" class:visible={isInView}>{@html item}</div>
	<div class="achievement-company achievement-secondary-text">
		{@html data.company}
	</div>
</div>

<style>
	.achievement-rating.visible,
	.achievement-title.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.achievement-rating,
	.achievement-title {
		opacity: 0;
		transform: translateY(150px);
		transition:
			opacity 1s ease,
			transform 1s ease;
	}
</style>
