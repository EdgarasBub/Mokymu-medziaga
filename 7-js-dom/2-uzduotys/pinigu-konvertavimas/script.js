let currencies = [
    {
        id: 'usd',
        name: 'doleriai',
        shortName: 'USD',
        rates: [
            {
                currencyId: 'eur',
                rate: 0.97
            },
            {
                currencyId: 'rub',
                rate: 120
            }
        ]
    },
    {
        id: 'eur',
        name: 'eurai',
        shortName: 'EUR',
        rates: [
            {
                currencyId: 'usd',
                rate: 1.02
            },
            {
                currencyId: 'rub',
                rate: 150
            }
        ]
    },
    {
        id: 'rub',
        name: 'rubliai',
        shortName: 'RUB',
        rates: [
            {
                currencyId: 'usd',
                rate: 0.08
            },
            {
                currencyId: 'eur',
                rate: 0.06
            }
        ]
    }
];


function addDataIntoDropdownName(items) {
    document.querySelector('.currency-to').innerHTML += `
        <select name="from" id="select-currency-to">
            ${
                items.map(item => {
                    return `<option value='${item.id}'>${item.name}</option>`
                }).join('')
            }
        </select> 
    `;
};

function addDataIntoDropdownShortName(items) {
    document.querySelector('.currency-from').innerHTML += `
        <select name="from" id="select-currency-from">
            ${
                items.map(item => {
                    return `<option value='${item.id}'>${item.shortName}</option>`
                }).join('')
            }
        </select> 
    `;
};

addDataIntoDropdownShortName(currencies);
addDataIntoDropdownName(currencies);

let showResetButton = 

document.querySelector('.calculate').addEventListener('click', () => {
    let currencyFromValue = document.getElementById('input-from-value').value;
    let fromSelectValue = document.getElementById('select-currency-from').value;
    let toSelectValue = document.getElementById('select-currency-to').value;

    if (fromSelectValue === toSelectValue || !currencyFromValue) {
        return;
    }

    let currencyRate = currencies.find(currency => currency.id === fromSelectValue).rates.find(rate => rate.currencyId === toSelectValue).rate;     
    let fromName = currencies.find(currency => currency.id === fromSelectValue).name;
    let toName = currencies.find(currency => currency.id === toSelectValue).name;
    let changedCurrency = currencyFromValue * currencyRate;

    let changingResult = `${currencyFromValue} ${fromName} yra ${changedCurrency} ${toName}`;
    let rateResult = `santykis: 1 ${fromName} = ${currencyRate} ${toName}`;
});


document.getElementById('resetButton').addEventListener('click', () => {

    document.getElementById('input-from-value').value = '';


    document.getElementById('resetButton').style.display = 'none';
});

document.querySelector('.calculate').addEventListener('click', () => {
    let currencyFromValue = document.getElementById('input-from-value').value;
    let fromSelectValue = document.getElementById('select-currency-from').value;
    let toSelectValue = document.getElementById('select-currency-to').value;

    if (currencyFromValue && fromSelectValue && toSelectValue) {
        // Rodyti reset mygtuką
        document.getElementById('resetButton').style.display = '!none';
    }

    // Likusi konversijos logika...
    let kursas = gautiKursą(valiutos, fromSelectValue, toSelectValue);

    if (kursas !== null && !isNaN(currencyFromValue)) {
        let konvertuotaSuma = currencyFromValue * kursas;
        document.getElementById('result').innerHTML = `
            Kursas: 1 ${fromSelectValue.toUpperCase()} = ${kursas} ${toSelectValue.toUpperCase()} <br>
            Konvertuota suma: ${currencyFromValue} ${fromSelectValue.toUpperCase()} = ${konvertuotaSuma.toFixed(2)} ${toSelectValue.toUpperCase()}
        `;
    } else {
        document.getElementById('result').textContent = "Klaida: nepavyko apskaičiuoti kurso arba įvesta neteisinga suma.";
    }
});