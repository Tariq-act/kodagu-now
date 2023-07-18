import { BsPersonFill } from 'react-icons/bs';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BiSolidDashboard } from 'react-icons/bi';
import { MdOutlinePlaylistAddCheck } from 'react-icons/md';
import { AiFillCloud } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { MdPeople } from 'react-icons/md';
import { IoMdCalendar } from 'react-icons/io';
import { AiFillTool } from 'react-icons/ai';
import Image from 'next/image';

const Profile = () => {
  return (
    <div className='hidden md:block w-60'>
      <div className='flex items-center justify-between '>
        <div className='p-2 bg-white rounded-full shadow-sm'>
          <BsPersonFill fill='#C3CAD9' />
        </div>
        <div className='p-2 bg-white rounded-full shadow-sm'>
          <BiDotsHorizontalRounded fill='#C3CAD9' />
        </div>
      </div>
      <div className='flex flex-col items-center justify-between'>
        <div className='flex flex-col gap-4'>
          <div className='relative border-2 rounded-full w-fit p-2'>
            <span className='absolute top-12 -right-3 flex items-center justify-center w-5 h-5 bg-blue-700 rounded-full text-white text-xs'>
              2
            </span>
            <Image
              className='bg-[#ffcc337e] rounded-full'
              src={'/assets/HeroImage.png'}
              alt=''
              width={95}
              height={95}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-base text-[#6B7A99]'>Hello Alfred Bryant</h1>
            <p className='text-sm text-[#ADB8CC]'>adrain.nader@yahoo.com</p>
          </div>
        </div>
      </div>

      <div className='mt-4 grid grid-cols-2 items-center justify-center border-2 rounded-xl'>
        <div className=' border-r border-b '>
          <div className='flex flex-col items-center justify-center w-full h-full p-4 transition-transform duration-200 hover:scale-110 hover:bg-white hover:rounded-xl hover:shadow-sm  group'>
            <BiSolidDashboard
              size={30}
              className='text-[#C3CAD9] group-hover:text-blue-600'
            />
            <p className='group-hover:text-blue-600 text-xs text-[#ADB8CC] font-semibold'>
              Dashboard
            </p>
          </div>
        </div>
        <div className=' border-l border-b '>
          <div className='flex flex-col items-center justify-center w-full h-full p-4 transition-transform duration-200 hover:scale-110 hover:bg-white hover:rounded-xl hover:shadow-sm group'>
            <MdOutlinePlaylistAddCheck
              size={30}
              className='text-[#C3CAD9] group-hover:text-blue-600'
            />
            <p className='group-hover:text-blue-600 text-xs text-[#ADB8CC] font-semibold'>
              Notes
            </p>
          </div>
        </div>
        <div className=' border-r border-b border-t '>
          <div className='flex flex-col items-center justify-center w-full h-full p-4 transition-transform duration-200 hover:scale-110 hover:bg-white hover:rounded-xl hover:shadow-sm group '>
            <MdOutlinePlaylistAddCheck
              size={30}
              className='text-[#C3CAD9] group-hover:text-blue-600'
            />
            <p className='group-hover:text-blue-600 text-xs text-[#ADB8CC] font-semibold'>
              Tasks
            </p>
          </div>
        </div>
        <div className='border-l border-b border-t '>
          <div className='flex flex-col items-center justify-center w-full h-full p-4 transition-transform duration-200 hover:scale-110 hover:bg-white hover:rounded-xl hover:shadow-sm group'>
            <AiFillCloud
              size={30}
              className='text-[#C3CAD9] group-hover:text-blue-600'
            />
            <p className='group-hover:text-blue-600 text-xs text-[#ADB8CC] font-semibold'>
              Files
            </p>
          </div>
        </div>
        <div className='border-r border-b border-t '>
          <div className='flex flex-col items-center justify-center w-full h-full p-4 transition-transform duration-200 hover:scale-110 hover:bg-white hover:rounded-xl hover:shadow-sm group'>
            <MdEmail
              size={30}
              className='text-[#C3CAD9] group-hover:text-blue-600'
            />
            <p className='group-hover:text-blue-600 text-xs text-[#ADB8CC] font-semibold'>
              Emails
            </p>
          </div>
        </div>
        <div className='border- border-b border-t '>
          <div className='flex flex-col items-center justify-center w-full h-full p-4 transition-transform duration-200 hover:scale-110 hover:bg-white hover:rounded-xl hover:shadow-sm group'>
            <MdPeople
              size={30}
              className='text-[#C3CAD9] group-hover:text-blue-600'
            />
            <p className='group-hover:text-blue-600 text-xs text-[#ADB8CC] font-semibold'>
              Clients
            </p>
          </div>
        </div>
        <div className='border-r border-b border-t '>
          <div className='flex flex-col items-center justify-center w-full h-full p-4 transition-transform duration-200 hover:scale-110 hover:bg-white hover:rounded-xl hover:shadow-sm group'>
            <IoMdCalendar
              size={30}
              className='text-[#C3CAD9] group-hover:text-blue-600'
            />
            <p className='group-hover:text-blue-600 text-xs text-[#ADB8CC] font-semibold'>
              Calendars
            </p>
          </div>
        </div>
        <div className='border-l border-b border-t'>
          <div className=' w-full h-full p-4 transition-transform duration-200 hover:scale-110 hover:bg-white hover:rounded-xl hover:shadow-sm group'>
            <AiFillTool
              size={30}
              className='text-[#C3CAD9] group-hover:text-blue-600'
            />
            <p className='group-hover:text-blue-600 text-xs text-[#ADB8CC] font-semibold'>
              Settings
            </p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 items-center justify-center border-2 mt-3 rounded-full px-3 py-2'>
        <div className='cursor-pointer'>
          <Image
            src={'/assets/local_phone.svg'}
            alt=''
            width={30}
            height={30}
          />
        </div>
        <div className='cursor-pointer'>
          <Image src={'/assets/mail.svg'} alt='' width={30} height={30} />
        </div>
        <div className='cursor-pointer'>
          <Image
            src={'/assets/chrome_reader_mode.svg'}
            alt=''
            width={30}
            height={30}
          />
        </div>
        <div className='cursor-pointer'>
          <Image
            src={'/assets/ic_telegram.svg'}
            alt=''
            width={30}
            height={30}
          />
        </div>
        <div className='cursor-pointer'>
          <Image
            src={'/assets/ic_whatsapp.svg'}
            alt=''
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
