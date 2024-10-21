<script>
	import { lang } from '$lib/stores/lang';
	import { isLottieLoaded } from '$lib/stores/isLottieLoaded';
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';
	import { writable } from 'svelte/store';
	import NextFeatureButton from './NextFeatureButton.svelte';
	import icon from './img/icons/settings.svg';
	import chart_type from './img/icons/chart_type.svelte';
	import graphic_tools from './img/icons/graphic_tools.svelte';
	import indicators from './img/icons/indicators.svelte';
	import time_period from './img/icons/time_period.svelte';

	const translation = {
		en: {
			title: 'Analysis tools',
			caption:
				'Multi-charting, 100+ indicators, widgets, and graphical tools for supreme price analysis.',
			items: ['Chart<br />type', 'Time<br />period', 'Graphic<br />tools', 'Indica&shy;tors']
		},
		es: {
			title: 'Herramientas de análisis',
			caption:
				'Multi-gráficos, + 100 indicadores, widgets y herramientas gráficas para un análisis de precios supremo.',
			items: [
				'Tipo de<br />Gráfico',
				'Periodo<br />de tiempo',
				'Herra&shy;mientas<br />gráficas',
				'Indica&shy;dores'
			]
		},
		pt: {
			title: 'Ferramentas de análise',
			caption:
				'Gráficos múltiplos, mais de 100 indicadores, widgets e ferramentas gráficas para uma análise de preços excepcional.',
			items: [
				'Tipos de<br />gráfico',
				'Período',
				'Ferra&shy;mentas<br />gráficas',
				'Indica&shy;dores'
			]
		}
	};

	const content = translation[$lang];

	const { title, caption } = content;

	const animations = ['1_chart_type', '2_time_frame', '3_chart_type', '4_chart_analisys'];

	const icons = [chart_type, time_period, graphic_tools, indicators];

	const activeAnimation = writable(0);
	let currentAnimationPath = animations[0];

	const setActiveAnimation = (index) => {
		$activeAnimation = index;
		currentAnimationPath = animations[index];
	};

	let isInView;
	const options = {
		threshold: 0.5,
		unobserveOnEnter: true
	};
	const handleChange = ({ detail }) => (isInView = detail.inView);

	let FeatureAnimationComponent;
	async function loadAnimationComponent() {
		const module = await import('./FeatureAnimation.svelte');
		FeatureAnimationComponent = module.default;
	}
	onMount(async () => {
		loadAnimationComponent();
	});
</script>

<div class="feature-item" use:inview={options} on:inview_change={handleChange}>
	<div class="feature-icon">
		<img src={icon} alt="Analysis tools feature icon" />
	</div>
	<div class="feature-content">
		<div class="feature-title">
			{title}
		</div>
		<div class="feature-caption">
			{caption}
		</div>
		<div class="feature-toggle-animation" class:visible={isInView}>
			{#each content.items as item, index}
				<button
					class="toggle-btn"
					aria-label="Toggle animation"
					class:active={index === $activeAnimation}
					on:click={() => setActiveAnimation(index)}
				>
					<div class="icon-wrap">
						<svelte:component this={icons[index]} />
					</div>
					<span>{@html item}</span>
				</button>
			{/each}
		</div>
		<NextFeatureButton href="#feature-2" />
	</div>
	<div class="feature-animation">
		{#if FeatureAnimationComponent && $isLottieLoaded}
			<svelte:component
				this={FeatureAnimationComponent}
				id="feature-1-animation"
				bind:path={currentAnimationPath}
			/>
		{/if}
	</div>
</div>

<style>
	.feature-toggle-animation {
		opacity: 0;
		transform: translateY(50px);
		transition:
			opacity 1s ease,
			transform 1s ease;
	}
	.feature-toggle-animation.visible {
		opacity: 1;
		transform: translateY(0);
	}
</style>
