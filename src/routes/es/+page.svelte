<script>
	import { lang } from '$lib/stores/lang';
	import AllBlocks from '$comps/AllBlocks.svelte';
	import meta_img from '$lib/images/meta__img__es.jpg';
	const title = 'XXBroker — Plataforma de Trading. Inversión rápida';
	const desc = 'Opera con +250 activos en una avanzada interfaz con funcionalidades extendidas.';

	$lang = 'es';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={meta_img} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content={meta_img} />
</svelte:head>

<AllBlocks lang="es" />
