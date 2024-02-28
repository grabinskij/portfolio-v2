import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 w-full z-[9999]">
            <nav>
                <ul className="flex justify-center items-center bg-slate-100 text-slate-500 space-x-4">
                    <li><Link to="/legal-notice">Legal Notice</Link></li>
                    <li className="text-stone-400">|</li>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;