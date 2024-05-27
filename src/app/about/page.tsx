"use client";
import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div>
      <div className="w-full dark:bg-white text-black pt-20">
        <div className="md:w-3/5 w-4/5 m-auto flex flex-col justify-center item-center">
          <div className="w-full flex md:flex-col justify-center item-center">
            <div className="md:w-3/5 m-auto flex flex-col justify-center items-center">
              <h1 className="text-2xl py-2">About Us</h1>
              <p className='w-full text-center'>
                At Beauty Furniture, we offer a wide range of good quality and affordable sofas. Based in Kolkata, our mission is to provide our customers with the best in comfort and style. Our dedicated team ensures that each piece of furniture meets the highest standards of quality and craftsmanship. Whether you are looking for a modern design or a classic piece, we have something for everyone. Let us help you transform your living space with our exquisite collection of sofas.
              </p>
            </div>
          </div>

          {/* Mission Vision Values */}
          <div className="flex gap-5 md:flex-row flex-col justify-start items-start my-20">
            <div className="md:w-1/3 flex flex-col justify-center item-center">
              <div className='flex justify-center'>
                <Image
                  src="https://res.cloudinary.com/drszvaldf/image/upload/v1714987115/otg/esrcvhkzqr0vocttyvax.png"
                  alt="Our Mission"
                  width={100}
                  height={100}
                />
              </div>
              <h1 className="text-2xl text-center">Our Mission</h1>
              <p className="text-center">
                To provide high-quality and affordable sofas that enhance the comfort and beauty of our customers' homes.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col justify-center item-center">
              <div className='flex justify-center'>
                <Image
                  src="https://res.cloudinary.com/drszvaldf/image/upload/v1714987115/otg/zb8lyznqkwnxnvihqt7j.png"
                  alt="Our Vision"
                  width={100}
                  height={100}
                />
              </div>
              <h1 className="text-2xl text-center">Our Vision</h1>
              <p className="text-center">
                To be the leading furniture provider in Kolkata, recognized for our quality, affordability, and exceptional customer service.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col justify-center item-center">
              <div className='flex justify-center'>
                <Image
                  src="https://res.cloudinary.com/drszvaldf/image/upload/v1714987115/otg/dkkaqcayhjtffwturau3.png"
                  alt="Our Values"
                  width={100}
                  height={100}
                />
              </div>
              <h1 className="text-2xl text-center">Our Values</h1>
              <p className="text-center">
                We are committed to excellence, integrity, and customer satisfaction in every aspect of our business.
              </p>
            </div>
          </div>

          {/* Embedded Map Section */}
        </div>
        <div className="w-full flex justify-center bg-red-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58962.56875204691!2d88.30425634863279!3d22.535657899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771172365b39%3A0x1192e1b3dfecde96!2sBeauty%20Furniture!5e0!3m2!1sen!2sin!4v1716798399759!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default About
