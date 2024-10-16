<script>
	import img1 from './img/1.webp';
	import img2 from './img/2.webp';
	import img3 from './img/3.webp';
	import img4 from './img/4.webp';
	import img5 from './img/5.webp';

	import './scss/people.scss';

	import { inview } from 'svelte-inview';

	let isInView;
	const options = {
		rootMargin: '500px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }) => (isInView = detail.inView);
</script>

<div class="people">
	<div class="content" use:inview={options} on:inview_change={handleChange}>
		{#if isInView}
			<img src={img1} alt="Girl with iPad" class="people-img-1" />
			<div>
				<img src={img2} alt="Man with laptop" class="people-img-2" />
				<img src={img3} alt="Man with laptop" class="people-img-3" />
			</div>
			<img src={img4} alt="Man with mobile phone" class="people-img-4" />
			<img src={img5} alt="Girl with laptop" class="people-img-5" />
		{:else}
			<div style="height: 600px;"></div>
		{/if}
	</div>
</div>
