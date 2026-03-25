import React from 'react';
import coinLogo from '../../images/assets/dollar 1.png'
import logo from '../../images/assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 max-w-[95%] mx-auto my-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <img src={logo} alt="" className='hidden md:flex w-10' />
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow sora">
                        <li><a>Home</a></li>
                        <li><a>Fixture </a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                </div>
            </div>

            <div className="navbar-end space-x-15">
                <div className="sora  hidden md:flex">
                    <ul className='flex gap-6 text-[#13131370]'>
                        <li className='cursor-pointer '><a>Home</a></li>
                        <li className='cursor-pointer '><a>Fixture </a></li>
                        <li className='cursor-pointer '><a>Teams</a></li>
                        <li className='cursor-pointer '><a>Schedules</a></li>
                    </ul>
                </div>
                <button className='flex  gap-2 btn '>0 Coin <img src={coinLogo} alt="" /></button>

            </div>
        </div>
    );
};

export default Navbar;