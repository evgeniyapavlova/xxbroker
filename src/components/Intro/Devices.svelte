<script>
	import { device } from '$lib/stores/isDesktop';
	import './scss/devices.scss';

	import Windows from './devices_buttons/Windows.svelte';
	import InstantMobileApp from './devices_buttons/InstantMobileApp.svelte';
	import AndroidApk from './devices_buttons/AndroidAPK.svelte';
	import MacOS from './devices_buttons/MacOS.svelte';

	export let content;

	const { available_on_devices, available_on_devices_caption } = content;

	const apps = {
		windows: [Windows, InstantMobileApp, AndroidApk],
		mac: [MacOS, InstantMobileApp, AndroidApk],
		android: [InstantMobileApp, AndroidApk],
		ios: [InstantMobileApp]
	};
</script>

<div class="devices-wrap">
	<div class="devices-content-title">{available_on_devices}</div>
	<div class="devices-content-desc">{available_on_devices_caption}</div>
	<div class="devices-btns">
		{#each apps[$device] as app}
			<svelte:component this={app} />
		{/each}
	</div>
</div>
