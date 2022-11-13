const imgData = document.querySelectorAll('.img-container');

imgData.forEach(element => {
    element.addEventListener('mouseover', () => {
        console.log('wow');
    });
    
});