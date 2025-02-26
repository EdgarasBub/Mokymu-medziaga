// 1 uzduotis 

// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log(3)
// }, 5000)
// ;
// console.log(4);
// console.log(5);
// 1budas
function callHelloLater(callback) {
    setTimeout(callback, 2000)
}

function sayHolla(callback) {
    console.log('zdatre')
}
callHelloLater(sayHolla)
// 2budas
function manoPirmasTimeout(callback) {
    setTimeout(callback, 2000)
}

manoPirmasTimeout(() => {
    console.log('2s')
})

// 2 uzduotis 
// 1 sprendimas
const getTodos = (resource) => {
    return new Promise ((resolve, reject) => {
        const request = new XMLHttpRequest ()

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4) {
                reject('error getting resourse')
            }
        })
        request.open('GET', resource)
        request.send()
    }) 
}
getTodos('https://jsonplaceholder.typicode.com/todos').then(data => {
    console.log('promise resolved:', data)
}).catch(err => {
    console.log('promise rejected:', err)
})
// 2uzduotis

// fetch('https://api.tvmaze.com/people')
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })
const people = async () => {
    const response = await fetch('https://api.tvmaze.com/people');

    if (response.status !== 200) {
        throw new Error ('nepavyko gauti people duomenu')
    }
    return response.json();
}

people()
    .then(data => console.log(data))
    .catch(error => console.log(error))

// 3 uzduotis 

function arLyginiai(mas, callback) {
    for (let item of mas) {
        callback(item)
    }
}

function patikrinkLyginisArNe(skaicius) {
    if(skaicius % 2 === 0) {
        console.log('lyginis')
    } else {
        console.log('nelyginis')
    }
}

let masyvas = [ 1, 2, 5 , 6 , 7 , 9]

arLyginiai(masyvas, patikrinkLyginisArNe)

// 4 uzdavinukas

// function patikrintiZodzioIlgi(masyvas, callbackFunkcija) {
//     masyvas.forEach(item => callbackFunkcija(item))
// }

// function koksIlgis() {
//     console.log(
//         `zodzio ${String} ilgis yra - ${String.length}`
//     )
// }


// let zodiziai = ['labas', 'tau', 'as', 'sakau'];

// patikrintiZodzioIlgi()

//6 uzduotis 

function checkUserLogin(isUserLogedIn) {
    return new Promise ((resolve, reject) => {
        if (isUserLogedIn) {
            resolve('user loged')
        } else {
            reject('user loged out')
        }
    })
}
checkUserLogin(true) 
.then(message => console.log(message))
.catch(error => console.log (error));

checkUserLogin(false) 
.then(message => console.log(message))
.catch(error => console.log (error));

// //7 uzduotis 
// 7. Sukurkite async funkciją, kuri priimtų parametrą "age". Funkcijos viduje
// padarykite patikrinimą ar "age" yra paduotas ir ar jis yra skaičius - priešingu
// atveju iškvieskite klaidą (throw). Toliau tikrinkite ar amžius yra daugiau nei 18,
// jeigu taip, grąžinkite, kad “vartotojas gali laikyti vairuotojo egzaminą", priešingu
// atveju iškvieskite klaidą (throw) ir parašykite, kad "jūsų amžius turi būti daugiau
// nei 18". Iškvieskite šią funkciją naudojantis then ir catch.

async function amziausPatikrinimas(age) {
    if(age === undefined || typeof age !== 'number'){
        throw new Error ('amzius turi buti skaicius')
    }
    if(age > 18) {
        return 'Vartotojas gali laikyti vairuotojo egzamina'
    } else {
        throw new Error('jus turite buti pilnametis')
    }
}

amziausPatikrinimas(16)
  .then(message => {
    console.log(message); // Vartotojas gali laikyti vairuotojo egzaminą
  })
  .catch(error => {
    console.error(error.message);
  });