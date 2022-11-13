const imgData = document.querySelectorAll('.img-container');
const rightSideContainer = document.querySelector('.right-side-img')
imgData.forEach(element => {
    element.addEventListener('mouseover', () => {
       const img = element.querySelector('img');
       console.log(img);
       rightSideContainer.src = img.src
    });
    
});