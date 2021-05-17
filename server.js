const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

dotenv.config = ({ path: './config/config.env' })

const indexRoute = require('./routes/index');
const clientsRoute = require('./routes/clients');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views')
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    helpers: require('./config/handlebars-helpers')     
}));

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname ,'public')));


app.get('/favico.ico', (req, res) => {
    res.sendStatus(404);
});

const PORT = process.env.PORT || 5000;


app.use('/',indexRoute);
app.use('/clients',clientsRoute);

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on ${PORT}`));