<script>
	import { onMount } from 'svelte';
	import { lang } from '$lib/stores/lang';
	import { getURLParameters } from '$lib/utils/getAffParams';
	import { searchString } from '$lib/stores/affs';
	import { linkLogin, linkRegister, linkTraderoom } from '$lib/stores/reg_link';

	import '$lib/styles/_constants.scss';
	import '$lib/styles/typography.scss';
	import '$lib/styles/buttons.scss';
	import './styles.scss';

	let isStyleLoaded = false;

	async function loadStyle() {
		if (!isStyleLoaded) {
			await import('../lib/styles/fonts.css');
			isStyleLoaded = true;
		}
	}

	onMount(async () => {
		loadStyle();
	});

	onMount(() => {
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
