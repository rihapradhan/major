"use client"

import React, { useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { AccountDataTypes } from '@/DataSource/Types'
import FormErrors from '@/Components/UiComponent/FormErrors';
import ReCAPTCHA from "react-google-recaptcha";
import InputBox from '@/Components/Ui/InputBox'
import { toast } from 'react-toastify'
import { Button } from '@/Components/Ui/Button'
import { schema } from '@/Components/lib/FormSchema'

const MainForm = () => {



    const { register, handleSubmit, formState: { errors }, reset } = useForm<AccountDataTypes>({ resolver: zodResolver(schema) })
    const captcha = useRef<ReCAPTCHA>(null)

    const onSubmitForm: SubmitHandler<AccountDataTypes> = async (data) => {

        if (data?.password !== data?.confirmpassword) return toast.warning("Passwords do not match");
        console.log(data)
        reset()
    }


    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit(onSubmitForm)} action="" className='w-full flex flex-col  gap-[21px]'>
                <div className="w-full flex items-center md:flex-row flex-col gap-[20px] md:gap-[50px]">
                    <div className="w-full">
                        <InputBox type="text" {...register("firstname")} name='firstname' className='' label='First Name' htmlfor='First Name' />
                        {
                            errors && <FormErrors message={errors?.firstname?.message} />
                        }
                    </div>
                    <div className="w-full">
                        <InputBox type="text" {...register("lastname")} name='lastname' className='' label='Last Name' htmlfor='Last Name' />
                        {
                            errors && <FormErrors message={errors?.lastname?.message} />
                        }
                    </div>
                </div>
                <div className="w-full flex items-center md:flex-row flex-col gap-[20px] md:gap-[50px]">
                    <div className="w-full">
                        <InputBox type="email"  {...register("email")} name='email' className='' label='Email' htmlfor='Email' />
                        {
                            errors && <FormErrors message={errors?.email?.message} />
                        }
                    </div>
                    <div className="w-full">
                        <InputBox type="number"  {...register("phone")} name='phone' className='' label='Number' htmlfor='Number' />
                        {
                            errors && <FormErrors message={errors?.phone?.message} />
                        }
                    </div>
                </div>
                <div className="w-full flex items-center md:flex-row flex-col gap-[20px] md:gap-[50px]">
                    <div className="w-full">
                        <InputBox type="password"  {...register("password")} name='password' className='' label='Password' htmlfor='Password' />
                        {
                            errors && <FormErrors message={errors?.password?.message} />
                        }
                    </div>
                    <div className="w-full">
                        <InputBox type="password"  {...register("confirmpassword")} name='confirmpassword' className='' label='Confirm Password' htmlfor='Confirm Password' />
                        {
                            errors && <FormErrors message={errors?.confirmpassword?.message} />
                        }
                    </div>
                </div>

                <Button type='submit' className='flex mt-8 gap-2 rounded-full mx-auto '>
                    <span className="text-white text-base !text-[14px] font-normal font-['Inter'] leading-tight">Submit</span>
                    <FaArrowRight className='text-5 text-white' />
                </Button>
            </form>
        </div>
    )
}

export default MainForm