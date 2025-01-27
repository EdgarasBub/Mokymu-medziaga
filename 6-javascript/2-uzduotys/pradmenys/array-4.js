let skaiciaiPild = [7,8,5,6,2,4];
console.log(skaiciaiPild);
let skaiciaiPild2 = [ 80,50,30,40];

let kopija =  skaiciaiPild.slice();
console.log (kopija);

skaiciaiPild2.push(...skaiciaiPild);

console.log(
    skaiciaiPild.sort((a, b) => b - a )
)

console.log ('***************************************')
console.log ('*************** 1 uzduotis ************')
console.log ('***************************************')


let ManoValgiai = ['sushiai', 'kebabai', 'picos', 'cipsai', 'mc', 'burgeriai'];
console.log (ManoValgiai);

// PRIDEJIMAS PRIE MASYVO

ManoValgiai.push('saldainai');//galas
ManoValgiai.unshift('vedarai');//priekis
ManoValgiai.splice(2,1, 'kuciukai')//viduriukas
console.log (ManoValgiai);

// ATEMIMAS IS MASYVO 

ManoValgiai.pop();//galas
console.log (ManoValgiai);

ManoValgiai.shift();//priekis
console.log (ManoValgiai);

ManoValgiai.splice(2,3)//viduriukas 
console.log (ManoValgiai);

console.log ('***************************************')
console.log ('*************** 2 uzduotis ************')
console.log ('***************************************')

let skaiciuM = [1,2,3,4,5,6,7,8,9,10];

let arYra9 = skaiciuM.includes(9);
console.log ('ar yra 9', arYra9)

console.log ('***************************************')
console.log ('*************** 3 uzduotis ************')
console.log ('***************************************')


let masyvas4 = ['veins', 'do', 'tre', 'ketur', 'pemki'];

let tekstas = masyvas4.join ('-.-');
    console.log (tekstas);

console.log ('***************************************')
console.log ('*************** 4 uzduotis ************')
console.log ('***************************************')


let pazymeliai = [1,8,3,8,4,2,9,8,9,10,10];
    console.log('pazymeliai:', pazymeliai);

    //surikiuoti
let surikiuotiPazymeliai = pazymeliai.sort((a, b) => a - b);
    console.log('surikiuoti pazymeliai:', surikiuotiPazymeliai)

    //reverse
let AtsurikiuotiPazymeliai = pazymeliai.reverse((a, b) => a - b);
    console.log('surikiuoti atvirskciai pazymeliai:', AtsurikiuotiPazymeliai)

let iskapa = AtsurikiuotiPazymeliai.slice (0,3);

console.log (iskapa);

// truksta 3 didziausiu skaiciu

console.log ('***************************************')
console.log ('*************** 5 uzduotis ************')
console.log ('***************************************')

let BVardai = ['Antanas','Arturas','Agne','Aluoizas','Andrius'];
let MVardai = ['britne','brigita','bronius', 'beonce', 'baryga'];

let visiVardai = [...BVardai,...MVardai];

console.log ('biologijos vardai', BVardai);
console.log ('Matematikos vardai', MVardai);
console.log ('visi bendri vardai:', visiVardai);


console.log ('***************************************')
console.log ('*************** 6 uzduotis ************')
console.log ('***************************************')

let Semestras1 = ['anglu','mateka','rusu'];
let Semestras2 = ['informatika', 'darbai', 'kuno k.'];

let VisasSemestras = [...Semestras1,...Semestras2];
console.log ('viso semestro uzsiemimai:', VisasSemestras); 

console.log ('***************************************');
console.log ('*************** 7 uzduotis ************');
console.log ('***************************************');

let spalvos = ['rozine', 'zalia', 'geltona'];
let KartojamosSpalvos = [...spalvos]; 

spalvos = [];

console.log('originalus spalvos', spalvos);
console.log('kartojamos spalvos', KartojamosSpalvos);

console.log ('***************************************');
console.log ('*************** 8 uzduotis ************');
console.log ('***************************************');

