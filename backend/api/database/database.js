const mongoose = require('mongoose');

const URI = 'mongodb://yeilop44:Fragante44@ds239967.mlab.com:39967/estribos';    

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));


module.exports = mongoose;