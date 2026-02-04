import {Job} from "../models/job.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
// admin job post krega
export const postJob = async(req,res)=>{
    try{
        const {title, description , requirements , salary , location , jobType , experience , position , companyId} = req.body;
        const userId = req.id;
        if(!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId){
            return res.status(400).json({
                message:"something is missing.",
                success:false
            })
        }

        const job = await Job.create({
            title,
            description,
            requirements:requirements.split(","),
            salary:Number(salary),
            location,
            jobType,
            experience:experience,
            position,
            company:companyId,
            created_by:userId
        })

        return res.status(201).json({
            message:"New job created successfully.",
            job,
            success:true
        })


    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            error:err
        })
    }


}

// student
export const getAllJobs = async(req,res)=>{
    try{
        // const jobId = req.id;
        // const job =  await Job.findById({jobId})

        const keyword = req.query.keyword || "";
        const query = {
            $or:[
                {title:{$regex:keyword , $options : "i"}},
                {description: {$regex:keyword , $options : "i"}}

            ]
        }
        const jobs = await Job.find(query).populate({
            path:"company"
        }).sort({createdAt : -1 });

        if(!jobs){
            return res.status(404).json({
                message:"job not found.",
                success:false
            }) 
        }

        return res.status(200).json({
            message:"job found successfully..",
            jobs,
            success:"true"
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            message:"Failed..",
            success:false
        })
    }
}

//student

export const getJobById = async(req,res)=>{
    try{
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message:"jobs not found",
                success:false
            })
        }

        return res.status(200).json({
            job,
            success:true
        });
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            message:"job not failed..",
            success:false
        })
    }
}

// admin kitne job create kra hai abhi tk

export const getAdminJobs = async(req,res)=>{
    try{
        const adminId = req.id
        const jobs = await Job.find({created_by:adminId});
        if(!jobs){
            return res.status(404).json({
                message:"jobs not found",
                success:false
            })
        }
        return res.status(200).json({
            jobs,
            success:true 
        })
    }
    catch(err){
        console.log(err)
    }
    
}


export const getSingleJob = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId).populate({
      path: "applications",
      select: "applicant",
    });

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
};
