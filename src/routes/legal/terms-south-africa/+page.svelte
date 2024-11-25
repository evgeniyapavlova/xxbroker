<script>
	import { lang } from '$lib/stores/lang';
	import Terms from '$comps/Terms.svelte';
	import meta_img from '$lib/images/meta__img__en.jpg';
	const title = 'XXBroker — General Terms and Conditions';
	const desc =
		'These Terms & Conditions shall regulate the legal relationship between Sun Wave LLC operating the global brand XXBROKER with company No. L 22402 and registered at the Lighthouse Trust Nevis Ltd';

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

<Terms lang="en" />
