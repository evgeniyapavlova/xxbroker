<script>
	import LoginButton from './LoginButton.svelte';
	import GetStartedButton from './GetStartedButton.svelte';
	import LangSwitcher from './LangSwitcher/LangSwitcher.svelte';
	import HeaderMenu from './HeaderMenu.svelte';
	import DownloadLogo from './DownloadLogo.svelte';

	import './scss/header.scss';

	export let lang,
		isMainPage = true;
	const translation = {
		en: {
			menu: ['Leaderboard', 'How to start', 'Features', 'Awards'],
			login: 'Log in',
			get_started: 'Get started',
			new: 'New',
			mobile_menu_label: 'Menu'
		},
		es: {
			menu: ['Clasificación', 'Cómo empezar', 'Funciones', 'Premios'],
			login: 'Acceder',
			get_started: 'Comienza',
			new: 'Nuevo',
			mobile_menu_label: 'Menu'
		},
		pt: {
			menu: ['Tabela de classificação', 'Como começar', 'Recursos', 'Prêmios'],
			login: 'Entrar',
			get_started: 'Iniciar',
			new: 'Novidade',
			mobile_menu_label: 'Menu'
		}
	};
	const content = translation[lang];
</script>

<section class="header-wrap" id="header">
	<header>
		<DownloadLogo />
		{#if isMainPage}
			<HeaderMenu {content} />
			<LangSwitcher />
		{:else}
			<div style="flex-grow: 1;"></div>
		{/if}

		<LoginButton><div id="header-login-label">{content.login}</div></LoginButton>
		<GetStartedButton>{content.get_started}</GetStartedButton>
	</header>
</section>
