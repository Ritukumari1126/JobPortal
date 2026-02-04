// import { Company} from "../models/company.model.js";
// import bcrypt from "bcrypt"

// import jwt from 'jsonwebtoken'

// export const registerCompany = async(req,res)=>{
//     try{
//         const {companyName} = req.body
//         if(!companyName){
//             return res.status(400).json({
//                 message:"Company name is required..",
//                 success:false
//             })
//         }

//         let company = await Company.findOne({name:companyName});
//         if(company){
//             return res.status(400).json({
//                 message:"You cannot register same company ",
//                 success:false
//             })
//         }
//         company = await Company.create({
//             name:companyName,
//             userId:req.id
//         })

//         return res.status(201).json({
//             message:"company registered successfully.",
//             company,
//             success:true
//         })

//     }
//     catch(err){
//         console.log(err)
//     }
// }

// export const getCompany = async(req,res)=>{
//     try{
//     const userId = req.id;
//     const companies = await Company.find({userId})
//     if(!companies){
//         return res.status(404).json({
//             message:"comapnies not found.",
//             success:false
//         })
//     }
//     return res.status(200).json({
//         companies,
//         success:true
//     })
//     }
//     catch(err){
//         console.log(err)
//         return res.status(500).json({
//             error:err
//         })
//     }
// }

// export const getCompanyById = async(req,res)=>{
//     try{
//         const companyId = req.params.id;
//         const company = await Company.findById(companyId)
//         if(!company){
//             return res.status(404).json({
//                 message:"comapny not found.",
//                 success:false
//             })
//         }
//         return res.status(200).json({
//         company,
//         success:true
//     })
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// export const updateCompany = async(req,res)=>{
//     try{
//         const {name , description , website , location} = req.body
//         const file = req.file

//         const updateData = {name , description , website , location};

//         const company = await Company.findByIdAndUpdate(req.params.id,updateData ,{new : true})

//         if(!company){
//             return res.status(404).json({
//                 message:"Compamy not found", 
//                 success:false
//             })
//         }

//         return res.status(200).json({
//             message:"company information updated.",
//             company,
//             updateData,
//             success:true
//         })
//     }
//     catch(err){
//         console.log(err)
//     }
// }

import { Company } from "../models/company.model.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

// export const registerCompany = async (req, res) => {
//     try {
//         const { companyName } = req.body;
//         if (!companyName) {
//             return res.status(400).json({
//                 message: "Company name is required.",
//                 success: false
//             });
//         }
//         let company = await Company.findOne({ name: companyName });
//         if (company) {
//             return res.status(400).json({
//                 message: "You can't register same company.",
//                 success: false
//             })
//         };
//         company = await Company.create({
//             name: companyName,
//             userId: req.id
//         });

//         return res.status(201).json({
//             message: "Company registered successfully.",
//             company,
//             success: true
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// export const getCompany = async (req, res) => {
//     try {
//         const userId = req.id; // logged in user id
//         const companies = await Company.find({ userId });
//         if (!companies) {
//             return res.status(404).json({
//                 message: "Companies not found.",
//                 success: false
//             })
//         }
//         return res.status(200).json({
//             companies,
//             success:true
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// // get company by id
// export const getCompanyById = async (req, res) => {
//     try {
//         const companyId = req.params.id;
//         const company = await Company.findById(companyId);
//         if (!company) {
//             return res.status(404).json({
//                 message: "Company not found.",
//                 success: false
//             })
//         }
//         return res.status(200).json({
//             company,
//             success: true
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// export const updateCompany = async (req, res) => {
//     try {
//         const { name, description, website, location } = req.body;
 
//         const file = req.file;
//         // idhar cloudinary ayega
//         const fileUri = getDataUri(file);
//         const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
//         const logo = cloudResponse.secure_url;
    
//         const updateData = { name, description, website, location, logo };

//         const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

//         if (!company) {
//             return res.status(404).json({
//                 message: "Company not found.",
//                 success: false
//             })
//         }
//         return res.status(200).json({
//             message:"Company information updated.",
//             success:true
//         })

//     } catch (error) {
//         console.log(error);
//     }


// export const registerCompany = async (req, res) => {
//   try {
//     const { companyName } = req.body;

//     if (!companyName) {
//       return res.status(400).json({
//         message: "Company name is required",
//         success: false,
//       });
//     }

//     const existingCompany = await Company.findOne({ name: companyName });
//     if (existingCompany) {
//       return res.status(400).json({
//         message: "Company already exists",
//         success: false,
//       });
//     }

//     const company = await Company.create({
//       name: companyName,
//       userId: req.id,
//     });

//     return res.status(201).json({
//       message: "Company registered successfully",
//       company,
//       success: true,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       message: "Server error",
//       success: false,
//     });
//   }
// };

// export const getCompany = async (req, res) => {
//   try {
//     const companies = await Company.find({ userId: req.id });

//     return res.status(200).json({
//       companies,
//       success: true,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Server error",
//       success: false,
//     });
//   }
// };

// export const getCompanyById = async (req, res) => {
//   try {
//     const company = await Company.findById(req.params.id);

//     if (!company) {
//       return res.status(404).json({
//         message: "Company not found",
//         success: false,
//       });
//     }

//     return res.status(200).json({
//       company,
//       success: true,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Server error",
//       success: false,
//     });
//   }
// };

// export const updateCompany = async (req, res) => {
//   try {
//     const { name, description, website, location } = req.body;

//     const company = await Company.findByIdAndUpdate(
//       req.params.id,
//       { name, description, website, location },
//       { new: true }
//     );

//     if (!company) {
//       return res.status(404).json({
//         message: "Company not found",
//         success: false,
//       });
//     }

//     return res.status(200).json({
//       message: "Company updated successfully",
//       company,
//       success: true,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Server error",
//       success: false,
//     });
//   }
// };




export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;

    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });
    }

    const exists = await Company.findOne({ name: companyName });
    if (exists) {
      return res.status(400).json({
        message: "Company already exists",
        success: false,
      });
    }

    const company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company registered successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

export const getCompany = async (req, res) => {
  try {
    const companies = await Company.find({ userId: req.id });

    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};
export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;

    let logo;
    if (req.file) {
      const fileUri = getDataUri(req.file);
      const cloudResponse = await cloudinary.uploader.upload(
        fileUri.content
      );
      logo = cloudResponse.secure_url; // 🔥 THIS IS WHAT FRONTEND NEEDS
    }

    const updateData = {
      name,
      description,
      website,
      location,
    };

    if (logo) {
      updateData.logo = logo;
    }

    const company = await Company.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company updated successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};
