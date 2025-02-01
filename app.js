import express from "express";

import personRoutes from "./routes/person.route.js";
import connectDB from "./lib/database.js";

const PORT = 7070;

const app = express();

// data understanding middleware
app.use(express.json()); //can read the req.body (raw)
app.use(express.urlencoded({extended:true})); // can read the formurl encoded data

//connect DB
connectDB();

// CRUD functionalities

app.use("/person",personRoutes);



app.listen(PORT,()=>{
console.log(`server running on http://localhost:${PORT}`);
});