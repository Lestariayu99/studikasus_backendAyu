const {Scheme, model} =  require('mongoose')
const deliveryAddressSchema = Schema ({

    nama: {
        type: String,
        required: [true, 'Nama alamat harus diisi'],
        maxLength: [255, 'Panjang maximal nama alamat adalah 255 karakter']
    },
    kelurahan: {
        type: String,
        required: [true,  'Kelurahan harus diisi'],
        maxLength: [255, 'Panjang maximal kelurahan adalah 255 karakter']
    },
    kecamatan : {
        type: String,
        required: [true,  'Kecamtaan harus diisi'],
        maxLength: [255, 'Panjang maximal kecamatan adalah 255 karakter']
    },
    kabupaten: {
        type: String,
        required: [true, 'Kabupaten harus diisi'],
        maxLength: [255, 'Panjang maximal kabupaten adalah 255 karakter'],
    },
    provinsi: {
        type: String,
        required: [true,  'Provinsi harus diisi'],
        maxLength: [255, 'Panjang maximal provinsi adalah 255 karakter'],
    },
    detail: {
        type: String,
        required: [true,  'Detail harus diisi'],
        maxLength: [1000, 'Panjang maximal detail adalah 1000 karakter'],
    },

user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
}

}, {timestamps: true});

module.exports = model('DeliveryAdress', deliveryAddressSchema)