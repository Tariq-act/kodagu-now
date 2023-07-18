import { BsThreeDots } from 'react-icons/bs';
import { IoMdSearch, IoIosSearch, IoIosArrowForward } from 'react-icons/io';
import { IoPersonCircle } from 'react-icons/io5';
import { MdSearch } from 'react-icons/md';
import { FaBell, FaTimesCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 h-20 ml-24 border-b-2'>
      <h1 className='text-lg font-bold text-primary'>Constructor</h1>
      <ul className='hidden md:flex items-center gap-4 text-sm font-bold text-secondary '>
        <li className='cursor-pointer hover:text-black transition-colors'>
          Dashboard
        </li>
        <li className='cursor-pointer hover:text-black transition-colors'>
          About Us
        </li>
        <li className='cursor-pointer hover:text-black transition-colors'>
          News
        </li>
        <li className='cursor-pointer hover:text-black transition-colors'>
          User Policy
        </li>
        <li className='cursor-pointer hover:text-black transition-colors'>
          Contacts
        </li>
        <li className='cursor-pointer hover:text-black transition-colors'>
          <BsThreeDots />
        </li>
      </ul>
      <div className='hidden md:flex items-center gap-5 justify-between bg-white  shadow-sm rounded-full w-[450px] py-3 px-7'>
        <MdSearch fill='#C3CAD9' size={25} />
        <input
          className='outline-none bg-white w-full'
          type='text'
          placeholder='Search Products, Orders and Clients'
        />
        <IoIosArrowForward fill='#C3CAD9' size={25} />
      </div>

      <div className='flex items-center gap-2'>
        <div className='bg-white p-3 shadow-sm rounded-full mr-4 md:bg-inherit md:p-0 md:shadow-none'>
          <IoPersonCircle fill='#C3CAD9' size={25} />
        </div>
        <h2 className='hidden md:block font-bold text-secondary mr-4'>
          Clayton Santos
        </h2>
        <div className='hidden md:flex items-center gap-2'>
          <div className='relative'>
            <div className='absolute -top-1 right-1 w-3 h-3 bg-pink-600 rounded-full'></div>
            <FaBell
              fill='#C3CAD9'
              size={43}
              className='bg-white p-3 rounded-full shadow-sm'
            />
          </div>
          <FaTimesCircle
            fill='#C3CAD9'
            size={43}
            className='bg-white p-3 rounded-full shadow-sm'
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
