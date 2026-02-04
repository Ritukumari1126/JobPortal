// import React, { useEffect, useState } from 'react'
// import Navbar from '../shared/Navbar'
// import { Button } from '../ui/button'
// import { ArrowLeft, Loader2 } from 'lucide-react'
// import { Label } from '../ui/label'
// import { Input } from '../ui/input'
// import axios from 'axios'
// import { COMPANY_API_END_POINT } from '@/utils/constant'
// import { useNavigate, useParams } from 'react-router-dom'
// import { toast } from 'sonner'
// import { useSelector } from 'react-redux'
// import useGetCompanyById from '@/hooks/useGetCompanyById'

// const CompanySetup = () => {
//     const params = useParams();
//     useGetCompanyById(params.id);
//     const [input, setInput] = useState({
//         name: "",
//         description: "",
//         website: "",
//         location: "",
//         file: null
//     });
//     const {singleCompany} = useSelector(store=>store.company);
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     }

//     const changeFileHandler = (e) => {
//         const file = e.target.files?.[0];
//         setInput({ ...input, file });
//     }

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append("name", input.name);
//         formData.append("description", input.description);
//         formData.append("website", input.website);
//         formData.append("location", input.location);
//         if (input.file) {
//             formData.append("file", input.file);
//         }
//         try {
//             setLoading(true);
//             const res = await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 },
//                 withCredentials: true
//             });
//             if (res.data.success) {
//                 toast.success(res.data.message);
//                 navigate("/admin/companies");
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         } finally {
//             setLoading(false);
//         }
//     }

//     useEffect(() => {
//         setInput({
//             name: singleCompany.name || "",
//             description: singleCompany.description || "",
//             website: singleCompany.website || "",
//             location: singleCompany.location || "",
//             file: singleCompany.file || null
//         })
//     },[singleCompany]);

//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-xl mx-auto my-10'>
//                 <form onSubmit={submitHandler}>
//                     <div className='flex items-center gap-5 p-8'>
//                         <Button onClick={() => navigate("/admin/companies")} variant="outline" className="flex items-center gap-2 text-gray-500 font-semibold">
//                             <ArrowLeft />
//                             <span>Back</span>
//                         </Button>
//                         <h1 className='font-bold text-xl'>Company Setup</h1>
//                     </div>
//                     <div className='grid grid-cols-2 gap-4'>
//                         <div>
//                             <Label>Company Name</Label>
//                             <Input
//                                 type="text"
//                                 name="name"
//                                 value={input.name}
//                                 onChange={changeEventHandler}
//                             />
//                         </div>
//                         <div>
//                             <Label>Description</Label>
//                             <Input
//                                 type="text"
//                                 name="description"
//                                 value={input.description}
//                                 onChange={changeEventHandler}
//                             />
//                         </div>
//                         <div>
//                             <Label>Website</Label>
//                             <Input
//                                 type="text"
//                                 name="website"
//                                 value={input.website}
//                                 onChange={changeEventHandler}
//                             />
//                         </div>
//                         <div>
//                             <Label>Location</Label>
//                             <Input
//                                 type="text"
//                                 name="location"
//                                 value={input.location}
//                                 onChange={changeEventHandler}
//                             />
//                         </div>
//                         <div>
//                             <Label>Logo</Label>
//                             <Input
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={changeFileHandler}
//                             />
//                         </div>
//                     </div>
//                     {
//                         loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Update</Button>
//                     }
//                 </form>
//             </div>

//         </div>
//     )
// }

// export default CompanySetup

import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
import useGetCompanyById from '@/hooks/useGetCompanyById'

const CompanySetup = () => {
    const params = useParams()
    useGetCompanyById(params.id)

    const { singleCompany } = useSelector(store => store.company)

    const [input, setInput] = useState({
        name: "",
        description: "",
        website: "",
        location: "",
        file: null
    })

    const [preview, setPreview] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const changeFileHandler = (e) => {
        const file = e.target.files[0]
        if (file) {
            setInput({ ...input, file })
            setPreview(URL.createObjectURL(file)) // 👈 preview
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("name", input.name)
        formData.append("description", input.description)
        formData.append("website", input.website)
        formData.append("location", input.location)
        if (input.file) {
            formData.append("file", input.file)
        }

        try {
            setLoading(true)
            const res = await axios.put(
                `${COMPANY_API_END_POINT}/update/${params.id}`,
                formData,
                { withCredentials: true }
            )

            if (res.data.success) {
                toast.success(res.data.message)
                navigate("/admin/companies")
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Update failed")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (singleCompany) {
            setInput({
                name: singleCompany.name || "",
                description: singleCompany.description || "",
                website: singleCompany.website || "",
                location: singleCompany.location || "",
                file: null
            })

            // 👇 backend image URL
            if (singleCompany.logo) {
                setPreview(singleCompany.logo)
            }
        }
    }, [singleCompany])

    return (
        <div>
            <Navbar />

            <div className='max-w-xl mx-auto my-10'>
                <form onSubmit={submitHandler}>
                    <div className='flex items-center gap-5 p-8'>
                        <Button
                            type="button"
                            onClick={() => navigate("/admin/companies")}
                            variant="outline"
                            className="flex items-center gap-2"
                        >
                            <ArrowLeft />
                            Back
                        </Button>
                        <h1 className='font-bold text-xl'>Company Setup</h1>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <Label>Company Name</Label>
                            <Input name="name" value={input.name} onChange={changeEventHandler} />
                        </div>

                        <div>
                            <Label>Description</Label>
                            <Input name="description" value={input.description} onChange={changeEventHandler} />
                        </div>

                        <div>
                            <Label>Website</Label>
                            <Input name="website" value={input.website} onChange={changeEventHandler} />
                        </div>

                        <div>
                            <Label>Location</Label>
                            <Input name="location" value={input.location} onChange={changeEventHandler} />
                        </div>

                        <div className="col-span-2">
                            <Label>Company Logo</Label>
                            <Input type="file" accept="image/*" onChange={changeFileHandler} />
                        </div>

                        {/* 👇 IMAGE PREVIEW */}
                        {preview && (
                            <div className="col-span-2 flex justify-center mt-4">
                                <img
                                    src={preview}
                                    alt="logo-preview"
                                    className="h-28 w-28 object-cover rounded border"
                                />
                            </div>
                        )}
                    </div>

                    <Button type="submit" className="w-full my-4" disabled={loading}>
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Update
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default CompanySetup
