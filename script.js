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
function onClickShowMore(event) {
    const showMoreButton = document.getElementsByClassName('showmore')[0]
    const actualData = document.getElementsByClassName('work_data')[0];
    const arrowUpDown = document.getElementsByClassName('arrow')[0];
    showMoreButton.addEventListener('click',() => {
        if (actualData.style.display === "none") {
            actualData.style.display = "block";
            if(arrowUpDown.contains('down')) {
                arrowUpDown.remove('down')
                arrowUpDown.add('up')
            } else {
                arrowUpDown.remove('up')
                arrowUpDown.add('down')
            }
            event.stopPropagation();
          } else {
            actualData.style.display = "none";
            if(arrowUpDown.contains('down')) {
                arrowUpDown.remove('down')
                arrowUpDown.add('up')
            } else {
                arrowUpDown.remove('up')
                arrowUpDown.add('down')
            }
            event.stopPropagation();
          }
    })
    }
onClickHamburger();
onClickShowMore();