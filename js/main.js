(function(){
	const burderItem = document.querySelector('.burger');
	const menu = document.querySelector('.header_nav');
	const menuCloseItem = document.querySelector('.header_nav-close')
	burderItem.addEventListener('click', () => {
		menu.classList.add('header_nav_active');
	});
	menuCloseItem.addEventListener('click', () =>{
		menu.classList.remove('header_nav_active');
	});
}());