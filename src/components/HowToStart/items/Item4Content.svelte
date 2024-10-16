<script>
	import mastercard from '../img/mastercard-2.svg';
</script>

<div class="start-item-content">
	<div class="start-card">
		<img src={mastercard} alt="Mastercard" />
		<div class="card-number">1241 9884 1182 1000</div>
		<div class="card-data">
			<div class="card-data-block">
				<span>Card holder</span>
				<p>Tarem Peachko</p>
			</div>
			<div class="card-data-block">
				<span>Valid</span>
				<p>03/29</p>
			</div>
		</div>
	</div>

	<div class="start-balance">
		<div class="balance-caption">Balance</div>
		<div class="balance-data">$3,981.22</div>
		<div class="balance-caption">
			<span>+$1,642</span>
			for last month
		</div>
	</div>
</div>

<style>
	.start-item-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.start-card {
		border-radius: 20px;
		background-color: var(--moss-300);
		padding: 16px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 30px;
	}
	img {
		max-width: 30px;
		align-self: flex-end;
	}
	.card-number {
		color: var(--moss-800);
		font-size: 14px;
		line-height: 1.2;
		font-weight: 600;
	}
	.card-data-block {
		width: 50%;
	}
	.card-data {
		display: flex;
		gap: 16px;
		text-transform: uppercase;
	}

	.card-data span {
		font-size: 6px;
		line-height: 7px;
		color: var(--moss-600);
		margin-bottom: 4px;
	}
	p {
		color: var(--moss-800);
		font-size: 10px;
		letter-spacing: 0.3px;
		font-weight: 600;
	}
	.balance-data {
		margin: 4px 0 8px;
		font-size: 20px;
		line-height: 25px;
		font-weight: 600;
	}

	.balance-caption {
		color: var(--moss-600);
		font-size: 12px;
		line-height: 16px;
	}
	.balance-caption span {
		color: var(--forest-600);
	}
</style>
