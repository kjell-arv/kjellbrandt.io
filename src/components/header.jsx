import React, { useState, useEffect } from 'react';
import './header.css';

export default function Header() {
  const [showTopics, setShowTopics] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleTopics = () => {
    setShowTopics(prev => !prev);
  };

  const toggleMenu = () => {
    setShowMenu((prev) => {
      if (prev) {
        setShowTopics(false); // Close topics if the menu is being closed
      }
      return !prev; // Toggle the menu state
    });
  };
  function setMenuHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  // Initial call
  setMenuHeight();

  // Recalculate on resize and orientation change
  window.addEventListener('resize', setMenuHeight);
  window.addEventListener('orientationchange', setMenuHeight);



  useEffect(() => {
    if (showTopics || showMenu) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [showTopics, showMenu]);

  const handleTopicSelection = (topic) => {
    const email = 'kab.request@gmail.com';
    const subject = encodeURIComponent(`${topic}`);
    let body = '';

    if (topic === 'Other') {
      body = encodeURIComponent('Hey, please choose your topic and fill out the subject line, thanks!');
    } else {
      body = encodeURIComponent('');
    }

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const handleClick = () => {
    setIsClicked(prev => !prev); // Toggle color and state
    document.getElementById('contactMe').style.color = isClicked ? 'black' : 'rgb(255, 132, 0)';

    // Toggle showTopics visibility when contactMe is clicked
    toggleTopics();
  };

  return (
    <>
      <section className='headersec flex center justify-center h-12 w-screen fixed bg-gray-100 z-50'>
        <div className='headerdiv animated-border border-r-2 border-l-2 border-neutral-200 w-10/12 font-bold'>
          <div className='div1'>
            <div className='namediv h-full flex justify-center'>
              <h1 className='contacth1 text-3xl font-extrabold font-sans select-none'>
                KAB
              </h1>
              <div className={`menutoggle ${showMenu ? "active" : ""}`} onClick={toggleMenu}>
                <svg className="burger-icon" width="30" height="30" viewBox="0 0 100 80">
                  <rect className="line top" width="100" height="15" rx="10"></rect>
                  <rect className="line middle" y="30" width="100" height="15" rx="10"></rect>
                  <rect className="line bottom" y="60" width="100" height="15" rx="10"></rect>
                </svg>
              </div>
            </div>
            {showMenu && (
              <div className={`responsivediv ${showTopics ? "topics-active" : ""}`}>
                <ul className='menu flex flex-col gap-9 pl-12 pt-8 mb-8'>
                  <ul className='flex flex-col gap-6 '>
                    <h2 className=' text-3xl'>Navitgation</h2>
                    <li><a href="#" className='hover:text-neutral-500 select-none text-xl ml-8'>Home</a></li>
                    <li><a href="#" className='hover:text-neutral-500 select-none text-xl ml-8'>About Me</a></li>
                    <li><a href="#" className='hover:text-neutral-500 select-none text-xl ml-8'>News & Blog</a></li>
                    <li><a href="#" className='hover:text-neutral-500 select-none text-xl ml-8'>Upcoming Events</a></li>
                  </ul>
                  <ul className='flex flex-col gap-6 '>
                    <h2 className=' text-3xl'>Community</h2>
                    <li><a href="#" className='hover:text-neutral-500 select-none text-xl ml-8'>Partners</a></li>
                    <li><a href="" className='hover:text-neutral-500 select-none text-xl ml-8'>Subscribe to my newsletter</a></li>
                  </ul>
                  <ul className='flex flex-col '>
                    <h2 className=' text-3xl mb-6'>Contact</h2>
                    <li className='mb-6'><a href="#" className=' hover:text-neutral-500 select-none text-xl ml-8'>Social Media</a></li>
                    <li className='mb-3'><a id='contactMe' onClick={handleClick} className=' hover:text-neutral-500 select-none text-xl ml-8 cursor-pointer'>Contact Me</a></li>
                    <li>
                      {showTopics && (
                        <div className='topic-selection-div flex flex-col'>
                          <div className='flex justify-between mb-6 mt-2'>
                            <p>Select a topic:</p>
                          </div>

                          <ul className=' pl-6'>
                            <li onClick={() => handleTopicSelection('General Inquiry')}>General Inquiry</li>
                            <li onClick={() => handleTopicSelection('Sponsorship Questions')}>Sponsorship Questions</li>
                            <li onClick={() => handleTopicSelection('Feedback')}>Feedback</li>
                            <li onClick={() => handleTopicSelection('Other')}>Other</li>
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                </ul>
              </div>
            )}

            <ul className='ulist flex w-4/12 justify-evenly'>
              <li><a href="#" className='hover:text-neutral-500 select-none text-xl'>About Me</a></li>
              <li><a href="#" className='hover:text-neutral-500 select-none text-xl'>News</a></li>
              <li><a href="#" className='hover:text-neutral-500 select-none text-xl'>Upcoming Events</a></li>
              <li><a href="#" className='hover:text-neutral-500 select-none text-xl'>Partners</a></li>
            </ul>
            <div className='subbuttondiv'>
              <button className='text-xl font-extrabold subscribe-button'>Subscribe</button>
            </div>
          </div>
          {/* Conditionally render the topic selection div */}
        </div>
      </section>
    </>
  );
}

