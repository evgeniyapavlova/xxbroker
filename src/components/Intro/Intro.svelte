<script>
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';

	import FloatingButton from '$common/FloatingButton.svelte';
	import Platform from './Platform.svelte';
	import Devices from './Devices.svelte';
	import Button from '$common/Button.svelte';

	import './scss/intro.scss';
	export let lang, isFooterInView;

	const translation = {
		en: {
			h1: 'Trading Platform.<br />Fast investing',
			h1_caption: 'Trade 250+ assets in an advanced interface with extended functionality.',
			available_on_devices: 'Avaliable on any device',
			available_on_devices_caption: 'Control your trades from web, desktop, and mobile'
		},
		es: {
			h1: 'Plataforma de Trading.<br />Inversión rápida',
			h1_caption: 'Opera con +250 activos en una avanzada interfaz con funcionalidades extendidas.',
			available_on_devices: 'Disponible en cualquier dispositivo',
			available_on_devices_caption: 'Controla tus operaciones desde web, escritorio y móvil'
		},
		pt: {
			h1: 'Plataforma de Negociação.<br />Investimento rápido',
			h1_caption:
				'Negocie mais de 250 ativos em uma interface avançada com funcionalidade estendida.',
			available_on_devices: 'Disponível em qualquer dispositivo',
			available_on_devices_caption:
				'Controle suas negociações pela web, desktop e dispositivos móveis'
		}
	};

	const content = translation[lang];

	const { h1, h1_caption, available_on_devices, available_on_devices_caption } = content;

	let isActive = false;

	onMount(() => {
		const headerSection = document.getElementById('header');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.boundingClientRect.top < 0 && !entry.isIntersecting) {
						isActive = true;
					} else if (entry.isIntersecting) {
						isActive = false;
					}
				});
			},
			{
				root: null,
				threshold: 0.99
			}
		);

		if (headerSection) {
			observer.observe(headerSection);
		}

		return () => observer.disconnect();
	});

	let isInView = true;
	const options = {
		threshold: 0.1
	};
	const handleChange = ({ detail }) => (isInView = detail.inView);
</script>

<div class="intro" id="intro" class:active={isActive}>
	<section>
		<div class="intro-text-content" use:inview={options} on:inview_change={handleChange}>
			<h1>{@html h1}</h1>
			<div class="h1-caption">
				{h1_caption}
			</div>
			<Button />
		</div>
		<Platform />
		<Devices content={{ available_on_devices, available_on_devices_caption }} />
	</section>
</div>

<FloatingButton visible={!isInView && !isFooterInView} />
