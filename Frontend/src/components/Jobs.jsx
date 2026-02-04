// // // import React from 'react'
// // // import Navbar from './shared/Navbar'
// // // import FilterCard from './FilterCard'
// // // import Job from './Job'

// // // // const jobsArray = [1,2,3,4,5,6,7,8]
// // // const jobsArray = [
// // //   {
// // //     title: "Frontend Developer",
// // //     company: "Google",
// // //     location: "Bangalore, India",
// // //     experience: "0–2 Years",
// // //     salary: "₹6 – 10 LPA",
// // //     type: "Full Time",
// // //     posted: "2 days ago",
// // //     skills: ["React", "Tailwind", "JavaScript"],
// // //   },
// // //   {
// // //     title: "Backend Developer",
// // //     company: "Amazon",
// // //     location: "Hyderabad, India",
// // //     experience: "1–3 Years",
// // //     salary: "₹8 – 14 LPA",
// // //     type: "Full Time",
// // //     posted: "1 day ago",
// // //     skills: ["Node.js", "MongoDB", "Express"],
// // //   },
// // //   {
// // //     title: "Data Scientist",
// // //     company: "Microsoft",
// // //     location: "Remote",
// // //     experience: "2–4 Years",
// // //     salary: "₹12 – 18 LPA",
// // //     type: "Remote",
// // //     posted: "3 days ago",
// // //     skills: ["Python", "ML", "Pandas"],
// // //   },
// // // ]

// // // const Jobs = () => {
// // //   return (
// // //     <div>
// // //       <Navbar />

// // //       <div className="max-w-7xl mx-auto mt-5">
// // //         <div className="flex gap-5">

// // //           {/* Filter */}
// // //           <div className="w-[20%]">
// // //             <FilterCard />
// // //           </div>

// // //           {/* Jobs */}
// // //           {jobsArray.length === 0 ? (
// // //             <span>Job not found</span>
// // //           ) : (
// // //             // <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
// // //             //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // //             //     {jobsArray.map((item, index) => (
// // //             //       <div key={index}>
// // //             //         <Job />
// // //             //       </div>
// // //             //     ))}
// // //             //   </div>
// // //             // </div>
// // //             <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
// // //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
// // //     {jobsArray.map((job, index) => (
// // //       <Job key={index} job={job} />
// // //     ))}
// // //   </div>
// // // </div>

// // //           )}

// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default Jobs


// // // import React from "react"
// // // import Navbar from "./shared/Navbar"
// // // import FilterCard from "./FilterCard"
// // // import Job from "./Job"

// // // const jobsArray = [
// // //   {
// // //     title: "Frontend Developer",
// // //     company: "Google",
// // //     location: "Bangalore, India",
// // //     experience: "0–2 Years",
// // //     salary: "₹6 – 10 LPA",
// // //     posted: "2 days ago",
// // //     skills: ["React", "Tailwind", "JavaScript"],
// // //   },
// // //   {
// // //     title: "Backend Developer",
// // //     company: "Amazon",
// // //     location: "Hyderabad, India",
// // //     experience: "1–3 Years",
// // //     salary: "₹8 – 14 LPA",
// // //     posted: "1 day ago",
// // //     skills: ["Node.js", "MongoDB", "Express"],
// // //   },
// // //   {
// // //     title: "Data Scientist",
// // //     company: "Microsoft",
// // //     location: "Remote",
// // //     experience: "2–4 Years",
// // //     salary: "₹12 – 18 LPA",
// // //     posted: "3 days ago",
// // //     skills: ["Python", "ML", "Pandas"],
// // //   },
// // //   {
// // //     title: "UI/UX Designer",
// // //     company: "Adobe",
// // //     location: "Noida, India",
// // //     experience: "1–3 Years",
// // //     salary: "₹7 – 12 LPA",
// // //     posted: "4 days ago",
// // //     skills: ["Figma", "Prototyping", "UX Research"],
// // //   },
// // //   {
// // //     title: "Full Stack Developer",
// // //     company: "Flipkart",
// // //     location: "Bangalore, India",
// // //     experience: "2–5 Years",
// // //     salary: "₹10 – 18 LPA",
// // //     posted: "1 week ago",
// // //     skills: ["React", "Node.js", "PostgreSQL"],
// // //   },
// // // ]

// // // const Jobs = () => {
// // //   return (
// // //     <div>
// // //       <Navbar />

// // //       <div className="max-w-7xl mx-auto mt-6 px-4 space-y-6">

// // //         {/* Filter Section (Top) */}
// // //         <FilterCard />

// // //         {/* Jobs Section */}
// // //         {jobsArray.length === 0 ? (
// // //           <div className="text-center text-gray-500">
// // //             No jobs found
// // //           </div>
// // //         ) : (
// // //           <div className="h-[75vh] overflow-y-auto pb-6">
// // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
// // //               {jobsArray.map((job, index) => (
// // //                 <Job key={index} job={job} />
// // //               ))}
// // //             </div>
// // //           </div>
// // //         )}

// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default Jobs


// // import React from "react"
// // import Navbar from "./shared/Navbar"
// // import FilterCard from "./FilterCard"
// // import Job from "./Job"

// // const jobsArray = [
// //   {
// //     title: "Frontend Developer",
// //     company: "Google",
// //     location: "Bangalore",
// //     experience: "0–2 Years",
// //     salary: "₹6 – 10 LPA",
// //     posted: "2 days ago",
// //     skills: ["React", "Tailwind", "JavaScript"],
// //   },
// //   {
// //     title: "Backend Developer",
// //     company: "Amazon",
// //     location: "Hyderabad",
// //     experience: "1–3 Years",
// //     salary: "₹8 – 14 LPA",
// //     posted: "1 day ago",
// //     skills: ["Node.js", "MongoDB", "Express"],
// //   },
// //   {
// //     title: "Data Scientist",
// //     company: "Microsoft",
// //     location: "Remote",
// //     experience: "2–4 Years",
// //     salary: "₹12 – 18 LPA",
// //     posted: "3 days ago",
// //     skills: ["Python", "ML", "Pandas"],
// //   },
// //   {
// //     title: "Full Stack Developer",
// //     company: "Flipkart",
// //     location: "Bangalore",
// //     experience: "2–5 Years",
// //     salary: "₹10 – 18 LPA",
// //     posted: "4 days ago",
// //     skills: ["React", "Node.js", "PostgreSQL"],
// //   },
// //   {
// //     title: "UI/UX Designer",
// //     company: "Adobe",
// //     location: "Noida",
// //     experience: "1–3 Years",
// //     salary: "₹7 – 12 LPA",
// //     posted: "5 days ago",
// //     skills: ["Figma", "UX Research", "Prototyping"],
// //   },
// //   {
// //     title: "DevOps Engineer",
// //     company: "Infosys",
// //     location: "Pune",
// //     experience: "2–4 Years",
// //     salary: "₹9 – 15 LPA",
// //     posted: "1 week ago",
// //     skills: ["AWS", "Docker", "CI/CD"],
// //   },
// //   {
// //     title: "Machine Learning Engineer",
// //     company: "Wipro",
// //     location: "Bangalore",
// //     experience: "2–5 Years",
// //     salary: "₹12 – 20 LPA",
// //     posted: "6 days ago",
// //     skills: ["Python", "TensorFlow", "NLP"],
// //   },
// //   {
// //     title: "Mobile App Developer",
// //     company: "Swiggy",
// //     location: "Bangalore",
// //     experience: "1–3 Years",
// //     salary: "₹8 – 13 LPA",
// //     posted: "3 days ago",
// //     skills: ["React Native", "Android", "iOS"],
// //   },
// //   {
// //     title: "QA Automation Engineer",
// //     company: "TCS",
// //     location: "Chennai",
// //     experience: "1–4 Years",
// //     salary: "₹5 – 9 LPA",
// //     posted: "1 week ago",
// //     skills: ["Selenium", "Java", "Testing"],
// //   },
// //   {
// //     title: "Cloud Engineer",
// //     company: "Oracle",
// //     location: "Remote",
// //     experience: "3–6 Years",
// //     salary: "₹14 – 22 LPA",
// //     posted: "2 days ago",
// //     skills: ["Azure", "Cloud Security", "Linux"],
// //   },
// // ]


// // const Jobs = () => {
// //   return (
// //     <div>
// //       <Navbar />

// //       <div className="max-w-7xl mx-auto mt-6 px-4">
// //         <div className="flex gap-6">

// //           {/* Left Filter */}
// //           <div className="w-[22%] hidden md:block">
// //             <FilterCard />
// //           </div>

// //           {/* Jobs */}
// //           <div className="flex-1 h-[85vh] overflow-y-auto">
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
// //               {jobsArray.map((job, index) => (
// //                 <Job key={index} job={job} />
// //               ))}
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Jobs

// import React, { useEffect, useState } from 'react'
// import Navbar from './shared/Navbar'
// import FilterCard from './FilterCard'
// import Job from './Job';
// import { useSelector } from 'react-redux';
// import { motion } from 'framer-motion';

// // const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

// const Jobs = () => {
//     const { allJobs, searchedQuery } = useSelector(store => store.job);
//     const [filterJobs, setFilterJobs] = useState(allJobs);

//     useEffect(() => {
//         if (searchedQuery) {
//             const filteredJobs = allJobs.filter((job) => {
//                 return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
//                     job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
//                     job.location.toLowerCase().includes(searchedQuery.toLowerCase())
//             })
//             setFilterJobs(filteredJobs)
//         } else {
//             setFilterJobs(allJobs)
//         }
//     }, [allJobs, searchedQuery]);

