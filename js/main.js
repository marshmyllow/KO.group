(function(){
	const burderItem = document.querySelector('.burger');
	const menu = document.querySelector('.header_nav');
	const menuCloseItem = document.querySelector('.header_nav-close');
	const menuLinks = document.querySelectorAll('.header_item')
	burderItem.addEventListener('click', () => {
		menu.classList.add('header_nav_active');
	});
	menuCloseItem.addEventListener('click', () =>{
		menu.classList.remove('header_nav_active');
	});
	if (window.innerWidth <= 850) {
		for (let i = 0; i < menuLinks.length; i += 1) {
			menuLinks[i].addEventListener('click', () => {
				menu.classList.remove('header_nav_active')
			});
		}
	}
}());