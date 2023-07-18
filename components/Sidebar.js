'use client';
import { useState } from 'react';
import { FaCompass } from 'react-icons/fa';
import { HiBars3 } from 'react-icons/hi2';
import { RxCross2 } from 'react-icons/rx';
import { AiFillStar } from 'react-icons/ai';
import { BsMessenger } from 'react-icons/bs';
import { HiMiniArrowTrendingUp } from 'react-icons/hi2';
import { PiGlobeHemisphereWestFill } from 'react-icons/pi';
import { LuBuilding2 } from 'react-icons/lu';
import { BsPlusCircleFill } from 'react-icons/bs';
import Image from 'next/image';

const Sidebar = () => {
  const [humbuger, setHumbuger] = useState(false);
  return (
    <div className='fixed top-0 w-24 h-full'>
      <div className='h-20 flex items-center justify-center border-b-2'>
        <div
          className='bg-white rounded-full shadow-md p-3 transition-all duration-700 cursor-pointer'
          onClick={() => setHumbuger(!humbuger)}
        >
          {humbuger ? (
            <RxCross2
              className='text-secondary transition-all duration-700'
              size={25}
            />
          ) : (
            <HiBars3
              className='text-secondary transition-all duration-700'
              size={25}
            />
          )}
        </div>
      </div>
      <div className='hidden md:block border-r-2 h-screen'>
        <ul className='flex flex-col items-center gap-4 pt-8 '>
          <li className='bg-white rounded-full shadow-md p-3'>
            <FaCompass className='text-secondary' />
          </li>
          <li className='bg-white rounded-full shadow-md p-3'>
            <AiFillStar className='text-secondary' />
          </li>
          <li className='bg-white rounded-full shadow-md p-3'>
            <BsMessenger className='text-secondary' />
          </li>
          <li className='bg-white rounded-full shadow-md p-3'>
            <HiMiniArrowTrendingUp className='text-secondary' />
          </li>
          <li className='bg-white rounded-full shadow-md p-3'>
            <PiGlobeHemisphereWestFill className='text-secondary' />
          </li>
          <li className='bg-white rounded-full shadow-md p-3'>
            <LuBuilding2 className='text-secondary' />
          </li>
        </ul>

        <ul className='hidden md:flex flex-col gap-3 items-center absolute bottom-0 w-full p-2'>
          <li className='relative'>
            <span className='absolute w-3 h-3 bg-[#3361FF] rounded-full top-0 right-0'></span>
            <Image
              className='bg-[#ff663389] rounded-full'
              src={'/assets/image-1.png'}
              width={40}
              height={40}
              alt=''
            />
          </li>
          <li className='relative'>
            <Image
              className='bg-[#e62e7b9b] rounded-full'
              src={'/assets/image-2.png'}
              width={40}
              height={40}
              alt=''
            />
          </li>
          <li>
            <Image
              className='bg-[#8833ff8c] rounded-full'
              src={'/assets/image-3.png'}
              width={40}
              height={40}
              alt=''
            />
          </li>
          <li>
            <Image
              className='bg-[#ffcc33bc] rounded-full'
              src={'/assets/image-4.png'}
              width={40}
              height={40}
              alt=''
            />
          </li>
          <li>
            <BsPlusCircleFill fill='#C3CAD9' size={25} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
