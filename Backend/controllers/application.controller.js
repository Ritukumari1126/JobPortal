// import { Application } from "../models/application.model.js";
// import { Job } from "../models/job.model.js";

// // ================= APPLY JOB =================
// export const applyjob = async (req, res) => {
//   try {
//     const userId = req.id;
//     const jobId = req.params.id;

//     const job = await Job.findById(jobId);
//     if (!job) {
//       return res.status(404).json({
//         success: false,
//         message: "Job not found",
//       });
//     }

//     const alreadyApplied = await Application.findOne({
//       job: jobId,
//       applicant: userId,
//     });

//     if (alreadyApplied) {
//       return res.status(400).json({
//         success: false,
//         message: "Already applied",
//       });
//     }

//     const application = await Application.create({
//       job: jobId,
//       applicant: userId,
//     });

//     // ⚠️ ensure applications is ARRAY
//     if (!job.applications) {
//       job.applications = [];
//     }

//     job.applications.push(application._id);
//     await job.save();

//     return res.status(201).json({
//       success: true,
//       message: "Job applied successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ success: false });
//   }
// };

// // ================= GET APPLIED JOBS =================
// export const getAppliedJobs = async (req, res) => {
//   try {
//     const userId = req.id;

//     const applications = await Application.find({
//       applicant: userId,
//     })
//       .populate({
//         path: "job",
//         model: "Job",
//         populate: {
//           path: "company",
//           model: "Company",
//         },
//       })
//       .sort({ createdAt: -1 });

//     return res.status(200).json({
//       success: true,
//       application: applications,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ success: false });
//   }
// };

// // ================= GET APPLICANTS =================
// export const getApplicants = async (req, res) => {
//   try {
//     const job = await Job.findById(req.params.id).populate({
//       path: "applications",
//       populate: { path: "applicant" },
//     });

//     if (!job) {
//       return res.status(404).json({ success: false });
//     }

//     return res.status(200).json({
//       success: true,
//       job,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ success: false });
//   }
// };

// // ================= UPDATE STATUS =================
// export const updateStatus = async (req, res) => {
//   try {
//     const { status } = req.body;
//     const application = await Application.findById(req.params.id);

//     if (!application) {
//       return res.status(404).json({ success: false });
//     }

//     application.status = status.toLowerCase();
//     await application.save();

//     return res.status(200).json({
//       success: true,
//       message: "Status updated",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ success: false });
//   }
// };


import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

// export const applyJob = async (req, res) => {
//     try {
//         const userId = req.id;
//         const jobId = req.params.id;
//         if (!jobId) {
//             return res.status(400).json({
//                 message: "Job id is required.",
//                 success: false
//             })
//         };
//         // check if the user has already applied for the job
//         const existingApplication = await Application.findOne({ job: jobId, applicant: userId });

//         if (existingApplication) {
//             return res.status(400).json({
//                 message: "You have already applied for this jobs",
//                 success: false
//             });
//         }

//         // check if the jobs exists
//         const job = await Job.findById(jobId);
//         if (!job) {
//             return res.status(404).json({
//                 message: "Job not found",
//                 success: false
//             })
//         }
//         // create a new application
//         const newApplication = await Application.create({
//             job:jobId,
//             applicant:userId,
//         });

//         job.applications.push(newApplication._id);
//         await job.save();
//         return res.status(201).json({
//             message:"Job applied successfully.",
//             success:true
//         })
//     } catch (error) {
//         console.log(error);
//     }
// };


export const applyJob = async (req, res) => {
  try {
    const userId = req.id;           // 🔥 FIXED
    const jobId = req.params.id;

    if (!userId) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    const alreadyApplied = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    if (alreadyApplied) {
      return res.status(400).json({
        message: "Already applied",
        success: false,
      });
    }

    const application = await Application.create({
      job: jobId,
      applicant: userId, // ✅ NOW NEVER UNDEFINED
    });

    job.applications.push(application._id);
    await job.save();

    return res.status(201).json({
      message: "Job applied successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};
export const getAppliedJobs = async (req,res) => {
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'job',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'company',
                options:{sort:{createdAt:-1}},
            }
        });
        if(!application){
            return res.status(404).json({
                message:"No Applications",
                success:false
            })
        };
        return res.status(200).json({
            application,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
// admin dekhega kitna user ne apply kiya hai
export const getApplicants = async (req,res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:'applications',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant'
            }
        });
        if(!job){
            return res.status(404).json({
                message:'Job not found.',
                success:false
            })
        };
        return res.status(200).json({
            job, 
            succees:true
        });
    } catch (error) {
        console.log(error);
    }
}
export const updateStatus = async (req,res) => {
    try {
        const {status} = req.body;
        const applicationId = req.params.id;
        if(!status){
            return res.status(400).json({
                message:'status is required',
                success:false
            })
        };

        // find the application by applicantion id
        const application = await Application.findOne({_id:applicationId});
        if(!application){
            return res.status(404).json({
                message:"Application not found.",
                success:false
            })
        };

        // update the status
        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message:"Status updated successfully.",
            success:true
        });

    } catch (error) {
        console.log(error);
    }
}