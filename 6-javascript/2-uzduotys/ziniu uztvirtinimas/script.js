// let darboValandos = 8, kepaluPerValanda = 2, KepyklosDarbuotoju = 5, KepaloSavikaina = 2, KepaloPardavimoKaina = 5, kepaluPerDiena = 75; 

// let  dienosKepalai = ((KepyklosDarbuotoju * kepaluPerValanda) * darboValandos) 

//     console.log (' kiek kepykla per vieną darbo dieną spės iškepti duonos kepalų =',dienosKepalai)

// let DienosPelnas =  ((KepaloPardavimoKaina * dienosKepalai) - (KepaloSavikaina * dienosKepalai))

//     console.log (' visų kepalų savikainą, gautas pajamas pardavus ir iš to gauto pelno dalį =' ,DienosPelnas )

console.log ('----------------')
console.log ('-- 1 uzduotis --')
for ( let i = 0; i <= 10; i++ ) {
    console.log (i)
}
console.log ('-- 2 uzduotis --')
for ( let a = 0; a <= 15; a += 2 ) {
    console.log (a)
}
console.log ('-- 3 uzduotis --')
for ( let c = 1; c <= 20; c += 3 ) {
    console.log ('[' ,c , ']')
}
console.log ('-- 4 uzduotis --')
for ( let i = 1; i <= 20; i++ ) {
    if (i % 4 === 0 )  {
    console.log (i) 
}
}
console.log ('-- 5 uzduotis --')

let start = 12;
let end = 44;

if ( start < end ){

for ( let i = start; i <= end; i++ ) {
    console.log ((i) , ' ', (Math.pow(i,2)));
};
} else if (start > end) {
    console.log ('invalid')
}


console.log ('-- 6 uzduotis --')

for ( let i = start; i <= end; i++ ) {
    if (i % 2 !== 0 || i % 8 === 0 )  {
    console.log (i) 
}
}
console.log ('-- 7 uzduotis --')
for ( let i = 0; i <= 25; i+= 5 ) {
    console.log (i) 
}
console.log ('-- 8 uzduotis --')

let skaicius = 8, n = 7; 

let rezultatas = 0 

for (let i = 1; i <= n; i++) {
   rezultatas +=  skaicius 
}
console.log (rezultatas)
console.log ('-- 9 uzduotis --')
console.log ('----------------')
