<script>
	import { lang } from '$lib/stores/lang';
	import AllBlocks from '$comps/AllBlocks.svelte';
	import meta_img from '$lib/images/meta__img__en.jpg';
	const title = 'XXBroker — Trading Platform. Fast investing';
	const desc = 'Trade 250+ assets in an advanced interface with extended functionality.';

	$lang = 'en';
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

<AllBlocks lang="en" />
