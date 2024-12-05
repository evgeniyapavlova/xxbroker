<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { device } from '$lib/stores/isDesktop';
	import { linkPWA } from '$lib/stores/reg_link';
	import { lang } from '$lib/stores/lang';
	import Logo from '$common/Logo.svelte';
	import QrCode from './QRCode.svelte';

	let isQROpen = false;

	const openQR = () => (isQROpen = true);
	const closeQR = () => (isQROpen = false);

	const translation = {
		en: {
			qr_title: 'Open mobile App',
			qr_title_android: 'Open Android instant mobile App',
			qr_title_ios: 'Open iOS instant mobile App',
			qr_caption: 'Scan this code with your camera to open XXBroker Instant App',
			available_on_devices: 'Available on any device'
		},
		es: {
			qr_title: 'Abrir la aplicación móvil',
			qr_title_android: 'Aplicación móvil instantánea Android abierta',
			qr_title_ios: 'Aplicación móvil instantánea iOS abierta',
			qr_caption: 'Escanee este código con su cámara para abrir XXBroker Instant App',
			available_on_devices: 'Disponible en cualquier dispositivo'
		},
		pt: {
			qr_title: 'Abrir o aplicativo móvel',
			qr_title_android: 'Abra o aplicativo móvel instantâneo Android',
			qr_title_ios: 'Abra o aplicativo móvel instantâneo iOS',
			qr_caption: 'Escaneie este código com sua câmera para abrir o aplicativo XXBroker Instant',
			available_on_devices: 'Disponível em qualquer dispositivo'
		}
	};
	onMount(() => {
		if ($device === 'windows' || $device === 'mac') {
			function handleClick(event) {
				const targetElement = event.target;
				const wrapElement = document.getElementById('qr-block');
				const menuElement = document.getElementById('qr-open-btn');

				if (!wrapElement?.contains(targetElement) && !menuElement?.contains(targetElement)) {
					isQROpen = false;
				}
			}

			document.body.addEventListener('click', handleClick);

			return () => {
				document.body.removeEventListener('click', handleClick);
			};
		}
	});
</script>

{#if $device === 'ios' || $device === 'android'}
	<a class="device-btn" href={$linkPWA} target="_blank">
		<slot />
	</a>
{:else}
	<button aria-label="Open QR code" class="device-btn" on:click={openQR} id="qr-open-btn">
		<slot />
	</button>
{/if}

{#if isQROpen}
	<div
		id="qr-block"
		class="qr-block"
		transition:fade={{
			duration: 200
		}}
	>
		<button on:click={closeQR} class="qr-close-btn" aria-label="Close modal">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
			>
				<path
					d="M15 5L5 15M5 5L15 15"
					stroke="#818A85"
					stroke-width="1.6"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
		<div style="margin: 10px auto;" class="qr-logo-wrap">
			<Logo />
		</div>
		<div class="qr-text">
			<div class="qr-title">
				{#if $device === 'ios'}
					{translation[$lang].qr_title_ios}
				{:else if $device === 'android'}
					{translation[$lang].qr_title_android}
				{:else}
					{translation[$lang].qr_title}
				{/if}
			</div>
			<div class="qr-caption">{translation[$lang].qr_caption}</div>
		</div>

		<div class="qr-code">
			<QrCode />
		</div>
		<div class="qr-bottom-text">
			{translation[$lang].available_on_devices}
		</div>
	</div>
{/if}

<style>
	:global(.qr-logo-wrap svg) {
		display: block;
	}
	.qr-logo-wrap {
		margin: 10px auto;
	}
	.qr-close-btn {
		position: absolute;
		right: 24px;
		top: 24px;
		border-radius: 14px;
		background: var(--moss-300);
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		cursor: pointer;
	}
	.qr-bottom-text {
		color: var(--moss-600);
	}
	.qr-title {
		color: var(--moss-800);
		font-feature-settings:
			'liga' off,
			'clig' off;
		font-family: var(--mabry-font);
		font-size: 32px;
		font-weight: 500;
		line-height: 1.2;
		margin-bottom: 4px;
	}
	.qr-caption {
		color: var(--moss-600, #818a85);
		font-size: 16px;
		font-weight: 400;
		line-height: 1.5;
		max-width: 350px;
		margin: 0 auto;
	}
	:global(.qr-code svg) {
		max-width: 100%;
		max-height: 100%;
	}
	.qr-code {
		overflow: hidden;
		width: 196px;
		height: 196px;
		border-radius: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--moss-800);
	}
	.qr-block {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 460px;
		height: 515px;
		border-radius: 32px;
		background: var(--moss-200);
		z-index: 10;
		padding: 24px 24px 48px;
		display: flex;
		flex-direction: column;
		gap: 32px;
		align-items: center;
		max-width: 95vw;
		max-height: 96vh;
	}
</style>
