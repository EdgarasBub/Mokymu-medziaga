function ApieMane () {
    console.log ('edgaras');
    console.log ('$');
}

ApieMane ();
ApieMane ();
ApieMane ();

console.log ('***************2 uzduotis ***************')

function eilerastukas () {
    console.log ('Eni')
    console.log ('Beni')
    console.log ('Diki')
    console.log ('Daki')
    console.log ('Triki')
}
eilerastukas ();
eilerastukas ();
eilerastukas ();
eilerastukas ();
eilerastukas ();

console.log ('***************3 uzduotis ***************')

function ApieMane1 () {
    console.log ('edgaras');
}
function ApieMane2 () {
    console.log ('Gedas');
}

function ApieMane3 () {
    console.log ('Salivs');
}
ApieMane1();
ApieMane2();
ApieMane3();

console.log ('***************4 uzduotis ***************')

function ApieMus () {
    console.log ('AS')
}
function ApieMus1 () {
    console.log (' IR TU')
}
function ApieMus2 () {
    ApieMus();
    ApieMus1();
}

ApieMus2();

console.log ('***************5 uzduotis ***************')

function RandomSkaiciai () {
    let kintamasis1 = (Math.floor(Math.random() * 11));
    let kintamasis2 = (Math.floor(Math.random() * 11));
    console.log (kintamasis1, '+', kintamasis2, '=', kintamasis1 + kintamasis2  )
}


RandomSkaiciai();
RandomSkaiciai();
RandomSkaiciai();

console.log ('***************6 uzduotis ***************')

// function Info (){
//             vardas:'Antanas',
//             pavardė:'Antanaitis',
//             amžius:'Detektyvas',
//             alga: 3600,
//             etatas: 1.5,
//             specializacija:'detektyvas',

//         }
//     ]
// }


// Info();


console.log ('***************FUNKICJA 2  uzduotis ***************')
console.log ('***************1 uzduotis ***************')

function pasisveikinti (vardas) {
    console.log ('welcome' + vardas)
}

function atsisveikinti (vardas) {
    console.log ('bye' + vardas)
}
let vardas = 'Petras' ;

pasisveikinti(vardas);
atsisveikinti(vardas);

console.log ('***************2 uzduotis ***************')

let l1 = 3;
let l2 = 2;

function perduotiSkaiciai (l1, l2) {
    if (l1 > l2) {
        console.log (`${l1} daugiau nei ${l2}`)
    } 
    else if (l1 < l2) {
        console.log (`${l1} maziau nei ${l2}`)
    }
    else {
        console.log ('skaiciai lygus')
    }
}

perduotiSkaiciai(l1,l2);
l1 = 1;
l2 = 3;
perduotiSkaiciai(l1,l2);

l1 = 2;
l2 = 2;

perduotiSkaiciai(l1,l2);

console.log ('***************3 uzduotis ***************')

// let AutomobilioDuomenys = [{
//     Marke: 'Audi',
//     Modelis: 'A8',
//     GamybosMetai: '2016',
//     DarbinisTuris: '3',
// }]

// function AutomobilioDuomenys () {
//     console.log (
//         Marke: 'Audi',
//         Modelis: 'A8',
//         GamybosMetai: '2016',
//         DarbinisTuris: '3',)
 
// }



console.log ('***************4 uzduotis ***************')


function skirtumas (Skaitmuo1, Skaitmuo2) {
    let Sskirtumas = Skaitmuo1 - Skaitmuo2;
    console.log (`${Skaitmuo1} - ${Skaitmuo2} = ${Sskirtumas}`)
}
function suma (Skaitmuo1, Skaitmuo2) {
    let Sskirtumas = Skaitmuo1 + Skaitmuo2;
    console.log (`${Skaitmuo1} + ${Skaitmuo2} = ${Sskirtumas}`)
}
function daugyba (Skaitmuo1, Skaitmuo2) {
    let Sskirtumas = Skaitmuo1 * Skaitmuo2;
    console.log (`${Skaitmuo1} * ${Skaitmuo2} = ${Sskirtumas}`)
}
function dalyba (Skaitmuo1, Skaitmuo2) {
    let Sskirtumas = Skaitmuo1 / Skaitmuo2;
    let Sskirtumass = Sskirtumas.toFixed(1);
    console.log (`${Skaitmuo1} / ${Skaitmuo2} = ${Sskirtumass}`)
}

skirtumas(99, 95);
suma(99, 95);
daugyba(99, 95);
dalyba(99, 95);

console.log ('***************FUNKICJA 3  uzduotis ***************')
console.log ('***************1 uzduotis ***************')

//  Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą.
//  Funkcijoje išveskite visus žodžius iš masyvo atskirose eilutėse, nurodant žodžio ilgį (simbolių kiekį).
//  Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį duomenimis.
//  Iškvieskite sukurtą funkciją perduodant turimą masyvą.


function  zodziuMasyvas (mas) {
    for (let item of mas) { 
    console.log (item + ' ' + item.length);
    }
}

let masyvas = [
    'vienas',
    'du',
    'hola',
    'trys',
]

zodziuMasyvas(masyvas); 

console.log ('***************2 uzduotis ***************');
// Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. +
// Funkcija turėtų atspausdinti visus skaičius, šalia jų išvedant to skaičiaus kvadratą ir jį padalintą iš dviejų.
// Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite jį duomenimis. +
// Iškvieskite funkciją du kartus, kiekvieną kartą perduodant skirtingą turimą masyvą.



function  skaiciuMasyvas (mas) {
    let suma = 0;
    let suma1 = 0;
    for (let item of mas){
        suma += item;
        suma1 = (suma * suma) / 2;
    }
    console.log (`Skaiciai: ${mas} Suma:  ${suma} kvadratas/2 ${suma1}` )
}


