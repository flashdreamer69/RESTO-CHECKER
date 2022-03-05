


let nav = document.querySelector('.navbar');

document.querySelector('.burger').onclick = () => {
   nav.classList.toggle('active');
}

document.querySelector('.close').onclick = () => {
   nav.classList.remove('active');
}

AOS.init();
   