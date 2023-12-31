import Image from 'next/image'
import React from 'react'
import {BsFire} from "react-icons/Bs"
 const Footer = () => {
  return (
    <div className='foot'>
      <div className='container mx-auto'>
 <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="  cate title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Useful Links</h2>
        <nav className="list-none mb-10">
          <li>
            <a className= "hover:text-yellow-900 navbar">Teacher & staff</a>
          </li>
          <li>
            <a className=  "hover:text-yellow-900 navbar">Our Latest Course</a>
          </li>
          <li>
            <a className="  hover:text-yellow-900 navbar">Who We Are</a>
          </li>
          <li>
            <a className=" hover:text-yellow-900 navbar">Get In Touch</a>
          </li>
          <li>
            <a className=" hover:text-yellow-900 navbar">Course Categories</a>
          </li>
          <li>
            <a className=" hover:text-yellow-900 navbar">Support & FAQ's</a>
          </li>
          <li>
            <a className=" hover:text-yellow-900 navbar">Terms & Coditions</a>
          </li>
          <li>
            <a className=" hover:text-yellow-900 navbar">Privacy Policy</a>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className=" cate  title-font font-medium text-gray-900 tracking-widest text-sm mb-3">LATESTTWEETS</h2>
        <nav className="list-none mb-10">
          <li>
            <a className= "hover:text-yellow-900 navbar">What is the enemy of #creativity</a>
          </li>
          <li>
            <a className= "hover:text-yellow-900 navbar">https://futureflame.in</a>
          </li>
          <li>
            <a className="hover:text-yellow-900 navbar"> An agile framework can produce the type of lean marketing essential for the digital age.</a>
          </li>
          <li>
            <a className="hover:text-yellow-900 navbar">@futureflame</a>
          </li>
          <li>
            <a className="hover:text-yellow-900 navbar">follow@futureflame</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className=" cate title-font font-medium text-gray-900 tracking-widest text-sm mb-3">About Us</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="hover:text-red-900 navbar">FUTURE FLAME is the NO1 Computer training institute in Odisha.</a>
          </li>
          <li>
            <a className="hover:text-red-900 navbar">This institute provides most demanding computer courses like DCA,PGDCA,TALLY,GRAPHIC DESIGNING,WEB DESIGNING,PHP & MY SQL,2D ANIMATION,3D ANIMATION</a>
          </li>
          <li>
            <a className="hover:text-red-900 navbar">Read More</a>
          </li>
          <li>
            <a className="hover:text-red-900 navbar">Bhubaneswar, Odisha, India</a>
          </li>
          <li>
            <a className="hover:text-red-900 navbar">Call us +91-8847808115</a>
          </li>
          <li>
            <a className="hover:text-red-900 navbar">info@futureflame.in</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className=" cate title-font font-medium tracking-widest text-sm mb-3 subs">Be a Mmember Of..</h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
           
            <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">SUBSCRIBE</button>
        </div>
       </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

         <Image
         src='/logo2-removebg-preview.png'
         alt='logo2-removebg-preview'
         className='w-[30] h-[30] logo rounded-full" viewbox="0 0 24 24'
         width={100}
         height={100}
         /> 
      </a>
      <p className="text-sm text-black sm:ml-6 sm:mt-0 mt-4">© 2023 Poonam —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-black ml-1" target="_blank">poonamtiu@gmail.com</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-black cursor-pointer hover:text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-black cursor-pointer hover:text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-black cursor-pointer hover:text-white">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-black cursor-pointer hover:text-white">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
</div>
    </div>
  )
}

export default Footer