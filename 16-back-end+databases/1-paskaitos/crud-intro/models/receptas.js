const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReceptasScheme = new Schema({
    title:{type: String, required: true},
    level:{type: Number, required: true},// reikia ideti type toki pat kaip mongoose
    description:{type: String, required: true},
    price:{type: Number, required: true}
},{collection: "Keksiukai"});

const Receptas = mongoose.model('Receptas', ReceptasScheme);

module.exports = Receptas;

// index - list receptu
// edit - 
//     update
//     delete
// create