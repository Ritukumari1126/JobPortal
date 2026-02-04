// // // import React, { useState } from "react";
// // // import Navbar from "../shared/Navbar";
// // // import { Button } from "../ui/button";
// // // import { Input } from "../ui/input";
// // // import { Label } from "../ui/label";
// // // import axios from "axios";
// // // import { toast } from "react-toastify";
// // // import { Link, useNavigate } from "react-router-dom";

// // // const USER_API_END_POINT = "http://localhost:3000/api/v1/user";

// // // const Signup = () => {
// // //   const [input, setInput] = useState({
// // //     fullname: "",
// // //     email: "",
// // //     phoneNumber: "",
// // //     password: "",
// // //     role: "student",
// // //     profile: null,
// // //   });

// // //   const navigate = useNavigate();

// // //   const handleChange = (e) => {
// // //     setInput({ ...input, [e.target.name]: e.target.value });
// // //   };

// // //   const handleFileChange = (e) => {
// // //     setInput({ ...input, profile: e.target.files[0] });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (
// // //       !input.fullname ||
// // //       !input.email ||
// // //       !input.phoneNumber ||
// // //       !input.password
// // //     ) {
// // //       toast.error("All fields are required");
// // //       return;
// // //     }

// // //     const formData = new FormData();
// // //     formData.append("fullname", input.fullname);
// // //     formData.append("email", input.email);
// // //     formData.append("phoneNumber", input.phoneNumber);
// // //     formData.append("password", input.password);
// // //     formData.append("role", input.role);

// // //     if (input.profile) {
// // //       formData.append("file", input.profile);
// // //     }

// // //     try {
// // //       const res = await axios.post(
// // //         `${USER_API_END_POINT}/register`,
// // //         formData,
// // //         {
// // //           headers: { "Content-Type": "multipart/form-data" },
// // //           withCredentials: true,
// // //         }
// // //       );

// // //       if (res.data.success) {
// // //         toast.success(res.data.message);
// // //         navigate("/login");
// // //       }
// // //     } catch (error) {
// // //       toast.error(error.response?.data?.message || "Signup failed");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       <Navbar />

// // //       <div className="flex justify-center mt-12 px-4">
// // //         <form
// // //           onSubmit={handleSubmit}
// // //           className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md space-y-5"
// // //         >
// // //           <h1 className="text-2xl font-semibold text-center text-gray-800">
// // //             Create Account
// // //           </h1>

// // //           <div>
// // //             <Label>Full Name</Label>
// // //             <Input name="fullname" value={input.fullname} onChange={handleChange} />
// // //           </div>

// // //           <div>
// // //             <Label>Email</Label>
// // //             <Input name="email" type="email" value={input.email} onChange={handleChange} />
// // //           </div>

// // //           <div>
// // //             <Label>Phone Number</Label>
// // //             <Input name="phoneNumber" value={input.phoneNumber} onChange={handleChange} />
// // //           </div>

// // //           <div>
// // //             <Label>Password</Label>
// // //             <Input name="password" type="password" value={input.password} onChange={handleChange} />
// // //           </div>

// // //           <div className="grid grid-cols-2 gap-4">
// // //             <div>
// // //               <Label>Role</Label>
// // //               <select
// // //                 name="role"
// // //                 value={input.role}
// // //                 onChange={handleChange}
// // //                 className="mt-1 w-full border rounded-md px-3 py-2"
// // //               >
// // //                 <option value="student">Student</option>
// // //                 <option value="recruiter">Recruiter</option>
// // //               </select>
// // //             </div>

// // //             <div>
// // //               <Label>Profile Image</Label>
// // //               <Input type="file" accept="image/*" onChange={handleFileChange} />
// // //             </div>
// // //           </div>

// // //           <Button className="w-full bg-blue-600 hover:bg-blue-700">
// // //             Sign Up
// // //           </Button>

// // //           <p className="text-sm text-center">
// // //             Already have an account?{" "}
// // //             <Link to="/login" className="text-blue-600 font-medium">
// // //               Login
// // //             </Link>
// // //           </p>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Signup;

