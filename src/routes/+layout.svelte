<script>
	import { onMount } from 'svelte';
	import { lang } from '$lib/stores/lang';
	import { getURLParameters } from '$lib/utils/getAffParams';
	import { searchString } from '$lib/stores/affs';
	import { linkLogin, linkRegister, linkTraderoom } from '$lib/stores/reg_link';

	import { lazyLoadBackground } from '$lib/utils/lazyLoadBackground';

	import '$lib/styles/_constants.scss';
	import '$lib/styles/fonts.css';
	import '$lib/styles/typography.scss';
	import '$lib/styles/buttons.scss';
	import './styles.scss';

	onMount(() => {
		lazyLoadBackground();

		$searchString = getURLParameters();

		$linkRegister += $lang + '/register' + $searchString;
		$linkLogin += $lang + '/login' + $searchString;
		$linkTraderoom += $lang + $searchString;
	});
</script>

<div class="app">
	<slot />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
