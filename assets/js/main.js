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
var mixer = mixitup('.article-container', {
    selectors: {
        target: '.article-card'
    },
    animation: {
        duration: 300
    }
});

/* Link active article */ 
const linkarticle = document.querySelectorAll('.article-item')

function activearticle(){
    linkarticle.forEach(l => l.classList.remove('active-article'))
    this.classList.add('active-article')
}
linkarticle.forEach(l=> l.addEventListener('click', activearticle))




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




