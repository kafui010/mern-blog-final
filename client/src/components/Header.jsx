import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
    const path = useLocation().pathname;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar className='border-b-2 bg-white dark:bg-gray-800 flex justify-between items-center p-4'>
            {/* Section 1: Logo */}
            <div className='flex items-center'>
                <Link
                    to='/'
                    className='flex items-center space-x-2 text-lg font-semibold text-gray-800 dark:text-white'
                >
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                        Kemist Group 
                    </span>
                    <span className='text-gray-800 dark:text-white'>Blog</span>
                </Link>
            </div>

            {/* Section 2: Search Input (Visible on Desktop) */}
            <div className='hidden lg:flex items-center mx-4'>
                <div className='relative'>
                    <AiOutlineSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg' />
                    <TextInput
                        type='text'
                        placeholder='Search...'
                        className='pl-10 border-2 border-gray-300 rounded-md h-10 focus:outline-none focus:ring-2 focus:ring-indigo-500' // Rectangular shape for desktop
                    />
                </div>
            </div>

            {/* Section 2 (Mobile Search Icon) */}
            <div className='flex items-center lg:hidden'>
                <Button className='flex items-center justify-center w-10 h-10 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-full hover:scale-110 transition-transform duration-200' color='gray'>
                    <AiOutlineSearch className='text-lg' />
                </Button>
            </div>

            {/* Section 3: Dark Mode Icon and Sign In Button (Visible on Desktop and Mobile) */}
            <div className='flex items-center space-x-4'>
                <Button className='flex items-center justify-center w-10 h-10 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-full hover:scale-110 transition-transform duration-200' color='gray'>
                    <FaMoon className='text-lg' />
                </Button>
                <Link to='/sign-in'>
                    <Button 
                        className='bg-white text-gray-800 border border-gray-300 rounded-md h-10 px-4 flex items-center justify-center transition-all duration-200 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white'
                    >
                        Sign In
                    </Button>
                </Link>
                {/* Menu Button - Visible only on mobile */}
                <Button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className='flex items-center justify-center w-10 h-10 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md lg:hidden transition-all duration-200 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white'
                >
                    <span className='material-icons'>menu</span> {/* Example icon, can replace with an actual hamburger icon */}
                </Button>
            </div>

            {/* Navigation Links (Visible on Desktop) */}
            <div className='hidden md:flex items-center space-x-6'>
                <Link to='/' className={`text-gray-800 dark:text-white ${path === "/" ? "font-bold" : ""}`}>Home</Link>
                <Link to='/about' className={`text-gray-800 dark:text-white ${path === "/about" ? "font-bold" : ""}`}>About</Link>
                <Link to='/projects' className={`text-gray-800 dark:text-white ${path === "/projects" ? "font-bold" : ""}`}>Projects</Link>
            </div>

            {/* Mobile Navigation Links */}
            {isOpen && (
                <div className='absolute top-16 left-0 w-full bg-white dark:bg-gray-800 md:hidden'>
                    <Link to='/' className={`block text-gray-800 dark:text-white p-2 ${path === "/" ? "font-bold" : ""}`}>Home</Link>
                    <Link to='/about' className={`block text-gray-800 dark:text-white p-2 ${path === "/about" ? "font-bold" : ""}`}>About</Link>
                    <Link to='/projects' className={`block text-gray-800 dark:text-white p-2 ${path === "/projects" ? "font-bold" : ""}`}>Projects</Link>
                </div>
            )}
        </Navbar>
    );
}