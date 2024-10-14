<script>
	import { base } from '$app/paths';
	import Logo from '$common/Logo.svelte';
	import LoginButton from './LoginButton.svelte';
	import GetStartedButton from './GetStartedButton.svelte';
	import LangSwitcher from './LangSwitcher/LangSwitcher.svelte';
	import HeaderMenu from './HeaderMenu.svelte';

	import './scss/header.scss';

	export let content;
</script>

<section class="header-wrap">
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
