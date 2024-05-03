import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import bodyParser from "body-parser";

import contactRoutes from "./route/contactRoute.js"
//configure env
dotenv.config();

//databse config
connectDB();

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
  }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/api",contactRoutes);

const PORT = process.env.PORT || 5000;

// Run listen
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`);
  });