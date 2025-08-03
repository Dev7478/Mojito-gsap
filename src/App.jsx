import React from 'react';
import {ScrollTrigger, SplitText} from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger, SplitText);
import Navbar from './component/Navbar';
import Hero from './component/Hero';

const App = () => {
  return (
   <main>
    <Navbar />
    <Hero />
    <div className="h-dvh bg-black" />
   </main>
  );
};

export default App;