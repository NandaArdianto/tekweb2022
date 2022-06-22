/* =============== Typed Text =============== */
var typed = new Typed(".typing" ,{
    strings:[" ","Nanda Ardianto"],
    typeSpeed:150,
    BackSpeed:80,
    loop:true
})

/* =============== Aside Text =============== */
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () =>
    {  
        asideSectionTogglerBtn();
    
    })
    function asideSectionTogglerBtn()
    {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i = 0; i < totalSection; i++)
        {
            allSection[i].classList.toggle("open");
        }
    }
    function showSection(element)
    {
        const target = element
    }
    