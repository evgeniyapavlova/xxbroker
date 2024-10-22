<script>
	import { base } from '$app/paths';
	import { lang } from '$lib/stores/lang';
	import Dropdown from '$common/Dropdown/Dropdown.svelte';
	import Logo from '$common/Logo.svelte';

	const content = {
		en: { title: 'Brand assets', caption: 'Download logos as SVG' },
		pt: { title: 'Recursos da marca', caption: 'Baixar logotipos como SVG' },
		es: { title: 'Recursos de la marca', caption: 'Descargar logotipos como SVG' }
	};
</script>

<Dropdown id="download-assets" isContext>
	<svelte:fragment slot="toggle-button"
		><a href={base} class="logo-link"> <Logo /></a>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<a class="icon-wrap" href="{base}/xxbroker_assets.zip">
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M16.5 11.5V12.5C16.5 13.9001 16.5 14.6002 16.2275 15.135C15.9878 15.6054 15.6054 15.9878 15.135 16.2275C14.6002 16.5 13.9001 16.5 12.5 16.5H5.5C4.09987 16.5 3.3998 16.5 2.86502 16.2275C2.39462 15.9878 2.01217 15.6054 1.77248 15.135C1.5 14.6002 1.5 13.9001 1.5 12.5V11.5M13.1667 7.33333L9 11.5M9 11.5L4.83333 7.33333M9 11.5V1.5"
					stroke="#818A85"
					stroke-width="1.6"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</a>
		<div class="text">
			<div class="download-title">{content[$lang].title}</div>
			<div class="download-caption">{content[$lang].caption}</div>
		</div>
	</svelte:fragment>
</Dropdown>

<style>
	.icon-wrap {
		background-color: var(--moss-400);
		width: 40px;
		height: 40px;
		border-radius: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.download-title {
		color: white;
		font-size: 14px;
		line-height: 24px;
		font-weight: 500;
	}
	.download-caption {
		color: var(--moss-600);
		line-height: 18px;
	}
</style>
