import { BiSolidDashboard } from 'react-icons/bi';
import { MdOutlinePlaylistAddCheck } from 'react-icons/md';
import { RiCalendar2Line } from 'react-icons/ri';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import { HiBars3 } from 'react-icons/hi2';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';
import { IoIosSearch } from 'react-icons/io';
import AddTask from './AddTask';
import TaskItem from './TaskItem';

const TaskBoard = () => {
  return (
    <div className='md:ml-10 border-2 w-full rounded-2xl overflow-scroll'>
      {/* Top */}
      <div className='w-full flex flex-shrink-0 items-center justify-around gap-9 py-5 px-3'>
        <ul className='flex  items-end justify-around gap-4 w-full text-xs font-bold text-[#7D8FB3]'>
          <li className='flex items-center gap-2 pb-2 group border-b-2 border-transparent hover:border-[#3361FF]'>
            <MdOutlinePlaylistAddCheck
              size={25}
              className='group-hover:text-[#3361FF]'
            />
            <p className='group-hover:text-[#3361FF]'>List Tasks</p>
          </li>
          <li className='flex items-center gap-2 pb-2 group border-b-2 border-transparent hover:border-[#3361FF]'>
            <BiSolidDashboard
              size={25}
              className='group-hover:text-[#3361FF]'
            />
            <p className='group-hover:text-[#3361FF]'>Boards</p>
          </li>
          <li className='flex items-center gap-2 pb-2 group border-b-2 border-transparent hover:border-[#3361FF]'>
            <RiCalendar2Line size={25} className='group-hover:text-[#3361FF]' />
            <p className='group-hover:text-[#3361FF]'>Calendar</p>
          </li>
          <li className='flex items-center gap-2 pb-2 group border-b-2 border-transparent hover:border-[#3361FF]'>
            <HiBars3BottomLeft
              size={25}
              className='group-hover:text-[#3361FF]'
            />
            <p className='group-hover:text-[#3361FF]'>Gantt</p>
          </li>
          <li className='flex items-center gap-2 pb-2 group border-b-2 border-transparent hover:border-[#3361FF]'>
            <HiBars3 size={25} className='group-hover:text-[#3361FF]' />
            <p className='group-hover:text-[#3361FF]'>Timeline</p>
          </li>
          <li className='flex items-center gap-2 pb-2 group border-b-2 border-transparent hover:border-[#3361FF]'>
            <HiOutlineArrowTrendingUp
              size={25}
              className='group-hover:text-[#3361FF]'
            />
            <p className='group-hover:text-[#3361FF]'>Activity</p>
          </li>
        </ul>

        <div className='flex items-center px-3 py-2 mb-2 rounded-full gap-1 bg-white'>
          <IoIosSearch className='text-[#7D8FB3]' />
          <input
            type='text'
            className='outline-none placeholder:font-bold placeholder:text-xs'
            placeholder='Search Task'
          />
        </div>
      </div>

      <div className='px-4 md:px-9'>
        <div className='w-full flex items-start justify-between gap-8'>
          <div className='w-full'>
            <AddTask color={'#8833FF'} title={'To do'} />
            <div className='flex flex-col gap-3 mt-3'>
              <TaskItem image={'/assets/taskImg-1.png'} />
              <TaskItem />
              <TaskItem />
              <TaskItem />
            </div>
          </div>
          <div className='w-full'>
            <AddTask color={'#33BFFF'} title={'In Work'} />
            <div className='flex flex-col gap-3 mt-3'>
              <TaskItem />
              <TaskItem image={'/assets/taskImg-2.png'} />
              <TaskItem />
              <TaskItem />
            </div>
          </div>
          <div className='w-full'>
            <AddTask color={'#FFCB33'} title={'Review'} />
            <div className='flex flex-col gap-3 mt-3'>
              <TaskItem />
              <TaskItem />
              <TaskItem />
              <TaskItem />
            </div>
          </div>
          <div className='w-full'>
            <AddTask color={'#29CC39'} title={'Done'} />
            <div className='flex flex-col gap-3 mt-3'>
              <TaskItem />
              <TaskItem />
              <TaskItem />
              <TaskItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
