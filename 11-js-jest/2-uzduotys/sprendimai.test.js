// const { default: test } = require('node:test')
    
const [apskritimoPlotas, palindrome, rastiDidziausiaSkaiciu, pridetiKaina,uzdelsimas,grazinaNull] = require('./sprendimai')

describe('1uzd:', () => {

    test('ar apskritimo plotas teisingai paskaiciuotas', () => {
        expect(apskritimoPlotas(2)).toBeCloseTo(
            // 6,283185307179586476925286766559
            12.57, 2
        )
    })

})


describe('2 uzd:', () => {

    test('zodis yra polindromas', () => {
        const result = palindrome('eme');
        expect(result).toBe(true)
    })
    test('zodis nera polindromas', () => {
        expect(palindrome('uzduotys')).toBe(false)
    })

})


describe(' 3uzd:', () => {

    test('grazina max is teigiamu skaiciu', () => {
        const result = rastiDidziausiaSkaiciu([1,2,33,69,420])
        expect(result).toBe(420);
    })
    test('grazina max is neigiamu skaiciu', () => {
        expect(rastiDidziausiaSkaiciu([-1,-5,-69,-420])).toBe(-1);

    })
    test('grazina klaida jei masyvas yra tuscias', () => {
        expect(() => rastiDidziausiaSkaiciu([])).toThrow('neteisingai ivestas parametras skaiciai');
    })
    test('grazinas klaida jei paduotas nemasyvas', () => {
        expect(() => rastiDidziausiaSkaiciu('masyvas')).toThrow('neteisingai ivestas parametras skaiciai');

    })
})
describe(' 4uzd:', () => {
    test('kaina reiksme prisidejo', () => {
        const objektas = {pavadinimas: 'Preke1'}
        const result = pridetiKaina(objektas);

        expect(result).toEqual({
            pavadinimas: 'Preke1',
            kaina: 50
        })
    })
    test ('rodo klaida, jei objekta jau kaina yra', () => {
        const objektas = {kaina: 123};
        const result = pridetiKaina(objektas);
        expect(result).toBe('Objektas jau turi kaina!')
    })
})
describe(' 5uzd:', () => {
    test('grazina ats po mazo delay iki 1 sek', async() => {
        const result = await uzdelsimas(500);
        expect(result).toBe('uzdelsimas mazesnis nei 1 sek')
    });
    test('grazina klaida po didelio delay virs 1 sek', async() =>{
        await expect(uzdelsimas(1500)).rejects.toThrow('Klaida: uzdelsimas ilgiau nei 1 sek')
    })

})
describe(' 6uzd:', () => {
    test('visada bus null', () => {
        expect(grazinaNull()).toBeNull()
    })
})