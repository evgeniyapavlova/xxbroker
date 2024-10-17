<script>
	import { inview } from 'svelte-inview';
	import { base } from '$app/paths';
	import MainPlatformGhost from './MainPlatformGhost.svelte';
	import LazyImg from '$common/LazyImg.svelte';
	import btc from './img/btc.svg';
	import eth from './img/eth.svg';
	import reddit from './img/reddit.svg';
	import menu from './img/menu.svg';
	import plus from './img/plus.svg';
	import vip from './img/vip.svg';

	const images = [menu, btc, reddit, eth, plus, vip];

	let isInView;
	const options = {
		rootMargin: '500px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }) => (isInView = detail.inView);
</script>

<div class="platform-image-wrap" use:inview={options} on:inview_change={handleChange}>
	{#each images as image, index}
		<div class="asset asset-{index}">
			<img src={image} alt="BTC tab" class="asset-img" />
		</div>
	{/each}

	<div class="platform-img">
		<MainPlatformGhost />
		{#if isInView}
			<img src="{base}/images/main-platform.webp" alt="XXBroker Platform" loading="lazy" />
		{/if}
	</div>
</div>
