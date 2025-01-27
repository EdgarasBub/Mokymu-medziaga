console.log ('=====================================')
console.log ('======== else - if uzduotys =========')
console.log ('1 uzduotis')
let a = 5, b = 7, c = 9;

if (a > b) {
    console.log ('pirmas skaicius yra didesnis uz antra');
}   else if (b > c ) {
    console.log ('antras skaicius didesnis uz trecia');
}   else if (c > a ) {
    console.log ('trecias skaicius yra didesnis uz pirma');
}

if (a === b) {
    console.log ('pirmu du skaiciai yra lygus');
}   else if (b === c) {
    console.log ('paskutiniai du skaiciai yra lygus');
}   else if ( a === 0) {
    console.log ('pirmas skaicius yra lygus 0');
}

if (b > 0) {
    console.log ('antras skaicius yra neigiamas');
} else if (c > 0) {
    console.log ('trecias skaicius yra teigiamas')
}

console.log ('===============2 uzduotis============')

let  pazimys = 3;

if (pazimys === 10) {
    console.log ('puiku');
}  else if (pazimys >= 9) {
    console.log ('labai gerai');
}   else if (pazimys >= 7) {
    console.log ('gerai')
}   else if (pazimys >=5) {
    console.log ('patenkinimai');
}   else if (pazimys < 5) {
    console.log ('egzaminas neislaikytas')
}

console.log ('=====================================')