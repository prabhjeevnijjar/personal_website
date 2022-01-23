function onClickHamburger() {
const toggleButton = document.getElementsByClassName('toggle_button')[0]
const navbarLinks = document.getElementsByClassName('base_nav_leftside')[0];

toggleButton.addEventListener('click',() => {
    if(navbarLinks.classList.contains('show')) {
        navbarLinks.classList.remove('show')
    } else {
        navbarLinks.classList.add('show')

    }
})

}
onClickHamburger();