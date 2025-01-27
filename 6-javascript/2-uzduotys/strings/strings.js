console.log ('*******************************')
console.log ('*******************************')
console.log ('*******************************')

let Strings = 'labas';

console.log(Strings.replace('labas', 'sabal'));


function apverstas_tekstas(Strings) {
    let apcerstas = " ";
    
    for (let i = Strings.length -1; i >= 0; i-- ) {
    apcerstas += Strings[i]; 
}
return apcerstas;
console.log (apcerstas);
}

console.log ('*******************************')
console.log ('*******************************')
console.log ('*******************************')

let NaujasZodis = 'hello tau ir man';

function falce(NaujasZodis) {
    for (let i = 0; i < NaujasZodis.length; i++) {
        if (NaujasZodis.includes(NaujasZodis[i]) > -1 ){
            return true
        }
    }
    return false;
}

console.log (falce)