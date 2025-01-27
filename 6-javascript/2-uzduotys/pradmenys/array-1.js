console.log ('***********************************')
console.log ('**** masyvai 1 dais uzduotys ******')


console.log ('*******  1 dais uzduotys ******')
let masyvas1 = [];

masyvas1.push ('jonas');
masyvas1.push ( 'antanas');
masyvas1.push  ('petras');
masyvas1.push  ('karolis');
masyvas1.push  ('juozas');
masyvas1.push  ('Edgaras');

console.log ('pirmas vardas', masyvas1[0]);
console.log ('paskutinis vardas', masyvas1[masyvas1.length - 1]);
console.log ('viduriniai 2 vardas', masyvas1[3], masyvas1 [4]);
console.log ('kiek isviso yra vardu', masyvas1.length)

console.log ('*******  2 dais uzduotys ******')
let masyvas2 = [];

masyvas2.push ('jonas');
masyvas2.push ( 'antanas');
masyvas2.push  ('petras');
masyvas2.push  ('karolis');
masyvas2.push  ('juozas');
masyvas2.push  ('Edgaras');

console.log ('visi vardas:', masyvas2);

masyvas2[0] = 1;
masyvas2[4] = 2;
masyvas2[3] = 3;

console.log ('visi vardas:', masyvas2);

console.log ('*******  3 dais uzduotys ******')

let masyvas3 = [];

masyvas3.push ('jonas+');
masyvas3.push ( 'anta0nas+');
masyvas3.push  ('petras+');
masyvas3.push  ('karolis+');
masyvas3.push  ('juozas+');
masyvas3.push  ('Edgaras+');

console.log (masyvas3)
console.log ('*******  4 dais uzduotys ******')
console.log ('*******  5 dais uzduotys ******')
console.log ('***********************************')

    let masyvas = [ 1 , 2 ,3 , 4 ,5 ,6];
    for (let i = 0; i < masyvas.length; i++) {
        console.log ('indeksas',i);
        console.log ('reiksme' masyvas [i]);
        console.log ('\n')
    }


    console.log ('***********************************')

    let medziai = [ ' obelis, kriause, berzas egle'];
    for (let i = medziai.length - 1; i >= 0;  i--) {
        console.log (medziai[i]);

    }

    console.log ('***********************************')

    let randomSkaiciai = [];

    for (let i = 0; i < 7; i++) {
        randomSkaiciai.push(
            Math.floor(Math.random() * 10 ) + 1
        );
    };

    console.log(randomSkaiciai);

    randomSkaiciai = []
    console.log('while');
    let index = 0;
    while (index < 7) {
        randomSkaiciai.push(
            Math.floor(Math.random() * 10) +1
        );
        index++;
    }

    console.log(randomSkaiciai);


    let skaiciai = [7 , 8 , 8 , 9 , 1];
    console.log ('for');
    for (let i = 0; i < skaiciai.length; i++) {
       
    }