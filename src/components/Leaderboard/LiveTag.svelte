<div class="live-wrap">
	<div class="circle-container">
		<div class="circle"></div>
		<div class="circle"></div>
		<div class="circle"></div>
		<div class="circle"></div>
	</div>
	<div class="live">
		<div class="point"></div>
		<span>
			<slot />
		</span>
	</div>
</div>

<style>
	.live {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		border: 1px solid rgba(255, 88, 35, 0.6);
		font-weight: 700;
		position: relative;
		border-radius: 14px;
		padding: 8px 16px;
		background-color: var(--moss-200);
		background-image: radial-gradient(circle at top, rgba(254, 69, 11, 0.3), rgba(22, 22, 22, 0));
	}
	.live-wrap {
		position: relative;
		text-align: center;
	}
	span {
		color: #ff5823;
		background: linear-gradient(to bottom, #ff5823, #fe450b);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		font-size: 16px;
		line-height: 1.2;
		text-transform: uppercase;
		display: block;
	}

	.point {
		box-shadow:
			0 0 0 4px rgba(254, 69, 11, 0.1),
			0 4px 4px 0 rgba(0, 0, 0, 0.25),
			0 0 0 2px rgba(254, 69, 11, 0.25);
		width: 8px;
		height: 8px;
		background: linear-gradient(to bottom, #ff5823, #fe450b);
		border-radius: 8px;
		animation: pulse 2s infinite ease-in-out;
	}

	@keyframes pulse {
		0% {
			box-shadow:
				0 0 0 4px rgba(254, 69, 11, 0.1),
				0 4px 4px 0 rgba(0, 0, 0, 0.25),
				0 0 0 2px rgba(254, 69, 11, 0.25);
		}
		50% {
			box-shadow:
				0 0 0 8px rgba(254, 69, 11, 0.05),
				0 6px 6px 0 rgba(0, 0, 0, 0.2),
				0 0 0 4px rgba(254, 69, 11, 0.2);
		}
		100% {
			box-shadow:
				0 0 0 4px rgba(254, 69, 11, 0.1),
				0 4px 4px 0 rgba(0, 0, 0, 0.25),
				0 0 0 2px rgba(254, 69, 11, 0.25);
		}
	}

	.circle-container {
		position: relative;
		width: 0;
		height: 0;
		left: 50%;
		top: 17px;
	}

	.circle {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100px;
		height: 100px;
		transform: translate(-50%, -50%);
		border: 1px solid #356a4a;
		background-image: radial-gradient(#161d17, #23362b);
		border-radius: 50%;
		opacity: 0;
		animation: ripple 10s infinite;
		animation-delay: calc(var(--i) * 2.5s);
		will-change: opacity, width, height;
	}

	.circle:nth-child(1) {
		--i: 0;
	}
	.circle:nth-child(2) {
		--i: 1;
	}
	.circle:nth-child(3) {
		--i: 2;
	}
	.circle:nth-child(4) {
		--i: 3;
	}

	@keyframes ripple {
		0% {
			width: 0;
			height: 0;
			opacity: 0.5;
		}
		/* 50% {
			width: 200px;
			height: 200px;
			opacity: 0.5;
		} */
		100% {
			width: 1000px;
			height: 1000px;
			opacity: 0;
		}
	}
</style>
