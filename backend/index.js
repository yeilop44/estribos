const express = require('express');
const app = express();
const morgan = require('morgan');
const { mongoose} = require('./api/database/database');
const cors = require('cors');

const eventRoutes = require('./api/routes/events'); 


//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/events', eventRoutes);

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'));
});