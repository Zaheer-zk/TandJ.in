const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Handling Uncaught Exception
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

//Configuration
dotenv.config({ path: 'backend/config/config.env' });

//Connection to database
connectDB();

// app
app.listen(process.env.PORT || 5000, function () {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
