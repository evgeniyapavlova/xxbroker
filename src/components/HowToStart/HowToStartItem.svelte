<script>
	export let index, item, content, isInView;
</script>

<div class="start-item start-item-{index}" class:visible={isInView}>
	<div class="start-number number-italic">{index + 1}</div>
	<svelte:component this={content} />
	<div class="start-title">{item.title}</div>
	<div class="start-caption">{item.caption}</div>
</div>

<style>
	.start-item {
		transform: translate3d(0px, 60px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)
			rotateZ(0deg) skew(0deg, 0deg);
		transition:
			transform 0.5s ease-out,
			opacity 0.4s ease-out;
		transform-style: preserve-3d;
		opacity: 0;
	}
	.start-item-0 {
		transition-delay: 0s;
	}
	.start-item-1 {
		transition-delay: 0.2s;
	}
	.start-item-2 {
		transition-delay: 0.4s;
	}
	.start-item-3 {
		transition-delay: 0.6s;
	}

	.start-item.visible {
		opacity: 1;
		transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
			skew(0deg, 0deg);
	}
</style>
