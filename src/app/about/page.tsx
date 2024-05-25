import React from 'react'
import Image from 'next/image'
// import FaqSection from './Faq'
// import { GlobeDemo } from './Globe'

function About() {
  return (
    <div> <div className="w-full dark:bg-white text-black pt-20">
    <div className="md:w-3/5 w-4/5 m-auto flex flex-col justify-center item-center ">
      <div className="w-full flex md:flex-row flex-col-reverse justify-center item-center ">
        <div className="md:w-3/5 flex flex-col justify-center items-start">
          <h1 className="text-2xl">About Us</h1>
          <p className='text-left'>
          At Ontop Groups, we&apos;re dedicated to redefining industry standards with innovative solutions. Our dynamic team delivers top-notch services globally, combining expertise in software development, digital marketing, and more. We prioritize client satisfaction through clear communication, transparency, and reliability. Let&apos;s innovate together and take your business to new heights.
          </p>
        </div>
        <div className="md:w-1/2 flex md:justify-end md:items-end justify-center item-center">
          <Image
            src="https://res.cloudinary.com/drszvaldf/image/upload/v1714427773/aiy0wuqzvoaight2cjfe.png" // Add the path to your image file
            alt="About Us Image"
            width={400} // Set your desired width
            height={400} // Set your desired height
          />
        </div>
      </div>


      {/* Mission Vision Values */}
      <div className="flex gap-5 md:flex-row flex-col justify-start items-start my-20">
        <div className="md:w-1/3 flex flex-col justify-center item-center">
          <div className='flex justify-center'>
            <Image
              src="https://res.cloudinary.com/drszvaldf/image/upload/v1714987115/otg/esrcvhkzqr0vocttyvax.png" // Add the path to your image file
              alt="About Us Image"
              width={100} // Set your desired width
              height={100} // Set your desired height
            />
          </div>
          <h1 className="text-2xl text-center">Our Mission</h1>
          <p className="text-center">
          To empower businesses to thrive in the digital era by providing innovative solutions and exceptional services that drive growth and success.
          </p>
        </div>
        <div className="md:w-1/3 flex flex-col justify-center item-center">
          <div className='flex justify-center'>
            <Image
              src="https://res.cloudinary.com/drszvaldf/image/upload/v1714987115/otg/zb8lyznqkwnxnvihqt7j.png" // Add the path to your image file
              alt="About Us Image"
              width={100} // Set your desired width
              height={100} // Set your desired height
            />
          </div>
          <h1 className="text-2xl text-center">Our Mission</h1>
          <p className="text-center">
          To be the leading partner for businesses seeking to establish a strong online presence, recognized for our creativity, expertise, and commitment to delivering exceptional results.
          </p>
        </div>
        <div className="md:w-1/3 flex flex-col justify-center item-center">
          <div className='flex justify-center'>
            <Image
              src="https://res.cloudinary.com/drszvaldf/image/upload/v1714987115/otg/dkkaqcayhjtffwturau3.png" // Add the path to your image file
              alt="About Us Image"
              width={100} // Set your desired width
              height={100} // Set your desired height
            />
          </div>
          <h1 className="text-2xl text-center">Our Mission</h1>
          <p className="text-center">
          We strive for excellence in everything we do, delivering high-quality solutions and services and providing personalized solutions that meet their unique requirements and deliver value.
          </p>
        </div>
      </div>

      
    </div>
  </div></div>
  )
}

export default About