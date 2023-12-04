function highlightMenuItem() {
	const menuItems = document.querySelectorAll('.nav a');
	const contentSections = document.querySelectorAll('.content h2');

	window.addEventListener('scroll', () => {
		let currentSectionId = '';

		contentSections.forEach((section) => {
			const sectionTop = section.offsetTop - 100; // Ajusta este valor según sea necesario

			if (window.scrollY >= sectionTop) {
				currentSectionId = section.getAttribute('id');
			}
		});

		menuItems.forEach((item) => {
			item.classList.remove('active');
			if (item.getAttribute('href') === `#${currentSectionId}`) {
				item.classList.add('active');
			}
		});
	});
}

highlightMenuItem();