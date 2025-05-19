import './aboutme.css'
import YellowDot from './yellowDot.jsx'
import JEMPic from './img/JEM_p1.jpg'
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';


export default function AboutMe() {

  const [arrowOpacity, setArrowOpacity] = useState(1);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setArrowOpacity(currentScrollPos > 0 ? 0 : 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className=' aboutsec w-screen flex justify-center z-0'>
        <div className=' w-10/12 border-r-2 border-l-2 overflow-hidden'>
          <div className='allsec flex-col '>
            <div className='headerdivm flex-col flex gap-4'>
              <h1 id='abouth1' className='w-52 text-center text-4xl font-bold ml-10'>About Me</h1>
              <div id='arrowd' className='arrowd border-l-0 border-t-0 border-b-2 border-r-2 border-black' style={{ opacity: arrowOpacity, transition: 'opacity 0.5s' }}></div>

            </div>
            <div className='infosec'>

              <div className='layoutdiv flex flex-col gap-10 w-8/12 '>
                <div className=' aboutdiv p-8'><h1 className='text-xl font-extrabold mb-4'>Who am I?</h1><p className='pwoutspan text-gray-700 text-justify '>I am <span className='f font-bold'>Kjell Arved Brandt</span>, born and raised in Berlin/Brandenburg. My sporting career began with swimming at the age of six. After a successful career as a competitive swimmer, in  which I gained a lot of experience and success, I started triathlon in 2023. In my first season, I was already able to achieve impressive successes, including winning the German Triathlon and Duathlon Championships[...] <a href="" className=' cursor-pointer text-blue-500 font-semibold text-sm '>More...</a> </p></div>
                <div className='boxlayout flex w-full justify-between p-8'>
                  <div className=' achibox p-6'>
                    <h1 className=' text-xl font-extrabold mb-4'>Achievments <span className=' text-2xl ml-2'>&#127942;</span> </h1>
                    <ul className=' list-none w-full flex justify-center'>
                      <li className='flex-col flex gap-1 w-full'>
                        <p><span className=' text-xl mr-1'>&#129351;</span>Juniors European Cup Holten 2024</p>
                        <p><span className=' text-xl mr-1'>&#129351;</span>German Triathlon Championship 2023</p>
                        <p><span className=' text-xl mr-1'>&#129351;</span>German Duathlon Championships 2023</p>
                        <p><span className=' text-xl mr-1'>&#127752;</span>25th Junior World Championship 2024</p>
                        <Link to="/about-me" className='cursor-pointer text-blue-500 font-semibold text-sm mt-5'>More...</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='goalbox p-6'>
                    <h1 className='text-xl font-extrabold mb-4'>Goals<span className=' text-2xl ml-2'>&#127919;</span></h1>
                    <p className='w-full h-auto'><h3 className='font-extrabold mr-2'>2024-2025</h3>Junior world title & top international results. <br /> <h3 className='font-extrabold mr-2'>2026-2027</h3> Elite breakthrough & German champion. <br /><h3 className='font-extrabold mr-2'>2028</h3><span className=' text-xl mr-1'>&#129351;</span> LA Olympics – medal goal.<br /></p>
                    <Link to="/about-me" className='cursor-pointer text-blue-500 font-semibold text-sm mt-5'>More...</Link>
                  </div>
                </div>
              </div>

              <div className='jemdiv flex '>
                <img src={JEMPic} alt="" className=' JEMPic' />
              </div>
            </div>

          </div>
        </div>

      </section>
    </>
  )
}
