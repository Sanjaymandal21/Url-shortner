// import mongoose
import mongoose from "mongoose"
async function connectDB(){
    try {
        console.log("atempting to Connect..")
        await mongoose.connect(process.env.DB_URL);
        console.log("connected to MongoDb..")
    } catch (error) {
      console.log(error)  
      process.exit(1)
    }
}
export default connectDB;