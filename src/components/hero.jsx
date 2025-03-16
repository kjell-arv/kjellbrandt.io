import React from 'react'
import { useState, useEffect, useRef } from 'react';
import './hero.css'
import portrait from './img/IMG_2117.jpg';
import instalogo from './img/insta.png';
import ytlogo from './img/yt.png';
import wwwlogo from './img/www.png';



function Hero() {

  const abouth1Ref = useRef(null);
  const targetScrollY = 380; // Replace with your desired scroll position

  useEffect(() => {
      const handleScroll = () => {
      const abouth1 = abouth1Ref.current;
      if (window.scrollY >= 380 && window.scrollY <= 580) {
        document.getElementById('abouth1').style.backgroundColor = 'rgb(255, 221, 72)';
        document.getElementById('abouth1').style.borderRadius = '10px';
      } else {
        document.getElementById('abouth1').style.backgroundColor = '';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetScrollY]);

  return (
    <section className=' herosec w-screen flex justify-center z-0'>
      <div className=' w-10/12 pt-48 flex items-start border-r-2 border-l-2 flex-col justify-start'>
        <div className=' newsletterDiv bg-amber-100 hover:bg-amber-200'><h2 className=' font-bold'>Subscribe to my newsletter <span className=' rotatedEm '>&#10548;</span></h2></div>
        <div className=' personalCard flex w-8/12 justify-evenly ml-32 bg-white z-20'>
            <div className='dotchannel' />
            <div className=' image-container flex justify-center'>
              <img src={portrait} alt="" className=' portraitImg' id='portraitdiv'/>
            </div>
            <div className=' flex-col pl-4'>
              <h1 className=' font-bold text-6xl text-center'>Kjell Arved Brandt</h1>
              <p className=' font-bold text-sm pb-8 italic pt-4 text-center text-gray-700'>"Vom Becken an die Weltspitze" <span className=' text-xl'>&#129351;</span></p>
              <p className='leading-8 text-center pb-4'>Hey! I am <span className=' font-bold'>Kjell</span>, 18y/o triathlete from <span className=' font-bold'>Berlin, Germany</span>. <br /> This is my website to keep family and people updated  <br /> on <span className=' font-bold'>news</span>, <span className=' font-bold'>upcoming events</span> and <span className=' font-bold'>me</span>...</p>
            </div>
        </div>

        <div className='socialsec w-full flex z-10'>
        <div className=' socialdiv flex items-end w-6/12 h-60 absolute p-3'>
            <div className='flex w-full'>
              <h1 className=' socialh1 text-3xl pt-2 pb-2 font-bold'>Socials:</h1>
              <div className='flex items-center justify-evenly w-full'>
                <a href="https://www.instagram.com/kjell_arv/" target="_blank" className='flex items-center'><img src={instalogo} alt="" className=' object-contain h-5 mr-2' /><p>kjell_arv</p></a>
                <a href="" className='flex items-center'><img src={ytlogo} alt="" className=' object-contain h-5 mr-2' /><p>Kjell Brandt</p></a>
                <a href="https://www.kjell-arved-brandt.de" target="_blank" className='flex items-center'><img src={wwwlogo} alt="" className=' object-contain h-5 mr-2' /><p>kjell-arved-brandt.com</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}








window.addEventListener('scroll', function() {
  const portraitDiv = document.getElementById('portraitdiv');
  const scrollY = window.scrollY;

  // Set the border when the scroll position exceeds a certain value (e.g., 100px)
  if (scrollY >= 36) {
    portraitDiv.style.border = '3px solid rgb(220,220,220)';
  } else {
    // Optionally, remove the border when the scroll position is less than or equal to 100px
    portraitDiv.style.border = '3px solid rgb(255, 196, 0)';
  }
});


export default Hero


 