// //Menú de navegación
// const Fabars = document.querySelector('.fa-bars')
// const Nav = document.querySelector('nav')
// const Arrow = document.querySelector('.arrow')

// // Carrusel de comentarios (solo 1)
// const lines = document.querySelectorAll('.slider_line')
// const container = document.querySelector('.container')
// const slider = document.querySelector('.slider')
// const next = document.querySelector('.slider_next')
// const prev = document.querySelector('.slider_prev')

// //Carrusel de comentarios (3)
// const slider_2       = document.querySelector('.slider_2')
// const botones      = document.querySelectorAll('.slider_2_button') 
// const [ next2 , prev2 ] = botones
// const grande       = document.querySelector('.grande')
// const puntos__li   = document.querySelectorAll('.puntos__li')    
// const paneles      = document.querySelectorAll('.grande__panel')

// Constantes del carrusel vertical
const grande = document.querySelector('.slider__grande__vertical')
const punto = document.querySelectorAll('.slider__point')



//Carrusel vertical
let activo = 0


punto.forEach(function(cadaPunto, i){
    punto[i].addEventListener('click', function(){
        // Primero, apagamos todas las líneas y activamos la nueva
        punto.forEach(function(cadaPunto, i){
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

        // Segundo, movemos la pantalla hacia abajo
        setTimeout( function (){
            grande.style.transform = 'translateY(' + i * -(100 / punto.length) + '%)'
        }, 500)     
        // Por último, marcamos la imagen como activa
        activo = i
    })
    
})








