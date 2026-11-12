// Logic for all pages

const root = document.documentElement;

try {
	const visitKey = `visited:${window.location.pathname}`;
	if (window.sessionStorage.getItem(visitKey)) {
		root.classList.add('page-visited');
	}
	window.sessionStorage.setItem(visitKey, '1');
} catch {
	// Keep the normal reveal when sessionStorage is unavailable.
}

// Allow animations after the window loads or a 2-second fallback, whichever comes first.
const allowAnimations = () => {
	if (!root.classList.contains('page-visited')) {
		root.classList.add('can-animate');
	}
};

setTimeout(allowAnimations, 2000);

window.addEventListener('load', allowAnimations, { once: true });

window.addEventListener('pageshow', (event) => {
	if (event.persisted) {
		// Finish any interrupted reveal when returning from the back/forward cache.
		root.classList.add('page-visited');
		root.classList.remove('can-animate');
	}
});
