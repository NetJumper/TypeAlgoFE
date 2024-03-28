import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    // Navbar fixed to the top of the page, full width, with styling and shadow effect
    <nav className="fixed top-0 left-0 w-full bg-gray-700 text-slate-100 z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Navigation Links: adjusted to show the correct routing paths and fixed the visible navigation links */}
            <div className="md:flex items-center space-x-4">
              {/* Link to the TypePractice page */}
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-blue-300">
                TypeAlgo
              </Link>
              {/* Future placeholders*/}
            </div>
          </div>
          {/* Auth Links: Sign In and Sign Up, aligned to the right */}
          <div>
            {/* Link to SignInPage */}
            <Link to="/signin" className="px-3 py-2 bg-gray-950 text-white rounded-md text-sm font-medium hover:bg-blue-300 transition duration-300">
              Log in
            </Link>
            {/* Link to SignUpPage */}
            <Link to="/signup" className="ml-2 px-3 py-2 bg-gray-950 text-white rounded-md text-sm font-medium hover:bg-blue-300 transition duration-300">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
