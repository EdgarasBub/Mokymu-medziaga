console.log ('****************************************');
console.log ('*************** OBJECTS 4 uzduotis ************');
console.log ('****************************************');

console.log ('****************************************');
console.log ('*************** 1 uzduotis ************');
console.log ('****************************************');

let Imones = [
    {pavadinimas: 'pirma imone', DarbuotojuSkaicius: 22, ImonesAmzius: 3, Pelnas: 55000,}
    ,{pavadinimas: 'antroji imone', DarbuotojuSkaicius: 32, ImonesAmzius: 4, Pelnas: 65000,}
    ,{pavadinimas: 'trecioji imone', DarbuotojuSkaicius: 42, ImonesAmzius: 5, Pelnas: 995000,}
]

let vidutinisAmžius = 0;
let bendrasDarbuotojųKiekis = 0;
let bendrasPelnas = 0;

console.log (Imones);

for (let Imone of Imones) {
    vidutinisAmžius += Imone.ImonesAmzius;
}

let vidurkis = vidutinisAmžius / Imones.length;

console.log ( 'vidutinis imonius imones amzius:', vidurkis.toFixed(2));

for (let Imone of Imones) {
    bendrasDarbuotojųKiekis += Imone.DarbuotojuSkaicius;
}

let VidutinisDarbuotojųKiekis = bendrasDarbuotojųKiekis / Imones.length;

console.log ('vidutinis imonius darbuotoju kiekis: ', VidutinisDarbuotojųKiekis.toFixed(2));


for (let Imone of Imones) {
    bendrasPelnas += Imone.Pelnas;
}

let VidutinisPelnas = bendrasPelnas / Imones.length;

console.log ('vidutinis imonius pelnas kiekis: ', VidutinisPelnas.toFixed(2));


console.log ('****************************************');
console.log ('*************** 2 uzduotis ************');
console.log ('****************************************');

let ligonines = [
    {pavadinimas:'pirmoji liginine', DarbuotojuSkaicius: 600, lankytojuSkaicius: 2500, paciantuSkaicius: 3000,},
    {pavadinimas:'antorijo liginine', DarbuotojuSkaicius: 200, lankytojuSkaicius: 100, paciantuSkaicius: 2000,},
    {pavadinimas:'trecioji liginine', DarbuotojuSkaicius: 50, lankytojuSkaicius: 600, paciantuSkaicius: 200,},
]

// let visiDarbuotojai = 0;
// let visi lan

console.log ('****************************************');
console.log ('*************** OBJECTS 5 uzduotis ************');
console.log ('****************************************');

console.log ('****************************************');
console.log ('*************** 1 uzduotis ************');
console.log ('****************************************');


let Studentai = [
    { 
        Vardas:'Antanas',
        Pavarde:'Antioska',
        Amzius: 18 ,
        Pazymiai: [7, 8, 7,9,1,10,5],
        StudijuPrograma: 'IT',
        Kursas: 2 ,
    },
    { 
        Vardas:'Donce',
        Pavarde:'Patrioska',
        Amzius: 22 ,
        Pazymiai: [5, 8, 7,9,10,10,4],
        StudijuPrograma: 'Matematika',
        Kursas: 4 ,
    },
    { 
        Vardas:'Deividas',
        Pavarde:'Benauskas',
        Amzius: 20 ,
        Pazymiai: [7, 5, 9,9,8,10,3],
        StudijuPrograma: 'Psihologija',
        Kursas: 3 ,
    }
]
let bendraSuma = 0;
for (let Studentas of Studentai) {
    console.log(Studentas.Vardas, Studentas.Pavarde ,Studentas.Amzius, Studentas.StudijuPrograma, Studentas.Kursas) 
    console.log(Studentas.Pazymiai);

    let bendriPazymiai = 0;
    let vidurkis1 = 0;

    for (let bendriPazymys of Studentas.Pazymiai){
    bendriPazymiai += bendriPazymys;


    }   
    vidurkis1 = bendriPazymiai / Studentas.Pazymiai.length;
    console.log('pazymiu vidurkis', vidurkis1.toFixed(1) )
    
    bendraSuma += vidurkis1;

}
console.log ('-------------')


console.log ('Bendras Studentu Pazymiu Vidurkis:', (bendraSuma / Studentai.length ).toFixed(1) )


console.log ('****************************************');
console.log ('*************** 2 uzduotis ************');
console.log ('****************************************');

    let ParduotuvesObjektai = [
        {
            pavadinimas:'Kaisiadotys',
            adresas:'taikos 22', 
            darbuotojųKiekis: 23 ,
            prekiųObjektųMasyvas: [{
                pavadinimas: 'Pienas', 
                kodas: 22335545,
                kaina: 2.5 ,
                savikaina: 0.5 ,
                turimasKiekis: 25,
         }]
        }
    ]