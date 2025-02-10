// let receptai = [
//     {
//         id: 1,
//         pavadinimas: 'Vistiena su salotomis',
//         aprasymas:'bulbul',
//         imgurl:'img/salotos.jpg',

//     },
//     {
//         id: 2,
//         pavadinimas: 'Tortas su mėlynėm',
//         aprasymas:'bulbul',
//         imgurl:'img/tortas.jpg',

//     },
//     {
//         id: 3,
//         pavadinimas: 'Makaronai su mėsa',
//         aprasymas:'bulbul',
//         imgurl:'img/makaronai.jpg',

//     },
// ]
document.addEventListener('load', () => {
    let korteliuHTML = '';
    console.log('load');

    for (let receptas of receptai) {
        console.log(receptas)
        korteliuHTML+= `
        <div class="kortele" onclick"onKortelesPaspaudimas(${receptas})`
    }
} )


let receptasVistiena = document.getElementById('vistiena');

receptasVistiena.addEventListener('click', function () {
    let vistiena = {
        vistiena: 300,
        salotos: 400,
        pomidorai: 200,
        agurkai: 100,
        padazas: 50
    };
    console.log(vistiena);
    let resultsDiv = document.getElementById('ingredientuKiekis');

    resultsDiv.innerHTML = `<p><strong>Vištienos: </strong>${Vistiena.vistiena} gramų </p> <p><strong>Salotų: </strong>${Vistiena.salotos} gramų</p> <p><strong>Pomidorų: </strong>${Vistiena.pomidorai} gramų</p> <p><strong>Padažo: </strong>${Vistiena.padazas} gramų</p>`;
})