

const slides = document.querySelectorAll('.slide')

slides.forEach(i => {
    i.addEventListener('click', () =>{
        clearActiv()
        i.classList.add('activ')
    })
});

function clearActiv (){
    slides.forEach(i => {
        i.classList.remove('activ')
    });
}