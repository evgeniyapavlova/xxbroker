<script>
	import { base } from '$app/paths';
	import Logo from '$common/Logo.svelte';
	import LoginButton from './LoginButton.svelte';
	import GetStartedButton from './GetStartedButton.svelte';
	import LangSwitcher from './LangSwitcher/LangSwitcher.svelte';
	import HeaderMenu from './HeaderMenu.svelte';

	import './scss/header.scss';

	export let lang;
	const translation = {
		en: {
			menu: ['Leaderboard', 'How to start', 'Features', 'Awards'],
			login: 'Log in',
			get_started: 'Get started',
			new: 'New',
			mobile_menu_label: 'Menu'
		}
	};
	const content = translation[lang];
</script>

<section class="header-wrap" id="header">
	<header>
		<a href={base} class="logo-link">
			<Logo />
		</a>
		<HeaderMenu {content} />
		<LangSwitcher />
		<LoginButton><div id="header-login-label">{content.login}</div></LoginButton>
		<GetStartedButton>{content.get_started}</GetStartedButton>
	</header>
</section>
