"use client";
import React, { useState, useEffect, useRef } from 'react';

const Cta = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const modalRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        // Clear form data after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
        // Close the modal after submission
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && isOpen && e.target instanceof HTMLElement && !modalRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="bg-blue-900 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                Book Now
            </button>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-md w-96" ref={modalRef}>
                        <span className="absolute top-0 right-0 cursor-pointer" onClick={() => setIsOpen(false)}>
                            &times;
                        </span>
                        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-2">Name:</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="border border-gray-300 rounded px-3 py-2 w-full" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2">Email:</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="border border-gray-300 rounded px-3 py-2 w-full" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2">Message:</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required className="border border-gray-300 rounded px-3 py-2 w-full"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cta;
