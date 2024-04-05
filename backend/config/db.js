import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://deviprasanna127:Sujatha2004@cluster0.ew5b7ka.mongodb.net//food-del').then(()=>console.log("DB Connected"))
}



