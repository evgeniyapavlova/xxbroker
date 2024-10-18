<script>
	import { inview } from 'svelte-inview';
	import translation from '$lib/translations/conditions';

	import MethodsList from './MethodsList.svelte';

	import './scss/conditions.scss';

	import img1 from './img/img1.webp?enhanced';
	import img2 from './img/img2.webp?enhanced';
	import img3 from './img/img3.webp?enhanced';

	export let lang;

	const { h2, items, h2_2 } = translation[lang];

	const itemsData = [
		{ img: img1, title: '$10k' },
		{ img: img2, title: '$10' },
		{ img: img3, title: '$1' }
	];

	let isInView;
	const options = {
		rootMargin: '500px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }) => (isInView = detail.inView);
</script>

<section class="conditions" id="conditions" use:inview={options} on:inview_change={handleChange}>
	<div class="conditions-content-wrap">
		<h2>{h2}</h2>
		<div class="conditions-list">
			{#each items as item, index}
				<div class="conditions-item">
					{#if isInView}
						<enhanced:img src={itemsData[index].img} alt="Condition {index + 1}" loading="lazy" />
					{/if}
					<div class="conditions-item-title">
						{itemsData[index].title}
					</div>

					<div class="conditions-item-caption">{item}</div>
				</div>
			{/each}
		</div>

		<MethodsList title={h2_2} />
	</div>
</section>
