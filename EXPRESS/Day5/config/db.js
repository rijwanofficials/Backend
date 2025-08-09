const mongoose = require("mongoose");

console.log("🔍 Trying to connect to MongoDB...");

mongoose
  .connect(process.env.MONGO_DB_URL, { dbName: "day-5-express" })
  .then(() => {
    console.log("✅ MongoDB connected to cluster");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });
