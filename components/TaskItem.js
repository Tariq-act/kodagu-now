import Image from 'next/image';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { CiLink } from 'react-icons/ci';
import { LuAlarmClock } from 'react-icons/lu';

const TaskItem = ({ image }) => {
  return (
    <div className='rounded-lg w-full py-3 px-3 bg-white'>
      {image && (
        <Image
          src={image}
          alt=''
          layout='responsive'
          width={500}
          height={300}
          className='mb-2'
        />
      )}

      <div>
        <h1 className='text-[#ADB8CC] text-xs font-bold'>Space Tasks 2</h1>
        <p className='text-[#6B7A99] text-base'>Make Money Online Through</p>
      </div>

      {image && (
        <div className='px-2 mt-2 flex items-center justify-between gap-2 text'>
          <div className='flex gap-1 items-center'>
            <AiOutlineUnorderedList className='text-[#6B7A99]' size={20} />
            <p className='text-[#6B7A99] text-xs font-medium'>4</p>
          </div>
          <div className='flex gap-1 items-center'>
            <CiLink className='text-[#6B7A99]' size={20} />
            <p className='text-[#6B7A99] text-xs font-medium'>2</p>
          </div>
          <div className='flex gap-1 items-center'>
            <LuAlarmClock className='text-[#6B7A99]' size={20} />
            <p className='text-[#6B7A99] text-xs font-medium'>6 Days Left</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
