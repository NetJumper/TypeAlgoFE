import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
    const { isAuthenticated } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-semibold">TypeAlgo</Link>
            <div className="hidden md:flex space-x-4">
                
                {isAuthenticated ? (
                    <button className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 transition duration-300">Sign Out</button>
                ) : (
                    <>
                        <Link to="/signin" className="px-4 py-2 bg-cyan-500 rounded hover:bg-cyan-600 transition duration-300">Sign In</Link>
                        
                    </>
                )}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                
                {isAuthenticated ? (
                    <button className="mt-4 md:mt-0">Sign Out</button>
                ) : (
                    <>
                        <Link to="/signin" className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white">Sign In</Link>
                       
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
