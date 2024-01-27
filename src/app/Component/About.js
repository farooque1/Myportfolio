import React from 'react'

function About() {
  return (
  
    <div className='px-2 py-24'>
      <h1 className='text-white text-center text-4xl font-extrabold py-7'>About Me</h1>
      <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
      <p className='text-white text-justify text-[16.5px] md:text-center md:text-2xl'>Greetings! I am a passionate frontend web developer dedicated to creating captivating and responsive web applications.
      I bring hands-on experience in crafting dynamic interfaces and seamless user experiences. My proficiency in JavaScript, React, and Redux allows me to build engaging front-end solutions.</p>
      
      <p className='text-white text-justify text-[16.5px] py-5 md:text-center md:hidden'>As a quick learner, I am always eager to expand my knowledge and skill set. I embrace challenges, be it adopting new frameworks, exploring design trends, or diving into emerging technologies.
      Being a true team player, I am excited about collaborative efforts. I thrive on working with fellow developers to turn ideas into extraordinary applications.</p>
      </div>
    
      {/* <p className='text-white text-left font-extrabold text-2xl py-5'>Technical Proficiency :</p>
      <ul className='text-white py-2 font-semibold'>
        <li>Languages: JavaScript, HTML, CSS</li>
        <li>Frameworks & Libraries: React, Redux,Redux-Thunk,Next.js</li>
        <li>UI Frameworks: Bootstrap,MUI,Tailwind CSS</li>
        <li>Database: Mysql</li>
        <li>Version Control: Git,Bitbucket</li>
      </ul> */}
    </div>
  )
}

export default About