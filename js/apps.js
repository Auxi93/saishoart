//Menú de navegación
const Fabars = document.querySelector('.fa-bars')
const Nav = document.querySelector('nav')
const Arrow = document.querySelector('.arrow')

// Carrusel de comentarios (solo 1)
const lines = document.querySelectorAll('.slider_line')
const container = document.querySelector('.container')
const slider = document.querySelector('.slider')
const next = document.querySelector('.slider_next')
const prev = document.querySelector('.slider_prev')

//Carrusel de comentarios (3)
const slider_2       = document.querySelector('.slider_2')
const botones      = document.querySelectorAll('.slider_2_button') 
const [ next2 , prev2 ] = botones
const grande       = document.querySelector('.grande')
const puntos__li   = document.querySelectorAll('.puntos__li')    
const paneles      = document.querySelectorAll('.grande__panel')

// Carrusel vertical
const section = document.querySelectorAll('.slider__section')
const grande = document.querySelector('.slider__grande')


//Flechas para bajar las secciones de la primera pantalla
let lineaActiva = 0


document.body.addEventListener('keydown', function(e){
    console.log(e.key)

    if( e.key =='ArrowUp' || e.key =='ArrowDown'){
          let nextLinea = lineaActiva + 1
          if (nextLinea >= linea.length)
          {
                nextLinea = 0
          }
          moveToElement(nextLinea)
    }
})
function moveToElement(i)
{
      grande.style.transform = 'translateY(-' + (i * 50) + '%)'
      
            
      linea.forEach(function(cadaLinea, i){
            linea[i].classList.remove('activo')
      })
      linea[i].classList.add('activo')

      section.forEach(function(cadaSection, i){
            section[i].classList.remove('activo')
      })
      section[i].classList.add('activo')

      lineaActiva = i
}




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

// Prueba 2
let   foto2         = 0
let   anchoPanel   = 100 / paneles.length

puntos__li.forEach( function( cadaPunto , i ){
    puntos__li[i].addEventListener('click',function(){
        foto2 = i
        desplazar2()
    })
})
next2.addEventListener('click', siguiente2 )
prev2.addEventListener('click', anterior2)

//automático

// prueba.addEventListener('mouseover',function(){
//     clearInterval( automatico  )
// })

// prueba.addEventListener('mouseout',function(){
//     automatico   = setInterval( siguiente2 , 2000)
// })
function desplazar2(){
    grande.style.transform = 'translateX(-' + foto2 * anchoPanel + '%)'
    puntos__li.forEach( function( cadaPunto , i ){
        puntos__li[i].classList.remove('activo')
    })
    puntos__li[foto2].classList.add('activo')
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

