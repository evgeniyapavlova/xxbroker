<script>
	import { onMount } from 'svelte';

	import './dropdown.scss';

	let isExpanded = false;

	export let buttonClass = '',
		id;

	const wrapId = `${id}-wrap`;
	const menuId = `${id}`;

	onMount(() => {
		function handleClick(event) {
			const targetElement = event.target;
			const wrapElement = document.getElementById(wrapId);
			const menuElement = document.getElementById(menuId);

			if (!wrapElement.contains(targetElement) && !menuElement?.contains(targetElement)) {
				isExpanded = false;
			}
		}

		document.body.addEventListener('click', handleClick);

		return () => {
			document.body.removeEventListener('click', handleClick);
		};
	});
</script>

<div class="dropdown-wrap" id={wrapId}>
	<button
		class={buttonClass}
		on:click={() => (isExpanded = !isExpanded)}
		class:is-expanded={isExpanded}
		aria-label="Open menu"
	>
		<slot name="toggle-button" />
	</button>

	<!-- {#if isExpanded} -->
	<menu id={menuId} class="dropdown-menu" class:visible={isExpanded}>
		<div class="menu-inner">
			<slot name="content" />
		</div>
	</menu>
	<!-- {/if} -->
</div>
