//Menú de navegación del header 
const FaBars = document.querySelector('.fa-bars');
const Nav = document.querySelector('nav');


// // Carrusel de comentarios (solo 1)
const lines = document.querySelectorAll('.slider_line')
const container = document.querySelector('.container')
const slider = document.querySelector('.slider')
const next = document.querySelector('.slider_next')
const prev = document.querySelector('.slider_prev')

// //Carrusel de comentarios (3)
const slider_2       = document.querySelector('.slider_2')
const botones      = document.querySelectorAll('.slider_2_button') 
const [ next2 , prev2 ] = botones
const container2       = document.querySelector('.container2')
const line2   = document.querySelectorAll('.slider_line2')    
const paneles      = document.querySelectorAll('.container2__panel')

// Constantes del carrusel vertical
const grande = document.querySelector('.slider__grande__vertical')
const punto = document.querySelectorAll('.slider__point')


//Menú de navegación del header
FaBars.addEventListener('click', function () {
    Nav.classList.toggle('ver');
    FaBars.classList.toggle('fa-times');
  })


// Carrusel de comentarios (solo 1)
let foto = 0

lines.forEach(function(cadaPunto, i){
      lines[i].addEventListener('click', function(){
        foto = i 
        moveToElement()
      })
})
next.addEventListener('click', siguiente)
prev.addEventListener('click', anterior)

//Carrusel de comentarios 2 (3 comentarios al desplazar)
let   foto2         = 0
let   anchoPanel   = 100 / paneles.length

line2.forEach( function( cadaPunto , i ){
    line2[i].addEventListener('click',function(){
        foto2 = i
        desplazar2()
    })
})
next2.addEventListener('click', siguiente2 )
prev2.addEventListener('click', anterior2)


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


//Funciones
//Carrusel 1

function moveToElement(){
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
    moveToElement()
}
function anterior(){
    foto--
    if ( foto < 0 ){
        foto = 3
    }
    moveToElement()
}

//Carrusel 2

function desplazar2(){
    container2.style.transform = 'translateX(-' + foto2 * anchoPanel + '%)'
    line2.forEach( function( cadaPunto , i ){
        line2[i].classList.remove('activo')
    })
    line2[foto2].classList.add('activo')
}
function siguiente2(){
    foto2++
    if( foto2 >= paneles.length ){
        foto2 = 0 
    }
    desplazar2()
}
function anterior2(){
    foto2--
    if( foto2 < 0 )  {
        foto2 = paneles.length - 1 
    }
    desplazar2()
}




