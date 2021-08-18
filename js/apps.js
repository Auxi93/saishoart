const Fabars = document.querySelector('.fa-bars')
const Nav = document.querySelector('nav')
const Arrow = document.querySelector('.arrow')

const lines = document.querySelectorAll('.slider_line')
const container = document.querySelector('.container')
const slider = document.querySelector('.slider')
const next = document.querySelector('.slider_next')
const prev = document.querySelector('.slider_prev')

//Menú de navegación cambiar de jq a js
Fabars.click(function(){
    Nav.toggleClass('ver')
    Fabars.toggleClass('fa-times')
})

//Carrusel de imágenes
let foto = 0

lines.forEach(function(cadaPunto, i){
      lines[i].addEventListener('click', function(){
        foto = i 
        desplazar()
      })
})
next.addEventListener('click', siguiente)
prev.addEventListener('click', anterior)

function desplazar(){
    let operacion = foto* -25

    let propiedad = 'translateX('+ operacion + '%)'
    container.style.transform = propiedad

    lines.forEach(function(cadaPunto, i){
        lines[i].classList.remove('active')
    })
    lines[foto].classList.add('active')
}
function siguiente (){
    foto++
    if (  foto > 3){
        foto = 0
    }
    desplazar()
}
function anterior(){
    foto--
    if ( foto < 0 ){
        foto = 3
    }
    desplazar()
}
