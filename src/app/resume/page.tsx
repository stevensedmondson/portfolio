import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Resume() {
  return (
    <div>
      <h1 className='text-2xl uppercase pt-4'>Resume</h1>
      <div className='flex justify-around p-10'>
        <Link href='https://www.linkedin.com/in/stevensedmondson' target='_blank'>
          <Image 
            src='/linkedin.svg'
            alt=''
            width={60}
            height={60}
          >
          </Image>
        </Link>
        <Link href='https://github.com/stevensedmondson' target='_blank'>
          <Image 
            src='/github.svg'
            alt=''
            width={60}
            height={60}
          >
          </Image>
        </Link>
      </div>    
      <div className='w-full p-2 mb-4'>
        <Image
          src='/resume.png'
          alt=''
          width={1140}
          height={200}
        >
        </Image>              
      </div>
    </div>
  )
}