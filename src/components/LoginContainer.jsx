

import { useState } from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'

import {  Link, useNavigate } from 'react-router-dom'

const LoginContainer = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const navigate = useNavigate();

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
    navigate('/stage1', { state: { platform } });
  };

  return (
    <>

      <div className='loginContainer h-[50vh] flex flex-col gap-3 rounded-xl w-[30vw] border-2 border-black bg-white '>
        <div className='flex justify-evenly p-6'>
          <p className='rounded-full border border-black px-2 py-1 '>1</p>
          <p className='rounded-full border border-black px-2 py-1 '>2</p>
          <p className='rounded-full border border-black px-2 py-1 '>3</p>
        </div>
        <h1 className='text-3xl text-center font-medium'>Select The Social Media </h1>
        {/* <div className="social-btns">
          <a className="btn facebook border-[0.2px] border-black " href="/stage1"><Link to='/stage1'><FaFacebook className='fa' /></Link></a>
          <a className="btn twitter border-[0.2px] border-black " href="/stage1"><Link to='/stage1'> <FaTwitter className='fa' />   </Link></a>
          <a className="btn google border-[0.2px] border-black " href="/stage1"><Link to='/stage1'> <FaGoogle className='fa' />   </Link></a>
          <a className="btn dribbble border-[0.2px] border-black " href="/stage1"><Link to='/stage1'>   <FaTelegram className='fa' /> </Link></a>
          <a className="btn skype border-[0.2px] border-black " href="/stage1"><Link to='/stage1'>  <FaWhatsapp className='fa' />  </Link></a>
          <a className="btn instagram border-[0.2px] border-black text-white " href="#"><Link to='/stage1'> <FaInstagram className='fa rounded-xl' />   </Link></a>
          


        </div> */}
        <button onClick={() => handlePlatformSelect('instagram')}>
          Instagram
        </button>
        <button onClick={() => handlePlatformSelect('twitter')}>
          Twitter
        </button>
        <button onClick={() => handlePlatformSelect('facebook')}>
          Facebook
        </button>


      </div>


    </>
  )
}

export default LoginContainer
