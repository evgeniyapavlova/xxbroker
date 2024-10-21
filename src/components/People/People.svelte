<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { lazyLoadBackground } from '$lib/utils/lazyLoadBackground';

	import './scss/people.scss';

	onMount(lazyLoadBackground);
</script>

<div class="content">
	{#each [0, [1, 2], 3, 4] as i, index}
		{#if Array.isArray(i)}
			<div class="flex">
				{#each i as j, index2}
					<div class="img-wrap img-wrap-{index + 1}-{index2 + 1}">
						<div
							class="img-bgr has-bgr"
							data-bgimage="{base}/images/people/progressive_desktop_2x/{index + 1}-{index2 +
								1}.jpg"
							data-bgimage-mobile-retina="{base}/images/people/mobile2x/{index + 1}-{index2 +
								1}.webp"
							data-bgimage-mobile="{base}/images/people/progressive_mobile_1x/{index + 1}-{index2 +
								1}.webp"
						></div>
					</div>
				{/each}
			</div>
		{:else}
			<div class="img-wrap img-wrap-{index + 1}">
				<div
					class="img-bgr has-bgr"
					data-bgimage="{base}/images/people/progressive_desktop_2x/{index + 1}.jpg"
					data-bgimage-mobile-retina="{base}/images/people/mobile2x/{index + 1}.webp"
					data-bgimage-mobile="{base}/images/people/progressive_mobile_1x/{index + 1}.webp"
				></div>
			</div>
		{/if}
	{/each}
</div>
