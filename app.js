import express from "express";

import personRoutes from "./routes/person.route.js";
import connectDB from "./lib/database.js";

const PORT = 7070;

const app = express();

//connect DB
connectDB();

// CRUD functionalities

app.use("/person",personRoutes);



app.listen(PORT,()=>{
console.log(`server running on http://localhost:${PORT}`);
});