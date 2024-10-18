<script>
	export let src = '';
</script>

<div class="cell-with-image">
	<img {src} width="40px" height="40px" alt="" />
	<div class="cell-text">
		<div class="cell-title">
			<slot name="title" />
		</div>
		<div class="cell-caption">
			<slot name="caption" />
		</div>
	</div>
</div>

<style>
	.cell-with-image {
		display: flex;
		gap: 12px;
		align-items: center;
		justify-content: flex-start;
	}
	.cell-title {
		font-weight: 500;
		white-space: nowrap;
	}
	.cell-caption {
		color: var(--moss-600);
	}
</style>
