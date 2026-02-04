// import React from "react"
// import { Button } from "./ui/button"
// import { Bookmark } from "lucide-react"
// import { Avatar, AvatarImage } from "./ui/avatar"
// import { Badge } from "./ui/badge"
// import { useNavigate } from "react-router-dom"

// // const Job = ({ job }) => {
// //   const navigate = useNavigate()

// //   const daysAgoFunction = (mongodbTime) => {
// //     const createdAt = new Date(mongodbTime)
// //     const currentTime = new Date()
// //     const timeDifference = currentTime - createdAt
// //     return Math.floor(timeDifference / (1000 * 60 * 60 * 24))
// //   }

// //   return (
// //     <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
// //       {/* Top row */}
// //       <div className="flex items-center justify-between">
// //         <p className="text-sm text-gray-500">
// //           {daysAgoFunction(job?.createdAt) === 0
// //             ? "Today"
// //             : `${daysAgoFunction(job?.createdAt)} days ago`}
// //         </p>
// //         <Button variant="outline" className="rounded-full" size="icon">
// //           <Bookmark />
// //         </Button>
// //       </div>

// //       {/* Company info */}
// //       <div className="flex items-center gap-3 my-3">
// //         <Button variant="outline" size="icon" className="p-6">
// //           <Avatar>
// //             <AvatarImage src={job?.company?.logo || "/placeholder.png"} />
// //           </Avatar>
// //         </Button>
// //         <div>
// //           <h1 className="font-medium text-lg">{job?.company?.name}</h1>
// //           <p className="text-sm text-gray-500">India</p>
// //         </div>
// //       </div>

// //       {/* Job info */}
// //       <div>
// //         <h1 className="font-bold text-lg my-2">{job?.title}</h1>
// //         <p className="text-sm text-gray-600 line-clamp-3">
// //           {job?.description}
// //         </p>
// //       </div>

// //       {/* Tags */}
// //       <div className="flex items-center gap-2 mt-4 flex-wrap">
// //         <Badge variant="ghost" className="text-blue-700 font-bold">
// //           {job?.position} Positions
// //         </Badge>
// //         <Badge variant="ghost" className="text-[#F83002] font-bold">
// //           {job?.jobType}
// //         </Badge>
// //         <Badge variant="ghost" className="text-[#7209b7] font-bold">
// //           {job?.salary} LPA
// //         </Badge>
// //       </div>

// //       {/* Actions */}
// //       <div className="flex items-center gap-4 mt-4">
// //         <Button
// //           onClick={() => navigate(`/description/${job?._id}`)}
// //           variant="outline"
// //         >
// //           Details
// //         </Button>
// //         <Button className="bg-[#7209b7] hover:bg-[#5b0aa6]">
// //           Save For Later
// //         </Button>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Job


// // import React from "react";
// // import { Bookmark } from "lucide-react";

// const Job = ({ job }) => {
//   return (
//     <div className="border rounded-lg p-4 w-full bg-white shadow-sm hover:shadow-md transition">
      
//       {/* Company */}
//       <div className="flex items-center gap-3 mb-3">
//         <img
//           src={job?.companyId?.logo}
//           alt={job?.companyId?.name}
//           className="h-12 w-12 rounded object-contain border"
//           onError={(e) => {
//             e.target.src = "https://via.placeholder.com/48";
//           }}
//         />

//         <div>
//           <h3 className="font-semibold text-base">
//             {job?.companyId?.name || "Company Name"}
//           </h3>
//           <p className="text-sm text-gray-500">
//             {job?.location || "Location"}
//           </p>
//         </div>

//         <Bookmark className="ml-auto cursor-pointer text-gray-500 hover:text-black" />
//       </div>

//       {/* Job Title */}
//       <h2 className="font-bold text-lg mb-2">
//         {job?.title}
//       </h2>

//       {/* Description */}
//       <p className="text-sm text-gray-600 line-clamp-3 mb-3">
//         {job?.description}
//       </p>

//       {/* Meta */}
//       <div className="flex flex-wrap gap-2 text-xs text-gray-600">
//         <span className="border px-2 py-1 rounded">
//           💼 {job?.experience || "0-2 Years"}
//         </span>
//         <span className="border px-2 py-1 rounded">
//           💰 {job?.salary || "Not disclosed"}
//         </span>
//         <span className="border px-2 py-1 rounded">
//           🕒 {job?.jobType || "Full Time"}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Job;


import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
    const navigate = useNavigate();
    // const jobId = "lsekdhjgdsnfvsdkjf";

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference/(1000*24*60*60));
    }
    
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button onClick={()=> navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
                <Button className="bg-[#7209b7]">Save For Later</Button>
            </div>
        </div>
    )
}

export default Job