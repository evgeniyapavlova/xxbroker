<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { lang } from '$lib/stores/lang';
	import { device } from '$lib/stores/isDesktop';

	import Logo from '$common/Logo.svelte';
	import QrCode from './QRCode.svelte';

	let isQROpen = false;

	const openQR = () => (isQROpen = true);
	const closeQR = () => (isQROpen = false);

	const translation = {
		en: {
			btn_title: 'Instant Mobile App',
			btn_caption_mobile: 'Instant access',
			btn_caption_desktop: 'All mobiles OS',
			qr_title: 'Open mobile App',
			qr_title_android: 'Open Android instant mobile App',
			qr_title_ios: 'Open iOS instant mobile App',
			qr_caption: 'Scan this code with your camera to open XXBroker Instant App',
			available_on_devices: 'Available on any device'
		},
		es: {
			btn_title: 'App móvil instantánea',
			btn_caption_mobile: 'Acceso instantáneo',
			btn_caption_desktop: 'Todos los móviles OS',
			qr_title: 'Abrir la aplicación móvil',
			qr_title_android: 'Aplicación móvil instantánea Android abierta',
			qr_title_ios: 'Aplicación móvil instantánea iOS abierta',
			qr_caption: 'Escanee este código con su cámara para abrir XXBroker Instant App',
			available_on_devices: 'Disponible en cualquier dispositivo'
		},
		pt: {
			btn_title: 'App móvel instantâneo',
			btn_caption_mobile: 'Acesso instantâneo',
			btn_caption_desktop: 'Todos os celulares OS',
			qr_title: 'Abrir o aplicativo móvel',
			qr_title_android: 'Abra o aplicativo móvel instantâneo Android',
			qr_title_ios: 'Abra o aplicativo móvel instantâneo iOS',
			qr_caption: 'Escaneie este código com sua câmera para abrir o aplicativo XXBroker Instant',
			available_on_devices: 'Disponível em qualquer dispositivo'
		}
	};

	onMount(() => {
		function handleClick(event) {
			const targetElement = event.target;
			const wrapElement = document.getElementById('qr-block');
			const menuElement = document.getElementById('qr-open-btn');

			if (!wrapElement.contains(targetElement) && !menuElement?.contains(targetElement)) {
				isQROpen = false;
			}
		}

		document.body.addEventListener('click', handleClick);

		return () => {
			document.body.removeEventListener('click', handleClick);
		};
	});
</script>

