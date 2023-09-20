import express from "express";
import colors from "colors";
import dotenv from "dotenv"
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import bodyParser from "body-parser";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
dotenv.config();

connectDB();



const app = express()

app.use(bodyParser.json()) 

app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);

app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send(
        "<h1>Welcome to ldms app</h1>"
    )
    }
)

const PORT = process.env.PORT|| 8282;

app.listen(PORT,() =>{
    console.log("Server Running on ${process.env.DEV_MODE} mode on port ${PORT}".bgCyan.white);

});