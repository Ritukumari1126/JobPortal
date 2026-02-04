// import React, { useState } from "react";
// import Navbar from "../shared/Navbar";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";
// import axios from "axios";
// import { toast } from "sonner";

// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setLoading, setUser } from "../../redux/authSlice";
// import  store  from "../../redux/store";
// import { Loader2 } from "lucide-react";

// const Login = () => {
//   const {loading} = useSelector(store=>store.auth)
//   const navigate = useNavigate();
//   const dispatch = useDispatch()
//   const USER_API_END_POINT = "http://localhost:3000/api/v1/user";


//   const [input, setInput] = useState({
//     email: "",
//     password: "",
//     role: "student",
//   });

//   const handleChange = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       dispatch(setLoading(true))
//       const res = await axios.post(
//         `${USER_API_END_POINT}/login`,
//         input,
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         }
//       );

//       if (res.data.success) {
//         dispatch(setUser(res.data.user))
//         toast.success(res.data.message);
//         navigate("/");
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Signup failed");
//     }
//     finally{
//       dispatch(setLoading(false))
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       <div className="flex justify-center mt-12 px-4">
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md space-y-5"
//         >
//           <h1 className="text-2xl font-semibold text-center text-gray-800">
//             Login to your account
//           </h1>

//           {/* Email */}
//           <div>
//             <Label className="text-gray-700">Email</Label>
//             <Input
//               name="email"
//               type="email"
//               value={input.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="mt-1"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <Label className="text-gray-700">Password</Label>
//             <Input
//               name="password"
//               type="password"
//               value={input.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//               className="mt-1"
//             />
//           </div>

//           {/* Role */}
//           <div>
//             <Label className="text-gray-700">Role</Label>
//             <select
//               name="role"
//               value={input.role}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
//             >
//               <option value="student">Student</option>
//               <option value="recruiter">Recruiter</option>
//             </select>
//           </div>
//           {
//             loading ? <Button className='w-full my-4'><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please Wait..</Button> :
//             <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
//             Login
//           </Button>
//           }
          

//           <p className="text-sm text-center text-gray-600">
//             Don’t have an account?{" "}
//             <Link to="/signup" className="text-blue-600 hover:underline">
//               Sign Up
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

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
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const { loading,user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
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
                    <h1 className='font-bold text-xl mb-5'>Login</h1>
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
                    </div>
                    {
                        loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Login</Button>
                    }
                    <span className='text-sm'>Don't have an account? <Link to="/signup" className='text-blue-600'>Signup</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login