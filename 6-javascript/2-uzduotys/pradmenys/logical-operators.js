let n1 = 5
let n2 = 15 
let n3 = 55 

if (n1 > n2 && n1 > n3 ) {
    console.log ('skaicius n1 didesnis');
} else if (n2 > n1 && n2 > n3) {
    console.log (' skaicius n2 didesnis');
} else if (n3 > n1 && n3 > n2) {
    console.log (' skaicius n3 didesnis');
}



if (n1 < n2 && n1 < n3 ) {
    console.log ('skaicius n1 maziausias');
} else if (n2 < n1 && n2 < n3) {
    console.log (' skaicius n2 maziausias');
} else if (n3 < n1 && n3 < n2) {
    console.log (' skaicius n3 maziausias');
}



let egzrez1 = 5, egzrez2 = 7, egzrez3 = 9;

let egzaminuVidurkis = (egzrez1 + egzrez2 + egzrez3) /3;

console.log ('vidurkis yra:', egzaminuVidurkis);
if ((egzaminuVidurkis <= 10)  && (egzaminuVidurkis >= 8 )) {
    console.log ('[8-10]');
} else if ((egzaminuVidurkis < 8 ) && (egzaminuVidurkis >= 5)) {
    console.log ('[5-8]');
} else {
    console.log ('vidurkis mazesnis uz 5')
}


let mrm = 2, nrn = 33;

if ((mrm >= nrn || mrm === 0 )) {
    console.log ('pirmas didesnis arba lygis nuliui')
}
if ((mrm <= nrn || nrn === 5 )) {
    console.log ('antras didesnis arba lygis penkiems')
}
if ((mrm >= nrn && nrn === 20 )) {
    console.log ('pirmas skaičius yra didesnis už antrąjį ir yra lygus 20'
)
}
if ((mrm <= nrn && nrn <= 100 )) {
    console.log ('antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100')
}

