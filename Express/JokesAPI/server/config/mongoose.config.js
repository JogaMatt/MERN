const mongoose = require('mongoose');
const dataBase = "jokes_apiDb"

mongoose.connect('mongodb://127.0.0.1:27017/' + dataBase, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the ${dataBase} database`))
    .catch(err => console.log(`Something went wrong: ${err}`));
