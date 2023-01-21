require('dotenv').config()
const mongoose=require('mongoose')
mongoose.set('strictQuery', true);
const connectDB=async()=>{

  try {
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,

       
    })
    console.log("Mongo db connected");
  } catch (error) {
    console.log("Mongodb connection fails")
    process.exit(1)
  }
}
module.exports=connectDB