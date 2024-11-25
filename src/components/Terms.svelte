<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import PdfIcon from './common/pdf_icon.svelte';

	import Header from '$comps/Header/Header.svelte';

	import { lazyLoadBackground } from '$lib/utils/lazyLoadBackground';

	export let lang;

	let FooterComponent;
	async function loadFooterComponent() {
		const module = await import('./Footer/Footer.svelte');
		FooterComponent = module.default;
	}

	onMount(async () => {
		loadFooterComponent();
	});

	onMount(lazyLoadBackground);

	let isFooterInView;
</script>

<div class="main">
	<div class="intro-bgr has-bgr" data-bgimage="{base}/images/bgr/intro_bgr.svg">
		<Header isMainPage={false} {lang} />
	</div>

	<section>
		<h1>XXBroker — General Terms and Conditions</h1>
		<a
			href="{base}/pdf/xxbroker_South_Africa_-_General_Terms_and_Conditions.pdf"
			target="_blank"
			class="pdf-link"
			alt="Download PDF"
		>
			<PdfIcon /> xxbroker South Africa - General Terms and Conditions.pdf</a
		>
	</section>

	{#if FooterComponent}
		<svelte:component this={FooterComponent} {lang} bind:isFooterInView />
	{/if}
</div>

<style>
	a.pdf-link {
		transition: color ease-out 0.2s;
		align-items: center;
		justify-content: flex-start;
		display: inline-flex;
		gap: 12px;
		color: inherit;
	}

	a.pdf-link:hover {
		color: var(--acid-400);
	}
	:global(a.pdf-link svg) {
		transition: fill ease-out 0.2s;
	}
	:global(a.pdf-link:hover svg) {
		fill: var(--acid-400);
	}

	h1 {
		font-size: 48px;
		line-height: 1.1;
		font-family: var(--mabry-font);
		font-weight: 500;

		background: var(--font-gradient);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin-bottom: 32px;

		@media screen and (max-width: 484px) {
			font-size: 40px;
		}
		@media screen and (max-width: 393px) {
			font-size: 32px;
		}
	}
</style>
