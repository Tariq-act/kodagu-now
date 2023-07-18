'use client';
import { PiDotsThreeBold } from 'react-icons/pi';
import { BsPlus } from 'react-icons/bs';

const AddTask = ({ color, title }) => {
  return (
    <div className='w-full rounded-lg bg-white py-2 flex items-center justify-between gap-3'>
      <div
        className={`flex gap-2 items-center border-l-4 border-[${color}] px-3`}
      >
        <p className='uppercase text-[#4D5E80] font-bold text-xs'>{title}</p>
        <div className='w-4 h-4 p-3 flex items-center justify-center rounded-full border-2 text-xs'>
          5
        </div>
      </div>
      <div className='flex items-center gap-1 text-secondary px-3'>
        <PiDotsThreeBold size={25} />
        <BsPlus size={25} />
      </div>
    </div>
  );
};

export default AddTask;