// // import React, { useState } from "react";
// // import Navbar from "../shared/Navbar";
// // import { Button } from "../ui/button";
// // import { Input } from "../ui/input";
// // import { Label } from "../ui/label";
// // import axios from "axios";
// // import { toast } from "react-toastify";
// // import { Link, useNavigate } from "react-router-dom";

// // const USER_API_END_POINT = "http://localhost:3000/api/v1/user";

// // const Signup = () => {
// //   const [input, setInput] = useState({
// //     fullname: "",
// //     email: "",
// //     phoneNumber: "",
// //     password: "",
// //     role: "student",
// //     profile: null,
// //   });

// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setInput({ ...input, [e.target.name]: e.target.value });
// //   };

// //   const handleFileChange = (e) => {
// //     setInput({ ...input, profile: e.target.files[0] });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!input.fullname || !input.email || !input.phoneNumber || !input.password) {
// //       toast.error("All fields are required");
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append("fullname", input.fullname);
// //     formData.append("email", input.email);
// //     formData.append("phoneNumber", input.phoneNumber);
// //     formData.append("password", input.password);
// //     formData.append("role", input.role);

// //     if (input.profile) {
// //       formData.append("file", input.profile); // Must match multer field name
// //     }

// //     try {
// //       const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
// //         headers: { "Content-Type": "multipart/form-data" },
// //         withCredentials: true,
// //       });

// //       if (res.data.success) {
// //         toast.success(res.data.message);
// //         navigate("/login");
// //       }
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || "Signup failed");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <Navbar />

// //       <div className="flex justify-center mt-12 px-4">
// //         <form
// //           onSubmit={handleSubmit}
// //           className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md space-y-5"
// //         >
// //           <h1 className="text-2xl font-semibold text-center text-gray-800">Create Account</h1>

// //           <div>
// //             <Label>Full Name</Label>
// //             <Input name="fullname" value={input.fullname} onChange={handleChange} />
// //           </div>

// //           <div>
// //             <Label>Email</Label>
// //             <Input name="email" type="email" value={input.email} onChange={handleChange} />
// //           </div>

// //           <div>
// //             <Label>Phone Number</Label>
// //             <Input name="phoneNumber" value={input.phoneNumber} onChange={handleChange} />
// //           </div>

// //           <div>
// //             <Label>Password</Label>
// //             <Input name="password" type="password" value={input.password} onChange={handleChange} />
// //           </div>

// //           <div className="grid grid-cols-2 gap-4">
// //             <div>
// //               <Label>Role</Label>
// //               <select
// //                 name="role"
// //                 value={input.role}
// //                 onChange={handleChange}
// //                 className="mt-1 w-full border rounded-md px-3 py-2"
// //               >
// //                 <option value="student">Student</option>
// //                 <option value="recruiter">Recruiter</option>
// //               </select>
// //             </div>

// //             <div>
// //               <Label>Profile Image</Label>
// //               <Input type="file" accept="image/*" onChange={handleFileChange} />
// //             </div>
// //           </div>

// //           <Button className="w-full bg-blue-600 hover:bg-blue-700">Sign Up</Button>

// //           <p className="text-sm text-center">
// //             Already have an account?{" "}
// //             <Link to="/login" className="text-blue-600 font-medium">Login</Link>
// //           </p>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Signup;


// import React, { useEffect, useState } from 'react'
// import Navbar from '../shared/Navbar'
// import { Label } from '../ui/label'
// import { Input } from '../ui/input'
// import { RadioGroup } from '../ui/radio-group'
// import { Button } from '../ui/button'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { USER_API_END_POINT } from '@/utils/constant'
// import { toast } from 'sonner'
// import { useDispatch, useSelector } from 'react-redux'
// import { setLoading } from '@/redux/authSlice'
// import { Loader2 } from 'lucide-react'

// const Signup = () => {

