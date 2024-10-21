<script>
	import { onMount } from 'svelte';
	import Tag from '$common/Tag.svelte';
	import Dropdown from '$common/Dropdown/Dropdown.svelte';
	import { scrollToAnchorLinks } from '$lib/utils/scrollToAnchorLinks';

	const menuLinks = ['leaderboard', 'start', 'features', 'awards'];

	export let content;

	onMount(() => {
		scrollToAnchorLinks('.header-menu .anchor-link');
	});
</script>

<div class="header-menu">
	<div class="header-menu-desktop">
		{#each content.menu as item, index}
			<a class="nav-link anchor-link" href="#{menuLinks[index]}" class:nav-link-flex={index === 0}>
				{item}
				{#if index === 0}
					<Tag>{content.new}</Tag>
				{/if}
			</a>
		{/each}
	</div>

	<div class="header-menu-mobile">
		<Dropdown buttonClass="button button-icon button-secondary button-medium" id="mobile-menu">
			<svelte:fragment slot="toggle-button">
				<div class="menu-icon"></div>
				<div id="menu-dropdown-label">{content.mobile_menu_label}</div>
			</svelte:fragment>
			<svelte:fragment slot="content">
				{#each content.menu as item, index}
					<a class="button-secondary button-medium anchor-link" href="#{menuLinks[index]}">
						{item}
						{#if index === 0}
							<Tag>{content.new}</Tag>
						{/if}
					</a>
				{/each}
			</svelte:fragment>
		</Dropdown>
	</div>
</div>
