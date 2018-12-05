'use strict';

let	tab = document.getElementsByClassName('tab'),
		tabContent = document.getElementsByClassName('tab-item-content'),
		selector = document.querySelector('.selector'),
		tabs = document.querySelector('.tabs');

function hideTabsContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('active');
			tab[i].classList.remove('active-item');
		}
	}

selector.style.width = (tab[0].offsetWidth + 'px');

tabs.addEventListener('click', function () {
	let target = event.target;
	if (target.className === 'tab') {
		for (let i = 0; i < tab.length; i++) {
			if (target === tab[i]) {
				showTabsContent(i);
				selector.style.left = (target.offsetLeft + 'px');
				selector.style.width = (target.offsetWidth + 'px');
				break;
			}
		}
	}
});


function showTabsContent(b) {
	hideTabsContent(0);
	tab[b].classList.add('active-item');
	tabContent[b].classList.add('active');
}
