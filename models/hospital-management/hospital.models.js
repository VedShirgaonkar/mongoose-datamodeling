import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    addressLine1:{
        type:String,
        required:true
    },
    addressLine2:{
        type:String
    },
    City:{
        type:String
    },
    pincode:{
        type:String,
        required:true
    },
    hospitalSpecializedIn:[{
        type:String
    }]
    
},{timeStamps:true});

export const Hospital = mongoose.model("Hospital",hospitalSchema)