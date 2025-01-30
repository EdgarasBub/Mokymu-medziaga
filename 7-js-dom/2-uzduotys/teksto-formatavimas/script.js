
let tekstas = document.querySelector('.tekstas p');

document.getElementById('dydisInput').addEventListener('input', (event) => {
    if (event.target.value > 0) {
        tekstas.style.fontSize = event.target.value + 'px';
    } else {
        alert('Teigiama skaciu rasyk');
        tekstas.style.fontSize = '16px';
        event.target.value = 16;
    }
})
let mygtukai = document.querySelectorAll('.filtrai .teksto-stilius button');

// document.getElementByID - IEMA PER ID
// document.querySelector - IAMA PER KLASE

mygtukai.forEach((mygtukas) => {
    mygtukas.addEventListener('click', (event) => {
        document.querySelector('.filtrai .teksto-stilius button.aktyvus').classList.remove('aktyvus');
        event.target.classList.add('aktyvus');

        let stilius = event.target.attributes['data-tipas'].value;

        switch (stilius) {
            case 'paprastas':
                tekstas.style.fontStyle = 'normal';
                tekstas.style.fontWeight = 'normal';
                break;
            case 'pastorintas':
                tekstas.style.fontStyle = 'normal';
                tekstas.style.fontWeight = 'bold';
                break;
            case 'pasviras':
                tekstas.style.fontStyle = 'italic';
                tekstas.style.fontWeight = 'normal';
                break;
        }
    });
});