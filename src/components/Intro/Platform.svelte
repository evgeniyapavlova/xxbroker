<script>
	import LazyImg from '$common/LazyImg.svelte';
	import platformImg from './img/main-platform.webp';
	import btc from './img/btc.svg';
	import eth from './img/eth.svg';
	import reddit from './img/reddit.svg';
	import menu from './img/menu.svg';
	import plus from './img/plus.svg';
	import vip from './img/vip.svg';

	const images = [menu, btc, reddit, eth, plus, vip];
</script>

<div class="platform-image-wrap">
	{#each images as image, index}
		<div class="asset asset-{index}">
			<img src={image} alt="BTC tab" class="asset-img" />
		</div>
	{/each}

	<LazyImg src={platformImg} alt="XXBroker Platform" />
</div>
