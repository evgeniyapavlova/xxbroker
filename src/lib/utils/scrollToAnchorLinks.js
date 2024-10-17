export const scrollToAnchorLinks = (selector) => {
	document.querySelectorAll(selector).forEach((anchor) => {
		if (!anchor.dataset.smoothScrollAdded) {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();

				const targetID = this.getAttribute('href');
				const target = document.querySelector(targetID);

				if (target) {
					window.scrollTo({
						top: target.offsetTop - 24,
						behavior: 'smooth'
					});
				}
			});
			anchor.dataset.smoothScrollAdded = true;
		}
	});
};
