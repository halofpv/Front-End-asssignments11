function myFunction() {
    document.getElementById("demo").innerHTML =
        "Cookies associated with this document: " + document.cookie;
}
var c = 0;
var button = document.querySelector('.openKnopka');
function hideText() {
    c++;
    if (c % 2 == 0) {
        document.getElementById('hide').style.display = 'block';
        button.value = 'Close menu';
    } else {
        document.getElementById('hide').style.display = 'none';
        button.value = 'Open menu';
    }
}
var sussi = 0;
function hideSussi(){
    sussi++;
    if (sussi % 2 == 0) {
        document.getElementById('hideSussi').style.display = 'block';
    } else {
        document.getElementById('hideSussi').style.display = 'none';
    }
}
function menuHover(element) {
    element.style.transform = 'scale(1.1)';
}

function menuOut(element) {
    element.style.transform = 'scale(1)';
}


function flipElement(button) {
    var flipContainer = button.parentNode.parentNode.parentNode;
    flipContainer.classList.toggle('flip');
}


function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "flex") {
        menu.style.display = "block";
    }
    else if(menu.style.display === "none")
    {
        menu.style.display = "flex";
    }
    else {
        menu.style.display = "none";
    }
}
function toggleMenuu() {
    var menu = document.getElementById("menu1");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function scrollToBlock() {
    var block = document.getElementById("targetBlock");
    block.scrollIntoView({ behavior: "smooth" });
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}
window.addEventListener('scroll', function() {
    var progressBar = document.getElementById('myBar');
    var progressContainer = document.getElementById('myProgress');
    var rowElement = document.querySelector('.row');
    var rowBottom = rowElement.offsetTop + rowElement.offsetHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;
    var scrollPosition = scrollTop + windowHeight;

    if (scrollPosition >= rowBottom) {
        progressBar.style.width = '100%';
    } else {
        var progressWidth = ((scrollPosition - rowElement.offsetTop) / (rowBottom - rowElement.offsetTop)) * 100;
        progressBar.style.width = progressWidth + '%';
    }
});

var id = null;
function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}