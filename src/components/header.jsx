import React, { useState } from 'react';
import './header.css';

export default function Header() {
  const [showTopics, setShowTopics] = useState(false);

  const toggleTopics = () => {
    setShowTopics(!showTopics);
  };

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

  return (
    <>
      <section className='headersec flex center justify-center h-12 w-screen fixed bg-gray-100 z-50'>
        <div className='headerdiv animated-border border-r-2 border-l-2 border-neutral-200 w-10/12 font-bold'>
          <div className='div1'>
            <div className='namediv h-full flex flex-col justify-center'>
              <h1
                className='contacth1 text-3xl font-extrabold font-sans cursor-pointer select-none'
                onClick={toggleTopics}
              >
                KAB
              </h1>
              <p className='contactp'>
                Contact Me ...<span className='text-xl fingerem'>&#9757;</span>
              </p>
            </div>
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
          {showTopics && (
            <div className='topic-selection-div absolute'>
              <p>Select a topic:</p>
              <ul>
                <li onClick={() => handleTopicSelection('General Inquiry')}>General Inquiry</li>
                <li onClick={() => handleTopicSelection('Sponsorship Questions')}>Sponsorship Questions</li>
                <li onClick={() => handleTopicSelection('Feedback')}>Feedback</li>
                <li onClick={() => handleTopicSelection('Other')}>Other</li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
