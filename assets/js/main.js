/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SERVICES MODAL ===============*/
const modalview = document.querySelectorAll('.service-modal'),
      modalbtns = document.querySelectorAll('.service-button'),
      modalclose = document.querySelectorAll('.service-modal-close')

let modal = function(modalclick){
    modalview[modalclick].classList.add('active-modal')
}

modalbtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalclose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalview.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixer = mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkwork = document.querySelectorAll('.work-item')

function activework(){
    linkwork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkwork.forEach(l=> l.addEventListener('click', activework))




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]')

function scrollactive(){
    const scrollY = window.pageYOffset

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offseTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > screenTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.add('active-link')       
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollactive)


/*=============== LIGHT DARK THEME ===============*/ 