let sMasyvas1 = [ 1, 2, 3, 4, 5]
let sMasyvas2 = [ 5, 6, 7, 8, 9]

skaiciuMasyvas (sMasyvas1);
skaiciuMasyvas (sMasyvas2);

console.log ('***************3 uzduotis ***************');

// Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą, bei studento vardą su pavarde.
// Funkcija turėtų išvesti studento vardą ir pavardę, jo pažymius.
// Taip pat, suskaičiuoti vidurkį, bei jį išvesti.
// Už funkcijos ribų susikurkite reikiamus kintamuosius ir masyvus, arba objektus studentų pažymiams saugoti ir užpildykite juos duomenimis.
// Iškvieskite šią funkciją perduodant visus reikalingus duomenis.

function studentoVidurkis (studentas) {
    let suma = 0;

    for (let value of studentas.pazymiai) {
        suma += value;
    }

    let vidurkis = (suma / studentas.pazymiai.length).toFixed(2);
    console.log (`${studentas.vardas} ${studentas.pavarde} vidurkis yra: ${vidurkis}`);
}


let studentai = [
    {
        pazymiai: [ 7, 8, 9, 5, 1],
        vardas: 'Jonas',
        pavarde: 'Jonaitis',
    },
    {
        pazymiai: [ 7, 6, 9, 6, 10],
        vardas: 'Petras',
        pavarde: 'Petraitis',
    }
];

for (let studentas of studentai) {
    studentoVidurkis(studentas);
}


console.log ('***************4 uzduotis ***************');
// Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą.
// Funkcija turėtų rasti didžiausią skaičių iš masyvo bei išvesti gautą atsakymus. 
// Taip pat, susikurkite funkciją, kuri per argumentus priimtų masyvą ir į jį sugeneruotų pasirinktą kiekį atsitiktinių skaičių. 
// Susikurkite tris tuščius masyvus. 
// Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus, kiekvieną kartą perduodant funkcijai vis kitą masyvą. 
// Kai duomenys bus užpildyti, masyvuose esančią informaciją išsiveskite norimu būdu (per console.log arba per dar atskirą funkciją). 
// Tuomet kvieskite didžiausio skaičiaus paieškos funkciją tris kartus, kiekvieną kartą perduodant skirtingą masyvą į ją.



function SkaiciuFunkicijos (mas) {
    let suma = 0;
    let max = skaiciuMasyvas1[0];

    for (let i = 1; i < skaiciuMasyvas1.length; i++) {
        if (skaiciuMasyvas1[i] > max) {
            max = skaiciuMasyvas1[i];
        }
    }
    console.log (`${max}`)
}


let skaiciuMasyvas1 = [1,2,3,4,5,6,7,8,9,10];



console.log ('***************FUNKICJA 4  uzduotis ***************')
console.log ('***************1 uzduotis ***************')

// Susikurkite funkciją, kuri grąžintų bet kokį jūsų norimą sakinį.
// Iškvieskite šią funkciją ir išspausdinkite gautus rezultatus.

function sakinys1 () {
    let tekstas = 'kazkoks sakinys';
    return tekstas;
}

console.log (sakinys1());

console.log ('***************2 uzduotis ***************')

// Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą skaičių. 
// Iškvieskite šią funkciją kelis kartus ir gautus atsakymus išveskite kokiu norite būdu.

function randomS (){
    let random = Math.floor(Math.random() * 11);
    return random;
}

console.log (randomS());
console.log (randomS());
console.log (randomS());

console.log ('***************3 uzduotis ***************')

// Susikurkite funkciją, kuri per argumentus priimtų studento vardą ir vidurkį.
// Ši funkcija turėtų sugeneruoti iš to sakinį (pvz Studentas Tomas turi vidurkį 8.7) ir tai grąžinti kaip atsakymą. 
// Iškvieskite šią funkciją bent porą kartų, perduodant vis skirtingus duomenis. 
// Gautus atsakymus išveskite.

function studentas (vardas1, vudirkis1){
    console.log(`Studentas ${vardas1} turi vidurki ${vudirkis1}`)
}



let vardas1 = 'tomas';
let vudirkis1 = 8.8;

console.log(studentas(vardas,vudirkis1));

console.log ('***************4 uzduotis ***************')

// Susikurkite funkciją, kuri per argumentus gautų skaičių. 
// Ji turėtų surasti duoto skaičiaus mažiausią daliklį (skaičių iš kurio dalinasi be liekanos). 
// Už funkcijos ribų sukite ciklą nuo 10 iki 30 ir kiekvienoje ciklo iteracijoje iškvieskite šią funkciją, perduodant ciklo kintamąjį.

function maziausiasDaliklis (skaicius) {
    let maziausias = skaicius;

    for (let i = 2; i<= skaicius; i ++) {
        if (skaicius % i === 0) {
            // maziausias = i;
            // break;
            return i;
        }
    }
    return maziausias;
}

for (let i = 10; i <=30; i++) {
    console.log(`${i} skaiciaus maziaus daliklis yra: ${maziausiasDaliklis(i)}`)
}

console.log ('***************5 uzduotis ***************')

// Susikurkite funkciją, kuri per argumentus gautų skaičių. 
// Ji turėtų patikrinti ar šis skaičius yra pirminis (grąžina true jei pirminis, ir false jei ne pirminis). 
// Už funkcijos ribų sukite ciklą nuo 2 iki 15, kiekvienoje ciklo iteracijoje išveskite tikrinamą skaičių
//  ir šalia jo iškviestos funkcijos atsakymą (pvz 10 false, 11 true, ...).