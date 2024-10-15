<script>
	import { slide } from 'svelte/transition';
	import Table from './Table.svelte';

	import LiveTag from './LiveTag.svelte';
	export let content;
	import './scss/leaderboard.scss';
	import './scss/pedestal.scss';
</script>

<!-- in:slide={{ delay: 250, duration: 300, axis: 'y' }} -->
<section class="leaderboard" id="leaderboard">
	<div class="leaderboard-content-wrap">
		<LiveTag>{content.live}</LiveTag>
		<div class="content">
			<h2>{content.h2}</h2>

			<Table content={content.table_head} buy={content.buy} sell={content.sell} />
		</div>
	</div>
</section>
