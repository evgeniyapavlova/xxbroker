<script>
	import { inview } from 'svelte-inview';
	let isInView;
	const options = {
		threshold: '0.4',
		unobserveOnEnter: true
	};
	const handleChange = ({ detail }) => (isInView = detail.inView);

	export let index, item, content;
</script>

<div class="start-item start-item-{index}" use:inview={options} on:inview_change={handleChange}>
	<div class="start-number number-italic" class:visible={isInView}>{index + 1}</div>
	<svelte:component this={content} />
	<div class="start-title">{item.title}</div>
	<div class="start-caption">{item.caption}</div>
</div>

<style>
	.start-number.visible {
		opacity: 0.6;
		transform: translateY(0);
	}

	.start-number {
		opacity: 0;
		transform: translateY(150px);
		transition:
			opacity 1s ease,
			transform 1s ease;
	}
</style>
