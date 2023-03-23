const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')


app.use(cors());
app.use(bodyParser.json());
const routes = require('./Routes/route.js');

app.use(express.static('public'));

app.use('/', routes);

app.listen(3000, (req, res) => {
    console.log("Radhe-krishna!!! server connected!")
})