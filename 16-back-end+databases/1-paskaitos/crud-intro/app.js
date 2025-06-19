const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000
const dbURI = 'mongodb+srv://codingSchoolEdgaras:Mikadzius123@cluster0.dj0iv4k.mongodb.net/codingSchoolReceptai'
const receptasRoutes = require('./routes/receptasRoutes')


mongoose.connect(dbURI)
    .then(() => app.listen(PORT))
    .catch(error => console.log(error))

app.set('view engine', 'ejs')
// root route
app.use(express.static(__dirname));
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.redirect('receptai/list')
})

app.use(receptasRoutes)