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


    let logInfo ={
        bakeryTotal
    };
    console.log(logInfo);
})