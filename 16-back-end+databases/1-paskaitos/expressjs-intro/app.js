const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://codingSchoolEdgaras:Mikadzius123@cluster0.dj0iv4k.mongodb.net/sample_mflix'

mongoose.connect(dbURI)
    .then((result) => {
        console.log('Prisijungta prie mongoDB')
        console.log(result);
    })
    .catch((error => console.log(error)))

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String},
    email: {
        type: String},
    password:{
        type: String}
    },{timestamps: true});

const User = mongoose.model('User', userSchema);

app.set('view engine', 'ejs');

// app.get('/mano-pirmas', (req, res) => {
//     res.send(
//         '<h1>hello mano pirmoji express uzklausa</h1>'
//     );
// });


// app.listen(port)
app.listen(port, () => {
    console.log('mano expressas veikia ant :' + {port} + ' porto');
});

// app.get('/', (req, res) => {
//     res.sendFile('./views/html/index.html', {root: __dirname})
// });

// app.get('/apie', (req, res) => {
//     res.sendFile('./views/html/apie.html', {root: __dirname})
// });

// app.use((req, res) => {
//     res.status(404).sendFile('./views/html/404.html', {root: __dirname});
// })

//  EJS routaoi
app.use(express.static(__dirname));
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    const blogs = [
        {title: 'node.js pamoka', santrauka: 'lorem lorem'},
        {title: 'express.js pamoka', santrauka: 'lorem lorem'},
        {title: 'mongo db pamoka', santrauka: 'lorem lorem'}
    ]

    User.find().limit(10)
        .then(result => console.log(result))
        .catch(error => console.log(error));
    
    res.render('./ejs/index', {blogs}); 
});


app.get('/apie', (req, res) => {
    new User({
        name: 'mano-pvz',
        email: 'pvz-email',
        password: 'pvz-password'
    }).save().then(result => console.log(result))

    res.render('./ejs/apie', {manoInfo: 'mano info is serviso'});
});

app.get('/createBlog', (req, res) => {
    res.render('./ejs/createBlog');
});

app.post('/create-blog', (req, res) => {
    console.log(req);
})


app.post('/userList', async (req, res) => {
    const useriai = await User.find().limit(25)
    console.log(useriai);
    res.render('./ejs/userList', {users: useriai});
})

// user - codingSchoolEdgaras
// psw = Mikadzius123