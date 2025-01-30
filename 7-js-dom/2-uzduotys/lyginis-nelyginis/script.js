let inputSkaicius = document.getElementById('inputnumber');

document.querySelector('button').addEventListener('click', () => {
    let skaicius = inputSkaicius.valueAsNumber;
    let rezultatas = document.querySelector('.result');
    if (skaicius % 2 === 0) {
        rezultatas.innerText = 'Lyginis';
        rezultatas.style.cssText = "color: #000; background-color: green";
    } else {
        rezultatas.innerText = 'Nelyginis';
        rezultatas.style.cssText = "color: white; background-color: red";
    }
});