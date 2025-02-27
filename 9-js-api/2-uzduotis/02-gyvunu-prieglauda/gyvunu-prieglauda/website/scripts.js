const BASE_URL = 'http://localhost:7789';
const FILTERS_TRASLATION = {
    age: 'amzius',
    type:'gyvunas',
    breed:'veisle',
    state:'ar iesko namu',
    features:'charakterop bruozai',
    vaccinated:'skiepta(s)'
}


const getData = (url) => {
    return fetch(BASE_URL + url).then(response => response.json())
}

const generatePetsHTML = (pets) => {
    return pets.map(item =>  `
        <div class="col-5">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.age}</p>
                    <p class="card-text">${item.breed}</p>
                    <p class="card-text">${item.type}, ${item.vaccinated ? "skiepyta(s)" : "neskiepyta(s)"} - ${item.state} </p>
                    <p class="card-text">
                        ${item.features.map(feature => `<span class= "badge text-bg-primary me-1"> ${feature}</span>`).join(' ')}
                    </p>
                    <p class="card-text">${item.description}</p>
                  </div>
                </div>
            </div>
        `
    ).join('');
}


const generateFiltersHTML = (filters) => {
    let filtersHtml = '';
    for (let typeFilter in filters) {
        // console.log(typeFilter);
        // console.log(filters[typeFilter]);
        filtersHtml += `
           <div class="col-md-2">
             <label for="${typeFilter}" class="form-label">${FILTERS_TRASLATION[typeFilter]}</label>
             <select class="form-select" id="${typeFilter}">
                <option value="visi" selected>Visi</option>
                ${filters[typeFilter].map(f => `<option value="${f}">${f}</option>`).join('')}
              </select>
        </div>
        `
    }
    return filtersHtml;
}


window.addEventListener('DOMContentLoaded', async () => {
    const filters = await getData('/pets/filters-list')
    // console.log(filters)
    // generateFiltersHTML(filters)
    document.querySelector('.filter-items').innerHTML = generateFiltersHTML(filters);



    const pets = await getData('/pets')
    document.querySelector('.cards-list').innerHTML = generatePetsHTML(pets);
});

document.getElementById('filter-button').addEventListener('click', async () => {
    let filterParams = [];

    for (let filterKey in FILTERS_TRASLATION) {
        let filterValue = document.getElementById(filterKey).value;

        if(filterValue !== 'visi') {
            filterParams.push(
                `${filterKey}=${filterValue.split(' ').join('_')}`);
            }
    }

    let readyFilter = filterParams.length ? `?${filterParams.join('&')}` : null;
    let pets = null;
    let url = '/pets'
    if (readyFilter) {
         pets = await getData(`${url}/filtered${readyFilter}`);
    } else {
        pets = await getData(url);
    }
    document.querySelector('.cards-list').innerHTML = generatePetsHTML(pets);

});