<script>
	import { onMount } from 'svelte';
	import translation from '$lib/translations/leaderboard';

	import LiveTag from './LiveTag.svelte';
	import Table from './Table.svelte';

	import './scss/leaderboard.scss';
	import './scss/pedestal.scss';

	export let lang;

	const content = translation[lang];

	let section;
</script>

<div class="leaderboard-content-wrap" bind:this={section}>
	<LiveTag>{content.live}</LiveTag>
	<div class="content">
		<h2>{content.h2}</h2>

		<Table content={content.table_head} buy={content.buy} sell={content.sell} />
	</div>
</div>
