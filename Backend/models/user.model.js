// // import mongoose from "mongoose";    

// // const userSchema = new mongoose.Schema({
// //     fullname:{
// //         type:String,
// //         required:true
// //     },
// //     email:{
// //         type:String,
// //         required:true,
// //         unique:true
// //     },
// //     phoneNumber:{
// //         type:Number,
// //         required:true
// //     },
// //     password:{
// //         type:String,
// //         required:true
// //     },
// //     role:{
// //         type:String,
// //         enum:['student','recruiter'],
// //         required:true
// //     },
// //     profile:{
// //         bio:{type:String},
// //         skills:[{type:String}],
// //         resume:{type:String},
// //         resumeOriginalName:{type:String},
// //         company:{type:mongoose.Schema.Types.ObjectId,ref:'Company'},
// //         profilePhoto:{
// //             type:String,
// //             default:""
// //         }
        
// //     },
    
// // },{timestamps : true});

// // export const User = mongoose.model('User',userSchema  )

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     fullname: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     phoneNumber: String,
//     password: {
//       type: String,
//       required: true,
//     },
//     role: {
//       type: String,
//       enum: ["student", "recruiter"],
//       default: "student",
//     },
//     profile: {
//       bio: String,
//       skills: [String],
//       resume: String,
//       resumeOriginalName: String,
//     },
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("User", userSchema);
// export default User;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: String,
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      required: true,
    },
    profile: {
      bio: String,
      skills: [String],
      resume: String,
      resumeOriginalName: String,
      profilePhoto: String, // ✅ REQUIRED
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
