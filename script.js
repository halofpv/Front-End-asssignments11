function myFunction() {
    document.getElementById("demo").innerHTML =
        "Cookies associated with this document: " + document.cookie;
}
function hideText() {
    document.getElementById('hide').style.display = 'none';
}

function showText() {
    document.getElementById('hide').style.display = 'block';
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