import express, { json } from "express"
import cors from "cors"
import { router } from "./src/route/dataRoutes.js";
const app = express()
const corsOptions = {
    origin: "http://localhost:5173", // Allow your frontend
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],  // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,              // Allow sending cookies or Authorization header
    // Allowed headers
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions))
app.options("*", cors(corsOptions));

app.use(express.json())
app.use(router)
export default app