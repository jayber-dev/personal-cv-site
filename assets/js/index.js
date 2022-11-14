window.addEventListener('scroll', (e)=> {
    if(window.scrollY > 100) {
        document.querySelector('nav').style.display = 'none'
        document.querySelector('.side-menu-modal').style.display = 'block'
    }  else {
        document.querySelector('nav').style.display = 'block'
        document.querySelector('.side-menu-modal').style.display = 'none'
    }
})