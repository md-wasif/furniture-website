// pages/contact.js
"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      <div className='flex flex-col bg-white justify-around items-center'>
        <div className='md:w-2/3 w-4/5 text-center py-10 text-black flex flex-col justify-center items-center font-serif italic'>
          {/* <Image src="https://res.cloudinary.com/drszvaldf/image/upload/v1715501420/rphqhsy7ykjhcpd0cew4.png" alt="" width={500} height={200} /> */}
        <h1 className='text-3xl p-2 font-bold'>Contact Us to Buy Your Perfect Sofa</h1>
        <p className='text-xl'>Whether you're looking for style, comfort, or both, we've got the perfect sofa for you. Contact us today!</p>
</div>
        <div className="md:w-1/2 w-full mx-auto p-6 bg-transparent text-black">
          <h1 className="text-2xl text-center font-semibold mb-4">Contact Us</h1>
          <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block ">Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 p-2 w-full bg-transparent border-b border-gray-300 focus:outline-none" />
                </div>
                <div className="mb-4">
                    <label className="block ">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 p-2 w-full bg-transparent border-b border-gray-300 focus:outline-none" />
                </div>
                <div className="mb-4">
                    <label className="block ">Message:</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required className="mt-1 p-2 w-full bg-transparent border-b border-gray-300 focus:outline-none"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
            </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