let MiestuPavadinimai = ['Manchesteris', 'Nida','Vilnius', 'Vashingtonas', 'Vilnius', 'Ryga', 'Talinas', 'Maskva'];
console.log (MiestuPavadinimai);

let rastasMiestas = MiestuPavadinimai.indexOf ('Nida');
console.log('miesto 5 indekstas', rastasMiestas);

let rastasPaskutinisMiestas = MiestuPavadinimai.lastIndexOf ('Vilnius');
console.log('paskutinio 5 miesto indeksas', rastasPaskutinisMiestas);

if (MiestuPavadinimai.indexOf ('la') === -1) {
    console.log (MiestuPavadinimai + ' miesto sarase nera');
} else {
    console.log (MiestuPavadinimai + ' miestas yra')
}

console.log (MiestuPavadinimai. lastIndexOf ('Vilnius'));
console.log ('***************************************');
console.log ('*************** 9 uzduotis ************');
console.log ('***************************************');

let Masyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8, 6, 4, 2, 0];
let yraDublikatu = false;
console.log ('Pirmieji isrikiuoti skaiciai', Masyvas);

let SurikiuotasMasyvas = Masyvas.slice().sort((a, b) => a - b);

console.log('Surikiuoti skaiciai', SurikiuotasMasyvas);

// 1 budas - lastOfIndex;

// for (let Masyvas of Masyvas) {
//     console.log('****');
//     if (Masyvas.indexOf(Masyvas) !== Masyvas.lastIndexOf(Masyvas)) {
//         yraDublikatu = true;
//         break;
//     }
// if (yraDublikatu) {
//     console.log ('masyve yra dublikatu');
// }else {
//     console.log ('dublikatu nera');
// }

// console.log (Masyvas);
// console.log (Masyvas.indexOf(Masyvas));
// console.log (Masyvas.lastIndexOf(Masyvas));
// console.log('***')
// // 2 budas
yraDublikatu = false;
Masyvas.sort((a,b) => a - b);

console.log (Masyvas);
for (let i = 0; i < Masyvas.length - 1; i++) {
    if (Masyvas[i] === Masyvas [i + 1 ]) {
        yraDublikatu = true;
        break;
    }
}
if (yraDublikatu) {
    console.log ('masyve yra dublikatu');
}else {
    console.log ('dublikatu nera');
}


// const array = [1, 2, 3, 2, 4, 5, 4, 5];

// const duplicates = array.filter((item, index) => array.indexOf(item) !== index);

// console.log(duplicates); // Output: [2, 4, 5]

console.log ('****************************************');
console.log ('*************** 10 uzduotis ************');
console.log ('****************************************');

let senasMasyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
let naujasMasyvas = [];
let chunkSize = 2;
let naujoMasyvoKiekis = Math.ceil(senasMasyvas.length / chunkSize);
console.log (naujoMasyvoKiekis);

for (let i = 0; i <naujoMasyvoKiekis; i ++) {
    naujasMasyvas.push ([
        senasMasyvas[i * 2 ],
        senasMasyvas[i * 2 + 1]
    ]);
}
//  3 budas

for (let i = 0; i< senasMasyvas.length; i += chunkSize){
    naujasMasyvas.push(
        senasMasyvas.slice(i,i + chunkSize)
    );
}
console.log (naujasMasyvas);
console.log ('****************************************');
console.log ('*************** 11 uzduotis ************');
console.log ('****************************************');
// 1 budas

let PirmasMasyvas = [1,2,3,4];
let AntrasMasyvas = [1,2,3,4,5,6,7];
let TreciasMasyvas = [];

let sujungtasMasyvas = [...PirmasMasyvas, ...AntrasMasyvas];


for(let skaicius of sujungtasMasyvas) {
    if (!TreciasMasyvas.includes(skaicius)) {
        TreciasMasyvas.push(skaicius);
    }
}

console.log ('Pirmas masyvas',PirmasMasyvas);
console.log ('antras masyvas',AntrasMasyvas);
console.log ('trecias masyvas',TreciasMasyvas);

