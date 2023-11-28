import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const isLoggedIn = localStorage.getItem('token');
    console.log(isLoggedIn);
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <header className="w-full mt-5 text-gray-700 bg-white shadow-sm body-font pb-3 mb-3">
            <div className="container flex flex-col items-start p-6 mx-auto md:flex-row">
                <div className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                    <p>ZooLand</p>
                </div>
                <nav className="flex items-center justify-center text-base md:ml-auto">
                    
                    {isLoggedIn && (
                        <Link to="/">
                        <p className="mr-5 font-medium hover:text-gray-900">Home</p>
                        </Link>
                    )}
                    {isLoggedIn && (
                        <Link to="/spaces">
                            <p className="mr-5 font-medium hover:text-gray-900">Spaces</p>
                        </Link>
                    )}
                    {isLoggedIn && ( 
                        <Link to="/statsDaily">
                            <p className="mr-5 font-medium hover:text-gray-900">Stats Daily</p>
                            </Link>
                            )}
                    {isLoggedIn && (
                        <Link to="/statsWeekly">
                            <p className="mr-5 font-medium hover:text-gray-900">Stats Weekly</p>
                        </Link>
                    )}
                    {isLoggedIn && (
                        <Link to="/users">
                            <p className="mr-5 font-medium hover:text-gray-900">Users</p>
                            </Link>
                            )}
                    {isLoggedIn && (
                        <Link to="/management">
                            <p className="mr-5 font-medium hover:text-gray-900">Management</p>
                            </Link>
                            )}
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="mr-5 font-medium hover:text-gray-900">
                            Déconnexion
                        </button>
                    ) : (
                        <>
                            <Link to="/login">
                                <p className="mr-5 font-medium hover:text-gray-900">Login</p>
                            </Link>
                            <Link to="/register">
                                <p className="mr-5 font-medium hover:text-gray-900">Register</p>
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;
