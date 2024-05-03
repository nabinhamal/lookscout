import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import bodyParser from "body-parser";

import contactRoutes from "./route/contactRoute.js"

import path from 'path'
//configure env
dotenv.config();

//databse config
connectDB();


const __dirname = path.resolve();
const app = express();

app.use(cors({
    origin: 'https://lookscout-aaui.onrender.com',
  }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/api",contactRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})


const PORT = process.env.PORT || 5000;

// Run listen
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`);
  });