//     const [input, setInput] = useState({
//         fullname: "",
//         email: "",
//         phoneNumber: "",
//         password: "",
//         role: "",
//         file: ""
//     });
//     const {loading,user} = useSelector(store=>store.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     }
//     const changeFileHandler = (e) => {
//         setInput({ ...input, file: e.target.files?.[0] });
//     }
//     const submitHandler = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();    //formdata object
//         formData.append("fullname", input.fullname);
//         formData.append("email", input.email);
//         formData.append("phoneNumber", input.phoneNumber);
//         formData.append("password", input.password);
//         formData.append("role", input.role);
//         if (input.file) {
//             formData.append("file", input.file);
//         }

//         try {
//             dispatch(setLoading(true));
//             const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
//                 headers: { 'Content-Type': "multipart/form-data" },
//                 withCredentials: true,
//             });
//             if (res.data.success) {
//                 navigate("/login");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         } finally{
//             dispatch(setLoading(false));
//         }
//     }

//     useEffect(()=>{
//         if(user){
//             navigate("/");
//         }
//     },[])
//     return (
//         <div>
//             <Navbar />
//             <div className='flex items-center justify-center max-w-7xl mx-auto'>
//                 <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
//                     <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
//                     <div className='my-2'>
//                         <Label>Full Name</Label>
//                         <Input
//                             type="text"
//                             value={input.fullname}
//                             name="fullname"
//                             onChange={changeEventHandler}
//                             placeholder="patel"
//                         />
//                     </div>
//                     <div className='my-2'>
//                         <Label>Email</Label>
//                         <Input
//                             type="email"
//                             value={input.email}
//                             name="email"
//                             onChange={changeEventHandler}
//                             placeholder="patel@gmail.com"
//                         />
//                     </div>
//                     <div className='my-2'>
//                         <Label>Phone Number</Label>
//                         <Input
//                             type="text"
//                             value={input.phoneNumber}
//                             name="phoneNumber"
//                             onChange={changeEventHandler}
//                             placeholder="8080808080"
//                         />
//                     </div>
//                     <div className='my-2'>
//                         <Label>Password</Label>
//                         <Input
//                             type="password"
//                             value={input.password}
//                             name="password"
//                             onChange={changeEventHandler}
//                             placeholder="password"
//                         />
//                     </div>
//                     <div className='flex items-center justify-between'>
//                         <RadioGroup className="flex items-center gap-4 my-5">
//                             <div className="flex items-center space-x-2">
//                                 <Input
//                                     type="radio"
//                                     name="role"
//                                     value="student"
//                                     checked={input.role === 'student'}
//                                     onChange={changeEventHandler}
//                                     className="cursor-pointer"
//                                 />
//                                 <Label htmlFor="r1">Student</Label>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <Input
//                                     type="radio"
//                                     name="role"
//                                     value="recruiter"
//                                     checked={input.role === 'recruiter'}
//                                     onChange={changeEventHandler}
//                                     className="cursor-pointer"
//                                 />
//                                 <Label htmlFor="r2">Recruiter</Label>
//                             </div>
//                         </RadioGroup>
//                         <div className='flex items-center gap-2'>
//                             <Label>Profile</Label>
//                             <Input
//                                 accept="image/*"
//                                 type="file"
//                                 onChange={changeFileHandler}
//                                 className="cursor-pointer"
//                             />
//                         </div>
//                     </div>
//                     {
//                         loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Signup</Button>
//                     }
//                     <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup 

import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Signup = () => {

    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });
    const {loading,user} = useSelector(store=>store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();    //formdata object
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally{
            dispatch(setLoading(false));
        }
    }

    useEffect(()=>{
        if(user){
            navigate("/");
        }
    },[])
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                    <div className='my-2'>
                        <Label>Full Name</Label>
                        <Input
                            type="text"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                            placeholder="patel"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="patel@gmail.com"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input
                            type="text"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                            placeholder="8080808080"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="patel@gmail.com"
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className='flex items-center gap-2'>
                            <Label>Profile</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                    {
                        loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Signup</Button>
                    }
                    <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Signup