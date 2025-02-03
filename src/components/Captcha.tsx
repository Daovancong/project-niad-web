'use client';

import React, { useState, useEffect } from 'react';

export default function CaptchaComponent() {
    const [captcha, setCaptcha] = useState('');

    const fetchCaptcha = async () => {
        const response = await fetch('/api/captcha');
        const data = await response.json();
        setCaptcha(data.data);
    };

    useEffect(() => {
        fetchCaptcha();
    }, []);


    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: captcha }} />
            <button
                onClick={fetchCaptcha}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Làm mới CAPTCHA
            </button>
        </div>
    );
};
