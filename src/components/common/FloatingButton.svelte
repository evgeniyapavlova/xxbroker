<script>
	import Button from './Button.svelte';
	export let visible;
</script>

<div class="floating-button" class:visible>
	<Button />
</div>

<style>
	.floating-button {
		position: fixed;
		left: 0;
		bottom: 0;
		padding: 44px 0;
		text-align: center;
		z-index: 2;
		width: 100%;
		opacity: 0;
		transform: translateY(150px);
		transition:
			opacity 0.2s ease-out,
			transform 0.2s ease-out;
	}
	.floating-button.visible {
		opacity: 1;
		transform: translateY(0);
	}
	@media screen and (max-width: 1350px) {
		.floating-button {
			padding: 32px 0;
		}
	}
	@media screen and (max-width: 720px) {
		.floating-button {
			padding: 24px 0;
		}
	}
	@media screen and (max-width: 480px) {
		.floating-button {
			padding: 20px 0;
		}
	}
</style>
