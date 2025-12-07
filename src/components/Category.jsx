import React, { use, useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeftLong } from "react-icons/fa6";
import Card from './Card';

function Category() {
    const [category, setCategory] = React.useState([]);
    const [slide, setSlide] = useState(0);
    const fetchCategory = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategory(data);
    }

    useEffect(() => {
        fetchCategory();
    }, [])

    const nextSlide = () => {
        if (slide >= category.length - 1) {
            setSlide(0);
        } else {
            setSlide(slide + 6);
        }
    }
    const backSlide = () => {
        if (slide <= 0) {
            setSlide(0);
        } else {
            setSlide(slide - 6);
        }
    }

    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex items-center justify-between my-3'>
                <div className='text-[25px] font-bold'>What's in your mind?</div>
                <div className='flex gap-3'>
                    <div onClick={nextSlide} className='w-[30px] h-[30px] cursor-pointer bg-[#e2e2e7] rounded-full flex items-center justify-center'><FaArrowRight /></div>
                    <div onClick={backSlide} className=' w-[30px] h-[30px] cursor-pointer bg-[#e2e2e7] rounded-full flex items-center justify-center'><FaArrowLeftLong /></div>
                </div>

            </div>
            <div className='flex gap-5 my-5 border overflow-hidden  border-red-300'>
                {
                    category.map((cat, index) => {
                        return (
                            <div style={{
                                transform: `translate(-${slide * 100}%)`
                            }} className='w-[150px] h-[150px] duration-700 flex text-6xl items-center justify-center shrink-0 bg-amber-50 rounded-full'>
                                <div key={index}>{cat.id}</div>
                            </div>

                        )
                    })
                }
            </div>
            <div className='flex gap-3 overflow-hidden'>
                {
                    category.map((cat, index) => {
                        return (
                             <Card {...cat} key={index} />
                        )
                    })
                }
               
            </div>
        </div>
    )
}

export default Category
