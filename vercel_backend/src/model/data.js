import mongoose from "mongoose";
const data = new mongoose.Schema({
    name: { type: String }
})
const DataModel = mongoose.model("Data", data)
export default DataModel