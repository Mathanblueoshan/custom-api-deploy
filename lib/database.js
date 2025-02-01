import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
console.log("MongoDB URI:", process.env.MONGO_URI); // Debugging line


const connectDB = async () => {
   try {

     await mongoose.connect(process.env.MONGODB_URI);
     console.log("MongoDB connected!");

   } catch (error) {

    console.error(error.message);
    process.exit(1);//exit the process
    
   }
}

export default connectDB;