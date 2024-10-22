<script>
	import { onMount } from 'svelte';
	import { lazyLoadBackground } from '$lib/utils/lazyLoadBackground';
	import img1 from './img/progressive_desktop_2x/1.jpg?enhanced';
	import img2_1 from './img/progressive_desktop_2x/2-1.jpg?enhanced';
	import img2_2 from './img/progressive_desktop_2x/2-2.jpg?enhanced';
	import img3 from './img/progressive_desktop_2x/3.jpg?enhanced';
	import img4 from './img/progressive_desktop_2x/4.jpg?enhanced';

	import './scss/people.scss';

	onMount(lazyLoadBackground);
	const images = [img1, [img2_1, img2_2], img3, img4];
</script>

<div class="content">
	{#each [0, [1, 2], 3, 4] as i, index}
		{#if Array.isArray(i)}
			<div class="flex">
				{#each i as j, index2}
					<div class="img-wrap img-wrap-{index + 1}-{index2 + 1}">
						<div class="img-bgr"><enhanced:img src={images[index][index2]} alt="" /></div>
					</div>
				{/each}
			</div>
		{:else}
			<div class="img-wrap img-wrap-{index + 1}">
				<div class="img-bgr"><enhanced:img src={images[index]} alt="" /></div>
			</div>
		{/if}
	{/each}
</div>
