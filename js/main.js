const menu = document.getElementById('menu');
const navLink = document.getElementById('nav-links');
const links = document.querySelector('a');

menu.addEventListener('click', () => {
	if(navLink.style.display === 'none'){
		navLink.style.display = 'flex';
	} else{
		navLink.style.display = 'none'
	}
});


for (var i = 0; i < links.length; i++) {
	links[i].addEventListener('click', () => {
	if(navLink.style.display === 'none'){
		navLink.style.display = 'flex';
	} else{
		navLink.style.display = 'none'
	}
})
}