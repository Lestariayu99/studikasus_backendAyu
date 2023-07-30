const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const tagSchema = Schema({
    name: {
        type: String,
        minlength: [3, 'panjang nama tag minimal 3 karakter'],
        maxlength:[20, 'panjang nama tag minimal 20 karakter '],
        required: [true, 'Nama tag harus diisi !!!']

    }
})

module.exports = model('Tag', tagSchema);