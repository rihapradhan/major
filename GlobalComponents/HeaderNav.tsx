import Link from 'next/link';
import React, { useState } from 'react'
import { HeaderNavBar } from '@/DataSource/StaticData';
import { FaBars } from 'react-icons/fa';
import { Cn } from '../lib/Helper';

const HeaderNav = () => {
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <nav className='  mx-auto w-full md:border-b-2 border-[#D9D9D9] flex justify-end '>
            <div onClick={() => { setToggleNav(!toggleNav) }} className="absolute md:hidden flex cursor-pointer top-[70px] left-5">
                <FaBars className='' />
            </div>
            {
                <ul className={Cn(`flex md:flex-row flex-col  ml-auto  items-start w-full 
                           justify-center transition-all duration-500 overflow-hidden  ${toggleNav ? "max-h-[100000px]" : "max-h-0 md:max-h-[10000px]"}`)}>
                    {
                        HeaderNavBar?.map((item, index) => {
                            return (
                                <li className='lg:mx-1 hover:bg-gray-50 
                                            lg:hover:bg-transparent    md:w-auto w-full' key={index}>
                                    <Link className='px-[8px] border-b-2 border-transparent lg:w-auto w-full hover:border-b-2 hover:border-primary block py-[15px]
                                     links h-full hover:text-primary  lg:py-[7px] text-[14px] uppercase lg:text-[16px] transition-all'
                                        href={item?.link}>{item?.name}</Link>
                                </li>
                            )
                        })
                    }

                </ul>
            }
        </nav>
    )
}

export default HeaderNav