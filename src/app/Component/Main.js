'use client'
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";


function Main() {
  return (
    <section className="lg:py-16 mt-20 border border-b-[#33353F] border-l-transparent border-r-transparent border-t-transparent">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-[4rem] lg:leading-normal font-extrabold">
            <span className="text-white">
              Hello, I&apos;m{" "} Farooque
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "FrontEnd Developer",
                1000,
              ]}
              wrapper="h3"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-[1.1rem]">
            Hi, I'm Farooque Shaikh. I am FrontEnd Developer at Motion Identix.
            I spend my day working on web apps with Javascript, React.js, Redux, Redux-Thunk and Next.js.
          </p>
          <div>
            <Link
              href="https://www.linkedin.com/in/mohammed-farooque-shaikh-4675ba168/" target='_blank' className="px-6 inline-block py-3 bg-[#121212] w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-950 text-white">
              Hire Me
            </Link>
            <Link href="https://shorturl.at/dsuGY" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/Img/Profile.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main