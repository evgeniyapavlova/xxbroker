<script>
	import translation from '$lib/translations/leaderboard';

	import Table from './Table.svelte';
	import LiveTag from './LiveTag.svelte';

	import './scss/leaderboard.scss';
	import './scss/pedestal.scss';

	export let lang;

	const content = translation[lang];
</script>

<section class="leaderboard" id="leaderboard">
	<div class="leaderboard-content-wrap">
		<LiveTag>{content.live}</LiveTag>
		<div class="content">
			<h2>{content.h2}</h2>

			<Table content={content.table_head} buy={content.buy} sell={content.sell} />
		</div>
	</div>
</section>
