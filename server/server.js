const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

require('./config/mongoose.config');
require('./routes/product.routes')(app);

app.listen(port, () => console.log(`Application is fired up, i.e., listening, on port ${port}!`));