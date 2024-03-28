import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from '@aws-amplify/auth'; // Import signOut from Amplify V6

const Navbar: React.FC = () => {
  // Function to handle sign out
  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.href = '/'; // Redirect to the homepage after signing out
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-700 text-slate-100 z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="md:flex items-center space-x-4">
              {/* Link to the TypePractice page */}
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-blue-300">
                TypeAlgo
              </Link>
              {/* Sign Out Button */}
              <button onClick={handleSignOut} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-blue-300">
                Sign Out
              </button>
              {/* Additional placeholder links can be added here */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
