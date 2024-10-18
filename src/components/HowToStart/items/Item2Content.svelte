<script>
	import { lang } from '$lib/stores/lang';

	import mastercard from '../img/mastercard.svg';
	import pix from '../img/pix.svg';
	import boleto from '../img/boleto.svg';
	import others from '../img/others.svg';

	const content = {
		en: '17+ more'
	};

	const items = [
		{ img: mastercard, name: 'Mastercard' },
		{ img: pix, name: 'Pix' },
		{ img: boleto, name: 'Boleto' },
		{ img: others, name: content[$lang] }
	];
</script>

<div class="start-item-content">
	{#each items as item}
		<div class="item">
			<img src={item.img} alt={item.name} loading="lazy" />
			<div class="item-name">{item.name}</div>
		</div>
	{/each}
</div>

<style>
	.start-item-content {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		align-items: stretch;
	}
	.item {
		width: calc(50% - 4px);
		border-radius: 20px;
		background-color: var(--moss-300);
		text-align: center;
		padding: 16px 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
</style>
