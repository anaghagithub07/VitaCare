import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='relative rounded-lg overflow-hidden min-h-[420px] md:min-h-[480px] flex flex-col justify-center bg-[#5F6FFF]'>
            {/* Subtle gradient for depth */}
            <div className='absolute inset-0 bg-gradient-to-br from-[#5F6FFF] via-[#5F6FFF] to-[#4a5ae6] z-0' aria-hidden="true" />
            {/* Soft blur orbs - top right */}
            <div className='absolute right-0 top-0 w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/10 blur-3xl -translate-y-1/2 translate-x-1/2 z-0' aria-hidden="true" />
            <div className='absolute right-[10%] top-[15%] w-40 h-40 rounded-full bg-white/5 blur-2xl z-0' aria-hidden="true" />
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