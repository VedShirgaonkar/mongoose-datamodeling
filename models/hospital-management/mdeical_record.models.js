import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({},{timrStamps:true});

export const MedicalRecord = mongoose.model("MedicalRecord",medicalRecordSchema);