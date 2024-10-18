<script>
	import { lang } from '$lib/stores/lang';
	import { isLottieLoaded } from '$lib/stores/isLottieLoaded';
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';

	import icon from './img/icons/redo.svg';
	import checkmark from './img/icons/checkmark.svelte';
	import practice from './img/icons/practice.svelte';
	import real from './img/icons/real.svelte';
	import { linkRegister } from '$lib/stores/reg_link';

	import NextFeatureButton from './NextFeatureButton.svelte';

	const translation = {
		en: {
			title: 'Refillable demo account',
			caption:
				'Stress-test your strategies on the $10K Practice account. No expiration, no pressure.',
			items: ['Practice', 'Real'],
			switch: 'To switch to the Real account, please sign up',
			sign_up: 'Sign up'
		},
		es: {
			title: 'Cuenta Demo Recargable',
			caption:
				'Prueba tus estrategias en la cuenta de práctica de 10.000 $. Sin plazos ni presiones.',
			items: ['Práctica', 'Real'],
			switch: 'Para cambiar a la cuenta Real, por favor regístrate',
			sign_up: 'Registro'
		},
		pt: {
			title: 'Conta de demonstração recarregável',
			caption:
				'Teste suas estratégias na conta de prática de $ 10 mil. Sem expiração, sem pressão.',
			items: ['Prática', 'Real'],
			switch: 'Para mudar para a conta Real, registre-se',
			sign_up: 'Registre-se'
		}
	};

	const content = translation[$lang];

	const { title, caption } = content;

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

<div class="feature-item" id="feature-2" use:inview={options} on:inview_change={handleChange}>
	<div class="feature-icon" class:visible={isInView}>
		<img src={icon} alt="Analysis tools feature icon" />
	</div>

	<div class="feature-content">
		<div class="feature-title">{title}</div>
		<div class="feature-caption">{caption}</div>
		<div class="feature-toggle-account">
			<button aria-label="Change account type" class="practice">
				<div class="icon-wrap"><svelte:component this={practice} /></div>
				<span>{@html content.items[0]}</span>
				<div class="checkmark"><svelte:component this={checkmark} /></div>
			</button>
			<button aria-label="Change account type" class="real">
				<div class="icon-wrap"><svelte:component this={real} /></div>
				<span>{@html content.items[1]}</span>
				<div class="checkmark"></div>
				<div class="real-account-tooltip">
					{content.switch}
					<a href={$linkRegister} class="button button-medium button-bordered">{content.sign_up}</a>
				</div>
			</button>
		</div>
		<NextFeatureButton href="#feature-3" />
	</div>
	<div class="feature-animation">
		{#if FeatureAnimationComponent && $isLottieLoaded}
			<svelte:component
				this={FeatureAnimationComponent}
				id="feature-2-animation"
				path="5_practice_real_account"
			/>
		{/if}
	</div>
</div>
