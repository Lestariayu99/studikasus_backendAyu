// const mongoose = require('mongoose');
// const {dbHost, dbPass, dbName, dbPort, dbUser} = require('../app/config');

// mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=mongodb
// `);
// const db = mongoose.connection;
// module.exports = db;



const mongoose = require('mongoose');
const { dbHost, dbPort, dbName } = require('../app/config');

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, dbOptions)
  .then(() => {
    console.log('Koneksi berhasil ke database MongoDB Mongoose !!!.');
  })
  .catch((err) => {
    console.error('Koneksi gagal !!!', err);
  });

const db = mongoose.connection;
module.exports = db;
