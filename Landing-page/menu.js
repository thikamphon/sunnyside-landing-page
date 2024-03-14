window.onload = pageLoad;

function pageLoad() {
    var toggleBtn = document.querySelector('.toggle_btn')
    toggleBtn.onclick = start;
}

function start() {
    var dropDownMenu = document.querySelector('.drowdown-menu');
    var toggleBtnIcon = document.querySelector('.toggle_btn i');
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen 
    ? 'fa-solid fa-xmark' 
    : 'fa-solid fa-bars'
}