<script>
	import LoginIcon from './LoginIcon.svelte';
	import { linkLogin } from '$lib/stores/reg_link';
</script>

<a href={$linkLogin} class="button button-icon button-secondary button-medium" id="header-login">
	<LoginIcon />
	<slot />
</a>
