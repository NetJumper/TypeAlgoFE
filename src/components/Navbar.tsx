import { useAuth } from '../contexts/AuthContext';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';



const Navbar = () => {
    const [isAuthenticatorOpen, setIsAuthenticatorOpen] = useState(false);

    // Toggle Authenticator visibility
    const toggleAuthenticator = () => {
        setIsAuthenticatorOpen(!isAuthenticatorOpen);
    };

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-semibold">TypeAlgo</Link>
            <div className="relative">
                <button onClick={toggleAuthenticator} className="focus:outline-none">
                    <FontAwesomeIcon icon={faUser} size="lg" />
                </button>
                {isAuthenticatorOpen && (
                    <div className="absolute right-0 mt-2 p-4 w-100 bg-white rounded-lg shadow-xl z-10">
                        <Authenticator>
                            {({ signOut, user }) => (
                                user ? (
                                  <div className="flex justify-center items-center">
                                  <button onClick={signOut} className="focus:outline-none bg-cyan-400 text-white p-2 rounded-lg hover:bg-cyan-600">
                                      Sign out
                                  </button>
                              </div>
                              
                                ) : (
                                    // If not signed in, the Authenticator UI is shown
                                    <></>
                                )
                            )}
                        </Authenticator>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
