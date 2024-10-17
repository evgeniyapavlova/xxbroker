<script>
	import { inview } from 'svelte-inview';
	import { writable } from 'svelte/store';
	import icon from './img/icons/users.svg';
	import leaderboard from './img/icons/leaderboard.svelte';
	import chats from './img/icons/chats.svelte';

	import FeatureAnimation from './FeatureAnimation.svelte';

	export let content;
	const { title, caption } = content;

	const animations = ['6_leaderboard', '7_chat_support'];

	const icons = [leaderboard, chats];

	const activeAnimation = writable(0);

	const setActiveAnimation = (index) => {
		$activeAnimation = index;
	};

	let isInView;
	const options = {
		threshold: 0.5,
		unobserveOnEnter: true
	};
	const handleChange = ({ detail }) => (isInView = detail.inView);
</script>

<div class="feature-item" id="feature-3" use:inview={options} on:inview_change={handleChange}>
	<div class="feature-icon" class:visible={isInView}>
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
	</div>
	<div class="feature-animation">
		{#each animations as animation, index}
			<FeatureAnimation
				isActive={$activeAnimation === index}
				id="feature-3-{index}"
				bind:path={animation}
			/>
		{/each}
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
