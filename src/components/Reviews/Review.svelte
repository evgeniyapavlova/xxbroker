<script>
	import twitter from './img/twitter.svg';
	import facebook from './img/facebook.svg';

	export let index1, index2, data, photo, content;
</script>

<div class="review review-{index1}-{index2}">
	<div class="review-author">
		<img
			src={photo}
			class="review-avatar"
			alt="Avatar of the reviewer"
			width="40"
			height="40"
			loading="lazy"
		/>
		<div>
			<div class="review-primary">{data.name}</div>
			<div class="review-seconary">{data.nickname}</div>
		</div>
		<div class="social-icon-wrap">
			<img src={data.isFb ? facebook : twitter} alt="Social" />
		</div>
	</div>
	<div class="review-text">{content.text}</div>
	<div class="review-seconary">{content.date}</div>
</div>
