import React from 'react'
import { useState, useEffect, useRef } from 'react';
import './news.css';
import img1 from './img/jwm.JPG';
import spainsvg from './img/4x3/es.svg';
import img2 from './img/holten.jpg';
import NEDsvg from './img/4x3/nl.svg';
import img3 from './img/JEM3.JPG';
import TURsvg from './img/4x3/tr.svg';
import img4 from './img/MalleTl.JPG'

export default function News() {

    const newsh1Ref = useRef(null);
      const targetScrollY = 880; // Replace with your desired scroll position
    
      useEffect(() => {
          const handleScroll = () => {
          const newsh1 = newsh1Ref.current;
          if (window.scrollY >= 1225 && window.scrollY <= 1480) {
            document.getElementById('newsh1').style.backgroundColor = 'rgb(255, 221, 72)';
            document.getElementById('newsh1').style.borderRadius = '10px';
          } else {
            document.getElementById('newsh1').style.backgroundColor = '';
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [targetScrollY]);

    return (
        <>
            <div className="newssec w-screen flex justify-center">
                <div className='w-10/12 border-r-2 border-l-2'>
                    <div className='flex flex-col'>
                        <div>
                            <h1 id='newsh1' className='w-28 text-center text-4xl font-bold mb-16'>News</h1>
                        </div>
                        <div>
                            <h2 className='w-52 text-center text-xl font-extrabold ml-12 mb-5 text-gray-800'><a href="">Competitions</a></h2>
                        </div>
                        <div className='flex justify-between pl-20 pr-20 text-black'>
                            <div className='newscard flex-col '>
                                <div className='imggrad'></div>
                                <img src={img1} alt="" className='img1' />
                                <div className='overlay flex-col flex gap-2'>
                                    <h1>Junior Worldchamps<span className='text-xl ml-1'>&#127752;</span></h1>
                                    <h4 className='pl-3'>Torremolinos, Spain <img src={spainsvg} alt="" className='flagsvg inline ml-1'/></h4>
                                    <p>... it was a pretty good race, ...</p>
                                    <a href=""  className='text-sm text-center text-blue-500 mt-6'>More...</a>
                                </div>
                            </div>
                            <div className='newscard '>
                                <div className='imggrad'></div>
                                <img src={img2} alt="" className='img2' />
                                <div className='overlay flex-col flex gap-2'>
                                    <h1>Junior European Cup<span className=' text-2xl mr-1'>&#129351;</span></h1>
                                    <h4 className='pl-3'>Holten, Netherlands <img src={NEDsvg} alt="" className='flagsvg inline ml-1'/></h4>
                                    <p>more...</p>
                                    <a href=""  className='text-sm text-center text-blue-500 mt-6'>More...</a>
                                </div>
                            </div>
                            <div className='newscard'>
                                <div className='imggrad'></div>
                                <img src={img3} alt="" className='img3'/>
                                <div className='overlay flex-col flex gap-2'>
                                    <h1>Junior Europechamps</h1>
                                    <h4 className='pl-3'>Balikisir, Turkey <img src={TURsvg} alt="" className='flagsvg inline ml-1'/></h4>
                                    <p>more...</p>
                                    <a href=""  className='text-sm text-center text-blue-500 mt-6'>More...</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='w-52 text-xl font-extrabold pl-9 ml-12 mb-5 mt-12 text-gray-800'><a href="">Blog</a></h2>
                        </div>
                        <div className='flex justify-between pl-20 pr-20 text-black'>
                            <div className='newscard flex-col '>
                                <div className='imggrad'></div>
                                <img src={img4} alt="" className='img4' />
                                <div className='overlay flex-col flex gap-2'>
                                    <h1>Training Camp</h1>
                                    <h4 className='pl-3'>Mallorca, Spain <img src={spainsvg} alt="" className='flagsvg inline ml-1'/></h4>
                                    <p>...2 weeks together with the national team and some good testing results. Good training in the books, but what happened on the Island was though...</p>
                                    <a href=""  className='text-sm text-center text-blue-500 mt-6'>More...</a>
                                </div>
                            </div>
                            <div className='newscard '>
                                <div className='imggrad'></div>
                                <img src={img2} alt="" className='img2' />
                                <div className='overlay flex-col flex gap-2'>
                                    <h1>Junior European Cup<span className=' text-2xl mr-1'>&#129351;</span></h1>
                                    <h4 className='pl-3'>Holten, Netherlands <img src={NEDsvg} alt="" className='flagsvg inline ml-1'/></h4>
                                    <p>more...</p>
                                    <a href=""  className='text-sm text-center text-blue-500 mt-6'>More...</a>
                                </div>
                            </div>
                            <div className='newscard'>
                                <div className='imggrad'></div>
                                <img src={img3} alt="" className='img3'/>
                                <div className='overlay flex-col flex gap-2'>
                                    <h1>Junior Europechamps</h1>
                                    <h4 className='pl-3'>Balikisir, Turkey <img src={TURsvg} alt="" className='flagsvg inline ml-1'/></h4>
                                    <p>more...</p>
                                    <a href=""  className='text-sm text-center text-blue-500 mt-6'>More...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
