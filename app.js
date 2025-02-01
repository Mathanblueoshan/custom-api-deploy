const express = require("express");


const app = express();

app.use("/",(req,res) => {
res.json({
  data:{
    message:"Hello!, This is Express app on Node Server."
  }
})
})
app.listen(7070,()=>{
console.log("server running on http://localhost:7070");
});