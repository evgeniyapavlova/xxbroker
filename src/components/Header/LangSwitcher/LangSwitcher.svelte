<script>
	import { lang } from '$lib/stores/lang';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { fade } from 'svelte/transition';

	import { locales } from './locales';
	import './lang-switcher.scss';
	import Arrow from './Arrow.svelte';

	const currentLocaleObj = locales.find(({ code }) => code === $lang);

	let isExpanded = false;

	onMount(() => {
		function handleClick(event) {
			const targetElement = event.target;
			const wrapElement = document.getElementById('wrap-lang-switch');
			const menuElement = document.getElementById('menu-lang-switch');

			if (!wrapElement.contains(targetElement) && !menuElement?.contains(targetElement)) {
				isExpanded = false;
			}
		}

		document.body.addEventListener('click', handleClick);

		return () => {
			document.body.removeEventListener('click', handleClick);
		};
	});
</script>

<div class="wrap" id="wrap-lang-switch">
	<button
		class="lang-switcher button-secondary button-locale button-medium button-locale-{$lang}"
		on:click={() => (isExpanded = !isExpanded)}
		class:is-expanded={isExpanded}
		aria-label="Open languages menu"
	>
		{currentLocaleObj.label}
		<Arrow />
	</button>

	{#if isExpanded}
		<menu id="menu-lang-switch" transition:fade>
			<div class="menu-inner">
				{#each locales.filter(({ code }) => code !== $lang) as locale}
					<a
						class="button-secondary button-medium button-locale button-locale-{locale.code}"
						href="{base}/{locale.code}"
					>
						{locale.label}
					</a>
				{/each}
			</div>
		</menu>
	{/if}
</div>