<button aria-label="Open QR code" class="device-btn" on:click={openQR} id="qr-open-btn">
	<div class="device-icon">
		<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M14.9146 7.76196e-07H15.0854C17.2127 -2.93038e-05 18.9275 -5.35548e-05 20.2761 0.179269C21.6762 0.365448 22.8551 0.763746 23.7915 1.68977C24.7278 2.6158 25.1305 3.78176 25.3187 5.16654C25.5001 6.50034 25.5 8.19622 25.5 10.3002V19.6998C25.5 21.8038 25.5001 23.4997 25.3187 24.8335C25.1305 26.2182 24.7278 27.3842 23.7915 28.3102C22.8551 29.2363 21.6762 29.6346 20.2761 29.8207C18.9274 30.0001 17.2127 30 15.0854 30H14.9147C12.7873 30 11.0726 30.0001 9.72395 29.8207C8.32378 29.6346 7.14486 29.2363 6.20855 28.3102C5.27223 27.3842 4.86951 26.2182 4.68126 24.8335C4.49995 23.4997 4.49997 21.8038 4.5 19.6998V10.3002C4.49997 8.19621 4.49995 6.50033 4.68126 5.16654C4.86951 3.78176 5.27223 2.6158 6.20855 1.68977C7.14486 0.763746 8.32378 0.365448 9.72395 0.179269C11.0726 -5.35548e-05 12.7873 -2.93038e-05 14.9146 7.76196e-07ZM11.8889 23.0769C11.2446 23.0769 10.7222 23.5806 10.7222 24.2019C10.7222 24.8232 11.2446 25.3269 11.8889 25.3269H18.1111C18.7555 25.3269 19.2778 24.8232 19.2778 24.2019C19.2778 23.5806 18.7555 23.0769 18.1111 23.0769H11.8889Z"
				fill="#D0F244"
			/>
		</svg>

		<svg
			class="device-hover"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
		>
			<g clip-path="url(#clip0_725_13075)">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M3.27273 2.18182H8.72727C9.32976 2.18182 9.81818 2.67024 9.81818 3.27273V8.72727C9.81818 9.32976 9.32977 9.81818 8.72727 9.81818H3.27273C2.67024 9.81818 2.18182 9.32977 2.18182 8.72727V3.27273C2.18182 2.67024 2.67024 2.18182 3.27273 2.18182ZM0 3.27273C0 1.46525 1.46525 0 3.27273 0H8.72727C10.5347 0 12 1.46525 12 3.27273V8.72727C12 10.5347 10.5347 12 8.72727 12H3.27273C1.46525 12 0 10.5347 0 8.72727V3.27273ZM15.2727 14.1818H20.7273C21.3298 14.1818 21.8182 14.6702 21.8182 15.2727V20.7273C21.8182 21.3298 21.3298 21.8182 20.7273 21.8182H15.2727C14.6702 21.8182 14.1818 21.3298 14.1818 20.7273V15.2727C14.1818 14.6702 14.6702 14.1818 15.2727 14.1818ZM12 15.2727C12 13.4652 13.4652 12 15.2727 12H20.7273C22.5348 12 24 13.4652 24 15.2727V20.7273C24 22.5348 22.5348 24 20.7273 24H15.2727C13.4652 24 12 22.5348 12 20.7273V15.2727ZM7.63636 6C7.63636 6.90374 6.90374 7.63636 6 7.63636C5.09626 7.63636 4.36364 6.90374 4.36364 6C4.36364 5.09626 5.09626 4.36364 6 4.36364C6.90374 4.36364 7.63636 5.09626 7.63636 6ZM18 19.6364C18.9037 19.6364 19.6364 18.9037 19.6364 18C19.6364 17.0963 18.9037 16.3636 18 16.3636C17.0963 16.3636 16.3636 17.0963 16.3636 18C16.3636 18.9037 17.0963 19.6364 18 19.6364ZM14.1818 8.72727C14.1818 8.12479 14.6702 7.63636 15.2727 7.63636C15.8752 7.63636 16.3636 8.12479 16.3636 8.72727C16.3636 9.32977 15.8752 9.81818 15.2727 9.81818C14.6702 9.81818 14.1818 9.32977 14.1818 8.72727ZM4.36364 16.3636C4.96612 16.3636 5.45455 15.8752 5.45455 15.2727C5.45455 14.6702 4.96612 14.1818 4.36364 14.1818C3.76115 14.1818 3.27273 14.6702 3.27273 15.2727C3.27273 15.8752 3.76115 16.3636 4.36364 16.3636ZM18.5455 1.09091C18.5455 0.488416 19.0339 0 19.6364 0H21.8182C23.0232 0 24 0.976834 24 2.18182V5.45455C24 6.05703 23.5116 6.54545 22.9091 6.54545C22.3066 6.54545 21.8182 6.05703 21.8182 5.45455V2.18182H19.6364C19.0339 2.18182 18.5455 1.6934 18.5455 1.09091ZM21.8182 9.81818C22.4207 9.81818 22.9091 9.32977 22.9091 8.72727C22.9091 8.12479 22.4207 7.63636 21.8182 7.63636H19.6364V4.36364C19.6364 3.76115 19.148 3.27273 18.5455 3.27273C17.9429 3.27273 17.4545 3.76115 17.4545 4.36364V7.63636C17.4545 8.84135 18.4313 9.81818 19.6364 9.81818H21.8182ZM5.45455 22.9091C5.45455 23.5116 4.96612 24 4.36364 24H2.18182C0.976834 24 0 23.0232 0 21.8182V15.2727C0 14.6702 0.488416 14.1818 1.09091 14.1818C1.6934 14.1818 2.18182 14.6702 2.18182 15.2727V21.8182H4.36364C4.96612 21.8182 5.45455 22.3066 5.45455 22.9091ZM14.1818 4.36364C14.1818 4.96612 14.6702 5.45455 15.2727 5.45455C15.8752 5.45455 16.3636 4.96612 16.3636 4.36364V1.09091C16.3636 0.488416 15.8752 0 15.2727 0C14.6702 0 14.1818 0.488416 14.1818 1.09091V4.36364ZM6.54545 15.2727C6.54545 14.6702 7.03388 14.1818 7.63636 14.1818H8.72727C9.32977 14.1818 9.81818 14.6702 9.81818 15.2727C9.81818 15.8752 9.32976 16.3636 8.72727 16.3636H7.63636C7.03387 16.3636 6.54545 15.8752 6.54545 15.2727ZM9.81818 18.5455C9.81818 17.9429 9.32977 17.4545 8.72727 17.4545H4.36364C3.76115 17.4545 3.27273 17.9429 3.27273 18.5455C3.27273 19.148 3.76115 19.6364 4.36364 19.6364H7.63636V22.9091C7.63636 23.5116 8.12477 24 8.72727 24C9.32976 24 9.81818 23.5116 9.81818 22.9091V18.5455Z"
					fill="#D0F244"
				/>
			</g>
			<defs>
				<clipPath id="clip0_725_13075">
					<rect width="24" height="24" fill="#F2F7F5" />
				</clipPath>
			</defs>
		</svg>
	</div>
	<div class="device-text">
		<div class="device-app-name">
			{#if $device === 'ios'}
				iOS App
			{:else if $device === 'android'}
				Android App
			{:else}
				{translation[$lang].btn_title}
			{/if}
		</div>
		<div class="device-app-info">
			{#if $device === 'ios' || $device === 'android'}
				{translation[$lang].btn_caption_mobile}
			{:else}
				{translation[$lang].btn_caption_desktop}
			{/if}
		</div>
	</div>
</button>

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
		<Logo />
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
	</div>{/if}

<style>
	.qr-close-btn {
		position: absolute;
		right: 32px;
		top: 32px;
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
