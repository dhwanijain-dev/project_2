import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Menu, Search, X } from 'lucide-react'

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
  return (
      <nav className='w-full   flex justify-between items-center px-10 py-2'>
          <div className='flex gap-5 items-center shrink-0'>
            <img src={logo} className='h-20 w-20'></img>
            <svg class="global-truncated-marque w-28 h-28" aria-labelledby="central-intelligence-agency" role="img" viewBox="0 0 94 30"><title id="central-intelligence-agency">Central Intelligence Agency</title><path fill="#FFFFFF" d="M18.7,30c9.4,0,16.2-3.8,18.4-10.2l-10.4-2.3c-0.8,3.2-3.5,4.9-7.7,4.9 c-5.2,0-8.3-2.8-8.3-7.4c0-4.6,3.1-7.5,8.3-7.5c4.2,0,6.8,1.7,7.7,5l10.5-2C35.3,4,28.3,0,19,0C7.9,0,0,6.3,0,15.2 C0,24.2,7.3,30,18.7,30z M51.3,29.1V0.9H41.1v28.1H51.3z M65.5,29.1l2.2-5.3h13.2l2.2,5.3H94L80.9,0.9H67.7L54.6,29.1H65.5z M78.5,17.6h-8.3l2-4.9c0.5-1.2,1.6-4.2,2.1-6.1h0.1c0.5,1.8,1.6,4.9,2.1,6.1L78.5,17.6z"></path></svg>
          </div>
          <div className='hidden lg:block'>
            <ul className='flex gap-3'>
            {["Today's CIA", "Careers","Legacy","Newsroom","Library"].map((items,index)=>{
                return(
                    <li key={index} className='text-lg font-bold hover:text-blue-500'>{items}</li>
                )

            })}

            </ul>
          </div>
          <div className='hidden relative hover:border-none searchdiv  lg:flex items-center border border-white py-1'>
            <div>

            <input type='text' className='bg-transparent cursor-pointer  searchBar     border-white px-3 py-2' placeholder='Search'/>
            <div className='absolute w-0 top-0 left-0 origin-left bg-[#f22a53] h-full'></div>
            </div>
            <div className='SearchIcon p-2 border-l-[0.25px]  border-l-[#ffffff]' ><Search/></div>
          </div>
        
          <div className='lg:hidden md:flex flex-col justify-end'>
              <button onClick={toggleNavbar}>
                  {mobileDrawerOpen ? <X  className='x-20'/> : <Menu className='x-20' />}
              </button>
          </div>
          {mobileDrawerOpen && (
              <div className='lg:hidden fixed flex col gap-5 top-[25vh] left-1/2  z-19'>
                  <ul className='flex flex-col gap-4'>
                      {["Today's CIA", "Careers", "Legacy", "Newsroom", "Library"].map((items, index) => {
                          return (
                              <li key={index} className='text-lg font-bold hover:text-blue-500'>{items}</li>
                          )

                      })}
                  </ul>
              </div>
          )}
      </nav>
  )
}

export default Navbar
