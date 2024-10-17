export function scrollToAnchorLinks() {
	const addSmoothScroll = () => {
		document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((anchor) => {
			if (!anchor.dataset.smoothScrollAdded) {
				anchor.addEventListener('click', function (e) {
					e.preventDefault();

					const targetID = this.getAttribute('href');
					const target = document.querySelector(targetID);

					if (target) {
						window.scrollTo({
							top: target.offsetTop,
							behavior: 'smooth'
						});
					}
				});
				anchor.dataset.smoothScrollAdded = true;
			}
		});
	};

	addSmoothScroll();

	const observer = new MutationObserver(() => {
		addSmoothScroll();
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true
	});
}
