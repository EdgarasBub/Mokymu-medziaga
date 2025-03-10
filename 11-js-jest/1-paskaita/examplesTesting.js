const maistoProduktai = ['pienas', 'duona', 'vanduo'];

function duokMasyva() {
    return['pienas', 'duona', 'vanduo']
}
async function fakeAPI(Timeout) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (Timeout > 20000) {
                reject('no data')
            }
            resolve('data data data')
        }, Timeout)
    })
}

// const atmetantiFunkcija = async () => {
//     return Promise.reject(new Error('bad request'))
// }

module.exports = {maistoProduktai ,duokMasyva ,fakeAPI};