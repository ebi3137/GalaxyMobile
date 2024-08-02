import React from 'react'
import data from "@/data/dataApp.json"
import Link from "next/link"
import Image from "next/image"

const Col16
 = () => {
  return (
    <div className="container max-w-[1336px] mx-auto lg:px-4 2xl:px-0 px-5">
        <div className='rounded-2xl bg-gradient-to-l from-sky-800 to-sky-500 justify-between flex gap-5 lg:gap-0 flex-col lg:flex-row py-3 px-4 mt-3 items-center'>
            <Link href="/">
            <span className="text-white text-3xl font-black px-5">GalaxyClub</span>
            </Link>
            <div className='flex flex-col lg:flex-row gap-2'>
                {data.col16.map((col16)=>(
                    <Link key={col16.label} href={col16.path} className='flex bg-white rounded-lg items-center gap-2 p-0.5 pr-4'>
                        <Image src={col16.svg} width={20} height={20} alt={col16.label} />
                        <span className='text-xs'>{col16.label}</span>
                        <Image src={col16.image} width={168} height={60} alt={col16.label} className='rounded-2xl h-16 object-cover'/>
                    </Link>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Col16
