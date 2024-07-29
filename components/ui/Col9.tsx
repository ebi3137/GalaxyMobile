import React from 'react'
import data from "@/data/dataApp.json"
import Link from 'next/link'
import Image from 'next/image'

const Col9 = () => {
  return (
    <div className='container max-w-[1336px] mx-auto lg:px-4 2xl:px-0'>
      <div className=' gap-4 lg:flex-row lg:flex grid grid-cols-1 px-5 lg:px-0'>
        {data.col9.map((col9)=>(
          <Link href={col9.path}>
            <Image src={col9.image} alt={col9.label} title={col9.label} width={820} height={328} className='rounded-2xl'/>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Col9