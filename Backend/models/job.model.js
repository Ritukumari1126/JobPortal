// import mongoose from "mongoose";

// const jobSchema = new mongoose.Schema({
//     title:{
//         type:String,
//         required:true
//     },
//     description:{
//         type:String,
//         required:true
//     },
//     requirements:{
//         type:[String],
//         required:true
//     },
//     salary:{
//         type:String,
//         required:true
//     },
//     experience:{
//         type:Number,
//         required:true
//     },
//     location:{
//         type:String,
//         required:true
//     },
//     jobType:{
//         type:String,
//         required:true
//     },
//     position:{
//         type:String,
//         required:true
//     },
//     company:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'Company',
//         required:true
//     },
//     created_by:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'User',
        
//     },
//     application:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'Application',
       
        
//     },
// },{timestamps:true})

// export const Job = mongoose.model("Job",jobSchema)

import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requirements: {
      type: [String],
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // 🔥 FIX: array hona chahiye
    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
      },
    ],
  },
  { timestamps: true }
);

// 🔥 KEEP MODEL NAME "Job"
export const Job = mongoose.model("Job", jobSchema);
