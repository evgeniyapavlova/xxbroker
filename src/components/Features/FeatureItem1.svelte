<script>
	import { writable } from 'svelte/store';
	import NextFeatureButton from './NextFeatureButton.svelte';
	import icon from './img/icons/settings.svg';
	import chart_type from './img/icons/chart_type.svelte';
	import graphic_tools from './img/icons/graphic_tools.svelte';
	import indicators from './img/icons/indicators.svelte';
	import time_period from './img/icons/time_period.svelte';

	import FeatureAnimation from './FeatureAnimation.svelte';

	export let content;
	const { title, caption } = content;

	const animations = ['1_chart_type', '2_time_frame', '3_chart_type', '4_chart_analisys'];

	const icons = [chart_type, time_period, graphic_tools, indicators];

	const activeAnimation = writable(0);

	const setActiveAnimation = (index) => {
		$activeAnimation = index;
	};
</script>

<div class="feature-item">
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
		<div class="feature-toggle-animation">
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
		{#each animations as animation, index}
			<FeatureAnimation
				isActive={$activeAnimation === index}
				id="feature-1-{index}"
				bind:path={animation}
			/>
		{/each}
	</div>
</div>
