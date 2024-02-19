import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 w-full z-[9999]">
            <nav>
                <ul className="flex justify-center items-center bg-slate-100 text-slate-500 space-x-8">
                    <li><Link to="/filetest">fileTest</Link></li>
                    <li><Link to="/filetest2">fileTest2</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;