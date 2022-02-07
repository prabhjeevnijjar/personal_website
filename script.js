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
    // const showMoreButton = document.getElementsByClassName('showmore')[0]
    // const actualData = document.getElementsByClassName('work_data')[0];
    // const arrowUpDown = document.getElementsByClassName('arrow')[0];
    // console.log("emocmroj",arrowUpDown.classList)
    // showMoreButton.addEventListener('click',(event) => {
    //     if (actualData.style.display === "none") {
    //         actualData.style.display = "block";
           
    //         // event.stopPropagation();
    //       } else {
    //         actualData.style.display = "none";
            
    //         // event.stopPropagation();
    //       }

    //       if(arrowUpDown.classList.contains("down")) {
    //         console.log("down")
    //         console.log("emocmroj",arrowUpDown.classList)

    //         arrowUpDown.classList.remove('down')
    //         arrowUpDown.classList.add('up')
    //     } else {
    //         arrowUpDown.remove('up')
    //         arrowUpDown.classList.add('down')
    //     }
    // })
    }
//changing theme on click
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
console.log('%c Hey There!!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')
function switchTheme(e) {
    // console.log("hello");
    // console.log("classes:",toggleSwitch)

    if (e.target.checked) {
        console.log("checked");

        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}
toggleSwitch.addEventListener('change', switchTheme);
    

onClickHamburger();
// onClickShowMore();

//scroll
