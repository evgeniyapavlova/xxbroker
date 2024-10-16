<script>
	import { lang } from '$lib/stores/lang';
	import { linkRegister } from '$lib/stores/reg_link';

	const content = {
		en: 'Get started for free'
	};
</script>

<a class="button button-primary button-large" href={$linkRegister} alt="Go to registration">
	{content[$lang]}
</a>
