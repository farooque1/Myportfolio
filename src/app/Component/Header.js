'use client'

import React, { useState } from 'react';

function Header() {
    const [Mobilemenu, setMobilemenu] = useState(false);

    const Mobiletoggle = () => {
        setMobilemenu(!Mobilemenu);
    }

    return (
        <>
            <div className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
                <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                    <div className="text-white text-xl font-bold">FAROOQUE SHAIKH</div>

                    <nav className="hidden md:flex space-x-5 text-xl text-white">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Service</a>
                        <a href="#">Skills</a>
                        <a href="#">Project</a>
                        <a href="#">Contact</a>
                    </nav>

                    <div className="md:hidden">
                        <button id="mobile-menu-btn" className="text-white" onClick={Mobiletoggle}>
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`md:hidden absolute top-10 left-0 bg-[#121212] bg-opacity-100 text-center p-5 w-full text-white ${Mobilemenu ? '' : 'hidden'}`}>
                        <a href="#" className="block mb-2">Home</a>
                        <a href="#" className="block mb-2">About</a>
                        <a href="#" className="block mb-2">Skills</a>
                        <a href="#" className="block mb-2">Project</a>
                        <a href="#" className="block">Contact</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
