"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { HeaderNavIcon } from '@/DataSource/StaticData';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import SiteLogo from '../../Assests/Home/logo.png'
const TopHeader = () => {
    const [checkInputFocus, setCheckInputFocus] = useState(false)
    const [search, setSearch] = useState<string>("");
    const router = useRouter();



    return (
        <div className='w-full   border-b-2 border-primary  py-2 md:py-3'>
            <div className="flex w-[90%] mx-auto md:flex-row flex-col gap-2 items-center  justify-end">
                <Link href={'/'} className=" w-full md:w-[40%]">
                    <Image src={SiteLogo} alt='site-logo' className='w-[70px] cursor-pointer mx-auto md:mx-0 h-auto' />
                </Link>
                <div className="flex flex-1 w-full  mx-auto  justify-end gap-[15px]">
                    <div className="flex items-center relative h-full w-full md:w-[250px]">

                        <input onFocus={() => setCheckInputFocus(true)} onBlur={() => setCheckInputFocus(false)}
                            value={search} onChange={(e) => setSearch(e.target.value)} type="search"
                            className='border pl-10 py-2 focus:outline-none placeholder:text-[14px] 
                            pr-4 border-input_border_color text-[14px] h-full w-full' placeholder='Search' />
                        <FaSearch className='absolute text-gray-500 left-[7px] cursor-pointer' />
                    </div>
                    <div className='flex items-center gap-2'>
                        {
                            HeaderNavIcon?.map((item, index) => {
                                if (item?.link.toLowerCase() === '/language') return (
                                    <div key={index} className='flex group items-center gap-[1px]'>
                                        <span className='text-[19px] transition-all text-gray-400 cursor-pointer '>{item?.icon}</span>
                                        <FaChevronDown className='text-[10px] text-gray-400  ' />
                                        <div style={{ boxShadow: '1px 1px  10px #EEEEEE' }} className="absolute w-[100px] group-hover:flex  bg-white  hidden flex-col gap-2 items-start  py-3 bottom-[2px] right-10">
                                            <button className='text-[12px] hover:bg-gray-100 font-["Roboto"] text-text pl-2 w-full text-left py-[3px]'>English</button>
                                            <button className='text-[12px] hover:bg-gray-100 font-["Roboto"] text-text pl-2 w-full text-left py-[3px]'>German</button>
                                        </div>
                                    </div>
                                )
                                return (
                                    <Link href={item?.link} key={index} className='text-[19px] 
                                     transition-all text-gray-400 cursor-pointer '>{item?.icon}</Link>
                                )
                            })
                        }
                    </div>

                </div>
            </div>

        </div>
    )
}

export default TopHeader