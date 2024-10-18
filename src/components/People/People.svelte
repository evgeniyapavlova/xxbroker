<script>
	import img1 from './img/1.webp';
	import img2 from './img/2.webp';
	import img3 from './img/3.webp';
	import img4 from './img/4.webp';
	import img5 from './img/5.webp';

	import './scss/people.scss';

	const images = [img1, [img2, img3], img4, img5];
</script>

<div class="content">
	{#each images as i, index}
		{#if Array.isArray(i)}
			<div class="flex">
				{#each i as image, index2}
					<div class="img-wrap img-wrap-{index + 1}-{index2 + 1}">
						<div class="img-bgr has-bgr" data-bgimage={image}></div>
					</div>
				{/each}
			</div>
		{:else}
			<div class="img-wrap img-wrap-{index + 1}">
				<div class="img-bgr has-bgr" data-bgimage={i}></div>
			</div>
		{/if}
	{/each}
</div>
