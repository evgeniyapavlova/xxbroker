<script>
	import { lang } from '$lib/stores/lang';

	const content = { en: 'Next feature', es: 'Próxima función', pt: 'Próximo recurso' };

	export let href;
</script>

<div class="next-feature-wrap">
	<a {href} alt="Scroll to next feature">
		<div class="icon-wrap">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M15.1798 10.641C15.5736 10.995 15.609 11.6049 15.259 12.0032L10.713 16.1762C10.5319 16.3821 10.2725 16.5 10 16.5C9.72752 16.5 9.46805 16.3821 9.28703 16.1762L4.74096 12.0032C4.39095 11.6049 4.42642 10.995 4.82018 10.641C5.21395 10.287 5.8169 10.3229 6.16691 10.7211L9.04607 12.9973L9.04607 5.46486C9.04607 4.93198 9.47316 4.5 10 4.5C10.5268 4.5 10.9539 4.93198 10.9539 5.46486L10.9539 12.9973L13.8331 10.7211C14.1831 10.3229 14.7861 10.287 15.1798 10.641Z"
					fill="#F8B533"
				/>
			</svg>
		</div>
		<span>{content[$lang]}</span>
	</a>
</div>

<style>
	.next-feature-wrap {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding-top: 40px;
	}
	a {
		color: var(--moss-800);
		font-size: 14px;
		font-weight: 600;
		line-height: 18px;
		display: inline-flex;
		align-items: center;
		justify-content: flex-start;
		gap: 12px;
		cursor: pointer;
		transition: transform 0.2s ease-in-out;
		width: max-content;
	}
	.icon-wrap {
		width: 40px;
		height: 40px;
		border-radius: 40px;
		background: var(--moss-400);
		transition: background-color 0.2s ease-in-out;
		transition: transform 0.2s ease-in-out;
	}
	.icon-wrap:hover {
		background: var(--moss-300);
	}
	a:hover {
		transform: translateY(2px);
	}
	@media screen and (max-width: 1024px) {
		.next-feature-wrap {
			display: none;
		}
	}
</style>
