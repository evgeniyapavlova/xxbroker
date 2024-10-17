<script>
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';

	import icon from './img/icons/redo.svg';
	import checkmark from './img/icons/checkmark.svelte';
	import practice from './img/icons/practice.svelte';
	import real from './img/icons/real.svelte';
	import { linkRegister } from '$lib/stores/reg_link';

	import NextFeatureButton from './NextFeatureButton.svelte';

	export let content;
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
		{#if FeatureAnimationComponent}
			<svelte:component
				this={FeatureAnimationComponent}
				id="feature-2"
				path="5_practice_real_account"
			/>
		{/if}
	</div>
</div>
