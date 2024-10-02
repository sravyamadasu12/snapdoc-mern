import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <hr />
      
      <div className='flex flex-col sm:grid grid-cols-4 gap-4 my-10 mt-4 text-sm items-center'> {/* Add items-center for vertical alignment */}

        <div className='flex flex-col items-center'> {/* Center items vertically */}
          <img className='mb-1 w-40' src={assets.logo} alt="" />
          <p className='text-gray-600 text-center'>
            "Book your Health, hassle-free"
          </p>
        </div>

        <div className='flex flex-col items-center'> {/* Center items vertically */}
          <p className='text-xl font-medium mb-2'>EMERGENCY</p>
          <ul className='flex flex-col gap-0.5 text-gray-600'>
            <li>+91 9999988888</li>
            <li>+91 9999777722</li>
          </ul>
        </div>

        <div className='flex flex-col items-center'> {/* Center items vertically */}
          <p className='text-xl font-medium mb-2'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-0.5 text-gray-600'>
            <li>+91 8888 0000 08</li>
            <li>snapdoc@gmail.com</li>
          </ul>
        </div>

        <div className='flex flex-col items-center'> {/* Center items vertically */}
          <p className='text-xl font-medium mb-2'>LOCATION</p>
          <ul className='flex flex-col gap-0.5 text-gray-600'>
            <li>SnapDoc Healthcare</li>
            <li>Amaravathi, AP</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-4 text-sm text-center'>Copyright 2024 @ Prescripto.com - All Right Reserved.</p>
      </div>

    </div>
  );
}

export default Footer;
