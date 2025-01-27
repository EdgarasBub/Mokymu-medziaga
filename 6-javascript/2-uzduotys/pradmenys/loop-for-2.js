console.log ('-------------------')
console.log ('---1 uzduotis------')
let suma = 0 

for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log ('gauta suma ', suma)


console.log ('---2 uzduotis------')


let lsuma = 0;

for (let i = 20; i <= 50; i++) {
    if ( i % 2 === 0) {
        lsuma += i  
    }
}
console.log ('lyginiu suma', lsuma)



console.log ('---3 uzduotis------')



let nsuma = 0;

for (let i = 30; i <= 60; i++) {
    if ( i % 2 !== 0) {
        nsuma += i  
    }
}
console.log ('nelyginiu suma ', nsuma)



console.log ('---4 uzduotis------')




let naujasuma = 0;

for (let i = 0; i < 1000; i++) {
    if ( i % 3 === 0 || i % 5 === 0)  {
        naujasuma += i  
    }
}
console.log ('nelyginiu suma ', naujasuma)

console.log ('---5 uzduotis------')
let i = 1
for (let i = 1; i <= 100; i++) {
    if ( i % 3 === 0 && i % 5 === 0) {
        console.log ('fizzbuzz')
    }
    else if ( i % 3 === 0 )
        console.log ('fizz')
    else if ( i % 5 === 0 ) {
        console.log ('buzz')
    } 
    else {
        console.log (i)
    }
} 
console.log ('---6 uzduotis------')

let number1 = 1;
let number2 = 1;
let n = 15; 
let current = 0;
 
console.log (number1)
console.log (number2)

for (let i = 2; i <= n; i++) {

  current = number1 + number2;
  number1 = number2;
  number2 = current;
  console.log(current);

}
console.log ('---7 uzduotis------')
console.log ('---8 uzduotis------')
console.log ('-------------------')