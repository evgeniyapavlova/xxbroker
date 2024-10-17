<script>
	import { inview } from 'svelte-inview';
	import './scss/reviews.scss';
	import Review from './Review.svelte';
	import heart from './img/heart.svg';
	import { data } from './data';
	import photos from './img';

	export let content;
	const { h2, caption, items } = content;

	let isInView;
	const options = {
		threshold: '0.4',
		unobserveOnEnter: true
	};
	const handleChange = ({ detail }) => (isInView = detail.inView);
</script>

<section class="reviews" id="reviews">
	<div class="title">
		<img src={heart} alt="Heart" class="heart" class:visible={isInView} />
		<h2 use:inview={options} on:inview_change={handleChange}>{h2}</h2>
		<div class="caption">{caption}</div>
	</div>
	<div class="reviews-list">
		{#each items as item, index1}
			<div class="reviews-block">
				{#each item as i, index2}
					<Review
						{index1}
						{index2}
						data={data[index1][index2]}
						photo={photos[index1][index2]}
						content={i}
					/>
				{/each}
			</div>
		{/each}
	</div>
</section>

<style>
	.heart.visible {
		opacity: 1;
		transform: scale(1);
	}

	.heart {
		opacity: 0;
		transform: scale(0);
		transition:
			opacity 1s ease,
			transform 1s ease;
	}
</style>
