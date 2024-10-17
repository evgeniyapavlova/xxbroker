<script>
	import './scss/features.scss';
	import './scss/feature-item.scss';
	import FeatureItem1 from './FeatureItem1.svelte';
	import FeatureItem2 from './FeatureItem2.svelte';
	import FeatureItem3 from './FeatureItem3.svelte';

	export let content;
</script>

<section class="features" id="features">
	<div class="features-content-wrap">
		<div class="content">
			<div class="features-title">
				<h2>{content.h2}</h2>
				<div class="caption">{content.caption}</div>
			</div>
			<FeatureItem1 content={content.items[0]} />
			<FeatureItem2 content={content.items[1]} />
			<FeatureItem3 content={content.items[2]} />
		</div>
	</div>
</section>
