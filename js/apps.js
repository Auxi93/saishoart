// Header menu navigation consts
const faBars = document.querySelector('.fa-bars');
const nav = document.querySelector('nav');


// Comments Carousel consts (1)
const lines = document.querySelectorAll('.slider_line')
const container = document.querySelector('.container')
const slider = document.querySelector('.slider')
const next = document.querySelector('.slider_next')
const prev = document.querySelector('.slider_prev')

// Comments Carousel consts (3)
const slider_2       = document.querySelector('.slider_2')
const buttons      = document.querySelectorAll('.slider_2_button') 
const [ next2 , prev2 ] = buttons
const container2       = document.querySelector('.container2')
const lines2   = document.querySelectorAll('.slider_line2')    
const panels      = document.querySelectorAll('.container2__panel')

// Vertical Carousel consts
const containerVertical = document.querySelector('.slider__container__vertical')
const points = document.querySelectorAll('.slider__point')


// Header menu navigation
faBars.addEventListener('click', function () {
    nav.classList.toggle('ver');
    faBars.classList.toggle('fa-times');
  })

// Comments Carousel (1)
let photo = 0

lines.forEach(function(eachLine, i){
      eachLine.addEventListener('click', function(){
        photo = i 
        movePhoto()
      })
})
next.addEventListener('click', nextPhoto)
prev.addEventListener('click', previousPhoto)

// Comments Carousel (3)
let   photo2         = 0
let   panelWidth   = 100 / panels.length

lines2.forEach( function( eachLine2 , i ){
    eachLine2.addEventListener('click',function(){
        photo2 = i
        movePhoto2()
    })
})
next2.addEventListener('click', nextPhoto2 )
prev2.addEventListener('click', previousPhoto2)


// Vertical Carousel
let verticalActive = 0
points.forEach(function(eachPoint, i){
    eachPoint.addEventListener('click', function(){
        moveVertical(i)
    })
    
})

// Keyboard arrow keys to move Vertical Carousel
document.body.addEventListener('keydown', function(e){
    if( e.key =='ArrowUp')
    {
        let nextPoint = verticalActive - 1
        if (nextPoint < 0)
        {
            nextPoint = points.length - 1
        }
        moveVertical(nextPoint)
    }
    else if (e.key =='ArrowDown')
    {
        let nextPoint = verticalActive + 1
        if (nextPoint >= points.length)
        {
            nextPoint = 0
        }
        moveVertical(nextPoint)
    }
})


// Util functions
// Vertical Carousel
function moveVertical(i)
{
    // First, we disable every point
    points.forEach(function(eachPoint, i){
        eachPoint.classList.remove('active')
    })
    points[i].classList.add('active')

    // Then, move the carousel
    setTimeout( function (){
        containerVertical.style.transform = 'translateY(' + i * -(100 / points.length) + '%)'
    }, 100)     
    // Finally, store the active point
    verticalActive = i
}

// Comments Carousel (1)
function movePhoto(){
    let operacion = photo * -25

    let propiedad = 'translateX(' + operacion + '%)'
    container.style.transform = propiedad

    lines.forEach(function(eachLine, i){
        eachLine.classList.remove('active')
    })
    lines[photo].classList.add('active')
}
function nextPhoto (){
    photo++
    if (  photo > 3){
        photo = 0
    }
    movePhoto()
}
function previousPhoto(){
    photo--
    if ( photo < 0 ){
        photo = 3
    }
    movePhoto()
}

// Comments Carousel (3)
function movePhoto2(){
    container2.style.transform = 'translateX(-' + photo2 * panelWidth + '%)'
    lines2.forEach( function( eachLine2, i ){
        eachLine2.classList.remove('active')
    })
    lines2[photo2].classList.add('active')
}
function nextPhoto2(){
    photo2++
    if( photo2 >= panels.length ){
        photo2 = 0 
    }
    movePhoto2()
}
function previousPhoto2(){
    photo2--
    if( photo2 < 0 )  {
        photo2 = panels.length - 1 
    }
    movePhoto2()
}




