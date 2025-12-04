function adjustRefri1LitroTitle() {
    const title2 = document.getElementById('Refri1Litro');
    if (window.innerWidth > 700){
        title2.innerHTML = 'Refrigerantes 1 Litros';
    }
    else {
        title2.innerHTML = 'Refrigerantes <br> 1 Litros';
    }
}

window.addEventListener('resize', 
adjustRefri1LitroTitle);
adjustRefri1LitroTitle();
