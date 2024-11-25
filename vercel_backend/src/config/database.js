import mongoose from "mongoose";
export const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/vercel")
        console.log("connected to database")



    }
    catch (error) {
        console.log(error)

    }
}