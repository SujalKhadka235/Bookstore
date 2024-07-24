import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
//connect to mongoDB
try {
  mongoose.connect(URI);
  console.log("connected to MongoDB");
} catch (error) {
  console.log("error:", error);
}
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
