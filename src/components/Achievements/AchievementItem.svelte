<script>
	import rating from './img/rating.svelte';
	export let index, data, item;
</script>

<div class="achievement achievement-{index} has-bgr" data-bgimage={data.image}>
	<div class="achievement-year achievement-secondary-text">{data.year}</div>
	<div class="achievement-rating">
		<svelte:component this={rating} />
	</div>
	<div class="achievement-title">{@html item}</div>
	<div class="achievement-company achievement-secondary-text">
		{@html data.company}
	</div>
</div>
