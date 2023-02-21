const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false); // set the strictQuery option explicitly
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB connected with server: ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
