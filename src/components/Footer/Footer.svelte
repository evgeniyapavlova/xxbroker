<script>
	import Logo from '$common/LogoFooter.svelte';

	import translation from '$lib/translations/footer';

	import './scss/footer.scss';

	export let lang;
	const content = translation[lang];

	let currentYear = new Date().getFullYear();
</script>

<section class="footer">
	<footer>
		<div class="footer-links">
			{#each content.items as item}
				<div class="footer-links-block">
					<div class="footer-title">{item.title}</div>
					{#each item.items as item}
						<a href="#" target="_blank" class="footer-link">{item}</a>
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
