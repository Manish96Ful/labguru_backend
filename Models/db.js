const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONNECTION_STRING;

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected...');
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    })

// async function ConnectionDB() {
//      try {
//          mongoose.connect(process.env.MONGO_CONNECTION_STRING)
//      } catch (error) {
//         console.log('MongoDB Connection Failed ',error);
//      }
// }
// module.exports = ConnectionDB