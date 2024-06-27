// components/CallNowButton.tsx
"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const CallNowButton: React.FC = () => {

    const handleCallNowClick = () => {
        // Replace with your Call Now action
        console.log('Perform Call Now action');
    };

    return (
        <>
            <a  href="tel:+1234567890"
                className="fixed bottom-10 left-0 bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-lg shadow-md z-50"
            >
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                Call Now
                {/* <p className='ml-2 text-orange-500'>7980412979</p> */}
            </a>
        </>
    );
};

export default CallNowButton;
