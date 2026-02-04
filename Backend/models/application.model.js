// import mongoose, { mongo } from "mongoose";

// const applicationSchema = new mongoose.Schema({
//     job:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'job',
//         require:true
//     },
//     applicant:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'job',
//         require:true
//     },
//     status:{
//         type:String,
//         enum:['pending','accepted','rejected'],
//         default:'pending'

//     }
// },{timestamps:true})

// export const Application = mongoose.model("Application",applicationSchema)

import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job", // 🔥 SAME AS Job MODEL NAME
      required: true,
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // 🔥 User (capital U)
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Application = mongoose.model("Application", applicationSchema);

