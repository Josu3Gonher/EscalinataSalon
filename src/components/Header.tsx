import { useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { MdRoundaboutRight } from 'react-icons/md';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground" style={{ backgroundColor: '#6F5D44' }}>
                <a className="flex items-center justify-center" href="/">
                    <span className="text-xs md:text-lg font-bold text-white ml-2">SALON ESCALINATA</span>
                </a>
                <nav className="ml-auto hidden md:flex gap-4 text-white">
                    <a href="/about" className="text-sm hover:underline">Acerca de</a> 
                </nav>
                <button 
                    className="ml-auto md:hidden text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </header>
            {isMenuOpen && (
                <nav style={{ backgroundColor: '#6F5D44' }} className="md:hidden">
                    <a href="/" className="flex px-4 py-2 text-sm text-white hover:underline items-center"><IoHomeOutline className='mr-1'/>Inicio</a>
                    <a href="/about" className="flex px-4 py-2 text-sm text-white hover:underline items-center"><MdRoundaboutRight className='mr-1'/>Acerca de</a>
                </nav>
            )}
        </>
    )
}
