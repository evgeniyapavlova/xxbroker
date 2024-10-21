export const lazyLoadBackground = () => {
	const isMobile = window.matchMedia('(max-width: 720px)').matches;
	const isRetina = window.devicePixelRatio > 1;

	const setBackgroundImage = (element) => {
		const { dataset } = element;

		const bgImage = dataset?.bgimage;
		const bgImageMobile = dataset?.bgimageMobile;
		const bgImageMobileRetina = dataset?.bgimageMobileRetina;

		if (!isMobile && bgImage) {
			element.style.backgroundImage = `url(${bgImage})`;
			return;
		}

		if (isMobile) {
			if (bgImageMobileRetina && isRetina) {
				element.style.backgroundImage = `url(${bgImageMobileRetina})`;
			} else if (bgImageMobile) {
				element.style.backgroundImage = `url(${bgImageMobile})`;
			} else {
				element.style.backgroundImage = `url(${bgImage})`;
			}
		}
	};

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					console.log(entry);
					setBackgroundImage(entry.target);
					observer.unobserve(entry.target);
				}
			});
		},
		{
			// root: null,
			rootMargin: '500px 0px 0px 0px'
			// threshold: 0
		}
	);

	const observeElements = () => {
		const elements = document.querySelectorAll('.has-bgr');
		elements.forEach((element) => {
			if (!element.style.backgroundImage) {
				observer.observe(element);
			} else {
				observer.unobserve(element);
			}
		});
	};

	observeElements();

	return () => observer.disconnect();
};
