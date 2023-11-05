import mongoose from "mongoose";
const doctorSchema = new mongoose.model({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
    },
    ExperienceInYears:{
        type:Number,
        required:true
    },
    workInHospitals:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Hospital"
            },
        ]
    
},{timeStamps:true});
export const Doctor = mongoose.model("Doctor",doctorSchema)