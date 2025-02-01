import express from "express";

import personRoutes from "./routes/person.route.js";

const PORT = 7070;

const app = express();

app.get("/",(req,res) => {
 res.json({msg:"Hello! API Ready for You!"});
});

// CRUD functionalities

app.use("/movies",personRoutes);



app.listen(PORT,()=>{
console.log(`server running on http://localhost:${PORT}`);
});