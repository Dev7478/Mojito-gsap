
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2', { type: 'words' });
        
        const sliderImg = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center',             
            }
        })
        sliderImg.from(titleSplit.words, {
            yPercent: 100,
            ease: 'expo.out',
            duration: 1,
            opacity: 0,
            stagger: 0.02
        });
        sliderImg.from('.top-grid div ,  .bottom-grid div ',{
            ease: 'power4.inOut',
            duration: 1.5,
            opacity: 0,
            stagger: 0.06
        }, '-=0.5');

    })
  return (
    <div id='about'>
        <div className='mb-16 md:px-0 px-5'>
            <div className="content">
                <div className='md:col-span-8'>
                    <p className='badge'>Best Cocktails</p>
                    <h2>Where every detail matters <span className='text-white'>- </span>
                       from muddle to garnish
                    </h2>
                </div>

                <div className="sub-content">
                    <p>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.</p>
                    
                        <div className='flex flex-col'>
                        <p className='md:text-3xl text-xl font-bold '>
                            <span>4.5</span>/5
                        </p>
                        <div className=' flex-row gap-1 items-center'>
                            <div className="star">⭐ ⭐ ⭐ ⭐ ⭐</div>
                        </div>

                        <p className='text-sm text-white-100'>More than 12000+ customers</p>
                    </div>

                    
                </div>
            </div>
        </div>

        <div className="top-grid">
            <div className='md:col-span-3'>
                <div className="noisy" />
                <img src="/images/abt1.png" alt="grid1" />
            </div>
            <div className='md:col-span-6'>
                <div className="noisy " />
                <img src="/images/abt2.png" alt="grid2" />
            </div>
            <div className='md:col-span-3'>
                <div className="noisy" />
                <img src="/images/abt5.png" alt="grid5" />
            </div>
        </div>

        <div className="bottom-grid">
            <div className='md:col-span-8'>
                <div className="noisy" />
                <img src="/images/abt3.png" alt="grid3" />
            </div>
            <div className='md:col-span-4'>
                <div className="noisy" />
                <img src="/images/abt4.png" alt="grid4" />
            </div>
        </div>
      
    </div>

    
  )
}

export default About