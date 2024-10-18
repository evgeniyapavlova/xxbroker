<script>
	import { inview } from 'svelte-inview';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { tick } from 'svelte';
	import { tableData, assets } from './tableData';
	import CellWithImg from './CellWithImg.svelte';
	import ArrowUp from './ArrowUp.svelte';
	import './scss/table.scss';

	export let content, buy, sell;

	const county = 'Brazil';
	const assetType = 'Crypto';

	function getTodayDate() {
		const today = new Date();
		const day = today.getDate().toString().padStart(2, '0');
		const options = { month: 'short' };
		const month = today.toLocaleDateString('en-US', options);
		return `${day} ${month}`;
	}

	function formatTime(time) {
		const timeArray = time.toTimeString().split(' ')[0].split(':');
		return timeArray[0] + ':' + timeArray[1];
	}

	const formatProfit = (profit) => '+$' + profit.toLocaleString('en-US');

	function getRandomTime() {
		const now = new Date();
		const past = new Date(now.getTime() - 5 * 60 * 1000);
		const randomTime = new Date(past.getTime() + Math.random() * (now - past));
		return formatTime(randomTime);
	}

	let leaders = Array.from({ length: 17 }, (_, i) => ({
		id: i + 1,
		name: tableData[i].name,
		asset: Math.floor(Math.random() * 7) + 1,
		time: getRandomTime(),
		date: getTodayDate(),
		type: Math.random() < 0.5,
		profit: Math.floor(Math.random() * (9999 - 100 + 1)) + 100
	}));

	function sortByProfit(arr) {
		return arr.sort((a, b) => b.profit - a.profit);
	}

	function randomizeForThreeRows(data, randomIndexes) {
		return data.map((item, index) => {
			if (randomIndexes.includes(index)) {
				return {
					...item,
					asset: Math.floor(Math.random() * 7) + 1,
					time: formatTime(new Date()),
					type: Math.random() < 0.5,
					profit: Math.floor(Math.random() * (9999 - 100 + 1)) + 100
				};
			}
			return item;
		});
	}

	let positions = [];

	function getRandomIndexes() {
		const indexes = [];
		while (indexes.length < 3) {
			const randIndex = Math.floor(Math.random() * leaders.length);
			if (!indexes.includes(randIndex)) {
				indexes.push(randIndex);
			}
		}
		return indexes;
	}

	async function animateTableUpdate() {
		const randomIndexes = getRandomIndexes();

		const rows = Array.from(document.querySelectorAll('tbody tr'));
		positions = rows.map((row) => {
			const rect = row.getBoundingClientRect();
			return { id: row.dataset.id, top: rect.top };
		});

		leaders = randomizeForThreeRows(leaders, randomIndexes);

		await tick();

		leaders = sortByProfit(leaders);

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
			<img src="{base}/images/leaderboard/crown.png" alt="" class="pedestal-crown" loading="lazy" />
			<div class="pedestal-lider">
				<img
					src="{base}/images/leaderboard/avatars/{leaders[index].id}.webp"
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
				<div class="pedestal-block"></div>
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
					<CellWithImg src="{base}/images/leaderboard/avatars/{leader.id}.webp">
						<svelte:fragment slot="title">{leader.name}</svelte:fragment>
						<svelte:fragment slot="caption">{county}</svelte:fragment>
					</CellWithImg>
					<img
						src="{base}/images/leaderboard/assets/{leader.asset}.webp"
						class="mobile-asset-img"
						alt="Asset"
					/>
				</td>
				<td class="asset">
					<CellWithImg src="{base}/images/leaderboard/assets/{leader.asset}.webp">
						<svelte:fragment slot="title">{assets[leader.asset - 1]}</svelte:fragment>
						<svelte:fragment slot="caption"
							>{leader.asset === 4 ? 'Stocks' : assetType}</svelte:fragment
						>
					</CellWithImg>
				</td>
				<td>{leader.time}</td>
				<td>{leader.date}</td>
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
