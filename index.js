let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
const registerBtn = document.getElementById('register-btn');
registerBtn.addEventListener('click', () => {
  // Replace the URL with the actual registration page URL
  window.location.href = 'https://example.com/register';
});

menu.onclick=() =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
}
