console.log ('----------------------')
console.log ('---1 uzduotis --------')
let sumas = 1; 
while (sumas <= 20) {
    console.log (sumas);
    sumas++;
}

console.log ('---2 uzduotis --------')

let suma2 = 1; 
while (suma2 <= 50) {
    if ( suma2 % 2 === 0 ) {
        console.log ('lyginis', suma2)
    }
    else if ( suma2 % 2 !== 0 ) {
        console.log ('nelyginis', suma2)
    }
    suma2++;
}



console.log ('---3 uzduotis --------')

let suma3 = 25; 
while (suma3 <= 50) {
    if ( suma3 % 3 === 0 ) {
        console.log ('skaičius {skaičius} dalinasi iš 3', suma3)
    }
    suma3++;
}



console.log ('---4 uzduotis --------')

let suma4 = 1; 
while (true) {
    if ( suma4 % 3 === 0 && suma4 % 5 === 0 ) {
        console.log ('skaičius dalinasi iš 3 ir iš 5', suma4)
    break;
    }
    suma4++;
}


console.log ('---5 uzduotis --------')

let suma5 = 0; 
let skaicius5 = 1;
while (skaicius5 <= 10) {
    if ( skaicius5 % 2 === 0 )
    suma5+= skaicius5;
    skaicius5++;
}
console.log (suma5)



console.log ('---6 uzduotis --------')

let skaiciuss = 1;

while (skaiciuss < 5) {
	console.log(skaiciuss);
	skaiciuss++;
}

console.log ('---7 uzduotis --------')

let ilgis = 1

while ( ilgis < 10) {
    ilgis = Math.floor(Math.random() * 10) + 1;
    console.log (ilgis);
}


console.log ('---8 uzduotis --------')


let plotis = 0
let aukstis = 1

while ( plotis <= 20) {
    aukstis = Math.floor(Math.random() * 10) + 1;
    plotis += aukstis;
    console.log (aukstis);
}
console.log ('skaiciu suma', plotis)


console.log ('---9 uzduotis --------')

let bananai = 11;
let kiviai = 22;
let batatai = 33;


while (bananai > 0 && kiviai > 0 && batatai > 0) {
    console.log ('turimas prekiu kiekis:', bananai, kiviai, batatai);
    let kiek_nupirko= Math.floor(Math.random()* 10) + 1 ;
    if (kiek_nupirko > bananai || kiek_nupirko > kiviai || kiek_nupirko > batatai) {
        kiek_nupirko = bananai || kiek_nupirko > kiviai || kiek_nupirko > batatai;
    } 
    console.log ('nupirko:', kiek_nupirko, );
    bananai -= kiek_nupirko;
    kiviai -= kiek_nupirko;
    batatai -= kiek_nupirko;
    
}


console.log ('---10 uzduotis --------')



console.log ('---11 uzduotis --------')
console.log ('---12 uzduotis --------')

let skaicius12 = 1234;
let naujasskaicius = 0; 
 // skaicuys !==0
while ( skaicius12 > 0){
    naujasskaicius = naujasskaicius * 10 + skaicius12 % 10
    skaicius12 = Math.floor(skaicius12 / 10);

}
console.log(naujasskaicius);

console.log ('*****************')

let klientoPinigai = 2.45;
let kavosKaina = 0.6;
let graza = 0

if (klientoPinigai > kavosKaina) {
    graza = klientoPinigai - kavosKaina 
}
console.log ('grazos skaicius', graza)
// isvesti kiek grazos
// kiek kokiu monetu, tik centai 

if (graza > 0 ) {
    let moneta50 = Math.floor(graza / 0.5);
    let moneta20 = Math.floor(
        (graza - moneta50 * 0.5) / 0.2
    );
    let moneta10 = Math.floor (
        (graza - moneta50 * 0.5 - moneta20 * 0.2) / 0.1
    );
    let moneta1 = Math.floor (
        (graza - moneta50 * 0.5 - moneta20 * 0.2 - moneta10 * 0.1) / 0.01
    );
    console.log ('50:',moneta50);
    console.log ('20:',moneta20);
    console.log ('10:',moneta10);
    console.log ('1:',moneta1);

}

    moneta50 = 0;
    moneta20 = 0;
    moneta10 = 0;
    moneta1 = 0;
    graza *= 100
    while (graza >0 ) {
        if (graza > 50 ) {
            moneta50++;
            graza -= 50;
        } 
        else if (graza >= 20) {
            moneta20++;
            graza-= 20;
        }
        else if (graza >= 10) {
            moneta10++;
            graza-= 10;
        }
        else if (graza >= 0) {
            moneta1++;
            graza-= 1 ;
        }
    }
    console.log ('su ciklu')
    console.log ('50:',moneta50);
    console.log ('20:',moneta20);
    console.log ('10:',moneta10);
    console.log ('1:',moneta1);
