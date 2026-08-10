import React from 'react'
import EmailForm from './EmailForm'
import Image from 'next/image'
import IfinitySlider from '../../ui/infinitySlider'
import { contactData } from './contact-data'

const Contact = () => {
  return (
    <section  id='contact' className="my-20 lg:my-30   ">

            <div className='w-full container mx-auto px-2'>
                <div className='flex w-full flex-col justify-center items-center'>
                <h1 className='text-center text-6xl font-medium text-c2 max-xl:text-5xl max-lg:text-4xl max-md:text-3xl '>Have an Awsome Project <br className='max-sm:hidden'/> Idea? <span className='text-c1'>Let’s Discuss</span></h1>
            </div>

            <div className='flex justify-center items-center px-10 max-sm:px-5'>
                <EmailForm />
            </div>
            <div className='flex justify-between items-center w-full max-w-[790px] mx-auto mt-3 max-lg:px-13 max-sm:px-6'>
                <div className='flex justify-center items-center gap-1 max-sm:gap-0.5'>
                    <Image width={24} height={24} src={'/images/contact1.svg'} alt='vector' className='max-lg:w-5  max-sm:w-3.5'/>
                    <span className='text-c2 text-sm max-lg:text-xs max-sm:text-[8.5px] font-normal'>4.9/5 Average Ratings</span>
                </div>
                <div className='flex justify-center items-center gap-1 max-sm:gap-0.5'>
                    <Image width={24} height={24} src={'/images/contact2.svg'} alt='vector' className='max-lg:w-5  max-sm:w-3.5'/>
                    <span className='text-c2 text-sm max-lg:text-xs max-sm:text-[8.5px] font-normal'>25+ Winning Awards</span>
                </div>
                <div className='flex justify-center items-center gap-1 max-sm:gap-0.5'>
                    <Image width={24} height={24} src={'/images/contact3.svg'} alt='vector' className='max-lg:w-5  max-sm:w-3.5'/>
                    <span className='text-c2 text-sm max-lg:text-xs max-sm:text-[8.5px] font-normal'>Certified Product</span>
                </div>
            </div>
        </div>
       
        <div className="mt-30 max-lg:mt-20 max-md:mt-16 w-full bg-[#FB6514] h-40 max-lg:h-30 max-md:h-20 overflow-hidden relative">
        <div
          className="
            absolute
            bg-[#FFFFFF]
            py-2 max-md:py-1
            left-1/2
            top-1/2
            w-[140%]
            -translate-x-1/2
            -translate-y-1/2
            -rotate-[3.3deg]
          "
        >
          <IfinitySlider
            speed={40}
            hoverSpeed={0.15}
            gap={35}
          >
            {contactData.map((title, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-c4 text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-lg font-normal">
                    {title}
                  </span>

                     <Image width={30} height={30} src={'/images/scontact.svg'} alt='vector' className='max-lg:w-5  max-sm:w-3.5'/>
                </div>
              </React.Fragment>
            ))}
          </IfinitySlider>
        </div>
      </div>
    </section>
  )
}

export default Contact
