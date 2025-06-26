<script>
	import { inview } from 'svelte-inview';
	import { lang } from '$lib/stores/lang';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { tick } from 'svelte';
	import { names, assets, countries } from './tableData';
	import CellWithImg from './CellWithImg.svelte';
	import ArrowUp from './ArrowUp.svelte';
	import {
		formatProfit,
		getTodayDate,
		getRandomTime,
		sortByProfit,
		getRandomIndexes,
		randomizeForThreeRows,
		getRandomCountry
	} from './utils';

	import './scss/table.scss';

	export let content, buy, sell;

	const assetType = 'Crypto';
	let leaders = Array.from({ length: 20 }, (_, i) => ({
		id: i + 1,
		name: names[i],
		asset: i === 6 ? 1 : Math.floor(Math.random() * 7) + 1,
		time: getRandomTime(),
		type: Math.random() < 0.5,
		profit: Math.floor(Math.random() * (9999 - 100 + 1)) + 100,
		country: i === 6 ? 0 : getRandomCountry()
	}));

	let positions = [];

	async function animateTableUpdate() {
		const randomIndexes = getRandomIndexes(leaders);

		const rows = Array.from(document.querySelectorAll('tbody tr'));
		positions = rows.map((row) => {
			const rect = row.getBoundingClientRect();
			return { id: row.dataset.id, top: rect.top };
		});

		leaders = randomizeForThreeRows(leaders, randomIndexes);

		await tick();

		leaders = sortByProfit(leaders);

		// === Гарантировать, что Bruno J. в топ-3 ===
		const brunoIndex = leaders.findIndex((l) => l.name === 'Bruno J.');
		const bruno = leaders[brunoIndex];
		

		if (brunoIndex > 2) {
			// Выбираем случайного из топ-3 для обмена profit/time
			const swapIndex = [0, 1, 2][Math.floor(Math.random() * 3)];
			const target = leaders[swapIndex];

			// Обмен profit и time
			const tempProfit = bruno.profit;
			const tempTime = bruno.time;

			bruno.profit = target.profit;
			bruno.time = target.time;

			target.profit = tempProfit;
			target.time = tempTime;

			// Обмен местами
			leaders[brunoIndex] = target;
			leaders[swapIndex] = bruno;
		}

		await tick();

		randomIndexes.forEach((index) => {
			const leader = leaders[index];
			const row = document.querySelector(`tr[data-id="${leader.id}"]`);
			if (row) {
				const newTop = row.getBoundingClientRect().top;
				const oldTop = positions.find((pos) => pos.id == leader.id)?.top || 0;
				const deltaY = oldTop - newTop;

				if (deltaY) {
					row.style.transition = 'none';
					row.style.transform = `translateY(${deltaY}px)`;

					requestAnimationFrame(() => {
						row.style.transition = 'transform 0.5s ease';
						row.style.transform = '';
					});
				}
			}
		});
	}

	onMount(() => {
		leaders = sortByProfit(leaders);

		const interval = setInterval(animateTableUpdate, 3000);
		return () => clearInterval(interval);
	});

	let isInView;
	const options = {
		rootMargin: '5%',
		threshold: '0.4',
		unobserveOnEnter: true
	};
	const handleChange = ({ detail }) => (isInView = detail.inView);
</script>

<div class="pedestal" use:inview={options} on:inview_change={handleChange}>
	{#each [1, 2, 3] as item, index}
		<div class="pedestal-item-wrap">
			<img src="{base}/images/leaderboard/crown.svg" alt="" class="pedestal-crown" loading="lazy" />
			<div class="pedestal-lider">
				<img
					src="{base}/images/leaderboard/avatars/{leaders[index].name === 'Bruno J.'
						? 'bruno'
						: leaders[index].id - 1}.webp"
					alt=""
					width="52px"
					height="52px"
					loading="lazy"
				/>
				<div>
					<div class="pedestal-name">
						{leaders[index].name}
					</div>
					<div class="pedestal-profit">
						{formatProfit(leaders[index].profit)}
					</div>
				</div>
			</div>
			<div class="pedestal-item">
				<div class="pedestal-block">
					<div class="pedestal-block-perspective"></div>
				</div>
				<div class="number number-{index} number-italic" class:visible={isInView}>{item}</div>
			</div>
		</div>
	{/each}
</div>

<table class="leaderboard-table">
	<thead>
		<tr>
			<th>#</th>
			{#each content as thead_item}
				<th>{thead_item}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each leaders.slice(3, 10) as leader, index (leader.id)}
			<tr data-id={leader.id}>
				<td>{index + 4}</td>

				<td class="user">
					<CellWithImg src="{base}/images/leaderboard/avatars/{leader.id - 1}.webp">
						<svelte:fragment slot="title">{leader.name}</svelte:fragment>
						<svelte:fragment slot="caption">{countries[leader.country]}</svelte:fragment>
					</CellWithImg>
					<img
						src="{base}/images/leaderboard/assets/{leader.asset}.svg"
						class="mobile-asset-img"
						alt="Asset"
					/>
				</td>
				<td class="asset">
					<CellWithImg src="{base}/images/leaderboard/assets/{leader.asset}.svg">
						<svelte:fragment slot="title">{assets[leader.asset - 1]}</svelte:fragment>
						<svelte:fragment slot="caption"
							>{leader.asset === 4 ? 'Stocks' : assetType}</svelte:fragment
						>
					</CellWithImg>
				</td>
				<td>{leader.time}</td>
				<td style="white-space: nowrap;">{getTodayDate($lang)}</td>
				<td class:buy={leader.type} class="deal-type">
					<span><ArrowUp />{leader.type ? buy : sell}</span>
				</td>
				<td class="profit">{formatProfit(leader.profit)}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.number.visible {
		opacity: 0.5;
		transform: translateY(0);
	}

	.number {
		opacity: 0;
		transform: translateY(50px);
		transition:
			opacity 1s ease,
			transform 1s ease;
	}
	.number-1 {
		transition-delay: 0.05s;
	}
	.number-2 {
		transition-delay: 0.1s;
	}
</style>
