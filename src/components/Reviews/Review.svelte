<script>
	import { inview } from 'svelte-inview';
	import twitter from './img/twitter.svg';
	import facebook from './img/facebook.svg';

	let isInView;
	const options = {
		threshold: '0.4',
		unobserveOnEnter: true
	};
	const handleChange = ({ detail }) => (isInView = detail.inView);

	export let index1, index2, data, photo, content;
</script>

<div class="review review-{index1}-{index2}" use:inview={options} on:inview_change={handleChange}>
	<div class="review-author">
		<img src={photo} class="review-avatar" alt="Avatar of the reviewer" />
		<div>
			<div class="review-primary">{data.name}</div>
			<div class="review-seconary">{data.nickname}</div>
		</div>
		<div class="social-icon-wrap">
			<img src={data.isFb ? facebook : twitter} alt="Social" />
		</div>
	</div>
	<div class="review-text" class:visible={isInView}>{content.text}</div>
	<div class="review-seconary">{content.date}</div>
</div>

<style>
	.review-text.visible {
		opacity: 1;
		transform: translateX(0);
	}

	.review-text {
		opacity: 0;
		transform: translateX(-50px);
		transition:
			opacity 1s ease,
			transform 1s ease;
	}
</style>
