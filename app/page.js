import Profile from '@/components/Profile';
import TaskBoard from '@/components/TaskBoard';

export default function Home() {
  return (
    <main className='md:flex md:ml-28 p-5 mt-5'>
      <Profile />
      <TaskBoard />
    </main>
  );
}
