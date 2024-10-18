<script>
	import { lang } from '$lib/stores/lang';
	import AllBlocks from '$comps/AllBlocks.svelte';
	import meta_img from '$lib/images/meta__img__pt.jpg';
	const title = 'XXBroker — Plataforma de Negociação. Investimento rápido';
	const desc = 'Negocie mais de 250 ativos em uma interface avançada com funcionalidade estendida.';

	$lang = 'pt';
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

<AllBlocks lang="pt" />
