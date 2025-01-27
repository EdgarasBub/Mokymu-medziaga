console.log ('***********************************')






console.log ('**** 1 uzduotis ***')

let masyvas = ['Matematika', 'Lietuviu', 'Biologija', 'Anglu']

    for (let i = 0; masyvas.length > i; i++)

        console.log (masyvas[i]);







console.log ('**** 2 uzduotis ***')

let SaliuMasyvas = ['Kanada', 'Amerika', 'Brazilija', 'Latvija']

let index = 0;

while (index < SaliuMasyvas.length) { 
    console.log ('salys:', SaliuMasyvas[index])

    index++
};







console.log ('**** 3 uzduotis ***')



let ProjektuMasyvas = ['1projektas','2projektas', '3projektas', '4projektas' ];

    for ( let i = 0; i < ProjektuMasyvas.length; i++) {
        console.log (`${ i + 1 }  mano projektukai : ${ProjektuMasyvas[i]}` );
    }
        let j = 0;
        console.log ('***********************')

    while ( j < ProjektuMasyvas.length ) {
        console.log (`${ j + 1 }  mano projektukai : ${ProjektuMasyvas[j]}` );
        j++;
    }





console.log ('**** 4 uzduotis ***')

let LempinisMasyvas = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

let a = 0

while ( a < LempinisMasyvas.length ) {
    if (LempinisMasyvas[a] > 5) {
        console.log ('skaiciai didesni arba lygus 5:', LempinisMasyvas[a] )
    }
    a++;
}

console.log ('**** 5 uzduotis ***')

let randomSkaiciuMasyvas = [];


for (let i = 0; i < 10; i++) {
    randomSkaiciuMasyvas.push(Math.floor(Math.random() * 100 ) + 1)
};

let skaiciuSuma = 0;
i=0;

    while(i < randomSkaiciuMasyvas.length) {
        if (randomSkaiciuMasyvas[i] % 4 == 0) {
        skaiciuSuma +=randomSkaiciuMasyvas [i];
    }
    i++
};

console.log ('skaiciu masyvas:' + randomSkaiciuMasyvas);
console.log ('skaiciai kuria dalinas is 4 suma:' + skaiciuSuma);

skaiciuSuma = 0; 

    for (let i = 0; i < randomSkaiciuMasyvas.length; i++) {
        if (randomSkaiciuMasyvas [i] % 4 === 0) {
            skaiciuSuma += randomSkaiciuMasyvas[i]
        }
    }


console.log ('skaiciu masyvas:' + randomSkaiciuMasyvas);
console.log ('skaiciai kuria dalinas is 4 suma:' + skaiciuSuma);

console.log ('**** 6 uzduotis ***')

let pazymiai = [];
for ( let i = 0; i < 10; i++){
    pazymiai.push(Math.floor(Math.random() * 10 ) + 1);
}

let pazymiuSuma = 0; 
i = 0;

while ( i < pazymiai.length) {
    pazymiuSuma += pazymiai[i];
    i++;
}

let vidurkis = pazymiuSuma / pazymiai.length;
console.log('Pazymiai: ', pazymiai)
console.log('Vidurkis: ', vidurkis)


console.log ('**** 7 uzduotis ***')


let pazymiaiAntras = [];

for ( let i = 0; i < 10; i++) {
    pazymiaiAntras.push(Math.floor(Math.random() * 10 ) + 1);
}

let pazymiuSumaAntras = 0;
for (let i = 0; i < 10; i++) {
    pazymiuSumaAntras += pazymiaiAntras[i];
}
let vidurkisAntras = pazymiuSumaAntras / pazymiaiAntras.length;

let didesniNeiVidurkis = [];
for (let i = 0; i < 10; i++) {
    if (pazymiaiAntras[i] > vidurkisAntras ) {
        didesniNeiVidurkis.push(pazymiaiAntras[i])
    } 
}

console.log('pazymiai', pazymiaiAntras)
console.log('vidurkis for visuals', vidurkis)
console.log('Didesni nei vidurkis', didesniNeiVidurkis)







console.log ('**** 8 uzduotis ***')

console.log ('FORFORFORFORFORFORFORFOR');
let skaiciai = [10, 9 ,7 , 5 , 3, 1, 77, 69, 14];

for (let i =0; i< skaiciai.length; i++) {
    if(skaiciai[i] % 2 === 0) {
        console.log (`${skaiciai[i]} ir lyginis skaiciaus kvadratas (${skaiciai[i]*skaiciai[i]})`)
    }
    else {
        console.log (`${skaiciai[i]}`)
    }
}








console.log ('**** 9 uzduotis ***')

pazymiai = [2, 4 , 6 , 5 , 7, ,8 , 5, 6 , 3, 10, 10, 7, 8, 7]

for (let i = 0; i < pazymiai.length; i++) {
    if (pazymiai [i] >=5) {
        console.log (`teigiamas - ${pazymiai[i]}`);
    }
    else {
        let truko = 5 - pazymiai [i];
        console.log(`Neigiamas - ${pazymiai[i]} , iki teigiamo truko ${truko} balu`)
    }
}


console.log ('**** 10 uzduotis ***')

let zodziai = ['kardas', 'obuolys', 'kaliosas', 'putpele', 'rokenrolas', 'pasaga']

let c = 0;
let bendras_zodziu_kiekis = 0;

while (c < zodziai.length) {
    let raidziu_kiekis = zodziai[c].length;
    bendras_zodziu_kiekis += raidziu_kiekis;
    console.log(`${zodziai[c]}, zodis sudarytas is ${raidziu_kiekis}`)
    c++;
}
console.log(`bendras visu raidziu kiekis yra${(bendras_zodziu_kiekis)}`);


console.log ('**** 11 uzduotis ***')
console.log ('**** 12 uzduotis ***')