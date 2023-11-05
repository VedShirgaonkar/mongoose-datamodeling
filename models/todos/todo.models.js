import mongoose from "mongoose"

 const todoSchema  =new mongoose.Schema({
  contnt:{
    type:String,
    required:true,
  },
  complete:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  subTodos:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"SubTodo"
  }]//array of subtodos

 },{timestamps:true})

 export const Todo = new mongoose.Model("Todo",todoSchema)