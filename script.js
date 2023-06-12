//эта функция при наведении мышкой на сушу увеличивают коробку с сушей
function menuHover(element) {
    element.style.transform = 'scale(1.1)';
}
//а если убрать наведение на сушину то коробка вернется в стандартный размер
function menuOut(element) {
    element.style.transform = 'scale(1)';
}
//переворачивает коробку суши на обратную сторону
function flipElement(button) {
    var flipContainer = button.parentNode.parentNode.parentNode;
    flipContainer.classList.toggle('flip');
}
//открывает или закрывает вкладку суши в меню
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
//открывает или закрывает вкладку сеты в меню
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
//движение картинок в меню при нажатии в лево или в право
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
//отображает слайд
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
