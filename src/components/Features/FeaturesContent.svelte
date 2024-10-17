<script>
	import { onMount } from 'svelte';

	let Feature1;
	async function loadFeature1() {
		const module = await import('./FeatureItem1.svelte');
		Feature1 = module.default;
	}

	let Feature2;
	async function loadFeature2() {
		const module = await import('./FeatureItem2.svelte');
		Feature2 = module.default;
	}

	let Feature3;
	async function loadFeature3() {
		const module = await import('./FeatureItem3.svelte');
		Feature3 = module.default;
	}

	onMount(async () => {
		loadFeature1();
		loadFeature2();
		loadFeature3();
	});
</script>

{#if Feature1}
	<svelte:component this={Feature1} />
{/if}
{#if Feature2}
	<svelte:component this={Feature2} />
{/if}
{#if Feature3}
	<svelte:component this={Feature3} />
{/if}
