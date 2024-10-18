<script>
	import { lang } from '$lib/stores/lang';
	import Bitcoin from '../img/bitcoin.svg';
	import Ripple from '../img/ripple.svg';
	import Reddit from '../img/reddit.svg';

	const content = {
		en: 'Day change'
	};

	const items = [
		{ name: 'Bitcoin', percent: '1.3', img: Bitcoin },
		{ name: 'Ripple', percent: '15.4', img: Ripple },
		{ name: 'Reddit', percent: '33.9', img: Reddit }
	];
</script>

<div class="start-item-content">
	{#each items as item}
		<div class="item">
			<img src={item.img} alt={item.name} loading="lazy" />
			<div class="item-text">
				<div class="item-name">{item.name}</div>
				<div class="item-caption">
					<span>+{item.percent}%</span> · {content[$lang]}
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.start-item-content {
		display: flex;
		flex-direction: column;
		gap: 8px;
		justify-content: space-between;
	}
	.item {
		background-color: var(--moss-300);
		border-radius: 20px;
		padding: 16px 18px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 12px;
	}
	.item-name {
		color: var(--moss-800);
		font-size: 14px;
		line-height: 1.5;
		font-weight: 500;
	}
	.item-caption {
		font-size: 12px;
		color: var(--moss-600);
	}
	span {
		font-weight: 500;
		color: var(--forest-600);
	}
</style>
