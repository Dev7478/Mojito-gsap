import React from 'react'
import { navLinks } from '../constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      }
    });
    navTween.fromTo('nav', { backgroundColor: 'transparent' }, { backgroundColor: '#00000050',  backgroundFilter: 'blur(10px)', duration: 1, ease: 'power1.inOut' });
  });
  return (
    <nav>
      <div>
        <a href="#home" className='flex items-center gap-2 ml-15'>
            <img src="/images/logo.png" alt="Logo" className='w-10 h-9' />
          <p>UDrink</p>
        </a>
        <ul className='flex items-center gap-10 mr-15'>
            {navLinks.map((Link) => (
                <li key={Link.id}>
                    <a href={`#${Link.href}`} className='hover:text-[#FFC700]'>{Link.title}</a>
                </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
