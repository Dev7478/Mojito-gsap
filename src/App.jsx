import React from 'react';
import {ScrollTrigger, SplitText} from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger, SplitText);
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Cocktails from './component/Cocktails';
import About from './component/About';
import Art from './component/Art'; 
import Menu from './component/Menu'; 
import Contact from './component/Contact';

const App = () => {
  const lenisRef = useRef()
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])

  return (
   <main>
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
    <Navbar />
    <Hero />
    <Cocktails />
    <About />
    <Art />
    <Menu />
    <Contact />
   </main>
  );
};

export default App;



