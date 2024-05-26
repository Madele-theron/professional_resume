"use client";

import React from 'react';
import { Logo } from '../Svg/LogoSVG';
import { useState } from 'react';
import { HamburgerMenu } from '../Svg/HamburgerMenuSVG';
import { Close } from '../Svg/CloseSVG';

export interface NavLink {
  href: string;
  label: string;
}

export interface HeaderProps {
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="flex justify-between text-white mb-8"> 
      <div className='flex items-start'>
        <Logo />
      </div>
      <nav className='hidden md:flex space-x-4'>
        <ul className='flex '>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className='uppercase text-slate-950 p-3 hover:underline'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="md:hidden" onClick={toggleMenu}>
        {showMenu ? <Close /> : <HamburgerMenu />}
      </button>
      {showMenu && (
        <div className='md:hidden bg-gray-800 absolute top-16 right-4 px-14 py-6'> 
          <ul className='flex flex-col text-center space-y-4'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className='uppercase hover:underline justify-items-center text-white text-xs'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        </div>
      )}
    </header>
  );
};

export default Header;