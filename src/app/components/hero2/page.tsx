import Image from 'next/image'
import React from 'react'

const Hero2 = () => {
  return (
    <div className='md:h-[100vh] bg-[#E7EB5D] border-black border-t-2 w-full md:grid md:grid-cols-2 md:grid-rows-2 md:pt-5 flex flex-col p-5'>
        <div>
          <h1 className='md:text-5xl font-medium md:pl-16 md:pr-5 md:pt-5'>Seminar Morality</h1>
          <p className='md:text-xl md:pr-5 md:pl-16 md:pt-5'>With behavior of our citizen is immoral. Moral + can make a change of a behavior citizen.</p>
        </div>
        <div className='md:relative rounded-xl m-5'>
          <Image src="/dc.jpg" alt='deddy' fill className='rounded-xl opacity-85 hidden md:block'/>
        </div>
        <div>
          <h1 className='md:text-5xl font-medium md:pl-16 md:pr-5 md:pt-5'>Education</h1>
          <p className='md:text-xl md:pr-5 md:pl-16 md:pt-5'>Our young citizen need to learn about education, specially sex education. We hope that we spread sex education to our young citizen, it will pretend pregnancy at an early age</p>
        </div>
        <div className='md:relative rounded-xl m-5'>
        <Image src="/boyke.webp" alt='deddy' fill className='rounded-xl opacity-85 hidden md:block'/>
        </div>
    </div>
  )
}

export default Hero2