let isPlaying = false;

function playButtonToggle()
{
    const playIcon = document.querySelector("#playButton");
    const pauseIcon = document.querySelector("#pauseIcon");
    if(isPlaying)
    {
        pauseIcon.classList.add("hide");
    }
    else
    {
        pauseIcon.classList.remove("hide");
    }
}

const playButton = document.querySelector("#playButton");
playButton.addEventListener("click", playButtonToggle);

let isHamburgerVisible = false;

function hamburgerToggle()
{
    const slideInMenuNav = document.querySelector("#slideInMenuNav");
    if(!isHamburgerVisible)
    {    
        slideInMenuNav.classList.remove("hide");
        slideInMenuNav.classList.add("flex");
        slideInMenuNav.classList.add("slideInRightAnim");
        isHamburgerVisible = true;

    }
    else
    {
       
     
        slideInMenuNav.classList.remove("slideInRightAnim");
        slideInMenuNav.classList.add("slideOutRightAnim");
        slideInMenuNav.addEventListener("animationend", function() 
        {
            slideInMenuNav.classList.remove("flex");
            slideInMenuNav.classList.add("hide");
            slideInMenuNav.classList.remove("slideOutRightAnim");
        }, {once: true});

        isHamburgerVisible = false;

    }

}

const hamburgerIcon = document.querySelector("#hamburgerIcon");
hamburgerIcon.addEventListener("click", hamburgerToggle);

const closeMenuImg = document.querySelector("#closeMenuImg");
// console.log(menuExitImg);
closeMenuImg.addEventListener("click", hamburgerToggle);