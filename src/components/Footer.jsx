import React from 'react';

function Footer() {
    return (
        <footer className="absolute bottom-0 left-0 w-full z-50 bg-slate-100">
            <nav>
                <ul className="flex justify-center items-center text-slate-500 space-x-8">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <p className="flex justify-center">© 2024 Your Company. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
