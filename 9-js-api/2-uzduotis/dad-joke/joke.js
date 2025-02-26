function onGetJokeClick() {
    console.log('get joke ')


    async function fetchJokes() {
    try {
        const response = await fetch("https://icanhazdadjoke.com",{
            headers: {Accept: "application/json"}
        } );

        const joke = await response.json()

            return joke;
        } catch(e) {
            throw e
    }
}

fetchJokes()
    // .then(data => {document.getElementById('jokeValue').append(data.joke)})
    .then(data => document.getElementById('jokeValue').innerHTML = data.joke)
    .catch(e => console.log('klaida: nepridejote header'))
}

