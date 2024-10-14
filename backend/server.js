import express from "express";
import cors from 'cors';
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/DBConnect.js";
import userRoutes from './routes/UserRoutes.js'
import BlogRoutes from './routes/BlogRoutes.js'

const app = express();
dotenv.config({ path: './.env' })
const PORT = process.env.PORT || 9099;
connectDB();


app.use(cors());
app.use(express.json())
app.use(morgan("dev"));

app.use('/api/user', userRoutes)
app.use('/api/blog', BlogRoutes)

app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: "NodeServer" })
})

app.listen(PORT, () => { console.log(`server is running on ${PORT}`.bgCyan.white) })
