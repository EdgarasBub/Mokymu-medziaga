console.log ('****************************************');
console.log ('*************** 1 uzduotis ************');
console.log ('****************************************');

 
let studentas = {
    Vardas: 'Antanas',
    Pavarde: 'Antanaitis',
    Amzius: 22,
    StudijuPrograma: 'Marketingas',
    AtsiskaitytuKredituSkaicius: '50',
    Pazymiai: '7,8,9,10',
    Ugis: 180,
    Kursas: 'Pirmas',
    Mokykla: 'VU',

}

console.log (studentas)
console.log (studentas['vardas'])
console.log (studentas['pavarde'])
console.log (studentas['StudijuPrograma'])

console.log ('****************************************');
console.log ('*************** 2 uzduotis ************');
console.log ('****************************************');




console.log ('****************************************');
console.log ('*************** 3 uzduotis ************');
console.log ('****************************************');

let knyga1 = {
    pavadinimas: 'Viens Viens',
    autorius: 'Deividas Ben',
    žanras: 'Siaubo',
    kaina: '22,5',
    puslapiųKiekis: 250,
    skyriųSąrašas:['veins', 'do', 'tre', 'keture', 'FIVE'],
    išleidimoMetai:2010,
    knygynuose:'yra',
};

let knyga2 = {
    pavadinimas: 'Viens Dou',
    autorius: 'Deividas Ben',
    žanras: 'Siaubo',
    kaina: '25,5',
    puslapiųKiekis: 350,
    skyriųSąrašas:['veins1', 'do1', 'tr1e', 'ketur1e', 'FIVE','Ratata'],
    išleidimoMetai:2020,
    knygynuose:'yra',
};
console.log( knyga1)
console.log( knyga2)


if (knyga1.puslapiųKiekis > knyga2.puslapiųKiekis) {
    console.log(knyga1.puslapiųKiekis, 'knyga1 turi maziau puslapiu negu knyga 2',knyga2.puslapiųKiekis)
} else {
    console.log(knyga1.puslapiųKiekis, 'knyga2 turi maziau puslapiu negu knyga 1',knyga2.puslapiųKiekis)
}

if (knyga1.skyriųSąrašas.length > knyga2.skyriųSąrašas.length) {
    console.log(knyga1.skyriųSąrašas.length, 'knyga1 turi mazesni sarasa negu knyga 2', knyga2.skyriųSąrašas.length )
} else {
    console.log(knyga1.skyriųSąrašas.length, 'knyga1 turi didesin sarasa negu knyga 2', knyga2.skyriųSąrašas.length)
}

if (knyga1.kaina*2>knyga2.kaina){
    console.log ('knyga2 yra dvigubai brangesne negu pirma')
} else {
    console.log ('knyga2 yra nera dvigubai brangesne negu pirma')
}

console.log ('****************************************');
console.log ('*************** 4 uzduotis ************');
console.log ('****************************************');

let objektas1 = {
    pavadinimas:'Pienas',
    kaina: '2,5' ,
    savikaina:'0,5',
    kodas:'22550',
    turimasKiekisSandėlyje: '22',
    siuntimuiDėžėsMatmenys: {
        x: 100, 
        y: 50,
        z: 50,
    }
}
let objektas2 = {
    pavadinimas:'Batoncikas',
    kaina: '1,5' ,
    savikaina:'0,2',
    kodas:'22551',
    turimasKiekisSandėlyje: '12',
    siuntimuiDėžėsMatmenys: {
        x: 120, 
        y: 20,
        z: 20,
    }
}
let objektas3 = {
    pavadinimas:'sviestas',
    kaina: '3' ,
    savikaina:'1,5',
    kodas:'22555',
    turimasKiekisSandėlyje: '32',
    siuntimuiDėžėsMatmenys: {
        x: 20, 
        y: 5,
        z: 50,
    }
}
console.log(objektas1);
console.log(objektas2);
console.log(objektas3);
console.log('pirma prekė kainuoja - ',objektas1.kaina,'antra prekė kainuoja - ',objektas2.kaina,'trecia prekė kainuoja - ',objektas3.kaina);

if (objektas1.kaina > objektas2.kaina && objektas1.kaina > objektas3.kaina) {
    console.log ('pirmos prekes' + objektas1.pavadinimas + 'kanai didziausa')
}else if (objektas2.kaina > objektas1.kaina && objektas2.kaina > objektas3.kaina) {
    console.log ('antros prekes' + objektas2.pavadinimas + 'kanai didziausa')
} else if (objektas3.kaina > objektas2.kaina && objektas3.kaina > objektas1.kaina) {
    console.log ('antros prekes' + objektas2.pavadinimas + 'kanai didziausa')
}
console.log ('****************************************');
console.log ('*************** 5 uzduotis ************');
console.log ('****************************************');

let automobilis ={

}

automobilis.marke= 'porshe';
automobilis.modelis = '911';
automobilis.rida = 10000;
automobilis.metai = 2010;
automobilis.spalva = "Salotine";
automobilis.turis = 2.0;
automobilis.arDausta = false;
automobilis.arParduodama = true;

console.log (automobilis)

let dabartiniaiMetai =new Date(Date.now()).getFullYear();
let metuSkirtumas = dabartiniaiMetai - automobilis.metai;

console.log ('automobiliui yra ' + dabartiniaiMetai - automobilis.metai + ' metu ')

if (metuSkirtumas > 0) {
    console.log (
        'per metus nuvaziuota: '  + 
        (automobilis.rida / metuSkirtumas).toFixed(2) +
        'km'
    );
} else {
    console.log (automobilis.rida.toFixed(2))
}

console.log ('****************************************');
console.log ('*************** 6 uzduotis ************');
console.log ('****************************************');

let knygynas ={
    pavadinimas1: 'mano knygynas',
    adresas1:'mano adresas',
    plotas: 20 ,
    knyguSKaicius : 4,
    darboValandos: {
        nuo: 8.00,
        iki: 17.00,
    },
    arAtidarytas:true
}

for (let property in knygynas) {
    console.log('savybe:' +property + 'reiksme:' +knygynas[property] );
    if (typeof knygynas[property] !== 'string') {
        console.log ('not string:' + property)
    }
}   


console.log ('****************************************');
console.log ('*************** 7 uzduotis ************');
console.log ('****************************************');

let student1 = {
    vardas:'antanas',
    pavarde:'antanatinis',
    studijuProgramosPavadinimas: 'matieka',
    pazymiai: [1 ,2 ,9 ,5,10,4  ]
}
let student2 = {
    vardas:'antanas1',
    pavarde:'antanatinis1',
    studijuProgramosPavadinimas: 'chemija',
    pazymiai: [1 ,9 ,5,8,4  ]
}

let suma = 0;
for (let pazymis of student1.pazymiai) {
    suma += pazymis
}

student1.pazVidurkis = (suma / student1.pazymiai.length).toFixed(2)
console.log(student1)
suma = 0;
for (let pazymis of student2.pazymiai) {
    suma += pazymis
}

student2.pazVidurkis = (suma / student2.pazymiai.length).toFixed(2)