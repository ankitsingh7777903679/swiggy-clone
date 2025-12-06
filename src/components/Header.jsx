import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
    const [toggle, setToggle] = useState(false);
    const sideMenu = () => {
        setToggle(!toggle);
    }
    const links = [
        {
            icon: <IoIosSearch />,
            name: 'Search'
        },
        {
            icon: <CiDiscount1 />,
            name: 'Offers',
            sup: 'New'
        },
        {
            icon: <IoHelpBuoyOutline />,
            name: 'Help'
        },
        {
            icon: <FaRegUser />,
            name: 'Sign In'
        },
        {
            icon: <IoCartOutline />,
            name: 'Cart',
            sup: '3'
        }
    ]
    return (
        <>
            <div className='black-overlay w-full h-full fixed duration-500 z-1' onClick={sideMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? 'visible' : 'hidden'
            }}>
                <div onClick={(e) => e.stopPropagation()} className='w-[400px] bg-white absolute h-full duration-300'
                    style={{
                        left: toggle ? '0%' : '-100%'
                    }}
                ></div>
            </div>
            <header className='p-[15px] shadow-xl'>
                <div className='max-w-[1200px] mx-auto flex items-center'>
                    <div className='w-[70px]'>
                        <img src="images/logo.jpg" className='w-full' alt="Logo" />
                    </div>

                    <div className=''>
                        <span className='font-bold border-b-2 border-[black]'>Ratanada</span>
                        Jodhpur, Rajasthan, India <RxCaretDown fontSize={25} className='cursor-pointer font-bold inline text-[0.9rem ] text-[#fc8019]'
                            onClick={sideMenu}
                        />
                    </div>

                    <nav className='flex list-none gap-10 ml-auto font-bold text-[18px]'>
                        {
                            links.map((link, index) => {
                                return (
                                    <li key={index} className='flex hover:text-[#fc8019] items-center gap-2'>
                                        {link.icon}
                                        {link.name}
                                        <sup>{link.sup}</sup>
                                        
                                    </li>
                                )
                            })
                        }


                    </nav>
                </div>
            </header>
        </>

    )
}
