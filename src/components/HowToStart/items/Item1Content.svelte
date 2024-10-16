<script>
	import Button from '$common/Button.svelte';
	import Checkmark from './Checkmark.svelte';
</script>

<div class="start-item-content">
	<div class="ghost ghost-small ghost-1"></div>
	<div class="ghost-wrap-flex">
		<div class="ghost ghost-small ghost-2"></div>
		<div class="ghost ghost-small ghost-3"></div>
	</div>
	<div class="ghost ghost-small ghost-4"></div>
	<div class="ghost ghost-large ghost-5"><Checkmark /></div>
	<div class="ghost ghost-small ghost-4"></div>
	<div class="ghost ghost-large ghost-5"><Checkmark /></div>
	<div class="btn-wrap"><Button /></div>
</div>

<style>
	.ghost {
		background-color: var(--moss-300);
	}
	.ghost-small {
		border-radius: 8px;
		height: 10px;
		margin-bottom: 4px;
	}
	.ghost-large {
		border-radius: 16px;
		height: 46px;
		margin-bottom: 18px;
		padding: 16px;
		text-align: right;
	}
	.ghost-1 {
		width: 100%;
	}
	.ghost-2 {
		width: 32%;
	}
	.ghost-3 {
		width: 40%;
	}
	.ghost-4 {
		margin-top: 20px;
		width: 42%;
	}
	.ghost-wrap-flex {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 5px;
	}
	.btn-wrap {
		width: 100%;
	}
	:global(#start .btn-wrap .button) {
		width: 100%;
	}
</style>
