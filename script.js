let isHamburgerVisible = false;


function hamburgerToggle()
{
    const slideInMenuNav = document.querySelector("#slideInMenuNav");
    if(!isHamburgerVisible)
    {    
        slideInMenuNav.classList.remove("hide");
        isHamburgerVisible = true;

    }
    else
    {
        slideInMenuNav.classList.add("hide");
        isHamburgerVisible = false;

    }

}

const hamburgerIcon = document.querySelector("#hamburgerIcon");
hamburgerIcon.addEventListener("click", hamburgerToggle);