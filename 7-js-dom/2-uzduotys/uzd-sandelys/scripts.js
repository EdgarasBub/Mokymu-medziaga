let turiniuSkirtukai = [
    {
        skirtukas: document.querySelector('.skirtukai .skirtukai1'),
        turinys: document.querySelector('.turinys .skirtukas1-turinys')
    }
]




let skirtukas1 = document.querySelector('.skirtukai .skirtukas1');
let skirtukas2 = document.querySelector('.skirtukai .skirtukas2');
let skirtukas3 = document.querySelector('.skirtukai .skirtukas3');

let turinys1 = document.querySelector('.turinys .skirtukas1-turinys');
let turinys2 = document.querySelector('.turinys .skirtukas2-turinys');
let turinys3 = document.querySelector('.turinys .skirtukas3-turinys');

let turiniuSkirtukai = [];

let turinioSkirtukuSkaicius = 3;

for ( let i =1; i<=turinioSkirtukuSkaicius; i++) {
    turiniuSkirtukai.push({
            skirtukas: document.querySelector('.skirtukai .skirtukas' + i),
            turinys: document.querySelector('.turinys .skirtukas'+i +'-turinys')
    })}

    console.log(turiniuSkirtukai);

turiniuSkirtukai.forEach((turinys) => {
    turinys.skirtukas.addEventListener('click', (event) => {
        turiniuSkirtukai.forEach((turinys) => {
            turinys.skirtukas.classList.remove('aktyvus');
            turinys.turinys.classList.remove('aktyvus');
        });

        turinys.skirtukas.classList.add('aktyvus');
        turinys.turinys.classList.add('aktyvus');
    });
});