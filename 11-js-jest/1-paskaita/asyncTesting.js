function fetchData () {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Data loaded1'), 1000)
    });
}

module.exports = fetchData;