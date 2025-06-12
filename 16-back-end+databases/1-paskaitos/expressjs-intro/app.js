const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');


// app.get('/', (req,res) => {
//     res.send(
//         '<h1>hello mano pirmoji express uzklausa</h1>'
//     );
// });

app.listen(port, () => {
    console.log('mano expressas veikia ant :' +{port} + 'porto')
})
// app.listen(port)

app.get('/', (req,res) => {
    res.sendFile(
        './views/html/index.html', {root:__dirname}
    )
});

app.get('/apie', (req,res) => {
    res.sendFile('./views/html/apie.html', {root:__dirname})
})

app.use((req,res) => {
    res.status(404).sendFile('./views/html/404.html', {root:__dirname});
})

// EJS (node express) routai

app.get('/ejs-index', (req,res) => {
    res.render('./views/html/apie.html', {root:__dirname})
})