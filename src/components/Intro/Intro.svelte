<script>
	import { onMount } from 'svelte';
	import Platform from './Platform.svelte';
	import Devices from './Devices.svelte';
	import './scss/intro.scss';
	export let content;

	const { h1, h1_caption, button, available_on_devices, available_on_devices_caption } = content;

	let introSectionContent;
	let isActive = false;

	onMount(() => {
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

		if (introSectionContent) {
			observer.observe(introSectionContent);
		}

		return () => observer.disconnect();
	});
</script>

<div class="intro" id="intro" class:active={isActive}>
	<section>
		<div class="intro-text-content" bind:this={introSectionContent}>
			<h1>{@html h1}</h1>
			<div class="h1-caption">
				{h1_caption}
			</div>
			<div class="button button-primary button-large">
				{button}
			</div>
		</div>
		<Platform />
		<Devices content={{ available_on_devices, available_on_devices_caption }} />
	</section>
</div>
