<script>
	import { onMount } from 'svelte';
	import { lazyLoadBackground } from '$lib/utils/lazyLoadBackground';
	import { base } from '$app/paths';
	import MainPlatformGhost from './MainPlatformGhost.svelte';
	import btc from './img/btc.svg';
	import eth from './img/eth.svg';
	import reddit from './img/reddit.svg';
	import menu from './img/menu.svg';
	import plus from './img/plus.svg';
	import vip from './img/vip.svg';

	const images = [menu, btc, reddit, eth, plus, vip];

	onMount(lazyLoadBackground);
</script>

<div class="platform-image-wrap">
	{#each images as image, index}
		<div class="asset asset-{index}">
			<img src={image} alt="BTC tab" class="asset-img" loading="lazy" />
		</div>
	{/each}

	<div class="platform-img">
		<MainPlatformGhost />
		<div
			class="platform has-bgr"
			data-bgimage="{base}/images/main-platform.webp"
			data-bgimage-mobile-retina="{base}/images/main-platform-mobile@2x.webp"
			data-bgimage-mobile="{base}/images/main-platform-mobile.webp"
		></div>
	</div>
</div>
