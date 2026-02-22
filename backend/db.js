// db.js
const mongoose = require("mongoose");

const dbUrl = process.env.MONGODB_URI || "mongodb://localhost/vidly";

const connect = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to MongoDB: " + dbUrl);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // щоб Render перезапустив контейнер
  }
};

const close = () => mongoose.connection.close();

module.exports = { connect, close, url: dbUrl };
