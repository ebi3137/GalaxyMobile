import React from 'react'
import data from "@/data/dataApp.json"
import Link from 'next/link'
import Image from 'next/image'

const Col14 = () => {
  return (
    <div className='container max-w-[1336px] mx-auto lg:px-4 2xl:px-0'>
      <div className=' gap-4 lg:flex-row lg:flex grid grid-cols-1 px-5 lg:px-0'>
        {data.col14.map((col14)=>(
          <Link key={col14.label} href={col14.path}>
            <Image src={col14.image} alt={col14.label} title={col14.label} width={820} height={328} unoptimized className='rounded-2xl'/>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Col14