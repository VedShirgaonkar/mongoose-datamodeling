import mongoose from "mongoose";
 const patinetSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diagnostics:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["M","F","O"]
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }




 },{timeStamps:true});
 export const Patient =  mongoose.model("Patient",patinetSchema);
 