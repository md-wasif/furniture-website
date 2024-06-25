// components/WhatsAppButton.tsx
"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface WhatsAppButtonProps {
    phoneNumber?: string; // Make phoneNumber optional
    message?: string;     // Make message optional
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
    phoneNumber = '7439011473',   // Default phone number
    message = 'Hello! I saw your website and wanted to inquire about...' // Default message
}) => {
    
    // Function to handle WhatsApp button click
    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button
            className="fixed bottom-20 right-0 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md z-50"
            onClick={handleWhatsAppClick}
        >
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
            WhatsApp
        </button>
    );
};

export default WhatsAppButton;
