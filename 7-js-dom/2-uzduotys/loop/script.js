let skaicius = 1;
let riba = 5;

let atsakymoVieta = document.querySelector('h1 span');

document.querySelector('button.atgal').addEventListener('click', () => {
    if (skaicius === 1) {
        skaicius = riba;
    } else {
        skaicius--;
    }
    atsakymoVieta.innerText = skaicius;
});

document.querySelector('button.pirmyn').addEventListener('click', () => {
    if (skaicius === riba) {
        skaicius = 1;
    } else {
        skaicius++;
    }
    atsakymoVieta.innerText = skaicius;
});