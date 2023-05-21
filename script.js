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