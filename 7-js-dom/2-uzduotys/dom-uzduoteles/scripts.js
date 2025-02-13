// pirmas div

document.getElementById('pirma-antraste').innerHTML = 'Naujas pirmos antrastes tekstas';
document.getElementById('pirmas-paragrafas').innerHTML = 'Naujas pakeistas pirmo paragrafo tekstas';

// antras div;

console.log ('antras div'); 

let tekstasIsParagrafo = document.getElementById('paragrafo-tekstas').innerHTML;
console.log ('paimtas su innerHTML tekstas:', tekstasIsParagrafo);

let tekstasIsParagrafo2 = document.getElementById('paragrafo-tekstas').innerText;
console.log ('paimtas su innerText tekstas:', tekstasIsParagrafo2 );

console.log();

// trecias div

console.log('trecias div');

console.log('innerHTML turinys:', document.getElementById('trecias').innerHTML);
console.log('innerText turinys:', document.getElementById('trecias').innerText);

console.log();

//septintas div 
function pakeisti() {
    document.getElementById('septinto-tekstas').innerHTML = "naujas tekstas";
}
//astuntas div 
function pakeisti2(elementas, tekstas) {
    document.getElementById(elementas).innerHTML = tekstas;
}

//devintas div

function pakeisti3(elementas, tekstas) {
    document.getElementById(elementas).innerHTML = tekstas;
}

function kitaSpalva(elementas, spalva) {
    document.getElementById(elementas).style.color = spalva;
}

// desimtas

var pirmas = 8;
var antras = 9;

var suma = pirmas + antras;
var skirtumas = pirmas - antras;
var sandauga = pirmas * antras;
var dalmuo = pirmas / antras;

document.getElementById("suma").innerHTML = pirmas + " + " + antras + " = " + suma;
document.getElementById("skirtumas").innerHTML = pirmas + " - " + antras + " = " + skirtumas;
document.getElementById("sandauga").innerHTML = pirmas + " * " + antras + " = " + sandauga;
document.getElementById("dalmuo").innerHTML = pirmas + " / " + antras + " = " + dalmuo;


// vienuoliktas;

pirmas = 7;
antras = 5;

let isvedimui = `<p>${pirmas} + ${antras} = ${pirmas + antras}</p>
                 <p>${pirmas} - ${antras} = ${pirmas - antras}</p>
                 <p>${pirmas} * ${antras} = ${pirmas * antras}</p>
                 <p>${pirmas} / ${antras} = ${pirmas / antras}</p>`;

document.getElementById('vienuolikto-turinys').innerHTML = isvedimui;


// dvyliktas div

function keistiSpalva(elementas, spalva) {
    document.getElementById(elementas).style.color = spalva;
}

function keistiDydi(elementas, dydis) {
    document.getElementById(elementas).style.fontSize = dydis + 'px';
}

// tryliktas div


// DYDZIU PAKEITIMUI
let divKeitimui = document.getElementById('div-keitimui');

let plocioSlider = document.getElementById('plocio-slider');
let aukscioSlider = document.getElementById('aukscio-slider');

plocioSlider.oninput = function () {
    divKeitimui.style.width = this.value + 'px'
}
aukscioSlider.oninput = function () {
    divKeitimui.style.height = this.value + 'px'
}

// spalvom

let spalvosPasirinkimas = document.getElementById('spalvos-pasirinkimas');

spalvosPasirinkimas.oninput = function() {
    divKeitimui.style.backgroundColor = this.value;
}

// tekstui

let tektasDivui = document.getElementById('tekstas-divui');

tektasDivui.oninput = function () {
    divKeitimui.innerHTML = this.value;
}

// keturioliktas div 

function pridetiZodi(elementas, zodis) {
    document.getElementById(elementas).value += zodis + " " ;
}

// penkioliktas div

let penkioliktoTekstas = document.getElementById('penkiolikto-tekstas');

function zodziuKiekis () {
    let tekstas = penkioliktoTekstas.value;
    let zodziai = tekstas.trim().split(' ');
    document.getElementById('penkiolikto-atsakymai').innerHTML =
    `<p>Zodziu kiekis: ${zodziai.length}</p>`
}

function ilgiausiasZodis() {
    let tekstas = penkioliktoTekstas.value
}