//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-7xl mx-auto mt-5'>
//                 <div className='flex gap-5'>
//                     <div className='w-20%'>
//                         <FilterCard />
//                     </div>
//                     {
//                         filterJobs.length <= 0 ? <span>Job not found</span> : (
//                             <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
//                                 <div className='grid grid-cols-3 gap-4'>
//                                     {
//                                         filterJobs.map((job) => (
//                                             <motion.div
//                                                 initial={{ opacity: 0, x: 100 }}
//                                                 animate={{ opacity: 1, x: 0 }}
//                                                 exit={{ opacity: 0, x: -100 }}
//                                                 transition={{ duration: 0.3 }}
//                                                 key={job?._id}>
//                                                 <Job job={job} />
//                                             </motion.div>
//                                         ))
//                                     }
//                                 </div>
//                             </div>
//                         )
//                     }
//                 </div>
//             </div>


//         </div>
//     )
// }

// export default Jobs

// // import React, { useEffect, useState } from "react";
// // import Navbar from "./shared/Navbar";
// // import FilterCard from "./FilterCard";
// // import Job from "./Job";
// // import { useSelector } from "react-redux";
// // import { motion } from "framer-motion";

// // const Jobs = () => {
// //   const { allJobs, searchedQuery } = useSelector(store => store.job);
// //   const [filterJobs, setFilterJobs] = useState([]);

// //   useEffect(() => {
// //     if (searchedQuery) {
// //       const filtered = allJobs.filter(job =>
// //         job?.title?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
// //         job?.description?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
// //         job?.location?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
// //         job?.companyId?.name?.toLowerCase().includes(searchedQuery.toLowerCase())
// //       );
// //       setFilterJobs(filtered);
// //     } else {
// //       setFilterJobs(allJobs);
// //     }
// //   }, [allJobs, searchedQuery]);

// //   return (
// //     <div>
// //       <Navbar />

// //       <div className="max-w-7xl mx-auto mt-5">
// //         <div className="flex gap-5">

// //           {/* Filter */}
// //           <div className="w-[22%] hidden md:block">
// //             <FilterCard />
// //           </div>

// //           {/* Jobs */}
// //           {filterJobs.length === 0 ? (
// //             <span>Job not found</span>
// //           ) : (
// //             <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
// //                 {filterJobs.map(job => (
// //                   <motion.div
// //                     key={job._id}
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.3 }}
// //                   >
// //                     <Job job={job} />
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Jobs;




// // import React, { useEffect, useState } from "react";
// // import Navbar from "./shared/Navbar";
// // import FilterCard from "./FilterCard";
// // import Job from "./Job";
// // import { useSelector } from "react-redux";
// // import { motion } from "framer-motion";

// // const Jobs = () => {
// //   const { allJobs, searchedQuery } = useSelector(store => store.job);
// //   const [filterJobs, setFilterJobs] = useState([]);

// //   useEffect(() => {
// //     if (searchedQuery) {
// //       const filtered = allJobs.filter(job =>
// //         job?.title?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
// //         job?.description?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
// //         job?.location?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
// //         job?.companyId?.name?.toLowerCase().includes(searchedQuery.toLowerCase())
// //       );
// //       setFilterJobs(filtered);
// //     } else {
// //       setFilterJobs(allJobs);
// //     }
// //   }, [allJobs, searchedQuery]);

// //   return (
// //     <div>
// //       <Navbar />

// //       <div className="max-w-7xl mx-auto mt-5">
// //         <div className="flex gap-5">

// //           {/* Filter */}
// //           <div className="w-[22%] hidden md:block">
// //             <FilterCard />
// //           </div>

// //           {/* Jobs */}
// //           {filterJobs.length === 0 ? (
// //             <span>Job not found</span>
// //           ) : (
// //             <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
// //                 {filterJobs.map(job => (
// //                   <motion.div
// //                     key={job._id}
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.3 }}
// //                   >
// //                     <Job job={job} />
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Jobs;



import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);

    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchedQuery.toLowerCase())
            })
            setFilterJobs(filteredJobs)
        } else {
            setFilterJobs(allJobs)
        }
    }, [allJobs, searchedQuery]);

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex gap-5'>
                    <div className='w-20%'>
                        <FilterCard />
                    </div>
                    {
                        filterJobs.length <= 0 ? <span>Job not found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        filterJobs.map((job) => (
                                            <motion.div
                                                initial={{ opacity: 0, x: 100 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -100 }}
                                                transition={{ duration: 0.3 }}
                                                key={job?._id}>
                                                <Job job={job} />
                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>


        </div>
    )
}

export default Jobs