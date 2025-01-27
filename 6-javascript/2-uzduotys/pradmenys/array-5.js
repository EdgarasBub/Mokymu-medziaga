console.log ('****************************************');
console.log ('*************** 1 uzduotis ************');
console.log ('****************************************');

let SkaiciuMasyvas1 = [1,3,5,7,9,2,4,6,8];

let lyginiai = SkaiciuMasyvas1.find(SkaiciuMasyvas1 => SkaiciuMasyvas1 % 2 === 0);

console.log(lyginiai);

console.log ('****************************************');
console.log ('*************** 2 uzduotis ************');
console.log ('****************************************');

let SkaiciuMasyvas2 = [-3,0,5,-8,2,-7];
let teigiamas = SkaiciuMasyvas2.find(SkaiciuMasyvas2 => {
    return SkaiciuMasyvas2 > 0 
})

console.log (teigiamas);
console.log ('****************************************');
console.log ('*************** 3 uzduotis ************');
console.log ('****************************************');

let SkaiciuMasyvas3 = [3,0,5,8,2,-7];

let neigiamas = SkaiciuMasyvas3.findIndex(SkaiciuMasyvas3 => {
    return SkaiciuMasyvas3 < 0 
});

console.log (neigiamas);


console.log ('****************************************');
console.log ('*************** 4  uzduotis ************');
console.log ('****************************************');

let SkaiciuMasyvas4 = [2,4,6,8,12,10];

let daugiauNei10 = SkaiciuMasyvas4.findIndex(SkaiciuMasyvas4 =>{
    return SkaiciuMasyvas4 >= 10;
});

console.log (daugiauNei10);

console.log ('****************************************');
console.log ('*************** 5 uzduotis ************');
console.log ('****************************************');

let SkaiciuMasyvas5 = [5, 9, 12, 7, 18, 4];

let uzduotis5skaiciai = SkaiciuMasyvas5.find(SkaiciuMasyvas5 =>{
    return SkaiciuMasyvas5 % 3 === 0 && SkaiciuMasyvas5 > 10;
});
console.log (SkaiciuMasyvas5)
console.log ('skaicius dalinasi is 3 ir yra daugiau nei 10:', uzduotis5skaiciai)
console.log ('****************************************');
console.log ('*************** 6 uzduotis ************');
console.log ('****************************************');

let SkaiciuMasyvas6 = [5, 8, -3, -6, 4, 7];

let nelyginisLyginis = SkaiciuMasyvas6.find(SkaiciuMasyvas6 =>{
    return SkaiciuMasyvas6 % 2 === 0 && SkaiciuMasyvas6 < 0;
});

console.log (nelyginisLyginis) ;

console.log ('****************************************');
console.log ('*************** 7 uzduotis ************');
console.log ('****************************************');

let SkaiciuMasyvas7 =  [8, 9, -3, 2];

let yraTeigiamu = SkaiciuMasyvas7.every(SkaiciuMasyvas7 => {
    return SkaiciuMasyvas7 > 0;
});

console.log(SkaiciuMasyvas7);
console.log(yraTeigiamu)

console.log ('****************************************');
console.log ('*************** 8 uzduotis ************');
console.log ('****************************************');

let SkaiciuMasyvas8 = [2, 4, 8, 6];
let visit1 = SkaiciuMasyvas8.every(SkaiciuMasyvas8 =>{
    return SkaiciuMasyvas8 % 2 === 0;
})
console.log (SkaiciuMasyvas8);
console.log (visit1);
console.log ('****************************************');
console.log ('*************** 9 uzduotis ************');
console.log ('****************************************');

let SkaiciuMasyvas9 = [8, 20, 5, 97, 44];
let visit2 = SkaiciuMasyvas9.every(SkaiciuMasyvas9 =>{
    return SkaiciuMasyvas9 > 5; 
});

console.log(SkaiciuMasyvas9);
console.log(visit2);

console.log ('****************************************');
console.log ('*************** 10 uzduotis ************');
console.log ('****************************************');

let SkaiciuMasyvas10 = [7, 2, -3, -6];
let visit3 = SkaiciuMasyvas10.every(SkaiciuMasyvas10 =>{
    return SkaiciuMasyvas10 > 0
})

console.log(SkaiciuMasyvas10);
console.log(visit3);

console.log ('****************************************');
console.log ('*************** 11 uzduotis ************');
console.log ('****************************************');

let SkaiciuMasyvas11 = [3, 7, 2, 9, 6, 4];
let visit4 = SkaiciuMasyvas11.every(SkaiciuMasyvas11 =>{
    return SkaiciuMasyvas11 > 0 && SkaiciuMasyvas11 % 2 ===0;
})

console.log(SkaiciuMasyvas11);
console.log(visit4);


console.log ('****************************************');
console.log ('*************** 14 uzduotis ************');
console.log ('****************************************');

let SkaiciuMasyvas12 = [5, -3, 2, 7, 8, -4, 1];

let visit5 = SkaiciuMasyvas12.filter(stebuklas => {
    return stebuklas > 0 && stebuklas % 2 === 0;
})

console.log(SkaiciuMasyvas12);
console.log(visit5);



console.log ('****************************************');
console.log ('*************** 15 uzduotis ************');
console.log ('****************************************');

let SkaiciuMasyvas15 = [3, 7, 2, 9, 6, 4];

let visit6 = SkaiciuMasyvas15.filter(stebuklas => {
    return stebuklas % 2 === 0;
}).map (stebuklas => stebuklas *2)

let visits = visit6 * 2;
console.log (SkaiciuMasyvas15)
console.log (visit6)



console.log ('****************************************');
console.log ('*************** 16 uzduotis ************');
console.log ('****************************************');

let SkaiciuMasyvas16 = [7, 8, 10, 6, 5, 9];

let visit7 = SkaiciuMasyvas16.filter (stebuklas => stebuklas >= 8);

console.log(SkaiciuMasyvas16);
console.log(visit7)

console.log ('****************************************');
console.log ('*************** 17 uzduotis ************');
console.log ('****************************************');

let fib = [];
let n = 9;

for (let i = 0; i < n; i++) {
    if ( i > 1) {
        fib.push (
            fib[i - 1] + fib [i - 2 ]
        );
    } else {
        fib [i] = i
    }
}
console.log (fib);