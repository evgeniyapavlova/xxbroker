<script>
	import translation from '$lib/translations/achievements';

	import AchievementItem from './AchievementItem.svelte';

	import './scss/achievements.scss';

	import award_1 from './img/award_1.webp';
	import award_2 from './img/award_2.webp';
	import award_3 from './img/award_3.webp';

	export let lang;
	const { h2, caption, items } = translation[lang];

	const data = [
		{
			company: 'Forex Daily Info',
			year: '2022',
			image: award_1
		},
		{
			company: 'International<br />Business<br />Magazine',
			year: '2023',
			image: award_2
		},
		{
			company: 'Forex Daily Info',
			year: '2024',
			image: award_3
		}
	];
</script>

<section class="achievements" id="awards">
	<div class="title">
		<h2>{@html h2}</h2>
		<div class="caption">{caption}</div>
	</div>
	<div class="achievements-list">
		{#each items as item, index}
			<AchievementItem {index} data={data[index]} {item} />{/each}
	</div>
</section>
