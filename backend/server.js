const app = require('./app');
const dotenv = require('dotenv')
const connectDB = require('./config/db')


//Configuration
dotenv.config({path:"backend/config/config.env"});

//Connection to database
connectDB()


// app 
app.listen(process.env.PORT, function() {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})