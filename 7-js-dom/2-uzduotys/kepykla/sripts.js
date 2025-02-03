let calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function () {
    // console.log('clicked')
    // let employeesCount = parseInt(document.getElementById('employees-count').value);
    let employeesCount = parseInt(document.getElementById('employees-count').valueAsNumber);
    let employeesmakesPerDay = parseInt(document.getElementById('employees-makes-per-day').value);
    let dayReservations = parseInt(document.getElementById('day-reservations').value);

    // console.log('emploees count', employeesCount);
    // console.log('employees-makes-per-day', employeesmakesPerDay);
    // console.log('day-Reservations', dayReservations);

    let bakeryTotal = employeesCount * employeesmakesPerDay;
    let isBakeryGonnaMakeIt = bakeryTotal >= dayReservations;

    // let logInfo ={
    //     bakeryTotal,
    //     isBakeryGonnaMakeIt

    // };
    // console.log(logInfo);

    let resultsDiv = document.getElementById('results');
    // console.log(resultsDiv);
    resultsDiv.innerHTML = `<p><strong>kepykla per diena spes pagaminti: </strong>${bakeryTotal} kepalikuu</p>`;
    resultsDiv.innerHTML += `<p><strong> Jai reikia speti pagaminti: </strong>${dayReservations}Kepaliuku</p>`
    resultsDiv.innerHTML+= `<p><strong>Ar spes pagaminti?</strong>${isBakeryGonnaMakeIt ? 'Taip' : 'Ne'}</p>`
})

document.getElementById('employees-count').addEventListener('keyup', function (event) {
    // console.log('reiksme pasikeite');
    let inputValue = event.target.valueAsNumber;

    if(inputValue < 0 ) {
        // console.log(event.target);
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error');
        event.target.nextElementSibling.classList.remove('show')
    }
})
document.getElementById('employees-makes-per-day').addEventListener('keyup', function (event) {
    // console.log('reiksme pasikeite');
    let inputValue = event.target.valueAsNumber;

    if(inputValue < 0 ) {
        // console.log(event.target);
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error');
        event.target.nextElementSibling.classList.remove('show')
    }
})
document.getElementById('day-reservations').addEventListener('keyup', function (event) {
    // console.log('reiksme pasikeite');
    let inputValue = event.target.valueAsNumber;

    if(inputValue < 0 ) {
        // console.log(event.target);
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error');
        event.target.nextElementSibling.classList.remove('show')
    }
});
document.getElementById('reset').addEventListener('click', function(){
    // console.log('clicked')
    document.getElementById('employees-count').value = 0;
    document.getElementById('employees-makes-per-day').value = 0;
    document.getElementById('day-reservations').value = 0;
    document.getElementById('results').innerHTML = '<p>Kol kas nieko nera </p>'
})