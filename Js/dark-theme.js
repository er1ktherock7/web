const btnMoon = document.querySelector('.theme');
const moonP = document.querySelector('.theme p');
const body = document.querySelector('body');
const darkModeIndicator = document.querySelector('.btn-dark-theme .dark-mode-indicator');
const darkModeOn = document.querySelectorAll('.theme-toggle');

let darkModeEnabled = false;

//Adiciona um balão mostrando para qual tema vai se for clicado
btnMoon.addEventListener('mouseover', () => {
    moonP.style.display = 'block'
    if(body.classList.contains('dark-mode-ativo')){
        moonP.innerHTML = 'light mode'
    } else{
        moonP.innerHTML = 'dark mode'
    }
})
btnMoon.addEventListener('mouseout', () => {
    moonP.style.display = 'none'
})
function toggleDark(){  
    darkModeEnabled = !darkModeEnabled;
    if (darkModeEnabled) {
    // ativar o tema escuro
    btnMoon.style.backgroundImage = "url(../img/icons/sun.svg)";
    darkModeIndicator.style.transform = 'translateX(19px)';
    darkModeIndicator.style.backgroundColor = '#95E4D1'
    body.classList.add('dark-mode-ativo')
    // salvar a preferência do usuário no localStorage
    localStorage.setItem('darkModeEnabled', 'true');
    } else {
    // desativar o tema escuro
    btnMoon.style.backgroundImage = "url(../img/icons/moon.svg)";
    darkModeIndicator.style.transform = 'translateX(0)';
    darkModeIndicator.style.backgroundColor = '#313944'
    body.classList.remove('dark-mode-ativo')
    // salvar a preferência do usuário no localStorage
    localStorage.setItem('darkModeEnabled', 'false');
  } 
}
const isDarkModeEnabled = localStorage.getItem('darkModeEnabled');

if (isDarkModeEnabled === 'true') {
  toggleDark();
}

darkModeOn.forEach((e) => {
    e.addEventListener('click', toggleDark);
})
