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
    console.log("emocmroj",arrowUpDown.classList)
    showMoreButton.addEventListener('click',(event) => {
        if (actualData.style.display === "none") {
            actualData.style.display = "block";
           
            // event.stopPropagation();
          } else {
            actualData.style.display = "none";
            
            // event.stopPropagation();
          }

          if(arrowUpDown.classList.contains("down")) {
            console.log("down")
            console.log("emocmroj",arrowUpDown.classList)

            arrowUpDown.classList.remove('down')
            arrowUpDown.classList.add('up')
        } else {
            arrowUpDown.remove('up')
            arrowUpDown.classList.add('down')
        }
    })
    }
onClickHamburger();
onClickShowMore();