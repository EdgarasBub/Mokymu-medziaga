console.log ('**** 1 uzduotis ***')

let masyvas1 = [ 'medis', 'agrastas', 'agurkas', 'zuikis', 'pumpuiras'];
let sodas = 0;

for (let sodas in masyvas1 ) {
    console.log (sodas, masyvas1[sodas])
}

console.log ('**** 2 uzduotis ***')

let masyvas2 = ['bananas', 'kakava', 'pampersai', 'dantu pasta', 'popierius']


console.log ('pirkiniu kiekis -', masyvas2.length);


for (let pirkiniuSarasas in masyvas2) {
    console.log ('-', masyvas2[pirkiniuSarasas])
}

console.log ('**** 3 uzduotis ***')

console.log ('**** 4 uzduotis ***')

let dienosKilometrai = [200, 123, 222, 100, 150, 300, 500,];

for (let kilometras of dienosKilometrai) {
    if (kilometras > 150){
        console.log ('nuvaziuoti kilometrai', kilometras)
    }
}
console.log ('**** 5 uzduotis ***');

let klaidos = ['ui89', 'ai55', 'auc22', 'karamba7', 'ei9','mur29'];

console.log (`${klaidos [0]} navigacijos klaida` );
console.log (`${klaidos [1]} navigacijos paklaida` );
console.log (`${klaidos [2]} avarija priesiai` );
console.log (`${klaidos [3]} potvynis priesais` );
console.log (`${klaidos [4]} kelias nepravaziuojamas` );
console.log (`${klaidos [5]} prieki plyta` );

console.log ('**** 6 uzduotis ***');

let masyvas3 = [77 , 85 , 95, 13 , 25];
let perDienaPerka = 5;
for (let galiakas of masyvas3) {
    console.log( masyvas3 + ' vnt uztejs nazdauk tiek d:' + Math.round(galiakas/perDienaPerka))

    }


console.log ('**** 7 uzduotis ***')

let pazymiaiM = [];
let suma = 0

for ( let i = 0; i < 10; i++) {
    pazymiaiM.push(Math.floor(Math.random() * 10 ) + 1);
    suma += pazymiaiM[i];
}


let pazymiaiMvidurkis = suma / pazymiaiM.length;


let didesniNeiVidurkisM = [];

for (let i = 0; i < 10; i++) {
    if (pazymiaiM[i] > pazymiaiMvidurkis ) {
        didesniNeiVidurkisM.push(pazymiaiM[i])
    } 
}

let mazesniNeiVidurkisM = [];

for (let i = 0; i < 10; i++) {
    if (pazymiaiAntras[i] > pazymiaiMvidurkis ) {
        mazesniNeiVidurkisM.push(pazymiaiM[i])
    } 
}


console.log ('pazymiai:', pazymiaiM)
console.log ('pazymiu vidurkis:', pazymiaiMvidurkis)
console.log('Didesni nei vidurkis', didesniNeiVidurkisM)
console.log('mazesnis nei vidurkis', mazesniNeiVidurkisM)


console.log ('**** 8 uzduotis ***')

let pazymiaiManto = [];
let suma1 = 0

for ( let i = 0; i < 10; i++) {
    pazymiaiManto.push(Math.floor(Math.random() * 10 ) + 1);
    suma1 += pazymiaiManto[i];
}

let pazymiaiMantovidurkis = suma1 / pazymiaiManto.length; 

let pazymiaiMariaus = [];
let suma2 = 0

for ( let i = 0; i < 10; i++) {
    pazymiaiMariaus.push(Math.floor(Math.random() * 10 ) + 1);
    suma2 += pazymiaiMariaus[i];
}


let pazymiaiMariausvidurkis = suma2 / pazymiaiMariaus.length;

console.log ('manto pazymiai:', pazymiaiManto);
console.log ('mariaus pazymiai:', pazymiaiMariaus);
console.log ('manto pazymiai vidurkis:', pazymiaiMantovidurkis);
console.log ('mariaus pazymiai vidurkis:', pazymiaiMariausvidurkis);

if (pazymiaiMantovidurkis > pazymiaiMariausvidurkis) {
    console.log (`pirmo studento vidurkis didesnis : ${parseFloat (pazymiaiMantovidurkis).toFixed(2)} > ${parseFloat(pazymiaiMariausvidurkis).toFixed(2)}`)
}
else {
    console.log (`antro studento vidurkis didesnis : ${parseFloat (pazymiaiMantovidurkis).toFixed(2)} < ${parseFloat(pazymiaiMariausvidurkis).toFixed(2)}`)
}
console.log ('**** 10 uzduotis ***')
console.log ('**** 11 uzduotis ***')

