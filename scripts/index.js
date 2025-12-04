function adjustRefri1LitroTitle() {
    const title2 = document.getElementById('Refri1Litro');
    if (window.innerWidth > 700){
        title2.innerHTML = 'Refrigerantes 1 Litros';
    }
    else {
        title2.innerHTML = 'Refrigerantes <br> 1 Litros';
    }
}

function adjustDuploCalabresaTitle() {
    const title = document.getElementById('duplo-calabresa-title');
    if (title) { // Check if the element exists
        if (window.innerWidth > 700) {
            title.innerHTML = 'DUPLO CALABRESA';
        } else {
            title.innerHTML = 'DUPLO <br>CALABRESA';
        }
    }
}

window.addEventListener('resize',
adjustRefri1LitroTitle);
adjustRefri1LitroTitle();

window.addEventListener('resize',
adjustDuploCalabresaTitle);
adjustDuploCalabresaTitle();

