const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {pool} = require('./config');
const { response } = require('express');
const partsRouter = require('./routes/parts');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());



app.use('/parts', partsRouter);


//start server
app.listen(process.env.PORT || 3002, () => {
    console.log('Server listening')
})


