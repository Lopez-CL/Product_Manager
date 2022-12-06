const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/product_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Established connection to the bitch ass database'))
    .catch((err)=> console.log('Something went wrong when connecting to the database'))