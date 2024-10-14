<script>
	import { lang } from '$lib/stores/lang';
	import { base } from '$app/paths';

	import { locales } from './locales';

	import Dropdown from '$common/Dropdown/Dropdown.svelte';
	import Arrow from './Arrow.svelte';

	import './lang-switcher.scss';

	const currentLocaleObj = locales.find(({ code }) => code === $lang);
</script>

<Dropdown
	buttonClass="lang-switcher button-secondary button-locale button-medium button-locale-{$lang}"
	id="lang-switcher"
>
	<svelte:fragment slot="toggle-button">
		<div id="lang-switcher-label">{currentLocaleObj.label}</div>
		<Arrow />
	</svelte:fragment>

	<svelte:fragment slot="content">
		{#each locales.filter(({ code }) => code !== $lang) as locale}
			<a
				class="button-secondary button-medium button-locale button-locale-{locale.code}"
				href="{base}/{locale.code}"
			>
				{locale.label}
			</a>
		{/each}
	</svelte:fragment>
</Dropdown>
