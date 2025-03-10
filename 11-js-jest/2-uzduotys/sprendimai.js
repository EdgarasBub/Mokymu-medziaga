// 1 uzduotis

const { rejects } = require("assert");
const { resolve } = require("path");

function apskritimoPlotas(r) {
    return Math.PI * Math.pow(r, 2);
}


//2 uzduotis

function palindrome(str) {
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase()
    const reverseStr = cleanStr.split('').reverse().join('')
    return cleanStr === reverseStr}

    
// 3 uzduotis

function rastiDidziausiaSkaiciu(masyvas) {
    // Jei masyvas yra tuščias, grąžiname null (arba galite išmesti klaidą)
    if (!Array.isArray(masyvas)|| masyvas.length === 0) {
        throw new Error('neteisingai ivestas parametras skaiciai');
    }

    // Naudojame Math.max() funkciją, kad rastume didžiausią skaičių
    // Kadangi Math.max() negali tiesiogiai apdoroti masyvo, naudojame "spread operator" (...)
    return Math.max(...masyvas);


    // for ciklas 
    // let didziausias = skaiciai [0]

    // for(let i=1; i < masyvas.length; i++){
    //      if (masyvas[i] > didziausias) {
    //          didziausias - skaiciai[i];
    //      }
    //}
    // return didziausias
}
// 4 uzduotis 

function pridetiKaina(objektas) {
    if(objektas.hasOwnProperty('kaina')){
        return 'Objektas jau turi kaina!'
    }

    objektas.kaina = 50;

    return objektas;
}
// 5 uzduotis

function uzdelsimas(delay) {
    return new Promise((resolve, reject) => {
        if(delay > 1000) {
            reject(new Error('Klaida: uzdelsimas ilgiau nei 1 sek'))
        } else {
            setTimeout(() => {resolve('uzdelsimas mazesnis nei 1 sek')}, delay)
        }
    })
}

// 6 uzduotis
function grazinaNull() {
    return null
}


module.exports = [
    apskritimoPlotas,
    palindrome,
    rastiDidziausiaSkaiciu,
    pridetiKaina,
    uzdelsimas,
    grazinaNull

];
