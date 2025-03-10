const examplesTesting = require('./examplesTesting')
const {maistoProduktai, duokMasyva, fakeAPI} = require('./examplesTesting')

// describe('maistoProduktai:', () => {
//     it('yra pienas reiksme', () => {
//         expect(maistoProduktai).toContain('pienas')
//     })
// })

describe('duokMasyva:',() => {
    afterEach(() => {
        
    })
    it('duokMasyva funkcija teisingai grazina masuvo reiksmes', () => {
        expect(duokMasyva()).toEqual(['pienas', 'duona', 'vanduo'])
    })
    
    it('dfunkcija buvo iskviesta spyOn', () => {
        const examplesTesting = require('./examplesTesting')
        const spy = jest.spyOn(examplesTesting, 'duokMasyva');
        const data = examplesTesting.duokMasyva();
        expect(spy).toHaveBeeCalled();

    })
    
})

describe('fakeApi:',() => {
    test('fakeApi teisingai grazuna ats iki 2sek', async () => {
        const result = await fakeAPI(1000);
        expect(result).toBe('data data data')
    })
    
    test('fakeAPI ismeta klaida kai ats grazina ilgiau nei 20sec', async() =>{
        try {
            await fakeAPI(2500)
        } catch (error) {
            expect(error).toBe('no data')
        }
    })
    
})

// test('atmetantiFunkcija error apdorojimas', async () => {
//     expect(Promise.reject('octopus')).reject.toThrow('octopus')
// })