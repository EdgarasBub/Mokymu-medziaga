const {app} = require('./sprendimai-mock');

describe('1 uzd', () =>{
    test('mock used', () => {
        const mock = jest.fn().mockReturnValue(5);
        app.getThirdNumber = mock;
        const result = app.skaiciuokSukma(2, 2)
        // expect(mock).toHaveBennCalled()
        // expect(mock).toHaveBennCalledWith(10)
        expect(result).toBe(7)
    })
})
describe(' 1uzd', () =>{

})
describe(' 1uzd', () =>{

})