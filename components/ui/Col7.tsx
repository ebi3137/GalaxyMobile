import React from 'react'
import data from "@/data/dataApp.json"
import Link from 'next/link'
import Image from 'next/image'

const Col7 = () => {
  return (
    <div className='container max-w-[1336px] mx-auto lg:px-4 2xl:px-0'>
      <div className=' gap-4 lg:flex-row lg:flex grid grid-cols-2 px-5 lg:px-0'>
        {data.col7.map((col7)=>(
          <Link href={col7.path}>
            <Image src={col7.image} alt={col7.label} title={col7.label} width={400} height={300} className='rounded-2xl'/>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Col7