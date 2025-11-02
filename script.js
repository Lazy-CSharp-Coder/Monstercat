let isHamburgerVisible = false;


function hamburgerToggle()
{
    const slideInMenuNav = document.querySelector("#slideInMenuNav");
    if(!isHamburgerVisible)
    {    
        slideInMenuNav.classList.remove("hide");

    }
    else
    {
        slideInMenuNav.checkVisibility.add("hide");

    }

}

const hamburgerIcon = document.querySelector("#hamburgerIcon");
hamburgerIcon.addEventListener("click", hamburgerToggle);