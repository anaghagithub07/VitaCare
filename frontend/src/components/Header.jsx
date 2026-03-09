import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='relative rounded-lg overflow-hidden min-h-[420px] md:min-h-[480px] flex flex-col justify-center'>
            {/* Hero background image */}
            <img src={assets.header_img} alt="" className='absolute inset-0 w-full h-full object-cover' />
            {/* Dark overlay */}
            <div className='absolute inset-0 bg-black/70' aria-hidden="true" />
            {/* Content */}
            <div className='relative z-10 px-6 md:px-10 lg:px-20 py-12 md:py-16 max-w-2xl'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Book Appointment <br /> With Trusted Doctors
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light mt-4'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
                </div>
                <a href='#speciality' className='inline-flex items-center gap-2 bg-white px-8 py-3 rounded-full text-neutral-700 text-sm mt-6 hover:scale-105 hover:bg-neutral-100 transition-all duration-300'>
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Header