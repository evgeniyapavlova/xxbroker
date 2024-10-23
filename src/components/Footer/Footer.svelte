<script>
	import { inview } from 'svelte-inview';

	import Logo from '$common/LogoFooter.svelte';

	import translation, { links } from '$lib/translations/footer';

	import './scss/footer.scss';

	export let lang;
	const content = translation[lang];

	let currentYear = new Date().getFullYear();

	export let isFooterInView = false;
	const options = {
		threshold: 0,
		rootMargin: '40px'
	};
	const handleChange = ({ detail }) => (isFooterInView = detail.inView);
</script>

<section class="footer" use:inview={options} on:inview_change={handleChange}>
	<footer>
		<div class="footer-links">
			{#each content.items as item, index1}
				<div class="footer-links-block">
					<div class="footer-title">{item.title}</div>
					{#each item.items as item, index2}
						<a href={links[index1].items[index2]} target="_blank" class="footer-link">{item}</a>
					{/each}
				</div>
			{/each}
		</div>
		<div class="footer-address">{@html content.address}</div>
		<div class="footer-info">
			<a href="mailto:support@xxbroker.com">support@xxbroker.com</a>
			<span>XXBroker, 2015–{currentYear}</span>
		</div>
	</footer>
	<div class="footer-logo">
		<Logo />
	</div>
</section>
