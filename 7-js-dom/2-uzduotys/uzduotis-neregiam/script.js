let mygtukas = document.querySelector('button.neregiui');
let PagrindinisBlokas = document.querySelector('body');

mygtukas.addEventListener ('click', () => {
    if (PagrindinisBlokas.classList.contains('pritaikymas')) {
        PagrindinisBlokas.classList.remove('pritaikymas');
        mygtukas.textContent = 'Viską išdidinti';
    } else {
        PagrindinisBlokas.classList.add('pritaikymas');
        mygtukas.textContent = 'Viską gražinti atgal';
    }
});
