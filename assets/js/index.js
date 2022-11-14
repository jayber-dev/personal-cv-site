window.addEventListener('scroll', (e)=> {
    console.log(location.href);
    console.log(window.scrollY);
    if(location.href !== 'http://127.0.0.1:5500/#main-section' || window.scrollY > 100) {
        document.querySelector('nav').style.display = 'none'
        document.querySelector('.side-menu-modal').style.display = 'block'
    } else {
        document.querySelector('nav').style.display = 'block'
        document.querySelector('.side-menu-modal').style.display = 'none'
    }
})