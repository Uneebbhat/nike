// MEN DROPDOWN
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    console.log('clicked');
})

var toggleButton1 = document.getElementsByClassName('toggle-button1')[0]
const navbarLinks1 = document.getElementsByClassName('navbar-links1')[0]

toggleButton1.addEventListener('click', () => {
    navbarLinks1.classList.toggle('active1')
    console.log('clicked');
})

var toggleButton1 = document.getElementsByClassName('toggle-button1')[0]
var navbarLinks2 = document.getElementsByClassName('navbar-links2')[0]

toggleButton1.addEventListener('click', () => {
    navbarLinks2.classList.toggle('active2')
    console.log('clicked');
})

var toggleButton1 = document.getElementsByClassName('toggle-button1')[0]
var navbarLinks3 = document.getElementsByClassName('navbar-links3')[0]

toggleButton1.addEventListener('click', () => {
    navbarLinks3.classList.toggle('active3')
    console.log('clicked');
})

// WOMEN DROPDOWN
var toggleButton2 = document.getElementsByClassName('toggle-button2')[0]
var navbarLinks4 = document.getElementsByClassName('navbar-links4')[0]

toggleButton2.addEventListener('click', () => {
    navbarLinks4.classList.toggle('active4')
    console.log('clicked');
})

var toggleButton2 = document.getElementsByClassName('toggle-button2')[0]
var navbarLinks5 = document.getElementsByClassName('navbar-links5')[0]

toggleButton2.addEventListener('click', () => {
    navbarLinks5.classList.toggle('active5')
    console.log('clicked');
})

var toggleButton2 = document.getElementsByClassName('toggle-button2')[0]
var navbarLinks6 = document.getElementsByClassName('navbar-links6')[0]

toggleButton2.addEventListener('click', () => {
    navbarLinks6.classList.toggle('active6')
    console.log('clicked');
})

//KID DROPDOWN
var toggleButton3 = document.getElementsByClassName('toggle-button3')[0]
var navbarLinks7 = document.getElementsByClassName('navbar-links7')[0]

toggleButton3.addEventListener('click', () => {
    navbarLinks7.classList.toggle('active7')
    console.log('clicked');
})

var toggleButton3 = document.getElementsByClassName('toggle-button3')[0]
var navbarLinks8 = document.getElementsByClassName('navbar-links8')[0]

toggleButton3.addEventListener('click', () => {
    navbarLinks8.classList.toggle('active8')
    console.log('clicked');
})

var toggleButton3 = document.getElementsByClassName('toggle-button3')[0]
var navbarLinks9 = document.getElementsByClassName('navbar-links9')[0]

toggleButton3.addEventListener('click', () => {
    navbarLinks9.classList.toggle('active9')
    console.log('clicked');
})

//CHANGE THE PIC //FORWORD
function changeImg() {
    var image = document.getElementById('myImg');
    if (image.src.match("img/nike2.0.png")) {
        image.src = "img/nike3.0.png";
    }
    else{
        image.src = "img/nike4.0.png";
    }
}

//CHANGE THE PIC //BACKWORD
function changeImg1() {
    var image = document.getElementById('myImg');
    if (image.src.match("img/nike4.0.png")) {
        image.src = "img/nike3.0.png";
    }
    else{
        image.src = "img/nike2.0.png";
    }
}
