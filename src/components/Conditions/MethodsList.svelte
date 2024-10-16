<script>
	import AdvCash from './img/methods/AdvCash.svg';
	import Bitcoin from './img/methods/Bitcoin.svg';
	import PerfectMoney from './img/methods/PerfectMoney.svg';
	import Skrill from './img/methods/Skrill.svg';
	import Tether from './img/methods/Tether.svg';
	import WebMoney from './img/methods/WebMoney.svg';
	import WireTransfer from './img/methods/WireTransfer.svg';
	import usdc from './img/methods/usdc.svg';

	const methods = [AdvCash, Bitcoin, PerfectMoney, Skrill, Tether, WebMoney, WireTransfer, usdc];

	const methodsNames = [
		'AdvCash',
		'Bitcoin',
		'Perfect Money',
		'Skrill',
		'Tether',
		'WebMoney',
		'Wire Transfer',
		'usdc'
	];

	export let title;
</script>

<h2>{@html title}</h2>
<div class="methods-list-container">
	<div class="marquee">
		{#each methods as method, index}
			<img src={method} alt="Payment method - {methodsNames[index]}" class="marquee__item" />
		{/each}
	</div>
</div>

<style>
	h2 {
		margin-bottom: 64px;
	}
	.methods-list-container {
		padding-top: 25px;
		padding-bottom: 25px;
	}
	.marquee {
		display: flex;
		block-size: var(--marquee-item-height);
		/* margin-block: var(--marquee-item-height); */
		position: relative;
		overflow-x: hidden;
		mask-image: linear-gradient(
			to right,
			hsl(0 0% 0% / 0),
			hsl(0 0% 0% / 1) 20%,
			hsl(0 0% 0% / 1) 80%,
			hsl(0 0% 0% / 0)
		);
	}

	.marquee {
		--marquee-item-width: 200px;
		--marquee-item-height: 55px;
		--marquee-duration: 36s;
		--marquee-items: 8;
	}

	.marquee__item {
		--marquee-item-offset: max(
			calc(var(--marquee-item-width) * var(--marquee-items)),
			calc(100% + var(--marquee-item-width))
		);
		--marquee-delay: calc(
			var(--marquee-duration) / var(--marquee-items) *
				(var(--marquee-items) - var(--marquee-item-index)) * -1
		);
		position: absolute;
		inset-inline-start: var(--marquee-item-offset);
		transform: translateX(-50%);
		animation: go linear var(--marquee-duration) var(--marquee-delay, 0s) infinite;
	}

	.marquee .marquee__item:nth-of-type(1) {
		--marquee-item-index: 1;
	}

	.marquee .marquee__item:nth-of-type(2) {
		--marquee-item-index: 2;
	}

	.marquee .marquee__item:nth-of-type(3) {
		--marquee-item-index: 3;
	}

	.marquee .marquee__item:nth-of-type(4) {
		--marquee-item-index: 4;
	}

	.marquee .marquee__item:nth-of-type(5) {
		--marquee-item-index: 5;
	}

	.marquee .marquee__item:nth-of-type(6) {
		--marquee-item-index: 6;
	}

	.marquee .marquee__item:nth-of-type(7) {
		--marquee-item-index: 7;
	}

	.marquee .marquee__item:nth-of-type(8) {
		--marquee-item-index: 8;
	}

	@keyframes go {
		to {
			inset-inline-start: calc(var(--marquee-item-width) * -1);
		}
	}
</style>
