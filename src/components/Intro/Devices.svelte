<script>
	import { linkTraderoom } from '$lib/stores/reg_link';

	import web from './img/web.svelte';
	import desktop from './img/desktop.svelte';
	import mobile from './img/mobile.svelte';

	const icons = [desktop, mobile, web];
	export let content;
	const { available_on_devices, available_on_devices_caption } = content;
</script>

<div class="devices-wrap">
	<div class="devices-icons">
		{#each icons as icon}
			<a href={$linkTraderoom} alt="Go to traderoom">
				<svelte:component this={icon} />
			</a>
		{/each}
	</div>
	<div class="devices-content">
		<div class="devices-content-title">{available_on_devices}</div>
		<div class="devices-content-desc">{available_on_devices_caption}</div>
	</div>
</div>
